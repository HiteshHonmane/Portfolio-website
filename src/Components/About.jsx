

import React, { useEffect, useRef } from 'react';

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        const maxOffset = 50; // Adjust as needed
        
        const offset = maxOffset  * scrollPercentage;
        aboutRef.current.style.left = `${offset}vw`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='flex flex-col items-center justify-center h-[100vh]'>
      <div className='relative lg:left-44 2xl:left-52 font-AvenirLight font-thin text-2xl text-start z-10' >
        Writing A clean and Performace optimised code which gives an edge to website and gives me satisfaction.
      </div>
      <div ref={aboutRef} className=' flex  flex-row overflow-clip absolute text-[250px] font-semibold text-gray-300 opacity-50 '>ABOUT ME</div>
    </div>
  );
}

export default About;