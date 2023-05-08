import axios from 'axios'

// Connexion à l'api
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 10000
})

// Intercepteur pour ajouter le token (si il y en a un) à chaque requête
api.interceptors.request.use(
  config => {
    const authState = window.localStorage.getItem('AUTH')
    const auth = JSON.parse(authState)
    if (auth.user && auth.token) {
      config.headers.Authorization = `Bearer ${auth.token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

const getKennels = async () => {
  try {
    const response = await api.get('/kennels?populate=*')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export {
  getKennels
}
