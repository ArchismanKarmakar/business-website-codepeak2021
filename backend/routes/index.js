const express = require('express');
const path = require('path');
const router = express.Router();

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

router.get('/hotels', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend', 'Hotels.html'));
})

module.exports = router;