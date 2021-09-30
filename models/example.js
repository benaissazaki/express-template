const mongoose = require('mongoose')

const exampleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  content: {
    type: String,
    minlength: 5
  }
})

module.exports = mongoose('Example', exampleSchema)
