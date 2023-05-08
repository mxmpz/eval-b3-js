const mongoose = require('mongoose')
const { Schema } = mongoose

// Création du schéma pour l'adresse
const adressSchema = new Schema({
  street: {
    type: String
  },
  number: {
    type: Number
  },
  postcode: {
    type: Number
  },
  city: {
    type: String
  },
  country: {
    type: String
  }
}, { timestamps: true })

// Création du schéma d'un chenil
const kennelSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },

  // Utilistaion du schéma adresse
  adress: {
    type: adressSchema,
    default: {}
  },

  // Un chenil recueille plusieurs chiens, donc on crée un tableau listant les différents chiens
  // Un chenil = Plusieurs chiens / Chenils et chiens on une relation OneToMany
  dogs: [{
    type: Schema.Types.ObjectId,
    ref: 'Dog'
  }]
}, { timestamps: true })

// Export du model chenil
module.exports = mongoose.models.Kennel || mongoose.model('Kennel', kennelSchema)
