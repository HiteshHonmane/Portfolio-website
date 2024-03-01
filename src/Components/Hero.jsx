import React, { useEffect } from 'react';
import gsap from 'gsap';
import Navbar from './Navbar';

function Hero() {
  

  return (
    <div className='dark:bg-gray-700'>
      <Navbar/>
       <div className="main-section min-h-dvh flex justify-center items-center ">
      <div className='Name-page'>
        <h1 className="heading-section m-auto font-Valencia text-6xl px-5  dark:text-gray-400"  >
          Hitesh Honmane
        </h1>
        <p className='font-Avenir text-2xl sm:text-xl font-normal  px-5 '>Passionate Front-end web developer</p>
      </div>
    </div>
    </div>
   
  );
}

export default Hero;
