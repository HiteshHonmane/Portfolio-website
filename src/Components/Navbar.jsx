import  React from 'react'
import { CgProfile } from "react-icons/cg";
import { SiAboutdotme } from "react-icons/si";
import { GrProjects } from "react-icons/gr";

function Navbar (){

    return(
        <div className=' fixed top-10 w-16  z-20  flex flex-col  gap-4 ml-4 px-4 border-gray-600 bg-[rgba(203,200,200,0.41)] rounded-xl p-7 shadow-black   '>
            <div className='w-9 ' id="Home">
                <img className='w-11'  src="src\assets\Nav Icons\Profile.svg" alt="" /></div>
            <div className='w-9  ' id='about'>
                <img className='w-11' src="src\assets\Nav Icons\About.svg" alt="" /></div>
            <div className='w-9  ' id='projects'>
                <img className='w-11' src="src\assets\Nav Icons\Projects.svg" alt="" /></div>
            <div className='w-9  ' id="contact">
                <img className='w-11' src="src\assets\Nav Icons\Contact.svg" alt="" /></div>
        </div>
    )
}
export default Navbar