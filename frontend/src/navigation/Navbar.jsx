import { Link } from 'react-router-dom'

function Navbar () {
  return (
    <nav>
      <ul>
        <li>
          <Link className='link' to='/'>Accueil</Link>
        </li>
        <li>
          <Link className='link' to='/about'>A propos</Link>
        </li>
        <li>
          <Link className='link' to='/kennels'>Chenils</Link>
        </li>
        <li>
          <Link className='link' to='/add-kennel'>Ajouter un chenil</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
