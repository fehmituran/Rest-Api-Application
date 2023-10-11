const Joi = require('joi');

const contactSchemas = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    phone: Joi.string().pattern(/^[0-9+() -]+$/).required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
})

module.exports =  contactSchemas;