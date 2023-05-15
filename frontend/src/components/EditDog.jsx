import { useState } from 'react'
import { updateDog } from '../services/Api'

function EditDog ({ dog }) {
  const { attributes } = dog

  const [formData, setFormData] = useState({
    name: attributes.name,
    description: attributes.description,
    weight: attributes.weight,
    height: attributes.height,
    age: attributes.age,
    price: attributes.price,
    kennel: attributes.kennel
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
      const result = await updateDog(attributes.id, formData)
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

export default EditDog
