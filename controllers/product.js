const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const Product = require('../models/product')

const getTokenFrom = request => {
    const authorization = request.get('authorization')
    console.log(authorization)
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      return authorization.substring(7)
    }
    return null
}

exports.getAll = async (request, response) => {
    const products = await Product.find({})
    response.json(products)
}

exports.getOne = async (request, response) => {
    const product = await Product.findById(request.params.id)
    response.json(product)
}

exports.addProduct = async (request, response) => {
    const body = request.body
    const token = getTokenFrom(request)
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  const product = new Product ({
      name: body.name,
      description: body.description,
      price: body.price,
      category: body.category,
      quantity: body.quantity,
      photo: body.photo
  })

  const savedProduct = await product.save()

  response.json(savedProduct)
}