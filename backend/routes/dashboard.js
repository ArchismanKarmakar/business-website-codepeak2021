const express = require('express');
const User = require('../models/user');
const router = express.Router();
const userMiddleware = require('../controllers/userMiddleware');

router.get('/profile', userMiddleware.verifyJWT, (req, res) => {
    try {
        res.status(201).json({ user: req.user });
    } catch (err) {
        res.status(500).json({ error: "Some error occured" });
    }
})

router.post('/profile', userMiddleware.verifyJWT, async (req, res) => {
    try {
        const { firstName, lastName, birthday, address1, address2, country, phone } = req.body;
        console.log(req.body);
        await User.findByIdAndUpdate(req.user.id, { firstName, lastName, birthday, address1, address2, country, phone });
        res.status(201).json({ msg: "Info updated successfully" });
    } catch (err) {
        res.status(500).json({ error: "Some error occured" });
    }
})

module.exports = router;