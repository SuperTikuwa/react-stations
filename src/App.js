// DO NOT DELETE

import * as React from 'react'

import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const [dogURL, setDogUrl] = React.useState(
    'https://images.dog.ceo/breeds/terrier-lakeland/n02095570_763.jpg',
  )

  return (
    <div>
      <header className="title">
        <h1>Railway-React</h1>
      </header>
      <div className="page-content">
        <div>
          <p>RailwayのReactコースで作成したページです．</p>
          <div className="dog-image">
            <img src={dogURL}></img>
          </div>
        </div>
        <button
          onClick={() => {
            getRandomImage().then(res => setDogUrl(res))
          }}
        >
          Click Me
        </button>
      </div>
    </div>
  )
}

async function getRandomImage() {
  const data = await fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(json => json.message)
  // const data = await res.json()

  return data
}
