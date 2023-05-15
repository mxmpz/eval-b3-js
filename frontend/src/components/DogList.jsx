import AddDog from './AddDog'
import DogListItem from './DogListItem'

function DogList ({ dogs }) {
  return dogs && (
    <>
      <div className='list-container'>
        {
        dogs.map(dog => {
          return (
            <DogListItem key={dog.id} dog={dog} />
          )
        })
      }
      </div>
      <div>
        <AddDog key={kennel.id} kennel={kennel} />
      </div>
    </>
  )
}

export default DogList
