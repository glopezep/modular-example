const asmund = require('asmund')
const chalk = require('chalk')
const config = require('../config')
const utils = require('../utils')

const db = new asmund.Db(config.db)
const user = {
  fullname: 'The administrator',
  email: 'admin@app.com',
  username: 'admin',
  password: 'root'
}

async function setup () {
  try {
    await db.setup()
    await db.saveUser(user)
    console.log(`${chalk.green('Setup completed')}`)
    process.exit(0)
  } catch (e) {
    utils.handleFatalError(e)
  }
}

setup()