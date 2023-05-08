const jwt = require('jsonwebtoken')

// On cherche à connaître l'id d'un utilsateur via son token
const getUserIdFromToken = (token) => {
  // On verifie s'il y a un token
  if (token) {
    // On décode le token pour récupérer l'id
    const decoded = jwt.decode(token)
    console.log(decoded)
    return decoded.id
  } else {
    return res.status(500).send(error)
  }
}

module.exports = {
  getUserIdFromToken
}
