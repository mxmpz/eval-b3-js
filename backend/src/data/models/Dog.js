const mongoose = require('mongoose')
const { Schema } = mongoose

// Création du schéma d'un chien
const dogSchema = new Schema({
  name: {
    type: String
  },
  weight: {
    type: Number
  },
  height: {
    type: Number
  },
  description: {
    type: String
  },
  age: {
    type: Number
  },
  price: {
    type: Number
  },

  // Un chien est recueilli par un chenil, donc on référence le chenil dans lequel le chien est recueilli
  // Un Chien = Un Chenil / Relation OneToOne
  kennel: {
    type: Schema.Types.ObjectId,
    ref: 'Kennel'
  }
}, { timestamps: true })

// Export du model chien
module.exports = mongoose.models.Dog || mongoose.model('Dog', dogSchema)
