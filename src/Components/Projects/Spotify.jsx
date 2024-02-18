import React from 'react'

function Spotify() {
  return (
    <div className=' sm:flex sm:flex-row flex-row sm:h-[100vh] sm:w[100vw] h-[200vh] relative border-gray-500 border-2 ' id="main">
      <div id="left-side "
        className=' flex flex-col justify-between relative h-[100vh] w-[50vw]'>
        <div id="top" className=' font- px-12 pt-14 text-xl font-bold text-[#333333]' >
          01
        </div>
        <div id="middle" className=' flex flex-col items-start px-24 '>


          <h2 className=' font-Avenir text-4xl font-bold text-[#333333]  pb-8 '> Spotify Clone </h2>

          <div className='flex '>
          <h4 className=' font-AvenirMedium text-[#333333]  text-xl font- '>Additionl features </h4>
          <img className='h-7 m-3 ' src="src\assets\Text Icons\Dot.svg"  alt="" /> 
          <h4 className='font-AvenirMedium text-[#333333]  text-xl'> API Handling </h4>  
          </div>
          
          <p className='text-lg'
          >Songs can be played from local storage you <br />
            can customize you own library  </p>
        </div>

        <div id="bottom" className=' flex underline relative bottom-14 px-12 text-lg font-bold text-[#333333] '>
          LIVE APP <img className=' h-6  mt-3' src="src\assets\Text Icons\Arrow.svg" alt="" />
        </div>


      </div>
      <div id="right-side "
        className=' relative sm:h-[100vh]  sm:w-[50vw] w-[100vh] h-[100vh]' >
          <div className=' sm:flex gap-7  sm:flex-row flex-row '>
        
            <img className='w-60' src="src\assets\Project Imgs\Spotify Mobile .png" alt="" />
            <img className='w-60' src="src\assets\Project Imgs\Spotify Mobile library.png" alt="" />

          </div>

      </div>
    </div>
  )
}

export default Spotify