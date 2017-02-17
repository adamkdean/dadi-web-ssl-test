'use strict'

const fs = require('fs')
const httpProxy = require('http-proxy')

function TestProxy() {
  this.createServer({
    target: {
      host: 'localhost',
      port: 5080
    },
    ssl: {
      cert: fs.readFileSync('ssl/cert.pem', 'utf8'),
      key: fs.readFileSync('ssl/key.pem', 'utf8')
    },
    xfwd: true
  }).listen(5443)
}

TestProxy.prototype.createServer = (options) => {
  this._instance = httpProxy.createProxyServer(options)
  return this._instance
}

module.exports = exports = new TestProxy()
