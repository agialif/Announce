var express = require('express');
var list = express.Router();
var List = require('../model/list')

list.route('/')
.post((req, res, next) => {
    List.create(req.body)
    .then((list) => {
        console.log('Name inserted', list);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(list)
    })
    .catch((err) => {
        console.log(err)
        res.status(500);
        res.end('Error : ', err);
    })
})
.get((req, res, next) => {
    List.find({},{"_id": 0,"createdAt": 0, "updatedAt": 0, "__v": 0})
    .then((list) => {
        res.status(200);
        res.setHeader('Content-Type', 'application/json');
        res.json(list)
    })
})

module.exports = list;