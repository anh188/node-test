const express = require('express');
const router = express.Router();
const productController = require('../../controllers/ProductController')

router.get('/', productController.get)
router.post('/', productController.create)
router.put('/:id', productController.update)
router.delete('/:id', productController.delete)

module.exports = router;