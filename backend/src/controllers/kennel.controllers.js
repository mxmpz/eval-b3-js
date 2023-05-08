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

// On exporte les fonctions
module.exports = {
  createKennel
}