var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const statusType = ["pending", "complete", "in-progress", "overdue"];
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
    author: {
        type: String,
        trim: true,
    },
    price: {
        type: Number,
        min: 1
    },
    status: {
        type: String,
        required: true,
        enum: statusType
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('Note', NoteSchema);