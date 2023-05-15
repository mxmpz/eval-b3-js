function DogListItem ({ dog }) {
  const { attributes } = dog

  return (
    <div>
      <div>
        <div>
          <b>{attributes.name.toUpperCase()}</b>
        </div>
      </div>
    </div>
  )
}

export default DogListItem
