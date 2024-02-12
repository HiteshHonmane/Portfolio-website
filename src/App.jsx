import { useEffect, useState } from 'react'

import './App.css'
import Hero from './Components/Hero'
import About from './Components/About'
import ThemeBtn from './Components/ThemeBtn'
import { ThemeProvider } from './Contexts/Theme'
import Themchanger from './Components/Themchanger'

function App() {
 const [themeMode, setThemeMode] = useState("light")

 const lightThem = ()=>{
  setThemeMode ("light")
 }

 const darkTheme = ()=>{
  setThemeMode("dark")

 }

 //Them Change 
let html = document.querySelector('html')
useEffect(()=>{
   html.classList.remove('light', 'dark')
   html.classList.add(themeMode)
},[themeMode])


  return (
    <ThemeProvider value={{themeMode, lightThem, darkTheme}}>
    <Themchanger/>
      <Hero/>
      
      <About/>
    </ThemeProvider>
  )
}

export default App
