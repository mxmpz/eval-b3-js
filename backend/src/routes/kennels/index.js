const { getKennels, createKennel, getKennelByID, updateKennelById, deleteKennelById } = require('../../controllers/kennels.controller')
const router = require('express').Router()

// Methode pouvant être utilisé par défaut
router.route('/')

  // Afficher les chenils
  .get(async (req, res) => {
    const kennels = await getKennels()
    return res.send(kennels)
  })

  // Créer un chenil
  .post(async (req, res) => {
    try {
      // Appel la méthode du contrôleur
      const kennelCreated = await createKennel(req.body)
      return res.send(kennelCreated)
    } catch (error) {
      // Si il y a une erreur, on renvoit une erreur 500 + detail dans la réponse
      console.error(error)
      return res.status(500).send(error)
    }
  })

// Methode nécessitant une donnée (id) pour pouvoir être utilisé
router.route('/:id')

  // Afficher un chenil précis
  .get(async (req, res) => {
    try {
      const kennel = await getKennelByID(req.params.id)
      return res.send(kennel)
    } catch (error) {
      console.error(error)
      return res.status(500).send(error)
    }
  })

  // Met à jour un chenil précis
  .patch(async (req, res) => {
    try {
      const kennel = await updateKennelById(req.params.id, req.body)
      return res.send(kennel)
    } catch (error) {
      console.error(error)
      return res.status(500).send(error)
    }
  })
  
  // Supprime un chenil précis
  .delete(async (req, res) => {
    try {
      await deleteKennelById(req.params.id)
      return res.send(`Kennel (ID ${req.params.id}) as been deleted`)
    } catch (error) {
      console.error(error)
      return res.status(500).send(error)
    }
  })

module.exports = router