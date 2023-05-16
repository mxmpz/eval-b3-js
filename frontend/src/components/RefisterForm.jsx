import { useState } from 'react'

function RegisterForm ({ onSubmit }) {
  const [userInfos, setUserInfos] = useState({
    lastName: 'Prouzat',
    firstName: 'Maxime',
    username: 'Maxime',
    email: 'mds@test.fr',
    password: 'secret'
  })

  const handleChange = (event) => {
    const inputName = event.target.name
    const inputValue = event.target.value
    setUserInfos({
      ...userInfos,
      [inputName]: inputValue
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(userInfos)
  }

  return (
    <>
      <div className='form_auth'>
        <h2 className='form_auth_title'>Inscription</h2>
        <form noValidate onSubmit={handleSubmit} className='form_auth_body'>
          <div className='form_group'>
            <label className='form_label'>
              Login
            </label>
            <input className='form_field' type='text' name='username' onChange={handleChange} value={userInfos.username} />
          </div>
          <br />
          <div className='form_group'>
            <label className='form_label'>
              Nom
            </label>
            <input className='form_field' type='text' name='lastName' onChange={handleChange} value={userInfos.lastName} />
          </div>
          <br />
          <div className='form_group'>
            <label className='form_label'>
              Prénom
            </label>
            <input className='form_field' type='text' name='firstName' onChange={handleChange} value={userInfos.firstName} />
          </div>
          <br />
          <div className='form_group'>
            <label className='form_label'>
              Email
            </label>
            <input className='form_field' type='email' name='email' onChange={handleChange} value={userInfos.email} />
          </div>
          <br />
          <div className='form_group'>
            <label className='form_label'>
              Mot de passe
            </label>
            <input className='form_field' type='password' name='password' onChange={handleChange} value={userInfos.password} />
          </div>
          <br />
          <input className='submit-btn' type='submit' value='Créer un compte' />
        </form>
      </div>
    </>
  )
}

export default RegisterForm
