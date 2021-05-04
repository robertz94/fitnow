const mongoose = require('mongoose')
const Product = require('../models/product')

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

exports.updateProduct = async (request, response, next) => {
    Product.findByIdAndUpdate(request.params.id, request.body, { new: true })
        .then(updatedProduct => {
            response.json(updatedProduct)
        })
}

exports.removeProduct = (request, response) => {
    Product.findByIdAndRemove(request.params.id)
        .then(result => {
            response.status(204).end()
        })
}