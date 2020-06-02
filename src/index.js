const express = require('express');
const mongoose = require('mongoose');
const routes = require('../src/routes');
const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://romulo:Romulo25@@cluster0-t927d.mongodb.net/devRadar?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(routes);

app.listen(3333);