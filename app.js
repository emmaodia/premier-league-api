const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dbConfig = require('./dbConfig');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.json({msg: "Welcome, Nerd!"}))

const fixturesRouter = require("./routes/fixtures");

app.use('/api/v1/fixtures', fixturesRouter);

module.exports = app;
