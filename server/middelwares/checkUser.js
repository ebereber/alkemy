const db = require('../config/db')

const checkUser = (req, res, next) => {
  const { email } = req.body

  db.query('SELECT * FROM users WHERE email=?', [email],
    (err, result) => {
      if (err) {
        return res.json({ status: 'Error' })
      }
      if (result.length > 0) {
        return res.status(500).json({ error: 'Email already exist' })
      }
      req.isUsed = false
      next()
    })
}

module.exports = checkUser
