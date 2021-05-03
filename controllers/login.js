const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const router = require('express').Router()
const User = require('../models/user')

router.post('/', async(request, response) => {
    const body = request.body
    
    const user = await User.findOne({ email: body.email })
    const passwordCorrect = user === null
        ? false
        : await bcrypt.compare(body.password, user.passwordHash)

    if (!(user && passwordCorrect)) {
        return response.status(401).json({
            error: 'invalid username or password'
        })
    }

    const emailForToken = {
        email: user.email,
        id: user._id
    }

    const token = jwt.sign(emailForToken, process.env.SECRET)

    response
        .status(200)
        .send({ token, email: user.email, name: user.name})
})

module.exports = router