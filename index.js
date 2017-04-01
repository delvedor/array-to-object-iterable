'use strict'

function arrayToObjectIterable (arrayIterable) {
  var iterable = {}
  iterable[Symbol.iterator] = function () {
    var entries = arrayIterable
    var it = {}
    it.next = function () {
      var next = entries.next()

      if (next.done) {
        return {
          value: null,
          done: true
        }
      }

      var value = {}
      value[next.value[0]] = next.value[1]
      return {
        value: value,
        done: false
      }
    }
    return it
  }
  return iterable
}

module.exports = arrayToObjectIterable
