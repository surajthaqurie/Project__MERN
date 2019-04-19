'use strict'
const httpStatus = require('http-status');
const BCRYPT_SALT_ROUND = 10;
const bcryptHelper = require('../../../helpers/bcrypt.helper');
const utilityHelper = require('../../../helpers/utility.helper');
const collectionHelper = require('../../../helpers/collection.hepler');

const { collectionConfig, dbConfig } = require('../../../config/app.config');
const { validate } = require('../validation');
const { message } = require('../config');

const addUser = async (req, res, next) => {
    try {
        const userColl = collectionConfig.usereColl;

        let fields = ['firstName', 'lastName', 'email', 'password', 'phone'];

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
        let userExists = await collectionHelper.getDocument(userColl, query);

        if (userExists) {
            res.status(httpStatus.CONFLICT);
            return res.json({
                Status: httpStatus.CONFLICT,
                Message: message.userEmailConfilct.message
            });
        }

        let salt = await bcryptHelper.generateSalt(BCRYPT_SALT_ROUND);
        let hashPassword = await bcryptHelper.hashPassword(user.password, salt);

        user.password = hashPassword;
        user.deleted = false;
        user.update_on = null;
        user.deleted_on = null;
        user.terms_and_conditons = null;
        user.registered_on = new Date();
        user.registered_by = null;
        user.role = dbConfig.defaultUserRole;

        let saveRes = await collectionHelper.saveDocument(userColl, user);
        if (saveRes.result.n > 0) {
            res.status(httpStatus.OK);
            return res.json({
                Status: httpStatus.OK,
                data: user,
                Message: message.userSaveSuccess.message
            });
        }
        res.status(httpStatus.NOT_MODIFIED);
        res.json({
            Status: httpStatus.NOT_MODIFIED,
            message: message.userSaveFail.message
        });

    } catch (err) {
        res.status(httpStatus.BAD_REQUEST_)
        res.json({
            Status: httpStatus.BAD_REQUEST,
            err: err.toString()
        });
    }
}

module.exports = addUser;
