'use strict'

const jwt = require('jsonwebtoken')
const Category = require('../models/category')
const User = require('../models/user')

exports.getAll = async (request, response) => {
    const categories = await Category.find({})
    response.json(categories)
}
  
exports.addCategory =  async (request, response) => {
    const body = request.body

  // const user = await User.findById(decodedToken.id)
  const category = new Category({
      name: body.name
  })
  const savedCategory = await category.save()
  response.json(savedCategory)
}
