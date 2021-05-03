'use strict';
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const userRoutes = require('./routes/user')

const PORT = process.env.PORT
const url = 
    `mongodb+srv://Admin:${process.env.PASSWORD}@cluster0.hsurz.mongodb.net/orders?retryWrites=true&w=majority`

mongoose.connect(url, {useNewUrlParser: true, useCreateIndex: true})

const app = express()
app.use(cors())

app.use('/api', userRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})