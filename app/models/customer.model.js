var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var customerSchema = new Schema({
    name:{
        type: String,
        trim: true,
        required: true
    },
    address:{
        type: String,
        trim: true,
        required: true,
    },
    phoneNumber:{
        type: String,
        trim: true,
        require;
    }
});
module.exports = mongoose.model('Driver', NoteSchema);
