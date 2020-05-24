//validation
const Joi = require('joi');

    //create a registerUser schema
    const registerValidation = (data) => {
        const schema = {
            firstname: Joi.string()
                    .min(6)
                    .max(50)
                    .required(),
            lastname: Joi.string()
                    .min(6)
                    .max(50)
                    .required(),
            username: Joi.string()
                    .min(6)
                    .max(50)
                    .required(),
            email: Joi.string()
                    .min(10)
                    .max(255)
                    .email()
                    .required(),
            password: Joi.string()
                    .min(6)
                    .max(1024)
                    .regex(/[a-zA-Z0-9]{3,30}/)
                    .required(),
    };
    return Joi.validate(data, schema); 
   }

   //create a  login schema
   const loginValidation = (data) => {
    const schema = {
        username: Joi.string()
                .min(6)
                .max(50)
                .required(),
        password: Joi.string()
                .min(6)
                .max(1024)
                .regex(/[a-zA-Z0-9]{3,30}/)
                .required(),
};
return Joi.validate(data, schema); 
}

   module.exports.registerValidation = registerValidation;
   module.exports.loginValidation = loginValidation;