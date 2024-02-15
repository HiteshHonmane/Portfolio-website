import React, { useEffect, useRef } from 'react';

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        const maxOffset = 100; // Adjust as needed
        const minOffset = -50; // Adjust as needed
        let offset = minOffset + (maxOffset - minOffset) * scrollPercentage;

        // Ensure offset doesn't exceed the limits
        offset = Math.max(minOffset, Math.min(maxOffset, offset));

        aboutRef.current.style.transform = `translateX(${offset}%)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='flex flex-col items-center justify-center h-[100vh] w-[]'>
      <div className='relative mr-10 lg:left-44 2xl:left-52 font-AvenirLight font-thin text-2xl text-start z-10 overflow-clip'>
        Writing A clean and Performance-optimized code which gives an edge to the website and gives me satisfaction.
      </div>
      <div ref={aboutRef} id='about' className='flex text-8xl font-semibold text-gray-300 relative bottom-[312px] opacity-50 overflow-x-clip'>ABOUT ME</div>
    </div>
  );
}

export default About;
