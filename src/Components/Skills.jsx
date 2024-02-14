import React from 'react'

function Skills() {
  return (
    <div className=' flex justify-between items-center h-[100vh]'>
      <div id="technical-skills" className='flex flex-col w-[200px] text-start font-AvenirRoman text-xl z-10'>
        HTML & CSS
        JavaScript
        React
        Tailwind
      </div>
      <div id="Technologies-skills" className='flex flex-wrap flex-col w-[50vh]  font-AvenirRoman text-xl z-10'>
      Figma
      </div>
      <div className=' flex absolute text-[200px] font-semibold text-gray-300 font-AvenirRoman opacity-50 '>
        SKILLS
      </div>
    </div>

  )
}

export default Skills