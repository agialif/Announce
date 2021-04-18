const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var nameSchema = new Schema({
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

var Name = mongoose.model('Name', nameSchema);
 
module.exports = Name;