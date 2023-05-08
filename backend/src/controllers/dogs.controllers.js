const Dog = require('../data/models/Dog')
const Kennel = require('../data/models/Kennel')

// Fonction pour créer un chien
const createDog = async (dog) => {

    // On créer un chien en respectant le schéma
   const _dog = new Dog({
    name: dog.name,
    weight: dog.weight,
    height: dog.height,
    description: dog.description,
    age: dog.age,
    price: dog.price,
    kennel: kennelId
  })

  // On sauvegarde et enregistre le chien
  const savedDog = await _dog.save()

  // On enregistre l'ID du chenil associé
  if (savedDog) {
    await Kennel.findByIdAndUpdate(kennelId,
      { $push: { files: savedDog._id } },
      { $new: true, useFindAndModify: false })
  }

  // On transforme le résultat en objet
  const savedDogObject = savedDog.toObject()

  return savedDogObject
}

// Fonction pour lister tout les chiens
const getDogs = async () => {
  // On liste les chiens
  const dogs = await Dog.find()
  return dogs
}

// Fonction pour lister un chien grâce à son id
const getDogById = async (id) => {

  // On vérifie si l'ID existe
  if (!id) {
    //Sinon on relève une erreur
    throw new Error('Missing ID')
  }

  // On liste les informations des chiens
  const dog = await Dog.findById(id)

  const dogObject = dog.toObject()

  return dogObject
}

// Fonction pour mettre à jour un chien
const updateDogById = async (id, dog) => {

  // On vérifie si l'ID existe
  if (!id) {
    //Sinon on relève une erreur
    throw new Error('Missing ID')
  }

  // On vérifie si le chien existe
  if (!dog) {
    //Sinon on relève une erreur
    throw new Error('Missing dog')
  }

  // On liste les nouvelles informations du chien
  const dogUp = await Dog.findByIdAndUpdate(id, dog, { new: true })

  const dogObject = dogUp.toObject()

  return dogObject
}

// Fonction pour supprimer un chien à partir de son id
const deleteDogById = async (id) => {

  // On vérifie si l'ID existe
  if (!id) {
    //Sinon on relève une erreur
    throw new Error('Missing ID')
  }

  // On supprime le chien
  await Dog.findByIdAndDelete(id)
}

// On exporte les fonctions
module.exports = {
  createDog,
  getDogs,
  getDogById,
  updateDogById,
  deleteDogById
}