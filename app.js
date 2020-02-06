const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.get('/', (req, res) => res.json({msg: "Welcome, Nerd!"}))


module.exports = app;
