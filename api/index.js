const express = require('express');
const mongoose = require('mongoose');
const meals = require('./routes/meals');
const orders = require('./routes/orders');
const app = express();

const cors = require('cors');

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());



mongoose.connect(process.env.MONGODB_URI);

// const Users = mongoose.model('user', new mongoose.Schema({ name: String }));

// Users.create({ name: 'Giovanni Solano' });



// app.get('*', (req, res) => {
//     res.send('Hola mundo')

// });


app.use('/api/meals', meals);
app.use('/api/orders', orders);

module.exports = app;