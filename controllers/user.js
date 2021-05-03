const bcrypt = require('bcrypt')
const User = require('../models/user')

exports.loginUser = async (request, response) => {
    const body = request.body
    console.log(request.body)

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
        name: body.name,
        email: body.email,
        passwordHash,
        about: body.about,
        userType: body.userType,
        history: body.history
    })

    const savedUser = await user.save()

    response.json(savedUser)
}