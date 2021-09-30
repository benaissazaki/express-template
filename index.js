// Imports
const http = require('http')
const app = require('./app')
const logger = require('./utils/logger')
const config = require('./utils/config')

// Server creation
const server = http.createServer(app)

// Server start
server.listen(config.PORT, () => {
  logger.info(`✓\t Server running on port ${config.PORT}`)
})
