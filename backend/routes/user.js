const express = require('express');
const path = require('path');
const router = express.Router();

// for aes 256 
const crypto = require('crypto');
const Securitykey = process.env.SECURITY_KEY;

const jwt = require("jsonwebtoken");
// bcrypt for hashing password
// const bcrypt = require("bcryptjs");

const User = require('../models/user');

const userMiddleware = require('../controllers/userMiddleware');

const secretKey = process.env.SECRET_KEY;

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+[];{}?'
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

// signup route
router.get('/signup', userMiddleware.verifyLoggedUser, (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend', 'signup.html'))
})

// login route
router.get('/login', userMiddleware.verifyLoggedUser, (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend', 'login.html'))
})

// protected dashboard route
router.get('/dashboard', userMiddleware.verifyJWT, async (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend', 'dashboard.html'))
})

router.post("/signup", async (req, res) => {
    const { username, email, password, cpassword } = req.body;
    if (!username || !email || !password || !cpassword) {
        console.log('All fields are required');
        return res.redirect('/user/signup');
    }
    if (password !== cpassword) {
        console.log('Passwords do not match');
        return res.redirect('/user/signup');
    }
    try {
        let user = await User.findOne({ email });
        if (user) {
            console.log('User already exists');
            return res.redirect('/user/signup');
        }
        user = new User({ username, email, password });

        // encrypt password
        const IV = makeid(16);
        const cipher = crypto.createCipheriv('aes-256-cbc', Securitykey, IV);
        let encryptedPassword = cipher.update(password, "utf-8", "hex");
        encryptedPassword += cipher.final("hex");
        encryptedPassword += IV;
        user.password = encryptedPassword;
        await user.save();
        console.log('User registered successfully');
        res.redirect('/user/login');
    } catch (err) {
        console.log(err);
        res.status(500).send("Error in Saving");
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        console.log('All fields are required');
        return res.redirect('/user/login');
    }
    try {
        // check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            console.log('Wrong username or password');
            return res.redirect('/user/login');
        }

        // decrypt password
        const IV = user.password.substr(user.password.length - 16);
        const decipher = crypto.createDecipheriv('aes-256-cbc', Securitykey, IV);
        let decryptedPassword = decipher.update(user.password.substr(0, user.password.length - 16), "hex", "utf-8");
        decryptedPassword += decipher.final("utf-8");

        // check if passwords match
        if (decryptedPassword !== password) {
            console.log('Wrong username or password');
            return res.redirect('/user/login');
        }

        // login user with jwt
        const payload = {
            user: { id: user.id }
        };
        const token = jwt.sign(payload, secretKey, { expiresIn: 24 * 60 * 60 * 1000 });
        console.log('You are logged in');
        res.cookie('usertoken', token, {
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            httpOnly: true
        }).redirect('/user/dashboard');

    } catch (err) {
        console.log(err);
        res.status(500).send("Some error occured");
    }
});

router.get('/logout', (req, res) => {
    try {
        console.log('You are logged out');
        res.clearCookie('usertoken').redirect('/user/login');
    } catch (err) {
        res.status(500).send('Some error occured');
    }
})

module.exports = router;