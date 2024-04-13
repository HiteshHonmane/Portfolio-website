import React from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import SkillsIndex from './Components/SkillsIndex'
import Blog from './Components/Projects/Blog'
import Spotify from './Components/Projects/Spotify'
import Pilors from './Components/Projects/Pilors'

// import ParallaxEffect from './Components/Parallex'


function Index() {
  const projectObjBlog={
    name:"Blog Website",
    index:"02",
    Highlight1:"Auth Services",
    Highlight2:"Write Blog & Post it ",
    detailText:"",
    imageSrc1: "/Blog Images/blog login-portrait.png",
    imageSrc2:"/Blog Images/blog createac-portrait.png",
    imageSrc3: "/Blog Images/blog addpost-portrait.png",
    imageSrc4: "/Blog Images/blog posts mac.png",
    LiveWebLink:"https://blog-platform-peach.vercel.app/",
    CodeBaseLink:"https://github.com/HiteshHonmane/Blog-Platform"
  }
  const projectObjPilors={ 
    name:"Architect & Interior",
    index:"01",
    Highlight1:"Interactive",
    Highlight2:"Best Animation",
    detailText:"",
    imageSrc1: "src/assets/Project Imgs/Blog Images/Screenshot (145)-front.png",
    imageSrc2:"",
    imageSrc3: "",
    LiveWebLink:"https://architect-and-interior.vercel.app/",
    CodeBaseLink:""
  }

  const projectObjSpotify={
    name:"Spotify Clone",
    index:"03",
    Highlight1:"API Handling",
    Highlight2:"Search Songs",
    detailText:"",
    imageSrc1: "/Spotify Images/spotify playlist.png",
    imageSrc2:"/Spotify Images/spotify library.png",
    imageSrc3: "/Spotify Mobile .png",
    imageSrc4: "/Spotify Images/spotify  macbook.png",
    imageSrc5: "/Spotify Images/spotify ipad mini.png",
    LiveWebLink:"https://spotify-clone-khaki-nine.vercel.app/",
    CodeBaseLink:"https://github.com/HiteshHonmane/Spotify-Clone",
    ReactSvg: ""
  }



  return (
    <>
    <Hero/>
    <About/>
    <Pilors {...projectObjPilors} />
    <Blog {...projectObjBlog}/>
    <Spotify {...projectObjSpotify} />
    <SkillsIndex/>
    <Contact/>
    
    </>
  )
}

export default Index