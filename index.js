// Imports
const http = require("http")
const app = require("./app")

// Server creation
const server = http.createServer(app)

// Server start
const PORT = 3001
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
