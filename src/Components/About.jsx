import React, { useEffect, useRef } from 'react';

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        const maxOffset = 70; // Adjust as needed
        const minOffset = -40; // Adjust as needed
        let offset = minOffset + (maxOffset - minOffset) * scrollPercentage;

        // Ensure offset doesn't exceed the limits
        offset = Math.max(minOffset, Math.min(maxOffset, offset));

        aboutRef.current.style.transform = `translateX(${offset}vw)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='sm:flex sm:flex-wrap sm:flex-col sm:items-center sm:justify-center h-[100vh] '>
  <div className='sm:relative sm:ml-96  sm:w-[65vw] sm:font-extralight font-normal  flex sm:text-2xl  text-lg m-6 z-10 overflow-clip text-center absolute bottom-0 text-black'>
    Writing A clean and Performance-optimized code which gives an edge to the website and gives me satisfaction.
  </div>
  <div ref={aboutRef} id='about' className='sm:flex text-8xl font-semibold @apply transition-transform duration-[0.5s] ease-[ease-out] delay-[0s] text-[rgb(222,222,222)] relative bottom-[250px] dark:text-[rgb(57,56,56)] opacity-50 overflow-x-clip  hidden '>ABOUT ME</div>
</div>

  );
}

export default About;
