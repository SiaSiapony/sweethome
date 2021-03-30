const mongoose = require('mongoose');
const Schema = mongoose.Schema
    //ObjectId = Schema.ObjectId;

const menuSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    description: String,
    price: Number,
    topping1: {
        type: String,
        unique: true
    },
    topping2: {
        type: String,
        unique: true
    },
    topping3: {
        type: String,
        unique: true
    }
});
// userSchema.id instanceof mongoose.Types.ObjectId;
const menuModel = mongoose.model('menu', menuSchema);

module.exports = menuModel;