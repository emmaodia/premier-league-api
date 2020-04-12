const express = require('express');
const dbConfig = express.Router();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI, {
    keepAlive: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(() => {
    console.log(`DB CONNECTED`);
})
.catch(err => {
    console.log(`DB cannot be reached... Exiting now!`);
    console.log(err);
    process.exit();
})

module.exports = dbConfig;