import React from 'react'

const TechStack = () => {

  const stackData = [
    {
      label: 'Programming Languages',
      items: ['Java', 'Python', 'C/C++', 'JavaScript', 'SQL']
    },
    {
      label: 'Front End',
      items: ['HTML', 'CSS', 'React.js', 'Tailwind CSS']
    },
    {
      label: 'Back End & Database',
      items: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Socket.IO']
    },
    {
      label: 'Developer Tools',
      items: ['Git', 'GitHub', 'VS Code', 'IntelliJ', 'Postman']
    },
    {
      label: 'Libraries & Data',
      items: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Jupyter Notebook']
    },
    {
      label: 'Core Subjects',
      items: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks']
    },
  ];

  const exploring = ['Docker', 'Advanced Database Systems', 'AI/ML'];

  return (
    <section className="bg-[#0F172A] px-6 py-20 md:py-10">
      <div className="max-w-5xl mx-auto">

        {/* Section heading */}
        <div className="mb-14 text-center">
          <p className="font-mono text-sm text-[#94A3B8] mb-2">Skills</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Tech{' '}
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stackData.map((category, idx) => (
            <div
              key={idx}
              className="group bg-[#1E293B] border border-[#334155] rounded-xl p-6 transition-all duration-300 hover:border-[#3B82F6] hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.4)]"
            >
              {/* Comment-style label */}
              <p className="font-mono text-sm text-[#38BDF8] mb-4">
                <span className="text-[#64748B]"> </span>
                {category.label}
              </p>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, i) => (
                  <span
                    key={i}
                    className="text-sm font-medium text-[#E2E8F0] bg-[#0F172A] border border-[#334155] rounded-full px-3.5 py-1.5 transition-colors duration-200 group-hover:border-[#475569]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Exploring — signature terminal block */}
        <div className="mt-8 bg-[#0B1120] border border-dashed border-[#334155] rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse" />
            <p className="font-mono text-sm text-[#FBBF24]">currently_exploring.log</p>
          </div>

          <div className="flex flex-wrap items-center gap-2 font-mono text-sm text-[#E2E8F0]">
            {exploring.map((item, i) => (
              <React.Fragment key={i}>
                <span className="text-[#94A3B8]">{'>'}</span>
                <span>{item}</span>
                {i < exploring.length - 1 && <span className="text-[#334155] mx-1">|</span>}
              </React.Fragment>
            ))}
            <span className="inline-block w-2 h-4 bg-[#FBBF24] ml-1 animate-pulse" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default TechStack