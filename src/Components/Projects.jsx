import React from 'react'
import Project from './Projects/Project'




function Projects() {

  const projectObj1={
    name:"Blog Website",
    index:"01",
    Highlight1:"API Handling",
    Highlight2:"Additional Features",
    detailText:"Can Create and upload post with image",
    imageSrc1: "src/assets/Project Imgs/Spotify Mobile library.png",
    imageSrc2:"src/assets/Project Imgs/Spotify Mobile library.png",
    imageSrc3: "src/assets/Project Imgs/Spotify Mobile .png ",
    LiveWebLink:"",
    CodeBaseLink:""
  }
  const projectObj2={
    name:"Spotify Clone",
    index:"02",
    Highlight1:"API Handling",
    Highlight2:"Used Hawler JS library",
    detailText:"Songs Can Be played And you can create your own library",
    imageSrc1: "src/assets/Project Imgs/Spotify Mobile library.png",
    imageSrc2:"src/assets/Project Imgs/Spotify Mobile library.png",
    imageSrc3: "src/assets/Project Imgs/Spotify Mobile .png ",
    LiveWebLink:"",
    CodeBaseLink:""
    
  }



  return (
    <div className=' '>
    <Project {...projectObj1}/>
    <Project {...projectObj2}/>
    </div>
    

  )
}

export default Projects