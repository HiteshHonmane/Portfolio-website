import React, { useEffect } from 'react';
import gsap from 'gsap';
import Navbar from './Navbar';

function Hero() {
  

  return (
    <div className='dark:bg-gray-700'>
      <Navbar/>
       <div className="main-section sm:min-h-dvh min-h-[50vh] flex justify-center items-center border-none outline-none ">
      <div className='Name-page'>
        <h1 className=" heading-section sm:m-auto ml-3 font-Valencia text-6xl px-5  dark:text-gray-400"  >
          Hitesh Honmane
        </h1>
        <p className='font-Avenir text-center sm:text-xl font-normal text-l px-5 '> PASSIONATE FRONT-END WEB DEVELOPER</p>
      </div>
    </div>
    </div>
   
  );
}

export default Hero;
