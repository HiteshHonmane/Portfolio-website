
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
    const pinSide = document.querySelector("#left-side-2");
    const target = document.querySelector("#main-project-2-section");
    
    const blackStrip = document.querySelectorAll(".black-strip-2");
    const leftSide=  document.querySelector("#left-side-2")

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
    { src: props.imageSrc1, y: sm, width: '15vw'  },
    { src: props.imageSrc2, y: lg, width: '15vw'  },
    { src: props.imageSrc3, y: md, width: '18vw'  },
    { src: props.imageSrc4, y: xl, width: '26vw'  },
    { src: props.imageSrc5, y: xxl, width: '17vw'   },
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
      id="main-project-2-section"
      className="sm:flex sm:flex-row flex-row sm:h-[300vh] sm:w-[100vw] h-[200vh] relative "
    >
      <div
        id="left-side-2"
        className="flex flex-col justify-between relative h-[100vh]  sm:w-[50vw] opacity-0   "
      >
        <div className=" flex relative w-full h-[5%] ">
          <div
            id="top"
            className="  text-[16px] sm:text-lg ml-5 sm:ml-0 sm:px-20 pt-14 sm:pt-0 font-bold text-[#333333] dark:text-gray-400 "
          >
            {props.index}
          </div>
          <div className="absolute inset-0 h-[70%] sm:pt-0 sm:mt-0 mt-14 w-[20%] ml-12 z-10 bg-black black-strip-2 "></div>
        </div>

        <div
          id="middle"
          className="relative top-[-186px] flex flex-col items-start px-5 sm:px-24 gap-px"
        >
          <div className="relative w-[100%]">
            <h2 className=" h-[70%] font-Avenir text-4xl sm:text-4xl font-bold text-[#333333] pb-8 dark:text-gray-950 relative ">
              {props.name}
            </h2>
            <div className="absolute inset-0 h-[70%]  z-10 bg-black black-strip-2"></div>
          </div>

          <div className="flex  w-[100%]  relative z-0 ">
            <h4 className="font-AvenirMedium  text-[#333333] sm:text-xl text-[18px] dark:text-gray-400 ">
              {props.Highlight1}
            </h4>
            <img
              className="sm:h-7 sm:m-3 m-2 h-3"
              src="src\assets\Text Icons\Dot.svg"
              alt=""
            />
            <h4 className="font-AvenirMedium text-[#333333] dark:text-gray-400 sm:text-xl text-[18px]">
              {props.Highlight2}
            </h4>
            <div className="flex absolute z-10 bg-black w-[100%] h-[100%] black-strip-2 "></div>{" "}
            {/* //Black strip */}
          </div>

          <p className="text-[16px] text-gray-700 dark:text-gray-400">
            {props.detailText}
          </p>

          <div className=" relative flex sm:gap-3 gap-2 mt-3 w-[50%] h-[20%]">
            <div className="flex ">
              <span className=" font-Avenir dark:text-gray-400 text-[#333333] sm:text-lg sm:font-medium font-semibold">
                Tech
              </span>
              <img
                className="sm:h-7 sm:m-1 h-3 mx-1 my-[5px]"
                src="assets\Text Icons\Dot.svg"
                alt=""
              />
            </div>

            <img
              className="sm:w-9 w-5"
              src="\Skills Icons\Js.svg"
              alt=""
            />
            <img
              className="sm:w-9 w-5"
              src="\Skills Icons\Css.svg"
              alt=""
            />
            <img
              className="sm:w-9 w-5"
              src="\Skills Icons\Html.svg"
              alt=""
            />
            <div className=" bg-black z-10 absolute w-full h-full black-strip-2 "></div>
          </div>
        </div>

        <div
          id="bottom"
          className="sm:pl-[5vw] pl-4 flex flex-col underline relative bottom-14 sm:text-lg font-bold text-[rgb(51,51,51)] dark:text-gray-400 px-2 sm:px-20 gap-px"
        >
          <a
            href={props.LiveWebLink}
            className="sm:flex w-[40%]  relative "
            target="_blank"
          >
            <div>LIVE APP</div>
            <img
              className="sm:h-4 sm:mt-3 h-5 mt-1 ml-2"
              src="public\Skills Icons\Vercel.svg"
              alt=""
            />
            <div className=" bg-black z-10 w-full h-full absolute black-strip-2 "></div>
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
              <div className=" bg-black z-10 w-full h-full absolute black-strip-2 "></div>
            </div>
          </a>
        </div>
      </div>

      <motion.div
        ref={container}
        id="right-side"
        className=" sm:h-[100vh] sm:w-[50vw] w-[100vh] h-[300vh]  relative  flex justify-center top-[150vh] gap-[10vh] flex-wrap "
      >
        {images.map(({ src, y, width: width }) => (
          <motion.div
            key={Id}
            style={{ y }}
            className="flex flex-wrap overflow-x-hidden  justify-end items-end mr-4 "
          >
            <motion.img
              className="   flex items-end flex-wrap "
              style={{ width }}

              src={src}
              alt=""
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Spotify;
