var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var NoteSchema = new Schema({
    title: {
        type: String,
        trim: true,
    },
    content: {
        type: String,
        trim: true,
        required: true
    },
}, {
        timestamps: true
    })
// var NoteSchema = mongoose.Schema({
//     title: String,
//     content: String
// }, {
//     timestamps: true
// });

module.exports = mongoose.model('Note', NoteSchema);