function DogInfos ({ dog }) {
  const { attributes } = dog

  return (
    <>
      <p>{attributes.name}</p>
      <p>{attributes.weight}</p>
      <p>{attributes.height}</p>
      <p>{attributes.description}</p>
      <p>{attributes.age}</p>
      <p>{attributes.price}</p>
    </>
  )
}

export default DogInfos
