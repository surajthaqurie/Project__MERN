const express = require('express');
const userRoute = express.Router();

const addUser = require('./method/createUser');


userRoute.route('/register')
    .post(addUser);

module.exports = userRoute;