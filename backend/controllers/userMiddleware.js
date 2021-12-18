require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const secretKey = process.env.SECRET_KEY;

// for protected routes (dashboard)
exports.verifyJWT = async (req, res, next) => {
    try {
        const token = req.cookies.usertoken;
        if (!token) {
            console.log('No token, login to continue');
            return res.redirect('/user/login');
        }
        const decoded = jwt.verify(token, secretKey);
        const user = await User.findById(decoded.user.id);
        if (!user) {
            console.log('No user found');
            res.redirect('/user/login');
        }
        req.token = token;
        req.user = user;
        next();
    } catch (err) {
        res.status(500).send("Some error occured");
    }
}

// prevent logged in user to visit login/signup pages
exports.verifyLoggedUser = async (req, res, next) => {
    try {
        const token = req.cookies.usertoken;
        if (token) {
            return res.status(401).send({ msg: 'Logout to view that resource' })
        }
        next();
    } catch (err) {
        res.status(500).send("Some error occured");
    }
}