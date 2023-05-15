import DogListItem from './DogListItem'

function DogList ({ dogs }) {
  return dogs && (
    <div className='list-container'>
      {
        dogs.map(dog => {
          return (
            <DogListItem key={dog.id} dog={dog} />
          )
        })
      }
    </div>
  )
}

export default DogList
