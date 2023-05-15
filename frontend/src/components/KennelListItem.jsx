import { useNavigate } from 'react-router-dom'

function KennelListItem ({ kennel }) {
  const { attributes } = kennel
  const navigate = useNavigate()
  const handleClick = (kennel) => {
    navigate(`/kennels/${kennel.id}`)
  }

  console.log(attributes)
  return (
    <div>
      <div>
        <h2>{attributes.name}</h2>
      </div>
      <div>
        <p>{attributes.description.substring(0, 180)}...</p>
      </div>
      <div>
        <button onClick={() => handleClick(kennel)}>
          Voir les chiens
        </button>
      </div>
    </div>
  )
}

export default KennelListItem
