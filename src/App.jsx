import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/ModeThem.jsx'
import Lenis from '@studio-freight/lenis'
import Index from './Index'
import ThemeBtn from './Components/ModeThemeBtn'



function App() {

   // smooth Scroll function
const lenis = new Lenis()
lenis.on('scroll', (e) => {
  console.log(e)
})
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])


  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="w-full flex justify-end pr-8 pt- ">
        <ThemeBtn />
        <img className=' w-6 mt-1' src="Skills Icons\darkmode.svg " alt="" />
      </div>
      <Index/>
      
    </ThemeProvider>
  )
}

export default App
