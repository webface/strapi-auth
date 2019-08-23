const next = require('next')
const routes = require('./routes')
const compression = require('compression')
const port = parseInt(process.env.PORT, 10) || 3000
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)
const express = require('express')

app.prepare().then(() => {
  express().use(compression()).use(handler).listen(port)
})
