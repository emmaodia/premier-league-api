const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//const dbConfig = require('./dbConfig');
const dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.json({msg: "Welcome, Nerd!"}))


module.exports = app;
