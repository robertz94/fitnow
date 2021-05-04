const jwt = require('jsonwebtoken')
const user = require('../models/user')
const User = require('../models/user')

const getTokenFrom = request => {
    const authorization = request.get('authorization')
    console.log(authorization)
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      return authorization.substring(7)
    }
    return null
}

const checkToken = async (request, response, next) => {
     token = getTokenFrom(request)
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const user = await User.findById(decodedToken.id)
  if (user.userType === 0) {
    return response.status(401).json({ error: 'user is not an admin'})
  }
  next()
}

module.exports = { checkToken }
