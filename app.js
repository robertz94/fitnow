'use strict';
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const userRoutes = require('./controllers/users')

const PORT = process.env.PORT
const url = 
    `mongodb+srv://Admin:${process.env.PASSWORD}@cluster0.hsurz.mongodb.net/orders?retryWrites=true&w=majority`

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(console.log('Connected to Database'))

const app = express()
app.use(cors())

app.use('/api/users', userRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})