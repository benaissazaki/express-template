// Imports
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const ExampleModel = require('../models/example')

// App Instantiation
const api = supertest(app)

// Database initialization
const initialData = [
  {
    name: 'Entry1'
  },
  {
    name: 'Entry2',
    content: 'Example content'
  }
]
beforeEach(async () => {
  await ExampleModel.deleteMany({})
  initialData.map(async (entry) => {
    await (new ExampleModel(entry)).save()
  })
})

test('examples are returned as json', async () => {
  await api.get('/api/example')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

afterAll(() => {
  mongoose.connection.close()
})
