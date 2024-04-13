import React from "react";
import Skills from "./Skills";

function SkillsIndex() {

    const skill1 = {
        name: "HTML",
        logo: "/Skills Icons/Html.svg",
      };
      
      const skill2 = {
        name: "CSS",
        logo: "/Skills Icons/Css.svg",
      };
      
      const skill3 = {
        name: "JavaScript",
        logo: "/Skills Icons/Js.svg",
      };
      
      const skill4 = {
        name: "React",
        logo: "src/assets/Skills Icons/React.svg",
      };
      
      const skill5 = {
        name: "Tailwind CSS",
        logo: "src/assets/Skills Icons/Tailwind.svg",
      };
      
      const skill6 = {
        name: "Figma",
        logo: "src/assets/Skills Icons/Figma.svg",
      };
      
      const skill7 = {
        name: "Git",
        logo: "src/assets/Skills Icons/Git.svg",
      };
  
  

  return (
 <>
  <Skills {...skill1} />
 </>
  
  
  );
}

export default SkillsIndex;
