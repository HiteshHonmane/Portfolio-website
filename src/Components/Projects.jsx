import React from 'react'
import Project from './Projects/Project'




function Projects() {

  const projectObj1={
    name:"Blog Website",
    index:"01",
    Highlight1:"API Handling",
    Highlight2:"Additional Features",
    detailText:"Can Create and upload post with image",
    imageSrc: "src/assets/Project Imgs/Spotify Mobile library.png"
  }
  const projectObj2={
    name:"Spotify Clone",
    index:"02",
    Highlight1:"API Handling",
    Highlight2:"Used Hawler JS library",
    detailText:"Songs Can Be played And you can create your own library"
    
  }



  return (
    <div className=' '>
    <Project {...projectObj1}/>
    <Project {...projectObj2}/>
    </div>
    

  )
}

export default Projects