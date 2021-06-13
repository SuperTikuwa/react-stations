// DO NOT DELETE
import * as React from 'react'

export const DogImage = () => {
  const [dogURL, setDogUrl] = React.useState(
    'https://images.dog.ceo/breeds/terrier-lakeland/n02095570_763.jpg',
  )
  return (
    <div className="dog-image">
      <img src={dogURL}></img>
      <div className="dog-image-button">
        <button
          onClick={async () => {
            setDogUrl(await getRandomImage())
          }}
        >
          Click Me
        </button>
      </div>
    </div>
  )
}

async function getRandomImage() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random')
  const data = await res.json()
  // const data = await res.json()

  return data.message
}
