const User = require('../data/models/User')

// Fonction pour créer un utilisateur
const createUser = async (user) => {
  // On vérifie si l'utilisateur à un email et un mot de passe
  if (!user.email || !user.password) {
    // Si une infos est manquante on relève une erreur
    throw new Error('Missing data')
  }

  // On créer un utilisateur en respectant le schéma
  const _user = new User({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
    role: user.role
  })

  // On sauvegarde et enregistre l'utilisateur
  const savedUser = await _user.save()

  // On transforme le résultat en objet
  const savedUserObject = savedUser.toObject()

  // On supprime le mot de passe pour ne pas qu'il apparaisse dans la base de données
  delete savedUserObject.password

  return savedUserObject
}

// Exports des fonctions nécessaires
module.exports = {
  createUser
}