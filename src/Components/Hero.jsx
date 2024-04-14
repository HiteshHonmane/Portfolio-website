import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from "./Navbar";

function Hero() {
  gsap.registerPlugin(useGSAP);

  const container = useRef(null);

  useGSAP(
    () => {
      gsap.to("#Hitesh", { 
        y: -50,
        duration:1,
        opacity:1,
        stagger:1
      });
      gsap.to('#Frontend',{
        y: -40,
        duration:.5,
        opacity:1,
        stagger:1,
        delay:0.7
      })
    },

    { scope: container }
  ); // <-- scope is for selector text (optional)

  return (
    <div ref={container} className="">
      <Navbar />
      <div className="main-section sm:min-h-dvh min-h-[100vh] flex justify-center items-center border-none outline-none ">
        <div className="Name-page">
          <h1
            id="Hitesh"
            className=" heading-section sm:m-auto lg:mx-14 ml-3 font-Valencia text-6xl px-5 dark:text-gray-400 opacity-0"
          >
            Hitesh Honmane
          </h1>
          <p id="Frontend" className="font-Avenir text-center sm:text-xl font-normal text-l px-5 opacity-0 ">
            {" "}
            PASSIONATE FRONT-END WEB DEVELOPER
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
