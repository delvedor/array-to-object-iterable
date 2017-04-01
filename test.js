'use strict'

const t = require('tap')
const test = t.test
const arrayToObjectIterable = require('./index')

const map = new Map()
map.set('key1', 'value1')
map.set('key2', 'value2')
map.set('key3', 'value3')

test('should return an iterable', t => {
  t.plan(2)
  const iterable = arrayToObjectIterable(map.entries())
  t.ok(iterable)
  t.is(typeof iterable[Symbol.iterator], 'function')
})

test('should convert array to object', t => {
  t.plan(3)
  const iterable = arrayToObjectIterable(map.entries())
  for (var entry of iterable) {
    if (entry['key1'] || entry['key2'] || entry['key3']) {
      t.ok('everything correct')
    } else {
      t.fail()
    }
  }
})

test('should not mess up the key:value pairs', t => {
  t.plan(3)
  const iterable = arrayToObjectIterable(map.entries())
  var i = 1
  for (var entry of iterable) {
    t.is(entry[`key${i}`], `value${i}`)
    i++
  }
})
