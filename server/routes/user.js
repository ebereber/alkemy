const express = require('express')
const router = express.Router()
const db = require('../config/db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/signup', async (req, res) => {
  const { username, password, email } = req.body

  const salt = 10
  const passwordHash = await bcrypt.hash(password, salt)
  const newUser = [
    username,
    email,
    passwordHash
  ]

  if (isUsed === false) {
    await db.query('INSERT INTO users (username, email, password) VALUES(?,?,?)', newUser,
      (err) => {
        if (err) {
          res.json({ status: 'Error' })
        }
        db.query('SELECT * FROM users WHERE email=?', [email],
          (err, result) => {
            if (err) {
              res.json({ status: 'error' })
            }

            if (result.length > 0) {
              const userForToken = {
                id: result[0].id,
                email: result[0].email
              }

              const token = jwt.sign(userForToken, '123')

              return res.json({
                username: result[0].username,
                email: result[0].email,
                token
              })
            }
          })
      })
  }

  /* await db.query('INSERT INTO users (username, email, password) VALUES(?,?,?)', newUser,
    (err, result) => {
      if (err) {
        res.json({ status: 'Error' })
      } else {
        const userForToken = { id: newUser.id, username: newUser.username }
        const token = jwt.sign(userForToken, '123')
        res.status(200).json({ token })
      }
    }) */
})

router.post('/signin', async (req, res) => {
  const { email, password } = req.body
  console.log(email, password)

  const user = await db.query('SELECT * FROM  users WHERE email = ? ', [email])
  console.log(user)
  const correctPassword = user[0] === undefined
    ? false
    : await bcrypt.compare(password, user[0].password)
  console.log(correctPassword)

  if (!(user[0] && correctPassword)) {
    return res.status(401).json({ error: 'Invalid email or password' })
  }

  const userForToken = {
    id: user[0].id,
    email: user[0].email
  }

  const token = jwt.sign(userForToken, '123')

  res.send({
    username: user[0].username,
    email: user[0].email,
    token
  })
})

router.put('/update', (req, res) => {

})
router.delete('/delete', (req, res) => {

})

module.exports = router
