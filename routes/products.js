const express = require('express')
const router = express.Router()
const { getAll, getOne, addProduct, removeProduct, updateProduct } = require('../controllers/product')
const { checkToken } = require('../controllers/auth')

router.get('/', getAll)

router.get('/:id', getOne)

router.post('/', checkToken, addProduct)

router.put('/product/update/:id', updateProduct)

router.delete('/product/delete/:id', removeProduct)

module.exports = router