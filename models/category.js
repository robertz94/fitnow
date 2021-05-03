'use strict';
const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    }
})

module.exports = mongoose.model("Category", categorySchema)