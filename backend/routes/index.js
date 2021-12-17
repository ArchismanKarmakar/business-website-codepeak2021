const express = require('express');
const path = require('path');
const router = express.Router();
const Hotel = require('../models/hotel');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend', 'index.html'));
});

router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend', 'about.html'));
})

router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend', 'contact.html'));
})

router.get('/tour', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend', 'tour.html'));
})

router.get('/res', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend', 'res.html'));
})

router.get('/hotels', async (req, res) => {
    try {
        const hotels = await Hotel.find({});
        res.render('hotels', { hotels: hotels });
    } catch (err) {
        console.log(err);
        res.status(500).send('Some error occured');
    }
})

module.exports = router;