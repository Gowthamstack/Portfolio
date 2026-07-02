import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [menuOpen,setMenuOpen] = useState();
  return (
    <nav className='p-4 flex items-center justify-between bg-blue-300'>
       <div className='flex items-end justify-center'>
          <img src="/G_logo.svg" className='min-w-10' alt="" />
          <h1 className='text-2xl md:text-3xl'>owtham</h1>
       </div>
       <div className='hidden md:flex md:gap-5'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/projects'>Projects</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          <NavLink to='/reach-out'>React out</NavLink>
       </div>

    <div onClick={()=>{setMenuOpen(!menuOpen)}} className='block md:hidden'>
      <img src={assets.menuicon} alt="" className='w-12 h-12'/>
    </div>
    {menuOpen && (
  <div className="fixed inset-x-0 top-[80px] bottom-0 z-50 flex flex-col items-center justify-center gap-6 bg-slate-950/95 backdrop-blur-lg animate-fade-in-down md:hidden">
    <NavLink 
      onClick={() => setMenuOpen(false)} 
      to="/" 
      className={({ isActive }) => `text-xl font-medium tracking-wide transition-colors duration-300 ${isActive ? 'text-indigo-400' : 'text-slate-200 hover:text-white'}`}
    >
      Home
    </NavLink>
    
    <NavLink 
      onClick={() => setMenuOpen(false)} 
      to="/contact" 
      className={({ isActive }) => `text-xl font-medium tracking-wide transition-colors duration-300 ${isActive ? 'text-indigo-400' : 'text-slate-200 hover:text-white'}`}
    >
      About
    </NavLink>
    
    <NavLink 
      onClick={() => setMenuOpen(false)} 
      to="/projects" 
      className={({ isActive }) => `text-xl font-medium tracking-wide transition-colors duration-300 ${isActive ? 'text-indigo-400' : 'text-slate-200 hover:text-white'}`}
    >
      Projects
    </NavLink>
    
    <NavLink 
      onClick={() => setMenuOpen(false)} 
      to="/reach-out" 
      className={({ isActive }) => `text-xl font-medium tracking-wide transition-colors duration-300 ${isActive ? 'text-indigo-400' : 'text-slate-200 hover:text-white'}`}
    >
      Reach out
    </NavLink>
  </div>
)}
    </nav>
  )
}

export default Navbar
