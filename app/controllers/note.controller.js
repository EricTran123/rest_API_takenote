var Note = require('../models/note.model.js');
var statusType = ["pending", "complete", "in-progress", "overdue"];
exports.create = function(req, res) {

    var note = new Note(req.body);
    console.log("Resulu: " + note.status instanceof Number);
    console.log(typeof note.status);
    if (!note.content) {
        res.status(400).send({
            result: "error",
            message: "Content is invalid."
        })
    } else if (statusType.indexOf(note.status) == -1) {
        res.status(400).send({
            result: "error",
            message: "Status is invalid."
        })
    } else if (!note.status instanceof Number) {
        res.status(400).send({
            result: "error",
            message: "Price is invalid."
        })
    } else {
        note.save(function(err, data) {
            if (err) {
                console.log(err);
                res.status(500).send({
                    result: "error",
                    message: "Some error ocuured while creating the Note."
                });
            } else {
                console.log("Note is added successfully: \n" + data);
                res.send(data);
            }
        });
    }
};

exports.findAll = function(req, res) {
    // Retrieve and return all notes from the database.
    Note.find(function(err, notes) {
        if (err) {
            res.status(500).send({
                result: "error",
                message: "Some error ocuured while retrieving notes."
            });
        } else {
            res.send(notes);
        }
    });
};
exports.findOne = function(req, res) {
    Note.findById(req.params.noteId, function(err, data) {
        if (err) {
            res.status(500).send({
                result: "error",
                message: "Could not retrieve note with id " + req.params.noteId
            });
        } else {
            console.log("Note with id: " + req.params.noteId + "\n" + data);
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    // Update a note identified by the noteId in the request
    Note.findById(req.params.noteId, function(err, note) {
        if (err) {
            res.status(500).send({
                result: "error",
                message: "Could not find a note with id " + req.params.noteId
            });
        }
        if (req.body.title) {
            note.title = req.body.title;
        }
        if (req.body.content) {
            note.content = req.body.content;
        }
        if (req.body.author) {
            note.author = req.body.author;
        }
        if (req.body.price) {
            note.price = req.body.price;
        }
        if (statusType.indexOf(req.body.status) >= 0) {
            note.status = req.body.status;
        }
        console.log("Priceqq: " + (req.body.price && (req.body.price instanceof Number)));
        note.save(function(err, data) {
            if (err) {
                res.status(500).send({
                    result: "error",
                    message: "Could not update note with id " + req.params.noteId
                });
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a note with the specified noteId in the request
    Note.remove({
        _id: req.params.noteId
    }, function(err, data) {
        if (err) {
            res.status(500).send({
                result: "error",
                message: "Could not delete note with id " + req.params.id
            });
        } else {
            res.send({
                message: "Note deleted successfully!"
            })
        }
    });
};