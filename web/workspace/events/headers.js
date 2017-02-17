const Event = function (req, res, data, callback) {
  callback(null, req.headers)
}

module.exports = (req, res, data, callback) => {
  return new Event(req, res, data, callback)
}

module.exports.Event = Event
