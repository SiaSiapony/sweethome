var mongoose = require('mongoose');
mongoose.connect('mongodb://mongodb:27017/mama', {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false,useCreateIndex: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function (){
    // connection
    console.log('connected');
})