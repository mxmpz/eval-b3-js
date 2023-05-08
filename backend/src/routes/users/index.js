const { getUsers, createUser } = require('../../controllers/users.controller')
const router = require('express').Router()

// Methode pouvant être utilisé par défaut
router.route('/')
  // Afficher les utilisateurs
  .get(async (req, res) => {
    const users = await getUsers()
    return res.send(users)
  })

  // Créer un utilisateur
  .post(async (req, res) => {
    try {
      // Appel la méthode du contrôleur
      const userCreated = await createUser(req.body)
      return res.send(userCreated)
    } catch (error) {
      // Si il y a une erreur, on renvoit une erreur 500 + detail dans la réponse
      console.error(error)
      return res.status(500).send(error)
    }
  })

module.exports = router