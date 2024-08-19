import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
// import ExpandableCardDemo from './components/blocks/expandable-card-demo-standard'
function App() {
  return (
   <div className="App">
    <Header></Header>
    <Hero></Hero>
    {/* <ExpandableCardDemo></ExpandableCardDemo> */}
    {/* <Event></Event>
    <Footer></Footer> */}

   </div>
  )
}

export default App
