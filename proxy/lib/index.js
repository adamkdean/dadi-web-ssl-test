'use strict'

const USE_SSL = true

const fs = require('fs')
const httpProxy = require('http-proxy')

function TestProxy() {
  const options = {
    xfwd: true,
    target: {
      host: 'localhost',
      port: 5080
    }
  }
  if (USE_SSL) {
    options.ssl = {
      cert: fs.readFileSync('../ssl/cert.pem', 'utf8'),
      key: fs.readFileSync('../ssl/key.pem', 'utf8')
    }
  }

  httpProxy
    .createProxyServer(options)
    .listen(USE_SSL ? 5443 : 5081)
}

module.exports = exports = new TestProxy()
