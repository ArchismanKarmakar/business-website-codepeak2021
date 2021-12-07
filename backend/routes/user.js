const express = require('express');
const path = require('path');
const router = express.Router();

const userMiddleware = require('../controllers/userMiddleware');


router.get('/dashboard', userMiddleware, (req, res) => {
    res.send('Your are logged in');
})

module.exports = router;