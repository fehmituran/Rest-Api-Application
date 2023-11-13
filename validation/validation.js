const Joi = require('joi');

const contactValidation = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    phone: Joi.string().pattern(/^[0-9+() -]+$/).required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
    favorite: Joi.boolean(),
})

const userValidation = Joi.object({
    email: Joi.string().required(),
    password: Joi.number().min(6).required(),
    subscription: Joi.string(),
  });



module.exports = {
    contactValidation,
    userValidation,
  };