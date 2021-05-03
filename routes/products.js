const express = require('express')
const router = express.Router()
const { getAll, getOne, addProduct } = require('../controllers/product')
const { getTokenFrom, checkToken } = require('../controllers/auth')

const testMiddleware = (req, res, next) => {
    if (2 > 3) {
        console.log('wow')
    }
    console.log('ok')
    next()
}

const testSecondMiddleware = (req, res, next) => {
    if (2 > 3) {
        console.log('wow')
    }
    console.log('not ok')
    next()
}

router.get('/', testMiddleware, testSecondMiddleware, getAll)

router.get('/:id', getOne)

router.post('/', checkToken, addProduct)

module.exports = router