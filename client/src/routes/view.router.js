const express = require('express');

const renderPage = require('./view.controller');

const viewRouter = express.Router();

viewRouter.get('/', renderPage);

module.exports = viewRouter;