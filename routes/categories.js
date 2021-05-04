const express = require('express')
const router = express.Router()
const { getAll, addCategory, removeCategory, updateCategory } = require('../controllers/category')
const { checkToken } = require('../controllers/auth')

router.get('/', getAll)

router.post('/', checkToken, addCategory)

router.put('/category/update/:id', updateCategory)

router.delete('/category/delete/:id', removeCategory)

module.exports = router