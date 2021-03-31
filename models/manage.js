const mongoose = require('mongoose');
const Schema = mongoose.Schema
    //ObjectId = Schema.ObjectId;

const manageSchema = new Schema({
    topping: String,
    amount: Number,
    status: String
});
// userSchema.id instanceof mongoose.Types.ObjectId;
const manageModel = mongoose.model('manage', manageSchema);

module.exports = manageModel;