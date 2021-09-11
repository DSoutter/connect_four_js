const express = require('express');
const ObjectId = require('mongodb').ObjectId;

const createRouter = function(collection) {

    const router = express.Router();

    const errorHandler = (err) => {
        console.error(err);
        res.status(500);
        res.json({status: 500, error: err});
    }

    router.get('/', (req, res) => {
        collection
        .find()
        .toArray()
        .then((docs) => res.json(docs))
        .catch(errorHandler)
    });

    router.post('/', (req,res) => {
        const newData= req.body;
        collection
        .insertOne(newData)
        .then((result) => {
            res.json(result.insertedId)
        })
        .catch(errorHandler)
    })
    return router;
};

module.exports = createRouter