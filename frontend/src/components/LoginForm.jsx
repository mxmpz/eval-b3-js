import { useState } from 'react'

function LoginForm ({ onSubmit }) {
  const [credentials, setCredentials] = useState({
    identifier: 'toto@tata.fr',
    password: 'secret'
  })

  const handleChange = (event) => {
    const inputName = event.target.name
    const inputValue = event.target.value
    setCredentials({
      ...credentials,
      [inputName]: inputValue
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(credentials)
  }

  return (
    <>
      <div className='form_auth'>
        <h2 className='form_auth_title'>Se connecter</h2>
        <form noValidate onSubmit={handleSubmit} className='form_auth_body'>
          <div className='form_group'>
            <label className='form_label'>
              Email
            </label>
            <input className='form_field' type='email' name='email' onChange={handleChange} value={credentials.identifier} />
          </div>
          <br />
          <div className='form_group'>
            <label className='form_label'>
              Mot de passe
            </label>
            <input className='form_field' type='password' name='password' onChange={handleChange} value={credentials.password} />
          </div>
          <br />
          <input className='submit-btn' type='submit' value='Se connecter' />
        </form>
      </div>
    </>
  )
}

export default LoginForm
