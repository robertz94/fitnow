'use strict';
const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        trim: true,
        required: true
    },
    category: {
        type: ObjectId,
        ref: "Category",
        required: true
    },
    quantity: {
        type: Number,
    },
    photo: {
        data: Buffer,
        contentType: String
    }
})

module.exports = mongoose.model("Product", productSchema)