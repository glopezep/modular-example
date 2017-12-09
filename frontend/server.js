const http = require('http')
const path = require('path')
const express = require('express')
const io = require('socket.io-client')
const chalk = require('chalk')
const request = require('request-promise-native')
const debug = require('debug')('example:frontend')
const utils = require('../utils')
const config = require('../config')

const app = express()
const server = http.createServer(app)
const socket = io(config.wsHost)
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.post('/api/user/save', async (req, res) => {
  const user = req.body
  const options = {
    method: 'POST',
    uri: `${config.apiHost}/user/save`,
    json: true,
    body: user
  }

  try {
    const result = await request(options)
    res.send(result).status(200)
  } catch (e) {
    res.send(e).status(500)
  }

})

app.get('/api/user/list', async (req, res) => {
  const user = req.body
  const options = {
    method: 'GET',
    uri: `${config.apiHost}/user/list`,
    json: true,
    body: user
  }

  const result = await request(options)
  res.send(result).status(200)
})

if (!module.parent) {
  process.on('uncaughtException', utils.handleFatalError)
  process.on('unhandledRejection', utils.handleFatalError)

  server.listen(port, () => {
    console.log(`${chalk.green('[server]')} Server listening on ${port}`)
  })
}