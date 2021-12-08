require('dotenv').config();
const mongoose = require('mongoose');

const url = process.env.MONGODBURL;

const mongooServer = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

module.exports = mongooServer;