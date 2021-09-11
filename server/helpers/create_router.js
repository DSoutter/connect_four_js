const express = require('express');
const ObjectId = require('mongodb').ObjectId;

const createRouter = function(collection) {

    const router = express.Router();

    const errorHandler = (err) => {
        console.error(err);
        res.status(500);
        res.json({status: 500, error: err});
    }
// Get all
    router.get('/', (req, res) => {
        collection
        .find()
        .toArray()
        .then((docs) => res.json(docs))
        .catch(errorHandler)
    });

// Get one
    router.get('/:id', (req, res) => {
        const id = req.params.id;
        collection
        .findOne({_id: ObjectId(id)})
        .then((doc) => res.json(doc))
        .catch(errorHandler)
    })

// Post new
    router.post('/', (req,res) => {
        const newData= req.body;
        collection
        .insertOne(newData)
        .then((result) => {
            res.json(result.insertedId)
        })
        .catch(errorHandler)
    })

// Delete one


    return router;
};

module.exports = createRouter