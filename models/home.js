const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
    menu: String,
    price: Number
});

module.exports.Home = mongoose.model('Home', homeSchema) 