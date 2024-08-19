import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
function App() {
  return (
   <div className="App">
    <Header></Header>
    <Hero></Hero>
    {/* <Event></Event>
    <Footer></Footer> */}

   </div>
  )
}

export default App
