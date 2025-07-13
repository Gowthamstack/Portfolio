import { useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Projects from './Components/Projects.jsx'
import Skills from './Components/Skills.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      {/* <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Projects" element={<Projects/>}></Route>
      <Route path="/Skills" element={<Skills/>}></Route>
      </Routes> */}
    </>
  )
}

export default App
