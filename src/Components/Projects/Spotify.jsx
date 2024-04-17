
import React from "react";
import { useEffect } from "react";
import {
  motion,
  px,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { useId } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Spotify(props) {
  useEffect(() => {
    const pinSide = document.querySelector("#left-side-spotify");
    const target = document.querySelector("#main-project-spotify");
    
    const blackStrip = document.querySelectorAll(".black-strip-spotify");
    const leftSide=  document.querySelector("#left-side-spotify")

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: target,
      start: "top top", // Trigger pinning when the top of #main-project-section reaches the top of the viewport
      end: "bottom bottom", // Unpin when the bottom of #main-project-section reaches the bottom of the viewport
      pin: pinSide,
      // markers: true,
      toggleActions: "play none none reverse",
    });

    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: target,
          start: " top top ",
          end: "bottom bottom",
          onEnter: () => {
            // Reset animation when entering the trigger area
            tl.restart();}
        },
        onEnterBack: () => {
          // Restart the animation when scrolling backward
          tl.restart();
        },
      })
      tl.to(leftSide,{
        opacity:1,
        delay:0
      })
      .to(blackStrip, {
        width: 0,
        duration: 0.5,
        ease: "ease In Out",
        toggleActions: "play none none reverse",
      })  ;

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  const Id = useId();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const sm = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -1200]);
  const xl = useTransform(scrollYProgress, [0, 1], [0, -1100]);
  const xxl = useTransform(scrollYProgress, [0, 1], [0, -1300]);
  // const xxxl = useTransform(scrollYProgress, [0, 1], [0, -600]);
  // Images coming from props
  const images = [
    {
      src: props.imageSrc1,
      y: sm,
      width: "14vw",
      mobileWidth: "30vw",
      
    },
    {
      src: props.imageSrc2,
      y: lg,
      width: "15vw",
      mobileWidth: "45vw",
      
    },
    {
      src: props.imageSrc3,
      y: md,
      width: "18vw",
      mobileWidth: "55vw",
     
    },
    {
      src: props.imageSrc4,
      y: xl,
      width: "40vw",
      mobileWidth: "90vw",
      
    },
  ];
  

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const scrollContainer = container.current;
    if (scrollContainer) {
      scrollContainer.scrollTop =
        latest * (scrollContainer.scrollHeight - scrollContainer.offsetHeight);
    }
  });

  return (
    <div
    id="main-project-spotify"
    className="sm:flex sm:flex-row lg:flex-col xl:flex-row 2xl:flex-row flex-col sm:h-[300vh] sm:w-[100vw] h-[200vh] xl:h-[300vh] 2xl:h-[300vh] relative "
  >
    <div
      id="left-side-spotify"
      className="flex flex-col   justify-between relative w-[100vw] h-[100vh]  sm:w-[50vw] lg:w-[100vw] opacity-0  xl:h-[100vh]  xl:w-[50vw]  2xl:h-[100vh]  2xl:w-[50vw] "
    >
      <div className=" flex relative w-full h-[5%] lg:mt-24 ">
        <div
          id="top"
          className="text-[16px] sm:text-lg ml-5 sm:ml-0 sm:px-20 pt-14 sm:pt-0 font-bold text-[#333333] dark:text-gray-400  "
        >
          {props.index}
        </div>
        <div className="absolute inset-0 h-[80%] mt-14 sm:mt-0 sm:pt-0  w-[20%] xl:ml-12 z-10 bg-black black-strip-spotify ml-2 "></div>
      </div>

      <div
        id="middle"
        className="relative sm:mb-0 mb-[50vh] sm:top-[-186px] flex flex-col items-start  px-5 sm:px-24 lg:mb-[40vh] 2xl:mb-0 xl:top-[100px] xl:w-full xl:pr-0 xl:pl-10% 2xl:top-[-186px]  "
      >
        <div className="relative w-[100%]">
          <h2 className=" h-[70%] font-Avenir text-[50px] sm:text-3xl  font-bold text-[#333333]   dark:text-gray-950 relative lg:text-5xl xl:text-4xl 2xl:text-4xl ">
            {props.name}
          </h2>
          <div className="absolute mt-2 inset-0 h-[83%]  z-10 bg-black black-strip-spotify"></div>
        </div>

        <div className="flex  w-[100%]  relative z-0   ">
          <h4 className="font-AvenirMedium  text-[#333333] sm:text-px text-[18px] dark:text-gray-400 ">
            {props.Highlight1}
          </h4>
          <img
            className="sm:h-7 sm:m-3 m-2 h-3"
            src="src\assets\Text Icons\Dot.svg"
            alt=""
          />
          <h4 className="font-AvenirMedium text-[#333333] dark:text-gray-400 sm:text-px text-[18px]">
            {props.Highlight2}
          </h4>
          <div className="flex absolute z-10 bg-black w-[100%] h-[100%] black-strip-spotify "></div>{" "}
          {/* //Black strip */}
        </div>

        <p className="text-[16px] text-gray-700 dark:text-gray-400">
          {props.detailText}
        </p>

        <div className=" relative flex sm:gap-3 gap-2 mt-3 w-[50%] h-[20%]">
          <div className="flex ">
            <span className="text-[16px] font-AvenirMedium dark:text-gray-400 text-[#333333] sm:text-lg sm:font-medium font-semibold">
              Tech
            </span>
            <img
              className="sm:h-7 sm:m-1 h-3 mx-1 my-[5px]"
              src="assets\Text Icons\Dot.svg"
              alt=""
            />
          </div>

          <img className="sm:w-9 w-5" src="\Skills Icons\Js.svg" alt="" />
          <img
            className="sm:w-9 w-5"
            src="\Skills Icons\Html.svg"
            alt=""
          />
          <img
            className="sm:w-9 w-5 "
            src="\Skills Icons\Css.svg"
            alt=""
          />
          <div className=" bg-black z-10 absolute w-full h-full black-strip-spotify "></div>
        </div>
      </div>

      <div
        id="bottom"
        className="sm:pl-[5vw] pl-4 flex flex-col underline relative bottom-14 sm:text-lg font-bold text-[rgb(51,51,51)] dark:text-gray-400 px-2 sm:px-20 gap-px"
      >
        <a
          href={props.LiveWebLink}
          className="sm:flex flex  w-[50%]   relative "
          target="_blank"
        >
          <div>LIVE APP</div>
          <img
            className="sm:h-4 sm:mt-3 h-4 mt-1 ml-2"
            src="public\Skills Icons\Vercel.svg"
            alt=""
          />
          <div className=" bg-black z-10 w-full h-full absolute black-strip-spotify "></div>
        </a>

        <a
          href={props.CodeBaseLink}
          target=""
          className="sm:flex w-[40%]  relative  "
        >
          <div className="flex absolute mt-2 underline">
            CODE BASE
            <img
              className="sm:h-6 sm:mt-2 h-5 mt-1 ml-2"
              src="assets\Social Icons\Github.svg"
              alt=""
            />
            <div className=" bg-black z-10 w-full h-full absolute black-strip-spotify "></div>
          </div>
        </a>
      </div>
    </div>

    <motion.div
      ref={container}
      id="right-side"
      className=" sm:h-[100vh] sm:w-[50vw] w-[100vw] h-[100vh] lg:w-[100vw]  relative  flex justify-center top-[-80vh] 2xl:w-[50vw] 2xl:h-[250vh] 2xl:top-[100vh]   lg:top-[50vh] gap-[5vh] 2xl:gap-3 lg:gap-[3vh] flex-wrap xl:w-[50vw] "
    >
      {images.map(({ src, y, width, mobileWidth, ipadWidth }) => (
        <motion.div
          key={Id}
          style={{ y }}
          className="flex flex-wrap overflow-x-hidden justify-end items-end mr-4 "
        >
          <motion.img
            className="image flex items-end flex-wrap"
            src={src}
            style={{
              width: window.innerWidth <= 768 ? mobileWidth : width
            }}
    
            alt=""
          />
        </motion.div>
      ))}
    </motion.div>
  </div>
);
}

export default Spotify;
