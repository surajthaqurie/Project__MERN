const express = require('express');
const app = express();
const parser = require('body-parser');
const passport = require('passport');
app.use(parser.json());

const dbConnector = require('./lib/helpers/database.helper');
dbConnector.init(app);

const router = require('./lib/route/index');
router.init(app);

app.use(passport.initialize());
app.use(passport.session());
require('./lib/modules/auth/method/passport')(passport);

module.exports = app;
