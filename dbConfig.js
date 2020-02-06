const express = require('express');
const dbConfig = express.Router();
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/premier-league-api';

mongoose.Promise = global.Promise;

mongoose.connect(url, {
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