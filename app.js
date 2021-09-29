// Imports
const express = require("express")
const cors = require("cors")

// Instanciations
const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.get("/", (req, res) => {
    res.contentType("html").status(200).send("<h1>Hello world</h1>")
})

module.exports = app
