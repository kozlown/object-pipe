const test = require('tape')
require('..')()

function double () {
  if (Array.isArray(this)) {
    return this.concat(this)
  }
  return this + this
}

test('It can be used with numbers', t => {
  t.plan(1)

  const final = (5)
    .do(double)

  t.deepEquals(final, 10)
})

test('It can be used with strings', t => {
  t.plan(1)

  const final = 'York'
    .do(double)

  t.deepEquals(final, 'YorkYork')
})

test('It can be used with arrays', t => {
  t.plan(1)

  const final = [1, 2, 3]
    .do(double)

  t.deepEquals(final, [1, 2, 3, 1, 2, 3])
})

test('It can be used multiple times', t => {
  t.plan(1)

  const final = (3)
    .do(double)
    .do(double)

  t.deepEquals(final, 12)
})