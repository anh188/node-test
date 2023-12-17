const express = require('express');
const router = express.Router();
const customerController = require('../../controllers/CustomerController')




router.get('/', customerController.get)
router.post('/', customerController.create)
router.put('/:id', customerController.update)
router.delete('/:id', customerController.delete)

module.exports = router;