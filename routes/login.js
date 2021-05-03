const router = require('express').Router()
const { userLogin } = require('../controllers/login')

router.post('/', userLogin)

module.exports = router