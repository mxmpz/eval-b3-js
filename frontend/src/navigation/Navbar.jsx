import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function Navbar () {
  const { state: { isAuthenticated, user } } = useAuth()
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
        <li>
          {
            isAuthenticated
              ? <li>Hello, {user.firstName}</li>
              : (
                <Link className='link' to='/auth'>
                  S'inscrire / Se connecter
                </Link>
                )
          }
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
