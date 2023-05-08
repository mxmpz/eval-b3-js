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

// Methode nécessitant une donnée (id) pour pouvoir être utilisé
router.route('/:id')

  // Afficher un utilisateur précis
  .get(async (req, res) => {
    try {
      const user = await getUserByID(req.params.id)
      return res.send(user)
    } catch (error) {
      console.error(error)
      return res.status(500).send(error)
    }
  })

  // Met à jour un utilisateur précis
  .patch(async (req, res) => {
    try {
      const user = await updateUserById(req.params.id, req.body)
      return res.send(user)
    } catch (error) {
      console.error(error)
      return res.status(500).send(error)
    }
  })
  
  // Supprime un utilisateur précis
  .delete(async (req, res) => {
    try {
      await deleteUserById(req.params.id)
      return res.send(`User (ID ${req.params.id}) as been deleted`)
    } catch (error) {
      console.error(error)
      return res.status(500).send(error)
    }
  })

module.exports = router