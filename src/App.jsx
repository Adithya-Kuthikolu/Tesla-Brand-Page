import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Page_two from './Components/Page_two'
import Three from './Components/Three'
import Four from './Components/Four'
import Five from './Components/Five'
import {  useRef, useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'



const App = () => {
  
  return (
    <>
    <div  className='bg-black w-full overflow-x-hidden'>
      <div className='mobile:w-full mobile:h-screen bg-[url("src/assets/roadster-hero-desktop.jpg")] bg-center bg-cover'>
        <div className='w-full h-screen mobile:h-screen mobile:w-full  bg-gradient-to-b from-transparent via-transparent via-2% to-black/90'>
          <Navbar/>
          <Hero/>
      </div>
      </div>
      <div className='w-full h-[50%] bg-black'>
        <Page_two/>
      </div>
      <div className='w-full h-full bg-black'>
        <Three/>
      </div>
      <div className='w-full h-screen bg-black'>
        <Four/>
      </div>
      <div className='w-full h-screen bg-black'>
      <Five/>
      </div>
    </div>
    </>
  )
}

export default App
