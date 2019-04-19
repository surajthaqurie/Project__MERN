const express = require('express');
const loginRoute = express.Router();

const loginUser = require('./method/login');

loginRoute.route('/')
    .post(loginUser);


module.exports = loginRoute;