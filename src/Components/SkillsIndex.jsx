import React from "react";
import Skills from "./Skills";

function SkillsIndex() {

    const skill1 = {
        name: "HTML",
        logo: "src/assets/Skills Icons/Html.svg",
      };
      
      const skill2 = {
        name: "CSS",
        logo: "src/assets/Skills Icons/Css.svg",
      };
      
      const skill3 = {
        name: "JavaScript",
        logo: "src/assets/Skills Icons/Js.svg",
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
