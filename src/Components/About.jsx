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
      x: 200,
      duration:5,
      ease: "power2.inOut"
    });
  });

  return (
    <div id='about-container' className='sm:flex sm:flex-wrap sm:flex-col sm:items-center sm:justify-center h-[100vh] relative '>
  <div className='sm:relative sm:ml-96  sm:w-[65vw] sm:font-extralight font-normal  flex sm:text-2xl  text-lg m-6 z-10 overflow-clip text-center absolute bottom-0 text-black'>
    Writing A clean and Performance-optimized code which gives an edge to the website and gives me satisfaction.
  </div>
  <div ref={aboutRef} id='about' className='sm:flex text-8xl font-semibold @apply transition-transform duration-[0.5s] ease-[ease-out] delay-[0s] text-[rgb(222,222,222)] -translate-x-full dark:text-[rgb(57,56,56)] opacity-50 overflow-x-clip items-start absolute '>ABOUT ME</div>
</div>

  );
}

export default About;
