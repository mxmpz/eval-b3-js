import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import DogInfos from '../components/DogInfos'
import { getDogById } from '../services/Api'

function Dog () {
  const { state: { id } } = useLocation()
  const [dog, setDog] = useState()

  useEffect(() => {
    const getData = async () => {
      const result = await getDogById(id)
      setDog(result.data)
    }
    getData()
  }, [])

  if (!dog) {
    return <h1>Chargement...</h1>
  }

  return (
    <>
      <DogInfos dog={dog} />
    </>
  )
}

export default Dog
