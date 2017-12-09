const chalk = require('chalk')

module.exports = {
  handleFatalError(err) {
    console.error(`${chalk.red('[fatal-error]')} ${err.message}`)
    console.error(err.stack)
    process.exit(1)
  }
}