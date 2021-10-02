const bcrypt = require('bcrypt')
const supertest = require('supertest')
const app = require('../app')
const User = require('../models/user')

const api = supertest(app)

describe('login endpoint', () => {
  beforeEach(async () => {
    await User.deleteMany({})   // Delete all users

    const passwordHash = await bcrypt.hash('sekret', 10)
    const user = new User({ username: 'root', passwordHash })

    await user.save()           // Create a new user
  })

  test('fails with inexistant user', async () => {
    const res = await api.post('/api/login')
      .send({
        'username': 'phantom',
        'password': 'itsme99'
      })
      .expect(401)
      .expect('Content-Type', /application\/json/)
    expect(res.body.error).toContain('Invalid username or password')
  })

  test('fails with existant user and wrong password', async () => {
    const res = await api.post('/api/login')
      .send({
        'username': 'root',
        'password': 'itsme99'
      })
      .expect(401)
      .expect('Content-Type', /application\/json/)
    expect(res.body.error).toContain('Invalid username or password')
  })

  test('fails without data', async () => {
    const res = await api.post('/api/login')
      .expect(401)
      .expect('Content-Type', /application\/json/)
    expect(res.body.error).toContain('Invalid username or password')
  })

  test('succeeds with correct credentials', async () => {
    const res = await api.post('/api/login')
      .send({
        'username': 'root',
        'password': 'sekret'
      })
      .expect(200)
      .expect('Content-Type', /application\/json/)
    expect(res.body).toHaveProperty('token')
    expect(res.body).toHaveProperty('username')
  })
})
