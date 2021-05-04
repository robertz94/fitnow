const router = require('express').Router()
const { loginUser } = require('../controllers/user')

router.post('/signup', loginUser)

module.exports = router