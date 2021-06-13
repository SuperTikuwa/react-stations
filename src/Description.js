// DO NOT DELETE
import * as React from 'react'
import { DogImage } from './DogImage'

export const Description = () => {
  const [dogURL, setDogUrl] = React.useState(
    'https://images.dog.ceo/breeds/terrier-lakeland/n02095570_763.jpg',
  )

  return (
    <div>
      <div className="page-content">
        <div className="app-text">
          <p>RailwayのReactコースで作成したページです．</p>
        </div>
        <div className="dog-image">
          <DogImage url={dogURL} />
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
      </div>
      <hr />
    </div>
  )
}

async function getRandomImage() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random')
  const data = await res.json()
  // const data = await res.json()

  return data.message
}
