const http = require('http')
const socketio = require('socket.io')
const chalk = require('chalk')
const debug = require('debug')('example:ws')
const utils = require('../utils')

const server = http.createServer()
const io = socketio(server)
const port = process.env.PORT || 3002

io.on('connection', function (socket) {
  debug('a user connected');

  socket.on('disconnet', function () {
    debug('a user disconnected');
  })
});

if (!module.parent) {
  process.on('uncaughtException', utils.handleFatalError)
  process.on('unhandledRejection', utils.handleFatalError)

  server.listen(port, () => {
    console.log(`${chalk.green('[ws]')} Server listening on ${port}`)
  })
}