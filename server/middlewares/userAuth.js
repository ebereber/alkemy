
const jwt = require('jsonwebtoken')

const userAuth = (req, res, next) => {
  const authorization = req.get('authorization')

  let token = ''

  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7)
  }

  const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: 'Token missing or invalid' })
  }

  const { id: userId } = decodedToken

  req.userId = userId

  next()
}

module.exports = userAuth
