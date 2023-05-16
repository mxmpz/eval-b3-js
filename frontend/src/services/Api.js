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

// Retourne tout les chenils
const getKennels = async () => {
  try {
    const response = await api.get('/kennels?populate=*')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

// Retourne un chenil précis
const getKennelById = async (id) => {
  try {
    const response = await api.get(`/kennels/${id}?populate=*`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

// Retourne les chiens d'un chenil
const getDogsByKennelId = async (id) => {
  try {
    const response = await api.get(`/dogs?filters[kennel][id][$eq]=${id}&populate=*`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

// Crée un chenil
const createKennel = async (formData) => {
  try {
    const _data = {
      data: {
        name: formData.name,
        description: formData.description,
        adress: {
          street: formData.street,
          number: formData.number,
          postcode: formData.postcode,
          city: formData.city,
          country: formData.country
        }
      }
    }
    const response = await api.post('/kennels', _data)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

// Modifie un chenil
const updateKennel = async (id, formData) => {
  try {
    const _data = {
      data: {
        name: formData.name,
        description: formData.description,
        adress: {
          street: formData.street,
          number: formData.number,
          postcode: formData.postcode,
          city: formData.city,
          country: formData.country
        }
      }
    }
    const response = await api.patch(`/kennels/${id}`, _data)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

// Supprime un chenil
const deleteKennel = async (id) => {
  try {
    const response = await api.delete(`/kennels/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

// Retourne tout les chiens
const getDogs = async () => {
  try {
    const response = await api.get('/dogs?populate=*')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

// Retourne un chenil précis
const getDogById = async (id) => {
  try {
    const response = await api.get(`/dogs/${id}?populate=*`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

// Crée un chenil
const createDog = async (formData) => {
  try {
    const _data = {
      data: {
        name: formData.name,
        weight: formData.weight,
        height: formData.height,
        description: formData.description,
        age: formData.age,
        price: formData.price
      }
    }
    const response = await api.post('/dogs', _data)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

// Modifie un chenil
const updateDog = async (id, formData) => {
  try {
    const _data = {
      data: {
        name: formData.name,
        weight: formData.weight,
        height: formData.height,
        description: formData.description,
        age: formData.age,
        price: formData.price
      }
    }
    const response = await api.patch(`/dogs/${id}`, _data)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

// Supprime un chenil
const deleteDog = async (id) => {
  try {
    const response = await api.delete(`/dogs/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

// Connexion
const login = async (credentials) => {
  const response = await api.post('/auth/local', credentials)
  return response.data
}

// Inscription
const register = async (infos) => {
  const response = await api.post('/auth/local/register', infos)
  return response.data
}

export {
  getKennels,
  getKennelById,
  getDogsByKennelId,
  createKennel,
  updateKennel,
  deleteKennel,
  getDogs,
  getDogById,
  createDog,
  updateDog,
  deleteDog,
  login,
  register
}
