/**
 * Middleware permetant d'enregistrer toute les requêtes
 * @param {*} req HTTP Request
 * @param {*} next next() middleware function
 */

const loggerMiddleware = (req, next) => {
  if (req) {
    console.info(`[${new Date().toLocaleString()}] Requet ${req.method} from ${req.ip} to ${req.url}`)
  }
  next()
}

module.exports = loggerMiddleware
