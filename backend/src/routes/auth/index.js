const router = require('express').Router()
const { loginUser } = require('../../controllers/auth.controller')

// Methode pouvant être utilisé par défaut sur la route login
router.route('/login')

  // Methode post login
  .post(async (req, res) => {
    const credentials = req.body
    try {
      //On verifie la connection de l'utilisateur
      loginUser(credentials, (error, result) => {
        if (error) {
          // On relève une erreur et on envoi le détail
          return res.status(500).send(error)
        }
        // l'utilisateur peut se connecter
        return res.send(result)
      })
    } catch (error) {
      console.error(error)
      // On relève une erreur et on envoi le détail
      res.status(500).send('error')
    }
  })

module.exports = router
