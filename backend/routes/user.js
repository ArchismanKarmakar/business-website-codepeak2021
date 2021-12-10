const express = require('express');
const path = require('path');
const router = express.Router();

const jwt = require("jsonwebtoken");
// bcrypt for hashing password
const bcrypt = require("bcryptjs");

const User = require('../models/user');

const userMiddleware = require('../controllers/userMiddleware');

const secretKey = process.env.SECRET_KEY;

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
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        console.log('User registered successfully');
        res.redirect('/user/login');
    } catch (err) {
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

        // check if passwords match
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
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