import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useId } from "react";

function Projects(props) {
  const Id =useId()
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const sm = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -550]);

  //images Coming from my obj which is inside the projects file all details are passed as props from there
  const images = [
    {
      src: props.imageSrc1,
      y: sm,
    },
    { src: props.imageSrc2,
       y: lg },
    { src: props.imageSrc3,
       y: md },
  ];

  return (
    <div
      className=" sm:flex sm:flex-row flex-row sm:h-[100vh] sm:w[100vw] h-[200vh] relative "
      id="main"
    >
      <div
        id="left-side "
        className=" flex flex-col justify-between relative h-[100vh] sm:w-[50vw]"
      >
        <div
          id="top"
          className=" text-[16px] sm:text-lg  ml-5 sm:px-20 pt-14  font-bold text-[#333333] dark:text-gray-400"
        >
          {props.index}
          {/* //Coming Form Projects File */}
        </div>
        <div
          id="middle"
          className=" relative top-[-186px] flex flex-col items-start px-5  sm:px-24 "
        >
          <h2 className=" font-Avenir text-4xl  sm:text-4xl font-bold text-[#333333]  pb-8 dark:text-gray-950">
            {props.name}
          </h2>
          <div className="flex ">
            <h4 className=" font-AvenirMedium text-[#333333]  sm:text-xl text-[18px] dark:text-gray-400 font- ">
              {props.Highlight2}
            </h4>
            <img
              className="sm:h-7 sm:m-3 m-2 h-3 "
              src="src\assets\Text Icons\Dot.svg"
              alt=""
            />
            <h4 className="font-AvenirMedium text-[#333333] dark:text-gray-400 sm:text-xl text-[18px] ">
              {props.Highlight1}
            </h4>
          </div>

          <p className="text-[16px] text-gray-700  dark:text-gray-400">
            {props.detailText}
          </p>
          <div className=" flex sm:gap-3 gap-2 mt-3 ">
            <div
              className="flex
            "
            >
              <span className=" text-[16px]  font-AvenirMedium dark:text-gray-400 text-[#333333]  sm:text-lg sm:font-medium font-semibold  ">
                Tech
              </span>
              <img
                className="sm:h-7  sm:m-1 h-3 mx-1 my-[5px] "
                src="src\assets\Text Icons\Dot.svg"
                alt=""
              />
            </div>

            <img
              className="sm:w-9 w-5"
              src="src\assets\Skills Icons\Js.svg"
              alt=""
            />
            <img
              className="sm:w-9 w-5"
              src="src\assets\Skills Icons\Css.svg"
              alt=""
            />
            <img
              className="sm:w-9 w-5 "
              src="src\assets\Skills Icons\Html.svg"
              alt=""
            />
          </div>
        </div>

        <div
          id="bottom"
          className=" sm:pl-[5vw] pl-4 flex  underline relative bottom-14  sm:text-lg font-bold text-[#333333] dark:text-gray-400 px-2 sm:px-20 "
        >
          <a href={""} className="sm:flex">
            {/* //project link */}
            <div>LIVE APP</div>
            <img
              className="sm:h-6 sm:mt-3 h-5 mt-1"
              src="src\assets\Text Icons\Arrow.svg"
              alt=""
            />
          </a>

          {/* //code Base link */}
          <a href="URL_TO_YOUR_CODE_BASE" className="flex">
            <div className="flex absolute mt-10 underline">
              CODE BASE
              <img
                className="sm:h-6 sm:mt-3 h-5 mt-1"
                src="src\assets\Text Icons\Arrow.svg"
                alt=""
              />
            </div>
          </a>
        </div>
      </div>
      <motion.div
        ref={container}
        id="right-side "
        className=" relative sm:h-[100vh]  sm:w-[50vw] w-[100vh] h-[100vh]"
      >
        {images.map(({ src, y }) => {
          return (
            <motion.div
              style={{ y }}
              className=" sm:flex gap-7  sm:flex-row flex-row "
            >
              <motion.img className=" w-10" src={src} key={Id}  alt="" />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Projects;
