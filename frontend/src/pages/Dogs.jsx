import { useState, useEffect } from 'react'
import DogList from '../components/DogList'
import { getDogs } from '../services/Api'

function Dogs () {
  const [dogs, setDogs] = useState()

  useEffect(() => {
    const getData = async () => {
      const result = await getDogs()
      setDogs(result.data)
    }
    getData()
  }, [])

  if (!dogs) {
    return <h1>Chargement...</h1>
  }
  return (
    <>
      <h1>CHENILS</h1>
      <DogList dogs={dogs} />
    </>
  )
}

export default Dogs
