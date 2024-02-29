import  React from 'react'

function Navbar (){

    return(
        <div className=' fixed bottom-0 left- w-14  z-20  flex flex-col  gap-14 m-3 p-4 border-gray-600 bg-[rgba(232,226,226,0.34)] rounded-full   '>
            <div className='' id="Home">
                <img className='w-6'  src="src\assets\Nav Icons\Profile.svg" alt="" /></div>
            <div className='  ' id='about'>
                <img className='w-6' src="src\assets\Nav Icons\About.svg" alt="" /></div>
            <div className='  ' id='projects'>
                <img className='w-6' src="src\assets\Nav Icons\Projects.svg" alt="" /></div>
            <div className='  ' id="contact">
                <img className='w-6' src="src\assets\Nav Icons\Contact.svg" alt="" /></div>
        </div>
    )
}
export default Navbar