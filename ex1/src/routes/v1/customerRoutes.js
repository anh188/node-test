const express = require('express');
const router = express.Router();
const customerController = require('../../controllers/CustomerController')
const Joi = require ('joi');
const { verify} = require('jsonwebtoken');

const customVadationSchema = Joi.object({
    username: Joi.string().alphanum().required().messages({
        'any.required': `"username" khong duoc bo trong`
    }),
    phone: Joi.string().min(10).max(11).required(),
    email: Joi.string().email().required(),
    address: Joi.string().required(),
    birthdate: Joi.date(),
    gender: Joi.string()
})

    //middleware
    const validateCustomData = (req, res, next) =>{
        const {error, value} = customVadationSchema.validate(req.body,{abortEarly:false});
        console.log(error)
        if(error){
            const errorMessages = error.details.map((details)=> details.message);
            return res.status(400).json ({errors: errorMessages});
        }

        req.body = value;
        next();
    }


router.get('/', customerController.get)
router.post('/', validateCustomData,verifyToken, customerController.create)
router.put('/:id', customerController.update)
router.delete('/:id', customerController.delete)

module.exports = router;