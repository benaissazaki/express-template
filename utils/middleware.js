const logger = require('./logger')

const requestLogger = (req, res, next) => {
  logger.info('Method:', req.method)
  logger.info('Path:  ', req.path)
  logger.info('Body:  ', req.body)
  logger.info('---')
  next()
}

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'Unknown endpoint' })
}

const errorHandler = (error, req, res, next) => {
  logger.error(error.message)

  // Special treatment depending on the type of error
  switch (error.name) {
  case 'ValidationError':
    return res.status(400).json({ error: error.message })
  default:
    break
  }

  // Test by error's message
  switch (error.message) {
  case 'data and salt arguments required':
    return res.status(400).json({ error: 'Missing password' }) 
  default:
    break
  }

  next(error)
}
module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler
}
