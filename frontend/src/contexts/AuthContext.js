import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import { login, register } from '../services/Api'

const AuthContext = React.createContext()

const actionTypes = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAILURE: 'REGISTER_FAILURE',
  LOADING: 'LOADING',
  LOGOUT: 'LOGOUT'
}

const initialState = {
  isAuthenticated: false,
  token: null,
  user: null,
  loading: false,
  error: null
}

const authReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        isAuthenticated: true,
        token: action.data.jwt,
        user: action.data.user,
        loading: false,
        error: null
      }
    case actionTypes.LOGIN_FAILURE:
      return {
        ...initialState,
        error: action.data.error
      }
    case actionTypes.REGISTER_SUCCESS:
      return {
        isAuthenticated: true,
        token: action.data.jwt,
        user: action.data.user,
        loading: false,
        error: null
      }
    case actionTypes.REGISTER_FAILURE:
      return {
        ...initialState,
        error: action.data.error
      }
    case actionTypes.LOADING:
      return {
        ...state,
        loading: true
      }
    case actionTypes.LOGOUT:
      return initialState
    default:
      throw new Error(`Unhandled action type : ${action.type}`)
  }
}

const authFactory = (dispatch) => ({
  login: async (credentials) => {
    try {
      const result = await login(credentials)
      toast.success(`Hello, ${result.user.firstName}`)
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        data: result
      })
    } catch (error) {
      toast.error('Identifiant ou mot de passe invalide')
      dispatch({
        type: actionTypes.LOGIN_FAILURE,
        data: { error }
      })
    }
  },
  register: async (userInfos) => {
    try {
      const result = await register(userInfos)
      toast.success(`Hello, ${result.user.firstName}`)
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        data: result
      })
    } catch (error) {
      let errorMessage = error?.response?.data?.error?.message
      if (error?.response?.data?.error?.details?.errors?.length > 0) {
        errorMessage += ' ('
        errorMessage += error?.response?.data?.error?.details?.errors?.map(e => e.message)
        errorMessage += ') '
      }
      toast.error('Erreur lors de la création : ' + errorMessage)
      dispatch({
        type: actionTypes.REGISTER_FAILURE,
        data: { error: errorMessage }
      })
    }
  },
  logout: () => {
    dispatch({
      type: actionTypes.LOGOUT
    })
  }
})

const AuthProvider = ({ children }) => {
  const savedState = window.localStorage.getItem('AUTH')
  const _initialState = savedState ? JSON.parse(savedState) : initialState
  const [state, dispatch] = React.useReducer(authReducer, _initialState)

  useEffect(() => {
    window.localStorage.setItem('AUTH', JSON.stringify(state))
  }, [state])

  return (
    <AuthContext.Provider value={{ state, ...authFactory(dispatch) }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = React.useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside a AuthProvider')
  return context
}

export {
  AuthProvider,
  useAuth
}
