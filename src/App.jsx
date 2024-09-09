import React from 'react'
import Logo from './components/Logo'
import From from './components/From'
import Packaging from './components/Packaging'
import Stats from './components/Stats'

// import '../src/App.css'
export default function App() {
  return (
    <>
    <div className='w-full h-screen grid-rows-1'>
      <Logo />
      <From />
      <Packaging/>
      <Stats/>
    </div>
    </>
   
  )
}
