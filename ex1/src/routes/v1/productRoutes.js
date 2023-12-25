const express = require('express');
const router = express.Router();
const productController = require('../../controllers/ProductController')


const Joi = require ('joi');
const { verify} = require('jsonwebtoken');

const productVadationSchema = Joi.object({
    name: Joi.string().alphanum().required().messages({
        'any.required': `"name" khong duoc bo trong`
    }),
    manufacturer: Joi.string().required(),
    year: Joi.number().required(),
    quantity: Joi.number().required(),
    price: Joi.number().required()
})

    //middleware
    const validateProductData = (req, res, next) =>{
        const {error, value} = productVadationSchema.validate(req.body,{abortEarly:false});
        console.log(error)
        if(error){
            const errorMessages = error.details.map((details)=> details.message);
            return res.status(400).json ({errors: errorMessages});
        }

        req.body = value;
        next();
    }

router.get('/', productController.get)
router.post('/',validateProductData, productController.create)
router.put('/:id', productController.update)
router.delete('/:id', productController.delete)

module.exports = router;