const express = require('express')
const router = express.Router()
const { getAll, getOne, addProduct } = require('../controllers/product')

router.get('/', getAll)

router.get('/:id', getOne)

router.post('/', addProduct)

module.exports = router