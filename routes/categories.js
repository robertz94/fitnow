const express = require('express')
const router = express.Router()
const { getAll, addCategory } = require('../controllers/category')

router.get('/', getAll)

router.post('/', addCategory)

module.exports = router