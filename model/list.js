const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var listSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var List = mongoose.model('List', listSchema);
 
module.exports = List;