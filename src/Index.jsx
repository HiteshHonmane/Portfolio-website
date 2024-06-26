import React from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import SkillsIndex from './Components/SkillsIndex'
import Blog from './Components/Projects/Blog'
import Spotify from './Components/Projects/TuneTreak'
import Pilors from './Components/Projects/Pilors'
import VsCodeExt from './Components/Projects/VscodeExt'

// import ParallaxEffect from './Components/Parallex'


function Index() {
  const projectObjBlog={
    name:"Blog Website",
    index:"03",
    Highlight1:"Auth Services",
    Highlight2:"Write Blog & Post it ",
    detailText:"",
    imageSrc1: "/Blog Images/RunoLoginMobile.png",
    imageSrc2:"/Blog Images/RunoSignupMobile.png",
    imageSrc3: "/Blog Images/RonoWriteMac.png",
    imageSrc4: "/Blog Images/RunoMainPageMac.png",
    LiveWebLink:"https://blog-platform-peach.vercel.app/",
    CodeBaseLink:"https://github.com/HiteshHonmane/Blog-Platform"
  }
  const projectObjPilors={ 
    name:"Architect & Interior",
    index:"04",
    Highlight1:"Interactive",
    Highlight2:"GSAP Animations",
    detailText:"",
    imageSrc1: "Pilors/pilors mac.png",
    imageSrc2:" ",
    imageSrc3: "",
    LiveWebLink:"",
    CodeBaseLink:""
  }

  const projectObjTuneTreak={
    name:"TuneTreak(Music)",
    index:"02",
    Highlight1:"REST API Handling",
    Highlight2:"Search Songs",
    detailText:"",
    imageSrc1: "/Spotify Images/spotify playlist.png",
    imageSrc2:"/Spotify Images/spotify library.png",
    imageSrc3: "/Spotify Images/spotify ipad mini.png",
    imageSrc4: "/Spotify Images/spotify  macbook.png",
    imageSrc5: "",
    LiveWebLink:"https://tune-treak-91l5dhv6t-hiteshs-projects-b3999c5b.vercel.app/",
    CodeBaseLink:"https://github.com/HiteshHonmane/TuneTreak",
    ReactSvg: ""
  }

  
  const ReactLauncher={
    name:"VsCode Extension React Launcher",
    index:"01",
    Highlight1:"Automation",
    Highlight2:"Launche Any App",
    detailText:"",
    imageSrc1: "/vscodeExtension/extension pc-front.png",
    imageSrc2:"/vscodeExtension/ipadExtension.png",
    vidSrc3: "https://youtu.be/Wfpa_lcMBU8?si=k-68DNl4NaGSH02V",
    LiveWebLink:"https://marketplace.visualstudio.com/items?itemName=HiteshShivajiHonmane.vite-launcher",
    CodeBaseLink:"https://github.com/HiteshHonmane/Blog-Platform"
  }



  return (
    <>
    <Hero/>
    <About/>
    <VsCodeExt {...ReactLauncher}/>
    <Spotify {...projectObjTuneTreak} />
    <Blog {...projectObjBlog}/>
    <Pilors {...projectObjPilors} />
    <SkillsIndex/>
    <Contact/>
    
    </>
  )
}

export default Index