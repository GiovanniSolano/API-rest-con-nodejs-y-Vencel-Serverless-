const express = require('express');
const Meals = require('../models/Meals');

const router = express.Router();

router.get('/', (req, res) => {
    Meals.find().exec().then(meals => res.status(200).send(meals));

});

router.get('/:id', (req, res) => {
    Meals.findById(req.params.id).exec().then(meal =>
        res.status(200).send(meal));
});

router.post('/', (req, res) => {

    Meals.create(req.body).then(mealInsertada =>
        res.status(201).send(mealInsertada));;

});

router.put('/:id', (req, res) => {

    Meals.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.sendStatus(204));

});

router.delete('/:id', (req, res) => {
    Meals.findOneAndDelete(req.params.id).exec()
        .then(mealEliminada => res.sendStatus(204));

});


module.exports = router;