import React, { useState } from 'react'

const Home = () => {
  const [showMe,setShowMe]=useState(false);
  return (
    <div className='px-4 py-6 h-[80vh] transition-all flex flex-col items-center justify-center'>
      {!showMe && <button onClick={()=>setShowMe(!showMe)} className='text-2xl cursor-pointer px-4 w-fit rounded-2xl bg-white animate-bounce'>Say Hi !!!!</button>}
      {showMe && 
      <div className='sm:h-[500px] w-[400px] flex items-center h-fit flex-col gap-10 border px-4 py-6 bg-white font-medium '>
          <h1 className='text-3xl '>Hi I'm Gowtham </h1>
          <p className='capitalize text-center'>I'm Computer Science student passionate about solving real-world problems through software . i enjoy working with java,python,docker,kubernets and full stack development</p>
      </div>
      }
    </div>
  )
}

export default Home