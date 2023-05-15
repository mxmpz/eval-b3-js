import { useState } from 'react'
import { createDog } from '../services/Api'

function AddDog ({ kennel }) {
  const { attributes } = kennel

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    weight: '',
    height: '',
    age: '',
    price: '',
    kennel: attributes.id
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
      const result = await createDog(formData)
      console.log(result)
    }
  }

  return (
    <>
      <h1>ADD DOG</h1>
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
          Poids :
          <input type='text' name='weight' onChange={handleChangeName} value={formData.weight} />
        </label>
        <br />
        <label>
          Taille :
          <input type='text' name='height' onChange={handleChangeName} value={formData.height} />
        </label>
        <br />
        <label>
          Âge :
          <input type='text' name='age' onChange={handleChangeName} value={formData.age} />
        </label>
        <br />
        <label>
          Prix :
          <input type='text' name='price' onChange={handleChangeName} value={formData.price} />
        </label>
        <br />
        <input type='submit' />
      </form>
    </>
  )
}

export default AddDog
