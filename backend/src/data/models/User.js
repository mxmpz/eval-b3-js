const mongoose = require('mongoose')
const { Schema } = mongoose

// Insertion cryptage password via bcryptjs
const bcrypt = require('bcryptjs')

// Création du schéma d'un utilisateur
const userSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+@.+\..+/
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String
  }
}, { timestamps: true })

// On remplace le password de l'utilisateur par un équivalent crypté avant l'enregistrement dans la BDD
userSchema.pre('save', function (next) {
  const user = this
  // On regarde si le password à changer ou si l'utilisateur est nouveau
  if (this.isModified('password') || this.isNew) {
    // On génère du "sel" = une clé aleatoire pour hasher le password
    bcrypt.genSalt(10, (error, salt) => {
      if (error) {
        throw new Error(error)
      }

      // On hash le password avec le "sel" et on l'enregistre
      bcrypt.hash(user.password, salt, (error, hash) => {
        if (error) {
          throw new Error(error)
        }

        user.password = hash

        return next()
      })
    })
  }
})

userSchema.methods.comparePassword = function (password, callback) {
  bcrypt.compare(password, this.password, (error, isMatch) => {
    if (error) {
      return callback(error, null)
    }
    return callback(null, isMatch)
  })
}

// Export du model utilisateur
module.exports = mongoose.models.User || mongoose.model('User', userSchema)