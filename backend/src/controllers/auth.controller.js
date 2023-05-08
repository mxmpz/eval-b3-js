const jwt = require('jsonwebtoken')
const User = require('../data/models/User')

const loginUser = async (credentials, callback) => {
  let _error
  // On vérifie la présence des paramètres
  if (!credentials.email || !credentials.password) {
    // S'il n'existe pas on relève une erreur
    _error = 'Invalid credentials'
  }

  // On vérifie l'existance d'un utilisateur avec son email
  const user = await User.findOne({ email: credentials.email })
  if (!user) {
    // S'il n'existe pas on relève une erreur
    _error = 'Invalid credentials'
    return callback(_error, null)
  }

  // On compare les mots de passes
  user.comparePassword(credentials.password, (error, isMatch) => {
    if (isMatch) {
      // Si les mots de passes sont identiques
      const payload = {
        id: user.id
      }
      jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '7d' }, (error, token) => {
        if (error) {
          _error = 'Invalid credentials'
        }
        // On supprime le mot de passe de l'utilisateur récupéré en base
        const _user = user.toObject()
        delete _user.password
        // On retourne l'utilisateur et le token
        return callback(_error, {
          user,
          token
        })
      })
    } else {
      // Si les mots de passes sont différents on relève une erreur
      error = 'Invalid credentials'
      return callback(_error, null)
    }
    if (error) {
      console.error(error)
      error = 'Invalid credentials'
      return callback(_error, null)
    }
  })
  if (!user) {
    // S'il n'existe pas on relève une erreur
    _error = 'Invalid credentials'
    return callback(_error, null)
  }
}

module.exports = {
  loginUser
}
