const express = require('express');
const app = express();
const parser = require('body-parser');

app.use(parser.json());

const dbConnector = require('./lib/helpers/database.helper');
dbConnector.init(app);

const router = require('./lib/route/index');
router.init(app);

module.exports = app;
