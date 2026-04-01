import React from 'react'

const Skills = () => {
  return (
    <div className='flex flex-col  gap-2 items-center justify-center h-[80vh]'>
      <h1>SKILLS</h1>
      <div className='w-[400px] border-2 flex flex-col gap-3 rounded-2xl px-5 py-5'>
        <div>PROGRAMMING LANGUAGE:JAVA,PYTHON,C,C++,</div>
        <div>FRONTEND: HTML, CSS, JAVASCRIPT, REACT JS, TAILWIND CSS</div>
        <div>BACKEND: NODE JS(EXPRESS JS)</div>
        <div>DATABASE: MYSQL, MONGO_DB,POSTGRESS,CASSANDRA</div>

        <div>MACHINE LEARNING: NUMPY, PANDAS , MATPLOTLIB, SCIKIT_LEARN</div>
        <div>TOOLS: GIT ,GITHUB , JUPYTER NODEBOOK, INTELLIJA ,ECLIPSE ,VISUAL STUDIO CODE</div>
      </div>
    </div>
  )
}

export default Skills
