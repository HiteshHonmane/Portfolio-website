import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Hero from './Components/Hero'
import About from './Components/About'
import Index from './Index'
import AnimationProject from './Components/AnimationProject'



function App() {
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
        <img className=' w-6 mt-1' src="src\Icons\darkmode.svg " alt="" />
      </div>
      <Index/>
      <AnimationProject/>
    </ThemeProvider>
  )
}

export default App
