const Joi = require('joi');

exports.validate = (data) => {
    const schema = {
        email: Joi.string().email().min(5).max(50).required().trim(),
        password: Joi.string().min(8).max(250).required().trim(),
    }
    return Joi.validate(data, schema);
}