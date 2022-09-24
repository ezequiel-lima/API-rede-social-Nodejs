'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// Connecta ao banco
mongoose.connect('mongodb+srv://fatec_group:KULFvu1lRdCo3yCZ@nodestorage.sduiuix.mongodb.net');

// Carregar os Models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');
const Aluno = require('./models/aluno');

// Carregar as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');
const alunoRoute = require('./routes/aluno-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);
app.use('/alunos', alunoRoute);

module.exports = app;