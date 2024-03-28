import React from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import SkillsIndex from './Components/SkillsIndex'
// import ParallaxEffect from './Components/Parallex'


function Index() {
  return (
    <>
    <Hero/>
    <About/>
    <Projects/>
    <SkillsIndex/>
    {/* <ParallaxEffect/> */}

    <Contact/>
    </>
  )
}

export default Index