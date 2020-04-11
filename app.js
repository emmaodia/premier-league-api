const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dbConfig = require('./dbConfig');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.json({msg: "Welcome, Nerd!"}))

const adminRouter = require('./routes/admin');
const teamsRouter = require("./routes/teams");

app.use('/api/v1/admin', adminRouter)
app.use('/api/v1/teams', teamsRouter);

module.exports = app;
