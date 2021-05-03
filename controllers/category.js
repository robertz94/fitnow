'use strict'

const jwt = require('jsonwebtoken')
const Category = require('../models/category')
const User = require('../models/user')

const getTokenFrom = request => {
    const authorization = request.get('authorization')
    console.log(authorization)
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      return authorization.substring(7)
    }
    return null
  }

exports.getAll = async (request, response) => {
    const categories = await Category.find({})
    response.json(categories)
}
  
exports.addCategory =  async (request, response) => {
    const body = request.body
    const token = getTokenFrom(request)
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const user = await User.findById(decodedToken.id)
  const category = new Category({
      name: body.name
  })
  const savedCategory = await category.save()
  response.json(savedCategory)
}