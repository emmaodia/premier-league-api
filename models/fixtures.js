const mongoose = require("mongoose");

const fixturesSchema = mongoose.Schema({
    home: String,
    away: String,
    score: String,
    play: String
});

module.exports = mongoose.model('Fixture', fixturesSchema);