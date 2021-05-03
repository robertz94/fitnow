'use strict';
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const userRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
<<<<<<< HEAD
const categoryRouter = require('./controllers/categories')
=======
>>>>>>> c89f369ceb4744cf9b513d5721e7cc870f7e9063

const PORT = process.env.PORT
const url = 
    `mongodb+srv://Admin:${process.env.PASSWORD}@cluster0.hsurz.mongodb.net/fitnow?retryWrites=true&w=majority`

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(console.log('Connected to Database'))

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/users', userRouter)
app.use('/api/login', loginRouter)
<<<<<<< HEAD
app.use('/api/categories', categoryRouter)
=======
>>>>>>> c89f369ceb4744cf9b513d5721e7cc870f7e9063

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})