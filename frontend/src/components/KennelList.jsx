import KennelListItem from './KennelListItem'

function KennelList ({ kennels }) {
  return (
    <div>
      {
        kennels.map(kennel => {
          return (
            <KennelListItem key={kennel.id} restaurant={kennel} />
          )
        })
      }
    </div>
  )
}

export default KennelList
