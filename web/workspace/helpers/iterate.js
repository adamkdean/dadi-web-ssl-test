const _ = require('lodash')
const Dust = require('@dadi/web').Dust
const dust = Dust.getEngine()

dust.helpers.iterate = function(chunk, context, bodies, params) {
  var obj = dust.helpers.tap(params.obj, chunk, context)

  var iterable = []

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      var value = obj[key]

      iterable.push({
        'key': key,
        'value': value
      })
    }
  }

  iterable = _.sortBy(iterable, ['key'])
  return chunk.section(iterable, context, bodies)
}
