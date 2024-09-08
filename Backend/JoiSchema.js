const Joi = require('joi');

module.exports.newUserJoi = Joi.object({
    username: Joi.string().required().min(4),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(4),
}).required();

module.exports.oldUserJoi = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(4),
}).required();