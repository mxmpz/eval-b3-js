import { useState } from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

function Auth () {
  const [isRegister, setIsRegister] = useState(false)

  const { login, register } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (params) => {
    if (isRegister) {
      register(params)
    } else {
      login(params)
    }
    navigate('/')
  }

  const handleRegisterClick = (event) => {
    event.preventDefault()
    setIsRegister(!isRegister)
  }

  return (
    <>
      <h1>AUTHENTIFICATION</h1>
      {
        isRegister
          ? <RegisterForm onSubmit={handleSubmit} />
          : <LoginForm onSubmit={handleSubmit} />
      }
      <div>
        <a onClick={handleRegisterClick} href=''>
          {
            isRegister
              ? "J'ai déjà un compte"
              : "Je n'ai pas de compte"
          }
        </a>
      </div>
    </>
  )
}

export default Auth
