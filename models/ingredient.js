const mongoose = require('mongoose');
const Schema = mongoose.Schema
    //ObjectId = Schema.ObjectId;

const ingredientSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    amount: Number,
    unit: String
});
// userSchema.id instanceof mongoose.Types.ObjectId;
const IngreModel = mongoose.model('ingredient', ingredientSchema);

module.exports = IngreModel;