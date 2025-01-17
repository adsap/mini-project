const Joi = require('joi');

const apiValidation = {
  getData: Joi.object({
    page: Joi.number().integer().min(1).required(),
    size: Joi.number().integer().min(1).required(),
  }),
};

module.exports = apiValidation;
