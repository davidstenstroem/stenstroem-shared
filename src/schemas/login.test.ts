import {loginSchema} from './login'

test('Should return true given valid data', async () => {
  const validData = {
    email: 'david@stenstroem.dk',
    password: '123456gfdsal'
  }

  expect(loginSchema.isValidSync(validData)).toBe(true)
})

test('Should return false given invalid data', () => {
  const invalidData = {
    email: 'davidstenstroemdk',
    password: ''
  }

  expect(loginSchema.isValidSync(invalidData)).toBe(false)
})