const express = require('express')
const router = express.Router()
const { getAll, addCategory } = require('../controllers/category')
const { checkToken } = require('../controllers/auth')

router.get('/', getAll)

router.post('/', checkToken, addCategory)

module.exports = router