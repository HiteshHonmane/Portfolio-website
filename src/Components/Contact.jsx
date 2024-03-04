import React from "react";
import { useEffect, useState, useRef } from "react";

function Contact() {
  const contactRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (contactRef.current) {
        const scrollPercentage =
          window.scrollY / (document.body.scrollHeight - window.innerHeight);
        const maxOffset = 10; // Adjust as needed
        const minOffset = -180; // Adjust as needed
        let offset = minOffset + (maxOffset - minOffset) * scrollPercentage;

        // Ensure offset doesn't exceed the limits
        offset = Math.max(minOffset, Math.min(maxOffset, offset));

        contactRef.current.style.transform = `translateX(${offset}vw)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className=" flex h-[100vh] justify-start items-center flex-wrap sm:justify-center sm:items-center  dark:bg-gray-700 ">

        

        <div
        
          className=" flex-row flex-wrap  sm:flex-row   sm:h-[100vh] flex  items-center align-middle justify-center sm:justify-around w-[70vw] sm:w-[98vw]  m-auto gap-9 "
          id="icons"
        >
          <div className=" sm:hide relative flex text-3xl font-bold font-Avenir ">
          CONTACT
        </div>
          <img
            className="h-[5.625rem] z-10"
            src="src\assets\Social Icons\Github.svg"
            alt="Github"
          />
          <img
            className="h-[5.625rem] z-10"
            src="src\assets\Social Icons\X.svg"
            alt="Twitter"
          />
          <img
            className="h-[5.625rem] z-10"
            src="src\assets\Social Icons\Linkedin.svg"
            alt="Linkedin"
          />
          <img
            className="h-[5.625rem] z-10"
            src="src\assets\Social Icons\Email.svg"
            alt="Email"
          />
          <img
            className="h-[5.625rem] z-10"
            src="src\assets\Social Icons\StackOverflow.svg"
            alt=" Stack Overflow"
          />
          <div
            ref={contactRef}
            id="contact"
            className=" hidden md:block @apply transition-transform duration-[0.5s] ease-[ease-out] delay-[0s] sm:flex sm:absolute mt-96 text-8xl  font-semibold text-gray-300 opacity-50 dark:text-[rgb(57,56,56)] "
          >
            CONTACT
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
