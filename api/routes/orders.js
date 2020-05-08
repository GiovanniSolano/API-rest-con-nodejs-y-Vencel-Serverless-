const express = require('express');

const router = express.Router();

const Orders = require('../models/Orders');

router.get('/', (req, res) => {
    Orders.find().exec().then(orders => res.status(200).send(orders));

});

router.get('/:id', (req, res) => {
    Orders.findById(req.params.id).exec().then(order =>
        res.status(200).send(order));
});

router.post('/', (req, res) => {

    Orders.create(req.body).then(orderInsertada =>
        res.status(201).send(orderInsertada));;

});

router.put('/:id', (req, res) => {

    Orders.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.sendStatus(204));

});

router.delete('/:id', (req, res) => {
    Orders.findOneAndDelete(req.params.id).exec()
        .then(orderEliminada => res.sendStatus(204));

    res.send('Soy delete');
});

module.exports = router;