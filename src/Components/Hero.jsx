import React from 'react'
import Typewriter from 'typewriter-effect';
import { assets } from '../assets/assets';


const Hero = () => {

  const phrases = [
    "solving complex problems.",
    "building high-performance apps.",
    "crafting sleek user interfaces.",
    "turning caffeine into clean code.",
    "designing scalable architecture.",
    "optimizing digital experiences."
  ];

  return (
    <div className='relative group flex flex-col items-center justify-center m-auto'>
      <img src={assets.mainbanner} alt="" className='w-full h-[85vh] object-cover blur-sm  transition-all duration-500 ease-in-out transform' style={{
  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 70%)',
  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 70%)'
}}/>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
  {/* Main Heading */}
  <h1 className="text-white text-5xl md:text-6xl font-extrabold tracking-tight">
    I'm <span className="bg-gradient-to-r from-amber-950 to-amber-700 bg-clip-text text-transparent">Gowtham</span>
  </h1>

  <h1 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight">
    Software Engineer
  </h1>
  
  <div className="text-lg md:text-xl font-medium text-amber-950-300 mt-4 min-h-[30px] flex items-center gap-1.5 justify-center">
        <span className='text-amber-600'>Currently</span>
        <span className="text-[#ffb12f] font-semibold">
          <Typewriter
            options={{
              strings: [
                'solving complex problems.',
                'building high-performance apps.',
                'crafting sleek user interfaces.',
                'turning caffeine into clean code.',
                'designing scalable architecture.',
                'optimizing digital experiences.'
              ],
              autoStart: true,
              loop: true,
              delay: 75,       // Typing speed (lower = faster)
              deleteSpeed: 40, // Deletion speed
            }}
          />
        </span>
      </div>
</div>
    </div>
  )
}

export default Hero
