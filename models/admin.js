const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    email: String,
    password: String
})

adminSchema.set('timestamps', true);

module.exports = mongoose.model('Admin', adminSchema);