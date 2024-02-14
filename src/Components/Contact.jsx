import React from 'react'

function Contact() {


  return (
    <>

      <div id="icons" className=' h-[100vh] flex items-center justify-between '>
        <img className='h-[5.625rem] z-10' src="src\assets\Social Icons\Github.svg" alt="Github" />
        <img className='h-[5.625rem] z-10' src="src\assets\Social Icons\X.svg" alt="Twitter" />
        <img className='h-[5.625rem] z-10' src="src\assets\Social Icons\Linkedin.svg" alt="Linkedin" />
        <img className='h-[5.625rem] z-10' src="src\assets\Social Icons\Email.svg" alt="Email" />
        <img className='h-[5.625rem] z-10' src="src\assets\Social Icons\StackOverflow.svg" alt=" Stack Overflow" />

        <div className='  flex absolute text-8xl  font-semibold text-gray-300 opacity-50 font-AvenirHeavy  '>
          CONTACT
        </div>

      </div>

    </>

  )
}

export default Contact