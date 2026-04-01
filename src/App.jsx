import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import {Routes,Route} from 'react-router-dom'
import Skills from './Components/Skills'

function App() {

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/skills' element={<Skills/>}/>
      </Routes>
    </div>
  )
}

export default App
