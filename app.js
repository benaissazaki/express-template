// Imports
const express = require('express')
const cors = require('cors')
const middleware = require('./utils/middleware')

// Instanciations
const app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

// Routes
app.get('/', (req, res) => {
  res.contentType('html').status(200).send('<h1>Hello world</h1>')
})

// Middlewares for unhandled requests
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
