import React from "react";
import { useEffect, useRef } from "react";

function Skills() {
  const skillsRef = useRef(null);

  

  useEffect(() => {
    const handleScroll = () => {
      if (skillsRef.current) {
        const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        const maxOffset = 30; // Adjust as needed
        const minOffset = -180; // Adjust as needed
        let offset = minOffset + (maxOffset - minOffset) * scrollPercentage;

        // Ensure offset doesn't exceed the limits
        offset = Math.max(minOffset, Math.min(maxOffset, offset));

        skillsRef.current.style.transform = `translateX(${offset}vw)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className=" overflow-x-hidden flex justify-around items-center h-[100vh] dark:bg-gray-700">
      <div
        id="technical-skills"
        className="flex flex-col w-[200px] gap-2 text-start font-AvenirRoman dark:text-gray-950 text-xl z-10"
      >
        <div className="flex gap-3  ">
          <img className="w-9" src="src\assets\Skills Icons\Html.svg" alt="" />{" "}
          HTML
        </div>
        <div className="flex gap-3">
          <img className="w-9" src="src\assets\Skills Icons\Css.svg" alt="" />{" "}
          CSS
        </div>

        <div className="flex gap-3">
          <img className="w-9" src="src\assets\Skills Icons\Js.svg" alt="" />{" "}
          JavaScript
        </div>
        <div className="flex gap-3">
          <img className="w-9" src="src\assets\Skills Icons\React.svg" alt="" />{" "}
          React
        </div>
        <div className="flex gap-3">
          <img
            className="w-9"
            src="src\assets\Skills Icons\Tailwind.svg"
            alt=""
          />{" "}
          Tailwind
        </div>
      </div>
      <div className="flex flex-col gap-10"></div>

      <div
        id="Technologies-skills"
        className="flex flex-wrap  w-[50vh]  font-AvenirRoman text-xl z-10"
      >
        <img className="w-9" src="src\assets\Skills Icons\Figma.svg" alt="" />{" "}
        Figma
      </div>
      <div
        ref={skillsRef}
        className="@apply transition-transform duration-[0.5s] ease-[ease-out] delay-[0s] overflow-hidden flex absolute text-[200px] font-semibold text-gray-300 dark:text-[rgb(57,56,56)] opacity-50 "
      >
        SKILLS
      </div>
    </div>
  );
}

export default Skills;
