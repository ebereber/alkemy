const express = require('express')
const db = require('../config/db')
const userAuth = require('../middlewares/userAuth')
const router = express.Router()

router.get('/', userAuth, (req, res) => {
  const { userId } = req

  db.query('SELECT * FROM movements WHERE userId=?', [userId], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Error' })
    } else {
      res.send(result)
    }
  })
})

router.post('/create', userAuth, (req, res) => {
  const { description, amount, category, type, date } = req.body
  const { userId } = req

  db.query('INSERT INTO movements(description, amount, category, type, date, userId) VALUES(?,?,?,?,?,?)',
    [description, amount, category, type, date, userId], (err, result) => {
      if (err) {
        res.status(500).json({ status: ' An error occurred while creating a movement' })
      } else {
        res.json({ status: 'Movement was created successfully' })
      }
    })
})

router.put('/update', userAuth, (req, res) => {
  const { id, description, amount, category } = req.body
  const { userId } = req
  db.query('UPDATE movements SET description=?, amount=?, category=? WHERE id=? AND userId=?', [description, amount, category, id, userId],
    (err, result) => {
      if (err) {
        res.json({ status: 'Error', message: err })
      } else {
        res.json({ status: 'Succes' })
      }
    })
})

router.delete('/delete', userAuth, (req, res) => {
  const { id } = req.body
  const { userId } = req

  db.query('DELETE FROM movements WHERE id=? AND userId ', [id, userId],
    (err, result) => {
      if (err) {
        res.json({ status: 'Error' })
      } else {
        (
          res.json({ message: 'Movement deleted' })
        )
      }
    }
  )
})

module.exports = router
