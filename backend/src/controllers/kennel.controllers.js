const Kennel = require('../data/models/Kennel')

// Fonction pour créer un chenil
const createKennel = async (kennel) => {

    // On créer un chenil en respectant le schéma
   const _kennel = new Kennel({
    name: kennel.name,
    description: kennel.description,
    adress: {
      street: kennel.street,
      number: kennel.number,
      postcode: kennel.postcode,
      city: kennel.city,
      country: kennel.country
    },
    dogs: kennel.dogs
  })

  // On sauvegarde et enregistre le chenil
  const savedKennel = await _kennel.save()

  // On transforme le résultat en objet
  const savedKennelObject = savedKennel.toObject()

  return savedKennelObject
}

// Fonction pour lister tout les chenils
const getKennels = async () => {
  // On liste les chenils
  const kennels = await Kennel.find()
  return kennels
}

// Fonction pour lister un chenil grâce à son id
const getKennelById = async (id) => {

  // On vérifie si l'ID existe
  if (!id) {
    //Sinon on relève une erreur
    throw new Error('Missing ID')
  }

  // On liste les informations des chenils
  const kennel = await Kennel.findById(id)

  const kennelObject = kennel.toObject()

  return kennelObject
}

// Fonction pour mettre à jour un chenil
const updateKennelById = async (id, kennel) => {

  // On vérifie si l'ID existe
  if (!id) {
    //Sinon on relève une erreur
    throw new Error('Missing ID')
  }

  // On vérifie si le chenil existe
  if (!kennel) {
    //Sinon on relève une erreur
    throw new Error('Missing chenil')
  }

  // On liste les nouvelles informations du chenil
  const kennelUp = await Kennel.findByIdAndUpdate(id, kennel, { new: true })

  const kennelObject = kennelUp.toObject()

  return kennelObject
}

// Fonction pour supprimer un chenil à partir de son id
const deleteKennelById = async (id) => {

  // On vérifie si l'ID existe
  if (!id) {
    //Sinon on relève une erreur
    throw new Error('Missing ID')
  }

  // On supprime le chenil
  await Kennel.findByIdAndDelete(id)
}

// On exporte les fonctions
module.exports = {
  createKennel,
  getKennels,
  getKennelById,
  updateKennelById,
  deleteKennelById
}