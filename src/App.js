import React from 'react'
import './App.css'
import Accordion from './Components/Accordion'
import RandomColorGenerator from './Components/RandomColorGenerator'
import StarRating from './Components/StarRating'
import ImageSlider from './Components/ImageSlider'
import LoadMoreData from './Components/LoadMoreButton'
import TreeView from './Components/TreeView-MenuUI-RecursiveNavMenu'
import menus from './Components/TreeView-MenuUI-RecursiveNavMenu/data'
import QRCodeGenerator from './Components/QRCodeGenerator'
import LightAndDarkMode from './Components/LightAndDarkMode'
import ScrollIndicator from './Components/ScrollIndicator'

const App = () => {
  return (
    <div className="App">
      <h1>Build20 React Products</h1>
      <hr className="linebreak" />
      <h1>Accordion Component</h1>
      <Accordion />
      <hr className="linebreak" />
      <h1>Random Color Component</h1>
      <RandomColorGenerator />
      <hr className="linebreak" />
      <h1>Star Rating Component</h1>
      <StarRating numOfStars={10} />
      <hr className="linebreak" />
      <h1>Image Slider Component</h1>
      <ImageSlider 
        url = {'https://picsum.photos/v2/list'} 
        page = {'1'} 
        limit = {'10'} 
      />
      <h1>Load More Data Component</h1>
      <LoadMoreData />
      <hr className="linebreak" />
      <h1>Tree View / Menu UI / Recursive Navigation Menu Component</h1>
      <TreeView menus={menus} />
      <hr className="linebreak" />
      <h1>QR Code Generator</h1>
      <QRCodeGenerator />
      <hr className="linebreak" />
      <h1>Light and Dark Mode / Theme Switch / Dark Theme</h1>
      <LightAndDarkMode />
      {/* <hr className="linebreak" /> */}
      {/* <h1>Scroll Indicator Component</h1> */}
      {/* <ScrollIndicator url = {'https://dummyjson.com/products?limit=100'} /> */}
    </div>
  )
}

export default App