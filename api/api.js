const asmund = require('asmund')
const express = require('express')
const config = require('../config')

const router = express.Router()
const db = new asmund.Db(config.db)

router.post('/user/save', (req, res) => {
  const user = req.body
  db.saveUser(user, (err, created) => {
    if (err) {
      return next(err)
    }
    res.send(created).status(200)
  })
})

router.get('/user/list', (req, res, next) => {
  db.getUsers((err, users) => {
    if (err) {
      return next(err)
    }

    res.send(users).status(200)
  })
})

module.exports = router