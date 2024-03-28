import React from 'react'
import Project from './Projects/Project'




function Projects() {

  const projectObj1={
    name:"Blog Website",
    index:"01",
    Highlight1:"API Handling",
    Highlight2:"Additional Features",
    detailText:"Can Create and upload post with image",
    imageSrc1: "src/assets/Project Imgs/Blog Images/Screenshot (145)-front.png",
    imageSrc2:"",
    imageSrc3: "",
    LiveWebLink:"https://blog-platform-peach.vercel.app/",
    CodeBaseLink:"https://github.com/HiteshHonmane/Blog-Platform"
  }
  const projectObj2={
    name:"Spotify Clone",
    index:"02",
    Highlight1:"API Handling",
    Highlight2:"Used Hawler JS library",
    detailText:"Songs Can Be played And you can create your own library",
    imageSrc1: "src/assets/Project Imgs/Blog Images/Screenshot (145)-front.png",
    imageSrc2:"src/assets/Project Imgs/Blog Images/Screenshot (140).png",
    imageSrc3: "src/assets/Project Imgs/Blog Images/Screenshot (141).png",
    imageSrc4: "src/assets/Project Imgs/Blog Images/Screenshot (141).png",
    LiveWebLink:"https://spotify-clone-khaki-nine.vercel.app/",
    CodeBaseLink:"https://github.com/HiteshHonmane/Spotify-Clone"
  }

  return (
    <div className=' '>
    {/* <Project {...projectObj1}/> */}
    <Project {...projectObj2}/>
    </div>
    

  )
}

export default Projects