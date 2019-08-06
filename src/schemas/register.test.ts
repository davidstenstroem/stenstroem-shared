import { registerSchema } from './register'

test('Should return true given valid data', () => {
  const validData = {
    name: 'David',
    email: 'david@stenstroem.dk',
    password: 'kgjdhswujjddjdj'
  }

  expect(registerSchema.isValidSync(validData)).toBe(true)
})

test('Should return false given invalid data', () => {
  const invalidData = {
    name: 'David',
    email: 'davidstenstroemdk',
    password: 'kgjdhswujjddjdj'
  }

  expect(registerSchema.isValidSync(invalidData)).toBe(false)
})