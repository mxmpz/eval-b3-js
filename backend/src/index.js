require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

// Connexion à la base de données
const connect = require('./data/helpers/db')
connect()

// Paramétrage de Express pour le body et le JSON
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// On branche les route users sur le fichier correspondant, le nom index.js est utilisé par défaut.
app.use('/users', require('./routes/users'))
app.use('/users/{id}', require('./routes/users'))

app.listen(port, () => {
  console.log('Server is running on port ' + port)
})
