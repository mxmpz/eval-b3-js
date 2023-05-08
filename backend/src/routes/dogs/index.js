const { getDogs, createDog, getDogByID, updateDogById, deleteDogById } = require('../../controllers/dogs.controller')
const router = require('express').Router()

// Methode pouvant être utilisé par défaut
router.route('/')

  // Afficher les chiens
  .get(async (req, res) => {
    const dogs = await getDogs()
    return res.send(dogs)
  })

  // Créer un chien
  .post(async (req, res) => {
    try {
      // Appel la méthode du contrôleur
      const dogCreated = await createDog(req.body)
      return res.send(dogCreated)
    } catch (error) {
      // Si il y a une erreur, on renvoit une erreur 500 + detail dans la réponse
      console.error(error)
      return res.status(500).send(error)
    }
  })

// Methode nécessitant une donnée (id) pour pouvoir être utilisé
router.route('/:id')

  // Afficher un chien précis
  .get(async (req, res) => {
    try {
      const dog = await getDogByID(req.params.id)
      return res.send(dog)
    } catch (error) {
      console.error(error)
      return res.status(500).send(error)
    }
  })

  // Met à jour un chien précis
  .patch(async (req, res) => {
    try {
      const dog = await updateDogById(req.params.id, req.body)
      return res.send(dog)
    } catch (error) {
      console.error(error)
      return res.status(500).send(error)
    }
  })
  
  // Supprime un chien précis
  .delete(async (req, res) => {
    try {
      await deleteDogById(req.params.id)
      return res.send(`Dog (ID ${req.params.id}) as been deleted`)
    } catch (error) {
      console.error(error)
      return res.status(500).send(error)
    }
  })

module.exports = router