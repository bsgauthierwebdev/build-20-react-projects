import React from 'react'
import './App.css'
import Accordion from './Components/Accordion'
import RandomColorGenerator from './Components/RandomColorGenerator'

const App = () => {
  return (
    <div className="App">
      {/* Accordion Component*/}
      <Accordion />
      {/* Random Color Component */}
      <RandomColorGenerator />
    </div>
  )
}

export default App