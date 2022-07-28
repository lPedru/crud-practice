const express = require('express');
const path = require('path');

const viewRouter = require('./routes/view.router');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', viewRouter);

module.exports = app;