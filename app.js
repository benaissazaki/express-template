// Imports
const express = require("express")
const cors = require("cors")

// Instanciations
const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

module.exports = app
