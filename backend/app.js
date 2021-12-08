const express = require('express');
const path = require('path');
const cookieParser = require("cookie-parser");

require('./config/db');
const app = express();

// Routers
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const feedbackRouter = require('./routes/feedback');

// Static files
const assetsPath = path.join(__dirname, '../frontend', 'assets');
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/user', feedbackRouter);

const port = 3000
app.listen(port, () => console.log('Server is running at port 3000'));