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
      <header>
        <h1>Railway-React</h1>
      </header>
      <div>
        <p>RailwayのReactコースで作成したページです．</p>
        <img src={dogURL}></img>
        <button
          onClick={() => {
            setDogUrl(
              'https://images.dog.ceo/breeds/rottweiler/n02106550_10966.jpg',
            )
          }}
        >
          Click Me
        </button>
      </div>
    </div>
  )
}
