"use strict";

var express = require('express');

var app = express();

require('dotenv').config();

var path = require('path');

var pathToPublicFolder = path.resolve(__dirname, './public');

var morgan = require('morgan');

var cors = require('cors');

app.use(express["static"](pathToPublicFolder));
app.use(express.json());
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));
app.use(morgan('tiny'));

var sessionRoute = require('./routes/sessionRoute');

var userRoute = require('./routes/userRoute');

app.use('/session', sessionRoute);
app.use('/user', userRoute);
module.exports = app;