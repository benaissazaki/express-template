// Imports
const exampleRouter = require('express').Router()
const ExampleModel = require('../models/example')

// Endpoint definition
exampleRouter.get('/', (req, res) => {
  ExampleModel.find({}).then((ex) => {
    res.status(200).json(ex.map((e) => e.toJSON()))
  })
})

exampleRouter.post('/', (req, res, next) => {
  const body = req.body
  const example = new ExampleModel({
    ...body
  })
  example.save()
    .then((savedExample) => {
      res.json(savedExample.toJSON())
    })
    .catch((error) => next(error))
})

module.exports = exampleRouter
