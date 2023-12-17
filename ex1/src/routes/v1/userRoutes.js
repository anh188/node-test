const express = require('express');
const router = express.Router();
const userController = require('../../controllers/Usercontroller');

// router.get('/:id', (req, res) => {
//     let id = req.params.id;
//     console.log(id)
//     res.status(200).json({msg:`Get ID ${id}`})
// })

// router.get('/', (req, res) => {
//     // let page = req.query.page;
//     // let sort = req.query.sort;
    
//     const{page,sort} = req.query;

//     console.log(page,sort);

//     res.status(200).json({msg:`Get query String`})
// })

// router.post('/', (req,res) => {
//     const{username, password} = req.body;

//     res.status(200).json({
//         username,
//         password    
//     })

// })

//goi den controller
//thong tin cua 1 user: username, email, phone, age

router.post('/', userController.create)
router.get('/',userController.getAll)
router.put('/:id',userController.update)
router.delete('/:id',userController.delete)
module.exports = router;
