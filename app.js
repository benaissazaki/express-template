// Imports
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('express-async-errors')
const middleware = require('./utils/middleware')
const config = require('./utils/config')
const logger = require('./utils/logger')
const exampleRouter = require('./controllers/example')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')

// Instanciations
const app = express()

// Connection to MongoDB
logger.info('⭕\tConnecting to MongoDB')
mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('✓\t Connected to MongoDB')
  })
  .catch((error) => {
    logger.error('❌\tError connecting to MongoDB: ', error.message)
  })

// Middlewares
app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

// Routes
app.get('/', (req, res) => {
  res.contentType('html').status(200).send('<h1>Hello world</h1>')
})
app.use('/api/example', exampleRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

// Middlewares for unhandled requests
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
