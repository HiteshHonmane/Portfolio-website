import React from 'react'
import { useEffect, useRef } from 'react'

function Skills() {
  const skillsRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (skillsRef.current) {
        const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        const maxOffset = 100;
        const minOffset = 40;
        let offset = minOffset + (maxOffset - minOffset) * scrollPercentage;
        //Limit Defined
        offset = Math.max(minOffset, Math.min(maxOffset, offset));
        skillsRef.current.style.transform = `translateX(${offset}%)`
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <div className=' overflow-x-hidden flex justify-around items-center h-[100vh]'>
      <div id="technical-skills" className='flex flex-col w-[200px] text-start font-AvenirRoman text-xl z-10'>
        HTML & CSS
        JavaScript
        React
        Tailwind
      </div>
      <div id="Technologies-skills" className='flex flex-wrap flex-col w-[50vh]  font-AvenirRoman text-xl z-10'>
        Figma
      </div>
      <div ref={skillsRef} className=' overflow-hidden flex absolute text-[200px] font-semibold text-gray-300  opacity-50 '>
        SKILLS
      </div>
    </div>

  )
}

export default Skills