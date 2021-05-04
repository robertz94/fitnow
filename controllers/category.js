'use strict'

const Category = require('../models/category')

exports.getAll = async (request, response) => {
    const categories = await Category.find({})
    response.json(categories)
}
  
exports.addCategory =  async (request, response) => {
    const body = request.body
    const category = new Category({
      name: body.name
    })
    const savedCategory = await category.save()
    response.json(savedCategory)
}

exports.removeCategory = async (request, response) => {
    Category.findByIdAndRemove(request.params.id)
        .then(result => {
            response.status(204).end()
        })
}

exports.updateCategory = (request, response, next) => {
    Category.findByIdAndUpdate(request.params.id, request.body, { new: true})
        .then(updatedCategory => {
            response.json(updatedCategory)
        })
}