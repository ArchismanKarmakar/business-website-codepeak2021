const mongoose = require("mongoose");

const HotelSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    features: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model("hotel", HotelSchema);