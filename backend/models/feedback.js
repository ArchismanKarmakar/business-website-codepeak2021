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
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("feedback", FeedbackSchema);