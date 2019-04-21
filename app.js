const express = require('express');
const app = express();
const cors = require('cors');
const parser = require('body-parser');
const passport = require('passport');
const logWriter = require('./lib/helpers/logwriter.helper');
const errorHandler = require('./lib/middleware/error.handler');



app.use(parser.json());
app.use(cors());
// app.use(express.static('./public'));

const dbConnector = require('./lib/helpers/database.helper');
dbConnector.init(app);

const router = require('./lib/route/index');
router.init(app);

app.use(passport.initialize());
app.use(passport.session());
require('./lib/modules/auth/method/passport')(passport);

logWriter.init(app);

app.use(errorHandler);

module.exports = app;
