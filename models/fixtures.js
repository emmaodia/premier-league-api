const mongoose = require("mongoose");
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const fixturesSchema = mongoose.Schema({
    home: String,
    away: String,
    score: String,
    play: Boolean,
    slug: { type: String, slug: ["home", "away"] }
});

module.exports = mongoose.model('Fixture', fixturesSchema);