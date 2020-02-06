const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.get('/', (req, res) => res.json({msg: "Welcome, Nerd!"}))

const port = 3000;
app.listen(port, () => console.log(`App running on ${port}!`))

module.exports = app;
