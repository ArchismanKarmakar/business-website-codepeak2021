const express = require('express');
const path = require('path');
const cookieParser = require("cookie-parser");

require('./config/db');
const app = express();

// Routers
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const feedbackRouter = require('./routes/feedback');

// Set view engine as ejs
app.set('view engine', 'ejs');

// Static files
const assetsPath = path.join(__dirname, '../frontend');
app.set('views', path.join(__dirname, '../frontend', 'views'));
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/user', feedbackRouter);

const port = 3000
app.listen(port, () => console.log('Server is running at port 3000'));