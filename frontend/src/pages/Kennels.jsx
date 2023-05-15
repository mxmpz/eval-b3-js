import { useState, useEffect } from 'react'
import KennelList from '../components/KennelList'
import { getKennels } from '../services/Api'

function Kennels () {
  const [kennels, setKennels] = useState()

  useEffect(() => {
    const getData = async () => {
      const result = await getKennels()
      setKennels(result.data)
    }
    getData()
  }, [])

  if (!kennels) {
    return <h1>Chargement...</h1>
  }
  return (
    <>
      <h1>CHENILS</h1>
      <KennelList kennels={kennels} />
    </>
  )
}

export default Kennels
