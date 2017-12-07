var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var driverSchema = new Schema({
    name:{
        type: String,
        trim: true,
        required: true
    },
});
module.exports = mongoose.model('Driver', NoteSchema);

