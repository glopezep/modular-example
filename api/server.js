const http = require('http')
const express = require('express')
const chalk = require('chalk')
const debug = require('debug')('example:api')
const utils = require('../utils')
const api = require('./api')

const app = express()
const server = http.createServer(app)
const port = process.env.PORT || 3001

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(api)
app.use((err, req, res, next) => {
  if (err) {
    res.send(`Error - ${err}`).status(500)
  }
})


if (!module.parent) {
  process.on('uncaughtException', utils.handleFatalError)
  process.on('unhandledRejection', utils.handleFatalError)

  server.listen(port, () => {
    console.log(`${chalk.green('[api]')} Server listening on ${port}`)
  })
}