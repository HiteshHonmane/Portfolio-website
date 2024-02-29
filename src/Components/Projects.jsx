import React from 'react'
import Project from './Projects/Project'




function Projects() {

  const projectObj1={
    name:"Blog",
    index:"1",
    Highlight1:"API Handling",
    Highlight2:"Additional Features",
    detailText:"Songs can be played from local storage \n you  can customize you own library",
  }
  const projectObj2={
    name:"Image Editor",
    Highlight1:"API Handling",
    Highlight2:"HTML Canva"
  }



  return (
    <div className=' '>
    <Project {...projectObj1}/>
    <Project {...projectObj2}/>
    </div>
    

  )
}

export default Projects