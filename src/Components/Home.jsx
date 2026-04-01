import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col items-center h-[80vh] justify-center text-center capitalize'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Hi I'm Gowtham</h1>
        <p>I'm Going to be the best software enginner in the world.</p>
        <p>And passionate about problem solving and creating thinking.</p>
        <p>Always learing new things and new different to solve porblem.</p>
        <NavLink to='/skills' className='text-white border-2 rounded-2xl mt-8 bg-white text-black text-2xl px-3.5 py-3'>Skills </NavLink>
    </div>
  )
}

export default Home