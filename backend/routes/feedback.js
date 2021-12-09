const express = require('express');
const path = require('path');
const router = express.Router();

const Feedback = require('../models/feedback');

const userMiddleware = require('../controllers/userMiddleware');

router.get('/feedback', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend', 'feedback.html'))
})

// allow only logged in users to fill feedback form
router.post('/feedback', userMiddleware.verifyJWT, async (req, res) => {
    try {
        const { feedback, rating } = req.body;
        const user = req.user;
        let feedbackUser = await Feedback.findOne({ email: user.email });
        // only one feedback allowed per user
        if (feedbackUser) {
            console.log('Feedback already submitted');
            return res.redirect('/user/dashboard');
        }
        feedbackUser = new Feedback({ email: user.email, rating: rating, feedback: feedback });
        await feedbackUser.save();
        res.redirect('/user/dashboard');
    } catch (err) {
        console.log(err);
        res.status(500).send("Error in Saving");
    }
})

module.exports = router;