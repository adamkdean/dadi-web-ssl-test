const Middleware = function (app) {
  app.use((req, res, next) => {
    console.log(req.url, req.headers)
    next()
  })
}

module.exports = function (app) {
  return new Middleware(app)
}

module.exports.Middleware = Middleware
