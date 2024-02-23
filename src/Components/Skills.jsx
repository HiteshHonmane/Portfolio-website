import React from "react";
import { useEffect, useRef } from "react";

function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    // Initial offset to start animation
    const initialOffset = 68; // Adjusted to 0 to prevent scrollbar initially
    // Maximum offset where the animation should stop
    const maxOffset = -140; // Adjust as needed
    // Speed of the offset transition
    const speed = 0.5; // Adjust as needed
  
    const handleScroll = () => {
      if (skillsRef.current) {
        // Calculate the scroll percentage based on how much of the skills section is visible
        const boundingClientRect = skillsRef.current.getBoundingClientRect();
        const scrollPercentage = Math.max(0, Math.min(1, (window.innerHeight - boundingClientRect.top) / boundingClientRect.height));
        const targetOffset = initialOffset + (maxOffset - initialOffset) * scrollPercentage;
        const offset = targetOffset * speed;
        skillsRef.current.style.left = `${offset}vw`;
      }
    };
  

    //i will add more offset
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call it initially to set the initial position
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  
  return (
    <div className=" overflow-x-hidden flex justify-around items-center h-[100vh]">
      <div
        id="technical-skills"
        className="flex flex-col w-[200px] gap-2 text-start font-AvenirRoman text-xl z-10">
        <div className="flex gap-3">
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
        <img className="w-9" src="src\assets\Skills Icons\Figma.svg" alt="" /> Figma
      </div>
      <div
        ref={skillsRef}
        className=" overflow-hidden flex absolute text-[200px] font-semibold text-gray-300  opacity-50 "
      >
        SKILLS
      </div>
    </div>
  );
}

export default Skills;
