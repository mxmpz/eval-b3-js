require('dotenv').config()

const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const app = express()
const port = 5000

// Connexion à la base de données
const connect = require('./data/helpers/db')
connect()

app.use(helmet())
app.use(cors())
// Paramétrage de Express pour le body et le JSON
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// On importe le logger
const logger = require('./middlewares/logger')
// On dit à Express d'utiliser le logger en tant que middleware
app.use(logger)

// On branche les route users sur le fichier correspondant, le nom index.js est utilisé par défaut.
app.use('/users', require('./routes/users'))
app.use('/users/{id}', require('./routes/users'))

// On branche la route auth sur le fichier correspondant, le nom index.js est utilisé par défaut.
app.use('/auth', require('./routes/auth'))

// On branche les route kennels sur le fichier correspondant, le nom index.js est utilisé par défaut.
app.use('/kennels', require('./routes/kennels'))
app.use('/kennels/{id}', require('./routes/kennels'))

// On branche les route dogs sur le fichier correspondant, le nom index.js est utilisé par défaut.
app.use('/dogs', require('./routes/dogs'))
app.use('/dogs/{id}', require('./routes/dogs'))

app.listen(port, () => {
  console.log('Server is running on port ' + port)
})
