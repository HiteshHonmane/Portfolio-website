import { useState } from 'react'

import './App.css'
import Hero from './Components/Hero'
import About from './Components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <About/>
    </>
  )
}

export default App
