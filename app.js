const express = require('express');
const app = express();
const parser = require('body-parser');

app.use(parser.json());

module.exports = app;
