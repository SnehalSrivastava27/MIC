import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { ImagesSliderDemo } from './components/ImagesSliderDemo'
function App() {
  return (
   <div className="App">
    <Header></Header>
    {/* <Hero></Hero> */}
    <ImagesSliderDemo></ImagesSliderDemo>
    {/* <HoverCard>
     <HoverCardTrigger>Click</HoverCardTrigger>
      <HoverCardContent>Bahut mushkil</HoverCardContent>
      
    </HoverCard> */}
   </div>
  )
}

export default App
