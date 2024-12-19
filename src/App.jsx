import { useState } from 'react'
import NavMenu from './Components/Navbar/NavMenu'
import StudioQuote from './Components/Studio/StudioQuote'
import './App.css'

function App() {

  return (
    <>
      <div className="text-[#ffffff] bg-[#a30a24] p-[20px]">
        <div className="w-[90%] mx-auto">
          <NavMenu/>
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        <div className="py-[50px] px-[50px]">
          <StudioQuote/>
        </div>
      </div>
    </>
  )
}

export default App
