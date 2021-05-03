const router = require('express').Router()

const User = require('../models/user')

router.get('/', (req, res) => {
    console.log('Working')
})

module.exports = router