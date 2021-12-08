const mongoose = require("mongoose");

const FeedbackSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    rating: {
        type: Number,
        required: true
    },
    feedback: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("feedback", FeedbackSchema);