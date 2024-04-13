import React from "react";
import { useEffect, useRef } from "react";

function Skills(props) {
  const skillsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (skillsRef.current) {
        const scrollPercentage =
          window.scrollY / (document.body.scrollHeight - window.innerHeight);
        const maxOffset = 30; // Adjust as needed
        const minOffset = -180; // Adjust as needed
        let offset = minOffset + (maxOffset - minOffset) * scrollPercentage;

        // Ensure offset doesn't exceed the limits
        offset = Math.max(minOffset, Math.min(maxOffset, offset));

        skillsRef.current.style.transform = `translateX(${offset}vw)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" overflow-x-hidden flex justify-around items-center h-[100vh] ">
      <div
        id="technical-skills"
        className="flex flex-col w-[200px] ml-10 gap-8  sm:gap-2 text-start font-AvenirRoman dark:text-gray-950 sm:text-xl z-10"
      >
        <div className=" sm:hidden   flex text-2xl  mb-3 font-bold font-Avenir ">
          SKILLS
        </div>
        <div className="flex gap-3 text-lg sm:text-xl  font-Avenir  ">
          <img className="sm:w-9 w-11" src={props.logo} alt="" /> {props.name}
        </div>
        <div className="flex gap-3 text-lg sm:text-xl  font-Avenir ">
          <img
            className="sm:w-9 w-11"
            src="Skills Icons\Css.svg"
            alt=""
          />{" "}
          CSS
        </div>

        <div className="flex gap-3 text-lg sm:text-xl  font-Avenir">
          <img
            className="sm:w-9 w-11"
            src="Skills Icons\Js.svg"
            alt=""
          />{" "}
          JavaScript
        </div>
        <div className="flex gap-3 text-lg sm:text-xl  font-Avenir">
          <img
            className="sm:w-9 w-11"
            src="Skills Icons\React.svg"
            alt=""
          />{" "}
          React
        </div>
        <div className="flex gap-3 text-lg sm:text-xl  font-Avenir">
          <img
            className="sm:w-9 w-11 text-lg sm:text-xl  font-Avenir  "
            src="Skills Icons\Tailwind.svg"
            alt=""
          />{" "}
          Tailwind
        </div>
        <div
          id="Technologies-skills"
          className=" md:hidden flex flex-wrap  sm:w-[50vh] gap-3  text-lg sm:text-xl  font-Avenir z-10 "
        >
          <img className="w-9" src="\Skills Icons\Figma.svg" alt="" />{" "}
          Figma
        </div>
      </div>
      <div className="flex flex-col gap-10"></div>

      <div
        id="Technologies-skills"
        className="sm:flex hidden md:block flex-wrap  sm:w-[50vh]  font-AvenirRoman text-xl z-10"
      >
        <div className="flex">
          <img className="w-9" src="Skills Icons\Figma.svg" alt="" />{" "}
          Figma
        </div>

        <div className="flex">
          <img className="w-9" src="Skills Icons\Git.svg" alt="" />{" "}
          Git
        </div>
      </div>
      <div
        ref={skillsRef}
        className="hidden md:block sm:@apply transition-transform duration-[0.5s] ease-[ease-out] delay-[0s] overflow-hidden sm:flex sm:absolute sm:text-[200px] font-semibold sm:text-gray-300 dark:text-[rgb(57,56,56)] opacity-50 text-2xl  "
      >
        SKILLS
      </div>
    </div>
  );
}

export default Skills;
