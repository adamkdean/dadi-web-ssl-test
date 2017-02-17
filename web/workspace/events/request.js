const Event = function (req, res, data, callback) {
  callback(null, {
    headers: req.headers,
    protocol: req.protocol,
    secure: req.secure,
    ip: req.ip,
    ips: req.ips
  })
}

module.exports = (req, res, data, callback) => {
  return new Event(req, res, data, callback)
}

module.exports.Event = Event
