import React from 'react'
import './App.css'
import Accordion from './Components/Accordion'
import RandomColorGenerator from './Components/RandomColorGenerator'
import StarRating from './Components/StarRating'

const App = () => {
  return (
    <div className="App">
      <h1>Accordion Component</h1>
      <Accordion />
      <hr className="linebreak" />
      <h1>Random Color Component</h1>
      <RandomColorGenerator />
      <hr className="linebreak" />
      <h1>Star Rating Component</h1>
      <StarRating numOfStars={10} />
    </div>
  )
}

export default App