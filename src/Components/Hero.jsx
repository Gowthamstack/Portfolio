import React, { useEffect, useState } from 'react'

const Hero = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(t)
  }, [])

  const fade = (delay) =>
    `transition-all duration-700 ${delay} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`

  const stats = [
    ['01', 'Full-stack development & system design'],
    ['02', 'Open to internships & collaborations'],
    ['03', 'Building things that actually matter'],
  ]

  return (
    <div className="relative min-h-screen bg-white flex items-center px-6 md:px-10 py-16 overflow-hidden font-mono">

      {/* Background circles */}
      <div className="absolute right-[-60px] top-[-40px] md:top-1/2 md:-translate-y-1/2 w-56 h-56 md:w-80 md:h-80 rounded-full border border-stone-200 pointer-events-none" />
      <div className="absolute right-2 top-0 md:top-1/2 md:-translate-y-1/2 w-28 h-28 md:w-44 md:h-44 rounded-full border border-stone-200 pointer-events-none" />

      {/* Desktop vertical rule */}
      <div className="hidden md:block absolute top-0 bottom-0 left-[44%] w-px bg-stone-200" />

      <div className="relative z-10 w-full max-w-3xl">

        {/* Mobile: single column | Desktop: two-column grid */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:items-end gap-0">

          {/* Left */}
          <div className="md:pr-10 md:border-r md:border-stone-200">
            <p className={`text-[10px] uppercase tracking-[0.18em] text-stone-400 mb-5 ${fade('delay-100')}`}>
              Portfolio — 2026
            </p>

            <h1 className={`font-serif text-5xl md:text-6xl font-normal leading-[1.05] text-stone-900 ${fade('delay-200')}`}>
              Gowt<em className="italic text-stone-400">ham</em>
            </h1>

            <p className={`text-[10px] uppercase tracking-[0.14em] text-stone-500 mt-5 ${fade('delay-[350ms]')}`}>
              Aspiring Software Engineer
            </p>

            <div className={`w-6 h-px bg-stone-400 my-5 md:my-6 ${fade('delay-[450ms]')}`} />

            {/* Stats — visible on mobile here, hidden on desktop (shown in right col) */}
            <div className={`flex flex-col gap-4 mb-6 md:hidden ${fade('delay-500')}`}>
              {stats.map(([num, label]) => (
                <div key={num} className="flex items-baseline gap-3">
                  <span className="font-serif text-2xl font-normal text-stone-900 leading-none min-w-[2rem]">{num}</span>
                  <span className="text-[11px] text-stone-500 leading-snug">{label}</span>
                </div>
              ))}
            </div>

            <div className={`flex items-center gap-4 ${fade('delay-[650ms]')}`}>
              <button className="text-[10px] uppercase tracking-[0.14em] px-5 py-2.5 bg-stone-900 text-white rounded-sm hover:opacity-75 transition-opacity font-mono">
                View work ↗
              </button>
              <button className="text-[10px] uppercase tracking-[0.14em] text-stone-400 underline underline-offset-4 hover:text-stone-600 transition-colors bg-transparent border-none font-mono">
                Contact
              </button>
            </div>
          </div>

          {/* Right — desktop only */}
          <div className={`hidden md:block pl-10 ${fade('delay-500')}`}>
            <p className="text-[10px] uppercase tracking-[0.14em] text-stone-400 mb-8">At a glance</p>
            <div className="flex flex-col gap-5">
              {stats.map(([num, label]) => (
                <div key={num} className="flex items-baseline gap-3">
                  <span className="font-serif text-3xl font-normal text-stone-900 leading-none min-w-[2.5rem]">{num}</span>
                  <span className="text-[11px] text-stone-500 leading-snug">{label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero