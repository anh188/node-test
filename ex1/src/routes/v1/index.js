const express = require('express');
const router = express.Router();
const userRouter = require('./userRoutes')
const customerRouter = require('./customerRoutes');
const productRoutes = require('./productRoutes');
const authRouter = require('./authRoutes')

router.get('/status', (req, res) => {
    res.status(200).json({ msg: 'API are ready !'});
})

router.use('/users', userRouter)
router.use('/customers', customerRouter);
router.use('/products', productRoutes);
router.use('/auth', authRouter)

module.exports = router;