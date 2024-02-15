import React from "react";
import { useEffect, useState, useRef } from "react";

function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (contactRef.current) {
        const scrollPercentage =
          window.scrollY / (document.body.scrollHeight - window.innerHeight);
        const maxOffset = 100; // Adjust as needed
        const minOffset = -50; // Adjust as needed
        let offset = minOffset + (maxOffset - minOffset) * scrollPercentage;

        // Ensure offset doesn't exceed the limits
        offset = Math.max(minOffset, Math.min(maxOffset, offset));

        contactRef.current.style.transform = `translateX(${offset}%)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        id="icons"
        className=" h-[100vh] flex items-center justify-between "
      >
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
          className=" flex absolute -left-60 text-8xl  font-semibold text-gray-300 opacity-50  "
        >
          CONTACT
        </div>
      </div>
    </>
  );
}

export default Contact;
