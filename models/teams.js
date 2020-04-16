const mongoose = require("mongoose");

const teamsSchema = mongoose.Schema({
    name: String,
    city: String,
    coach: String
});

module.exports = mongoose.model('Teams', teamsSchema);