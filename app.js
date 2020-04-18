const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dbConfig = require('./dbConfig');
const dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.json({
                         msg: "Welcome, Nerd!",
                         about: "A Mock League API that serves Football Fixtures Score.  that serves the latest scores of fixtures of matches in a Mock Premier League",
                         documentation: "Kindly view documentation below",
                         url: `https://documenter.getpostman.com/view/4783155/Szf54VPL?version=latest`,
                         stack: "NodeJS - JavaScript, MongoDB, Jest, Redis, Docker"
                        }));

const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user');
const teamsRouter = require("./routes/teams");
const fixturesRouter = require("./routes/fixtures");

app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/teams', teamsRouter);
app.use('/api/v1/fixtures', fixturesRouter);
app.use('/api/v1/user', userRouter);

module.exports = app;
