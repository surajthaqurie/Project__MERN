const express = require('express');
const userRoute = express.Router();

const addUser = require('./method/createUser');


userRoute.route('/')
    .post(addUser);

module.exports = userRoute;