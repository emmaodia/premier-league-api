const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dbConfig = require('./dbConfig');

//Redis Configuration
// const redis = require("redis");
// const port_redis = process.env.PORT || 6379;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.json({msg: "Welcome, Nerd!"}))

const teamsRouter = require("./routes/teams");

app.use('/api/v1/teams', teamsRouter);

//configure redis client on port 6379
// const redis_client = redis.createClient(port_redis);

// redis_client.on('connect', function() {
//     console.log('Redis client connected');
// });

// redis_client.on('error', function (err) {
//     console.log('Something went wrong ' + err);
// });

module.exports = app;
