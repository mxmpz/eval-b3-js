const jwt = require('jsonwebtoken')

const withAuth = (req, res, next) => {
  // S'il y a une autorisation
  if (req.headers.authorization) {
    try {
      //On vérifie le token
      const decoded = jwt.verify(req.headers.authorization.split(' ')[1], process.env.TOKEN_SECRET)
      // On décode l'id
      if (decoded && decoded.id) {
        req.userId = decoded.id
        next()
      } else {
        // On relève une erreur si le token n'est pas verifié
        return res.status(401).send()
      }
    } catch (error) {
      return res.status(401).send(error)
    }
  } else {
    // On relève une erreur s'il n'y a pas d'autorisation
    return res.status(401).send()
  }
}

module.exports = withAuth
