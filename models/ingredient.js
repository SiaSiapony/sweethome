const mongoose = require('mongoose');
const Schema = mongoose.Schema
    //ObjectId = Schema.ObjectId;

const ingredientSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        dropDups: true
    },
    amount: Number,
    unit: String
}, { versionKey: false });
// userSchema.id instanceof mongoose.Types.ObjectId;
const ingreTable = mongoose.model('ingredient', ingredientSchema);

module.exports = {
    ingredientData:function(callback){
        var ingreData = ingreTable.find({});
        ingreData.exec(function(err,data){
            if(err) throw err;
            return callback(data);
        })
    }
};