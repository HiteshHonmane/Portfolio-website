import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function About() {
  const aboutRef = useRef(null);

  useGSAP(() => {
    gsap.timeline({
      
      scrollTrigger: {
        trigger: "#about-container",
        start: "top center", 
        end: "bottom center", 
        scrub: true,
        
      }
    })
    .to('#about', {
      x: 100,
      duration:5,
      ease: "power2.inOut"
    });
  });

  return (
    <div id='about-container' className='sm:flex sm:flex-wrap sm:flex-col sm:items-center sm:justify-center h-[60vh] relative flex justify-center items-center '>
  <div className='sm:relative sm:ml-96 xl:ml-96  lg:ml-0 lg:w-[100vw] xl:w-[60vw] sm:w-[65vw] sm:font-extralight font-base  flex sm:text-2xl  text-lg m-6 z-10 overflow-clip lg:text-center absolute xl:bottom-0 lg:bottom-0  justify-center items-center text-black  ' >
    Writing A clean and Performance-optimized code which gives an edge to the website and gives me satisfaction.
  </div>
  <div ref={aboutRef} id='about' className='   text-6xl lg:text-8xl xl:text-8xl font-semibold @apply transition-transform duration-[0.5s] ease-[ease-out] delay-[0s] text-[rgb(222,222,222)] -translate-x-full dark:text-[rgb(57,56,56)] opacity-50 overflow-x-clip items-start absolute '>ABOUT ME</div>
</div>

  );
}

export default About;
