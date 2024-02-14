import React from 'react'
import Spotify from './Projects/Spotify'
import Netflix from './Projects/Netflix'
import Architect from './Projects/Architect'

function Projects() {
  return (
    <div className=' flex justify-center items-center  h-[100vh]'>
    <Spotify/>
    <Netflix/>
    <Architect/>
    </div>
    

  )
}

export default Projects