import { useState } from 'react'
import { createKennel } from '../services/Api'

function AddKennel () {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    street: '',
    number: '',
    postcode: '',
    city: '',
    country: ''

  })

  const handleChangeName = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (formData.name && formData.description) {
      const result = await createKennel(formData)
      console.log(result)
    }
  }

  return (
    <>
      <h1>ADD KENNEL</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label>
          Nom :
          <input type='text' name='name' onChange={handleChangeName} value={formData.name} />
        </label>
        <br />
        <label>
          Description :
          <textarea name='description' onChange={handleChangeName} value={formData.description} />
        </label>
        <br />
        <label>
          Rue :
          <input type='text' name='street' onChange={handleChangeName} value={formData.street} />
        </label>
        <br />
        <label>
          Numéro :
          <input type='text' name='number' onChange={handleChangeName} value={formData.number} />
        </label>
        <br />
        <label>
          Code Postal :
          <input type='text' name='postcode' onChange={handleChangeName} value={formData.postcode} />
        </label>
        <br />
        <label>
          Ville :
          <input type='text' name='city' onChange={handleChangeName} value={formData.city} />
        </label>
        <br />
        <label>
          Pays :
          <input type='text' name='country' onChange={handleChangeName} value={formData.country} />
        </label>
        <br />
        <input type='submit' />
      </form>
    </>
  )
}

export default AddKennel
