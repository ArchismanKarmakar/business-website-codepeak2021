const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Routers
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');

// Static files
const assetsPath = path.join(__dirname, '../frontend', 'assets');
app.use(express.static(assetsPath))

app.use('/', indexRouter);
app.use('/user', userRouter);

const port = 3000
app.listen(port, () => console.log('Server is running at port 3000'));