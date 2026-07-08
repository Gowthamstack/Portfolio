import React from 'react'
import Typewriter from 'typewriter-effect';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className='relative group flex flex-col items-center justify-center m-auto bg-[#0F172A]'>
      <img 
        src={assets.mainbanner} 
        alt="" 
        className='w-full h-[90vh] object-cover blur-sm transition-all duration-500 ease-in-out transform'
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">

        {/* Main Heading */}
        <h1 className="text-white text-5xl md:text-6xl font-extrabold tracking-tight">
          I'm{' '}
          <span className="bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
            Gowtham
          </span>
        </h1>

        <h1 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight">
          Software Engineer
        </h1>

        <div className="text-lg md:text-xl font-medium mt-4 min-h-[30px] flex items-center gap-1.5 justify-center">
          <span className='text-[#FBBF24] font-semibold'>Currently</span>
          <span className="text-[#F1F5F9] font-semibold">
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
                delay: 75,
                deleteSpeed: 40,
              }}
            />
          </span>
        </div>

      </div>
    </div>
  )
}

export default Hero