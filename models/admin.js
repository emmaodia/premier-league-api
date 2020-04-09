const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const adminSchema = mongoose.Schema({
    email: String,
    password: String
})

adminSchema.set('timestamps', true);

adminSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Admin', adminSchema);