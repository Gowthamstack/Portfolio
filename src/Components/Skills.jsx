import React from 'react'
import { assets } from '../assets/assets'

const Skills = () => {
  return (
    <div className="w-full px-30 pt-30 mx-auto h-[80vh] flex gap-10 flex-col">
      <div className="flex flex-col gap-5">
        <h1 className='text-1.5xl md:text-2xl lg:text-3xl xl:text-4xl'>Programming Language.....</h1>
        <div className="grid grid-cols-3 gap-5 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          <img className='sm:w-[100px] object-cover sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]' src={assets.c} alt="C" />
          <img className='sm:w-[100px] object-cover sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]' src={assets.cpp} alt="C++" />
          <img className='sm:w-[100px] object-cover sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]' src={assets.java} alt="Java" />
          <img className='sm:w-[100px] object-cover sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]' src={assets.python} alt="Python" />
          <img className='sm:w-[100px] object-cover sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]' src={assets.js} alt="JavaScript" />
        </div>
      </div>
      <div className="flex flex-col gap-5">
          <h1 className='text-sm md:text-2xl lg:text-3xl xl:text-4xl'>Front-End....</h1>
        <div className="grid grid-cols-3 gap-5 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          <img className='sm:w-[100px] object-cover sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]' src={assets.html} alt="HTML" />
          <img className='sm:w-[100px] object-cover sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]' src={assets.css} alt="CSS" />
          <img className='sm:w-[100px] object-cover sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]' src={assets.react} alt="React" />
          <img className='sm:w-[100px] object-cover sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]' src={assets.tailwindcss} alt="Tailwind" />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className='text-sm md:text-2xl lg:text-3xl xl:text-4xl'>Back-End......</h1>
        <div className="grid grid-cols-3 gap-5 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          <img className='sm:w-[100px] object-cover sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]' src={assets.nodejs} alt="NodeJs" />
          <img className='sm:w-[100px] object-cover sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]'src={assets.express} alt="ExpressJs" />
          <img className='sm:w-[100px] object-cover sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]'src={assets.c} alt="Hono" />
      </div>
      <div className="flex flex-col gap-5">
        <h1 className='text-sm md:text-2xl lg:text-3xl xl:text-4xl'>DataBase....</h1>
        <div className="grid grid-cols-3 gap-5 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          <img className='sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]' src={assets.mysql} alt="MySQl" />
          <img className='sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]' src={assets.mysql} alt="Mongodb" />
          <img className='sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]' src={assets.cassandra} alt="Casandra" />
          <img className='sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]' src={assets.graphql} alt="GraphQl" />
        </div>
      </div>
       <div className="flex flex-col gap-5">
        <h1 className='text-sm md:text-2xl lg:text-3xl xl:text-4xl'>Tools....</h1>
        <div className="grid grid-cols-3 gap-5 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          <img className='sm:w-[100px] object-cover sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]' src={assets.vscode} alt="VSCode" />
          <img className='sm:w-[100px] object-cover sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]' src={assets.postman} alt="PostMan" />
          <img className='sm:w-[100px] object-cover sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]' src={assets.eclipse} alt="Eclipse" />
          <img className='sm:w-[100px] object-cover sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]' src={assets.idle} alt="IDLE" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Skills