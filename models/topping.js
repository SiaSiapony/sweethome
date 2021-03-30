const mongoose = require('mongoose');
const Schema = mongoose.Schema
    //ObjectId = Schema.ObjectId;

const toppingSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    price: Number,
    amount: Number,
    unit: String
});
// userSchema.id instanceof mongoose.Types.ObjectId;
const TopModel = mongoose.model('topping', toppingSchema);

module.exports = TopModel;