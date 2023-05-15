import { Link } from 'react-router-dom'
import { deleteKennel } from '../services/Api'
import EditKennel from './EditKennel'

function KennelInfos ({ kennel }) {
  const { attributes } = kennel

  return (
    <>
      <p>{attributes.description}</p>
      <iframe
        width='80%'
        height='300'
        frameborder='0'
        marginheight='0'
        marginwidth='0'
        src='https://maps.google.com/maps?q=MyDigitalSchool Nantes&hl=fr&z=12&amp;output=embed'
      />
      <Link className='link' to='/edit-kennel'>Modification du chenil</Link>
      <EditKennel key={kennel.id} kennel={kennel} />
      <button onClick={deleteKennel(attributes.id)} />
    </>
  )
}

export default KennelInfos
