import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import DogList from '../components/DogList'
import KennelInfos from '../components/KennelInfos'
import { getDogsByKennelId, getKennelById } from '../services/Api'

function Kennel () {
  const { state: { id } } = useLocation()
  const [kennel, setKennel] = useState()
  const [dogs, setDogs] = useState()

  useEffect(() => {
    const getData = async () => {
      const result = await getKennelById(id)
      const resultDogs = await getDogsByKennelId(id)
      setKennel(result.data)
      setDogs(resultDogs.data)
    }
    getData()
  }, [])

  console.log(dogs)

  if (!kennel) {
    return <h1>Chargement...</h1>
  }

  return (
    <>
      <KennelInfos kennel={kennel} />
      <DogList dogs={dogs} />
    </>
  )
}

export default Kennel
