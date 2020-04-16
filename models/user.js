const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: String,
    password: String
})

userSchema.set('timestamps', true);

module.exports = mongoose.model('User', userSchema);