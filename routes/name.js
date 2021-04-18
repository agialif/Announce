var express = require('express');
var name = express.Router();
var Name = require('../model/name')

name.route('/')
.get((req, res, next) => {
    Name.find({},{"_id": 0,"createdAt": 0, "updatedAt": 0, "__v": 0})
    .then((list) => {
        res.status(200);
        res.setHeader('Content-Type', 'application/json');
        res.json(list)
    })
})

module.exports = name;