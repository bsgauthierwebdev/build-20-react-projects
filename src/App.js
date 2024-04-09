import React from 'react'
import './App.css'
import Accordion from './Components/Accordion'
import RandomColorGenerator from './Components/RandomColorGenerator'
import StarRating from './Components/StarRating'

const App = () => {
  return (
    <div className="App">
      {/* Accordion Component*/}
      <Accordion />
      {/* Random Color Component */}
      <RandomColorGenerator />
      {/* Star Rating Component */}
      <StarRating numOfStars={10} />
    </div>
  )
}

export default App