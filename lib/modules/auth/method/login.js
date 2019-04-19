'use strict';

const httpStatus = require('http-status');
const bcryptHelper = require('../../../helpers/bcrypt.helper');
const collectionHelper = require('../../../helpers/collection.hepler');

const { collectionConfig } = require('../../../config/app.config');
const { validate } = require('../validation');
const { message } = require('../config');

const loginUser = async (req, res, next) => {
    try {
        const userColl = collectionConfig.usereColl;

        let fields = ['email', 'password'];

        let user = collectionHelper.collectInputsData(req.body, fields);

        const { error } = validate(user);
        if (error) {
            res.status(httpStatus.BAD_REQUEST);
            return res.json({
                status: httpStatus.BAD_REQUEST,
                message: error.details[0].message
            });
        }

        let query = { email: user.email, deleted: false };
        let userCheck = await collectionHelper.getDocument(userColl, query);

        if (!userCheck) {
            res.status(httpStatus.NOT_FOUND);
            return res.json({
                Status: httpStatus.NOT_FOUND,
                Message: message.userLoginFail.message
            });
        }

        const validPass = await bcryptHelper.comparePassword(user.password, userCheck.password);
        if (!validPass) {
            res.status(httpStatus.NOT_FOUND);
            return res.json({
                Status: httpStatus.NOT_FOUND,
                Message: message.userLoginFail.message
            });

        }

        res.send('login sucessfully').status(httpStatus.OK);

    } catch (err) {
        res.status(httpStatus.BAD_REQUEST)
            .json({
                Status: httpStatus.BAD_REQUEST,
                err: err.toString()
            });
    }
}

module.exports = loginUser;