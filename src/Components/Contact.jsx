import React from "react";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function Contact() {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#contact-container",
          start: "top center",
          end: "bottom center",
          scrub: true,
          // markers:true
        },
      })
      .to("#contact", {
        x: 200,
        duration: 5,
        ease: "power2.inOut",
      });
  });

  const contactRef = useRef(null);

  const email = "hiteshhonmane@gmail.com";

  return (
    <>
      <div
        id="contact-container"
        className=" flex h-[100vh] justify-start items-center flex-wrap sm:justify-center sm:items-center   "
      >
        <div
          className=" flex-row flex-wrap  sm:flex-row   sm:h-[100vh] flex  items-center align-middle justify-center sm:justify-around w-[70vw] sm:w-[98vw]  m-auto gap-9 "
          id="icons"
        >
          <a
            href="https://github.com/HiteshHonmane"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-[5.625rem] z-10"
              src="assets\Social Icons\Github.svg"
              alt="Github"
            />
          </a>
          <a
            href="https://www.twitter.com/hitesh__honmane"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-[5.625rem] z-10"
              src="assets\Social Icons\X.svg"
              alt="Twitter"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/hitesh-honmane/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-[5.625rem] z-10"
              src="assets\Social Icons\Linkedin.svg"
              alt="Linkedin"
            />{" "}
          </a>

          <a href={`mailto:${email}`}>
            <img
              className="h-[5.625rem] z-10"
              src="assets\Social Icons\Email.svg"
              alt="Email"
            />
          </a>

          <a
            href="https://stackoverflow.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-[5.625rem] z-10"
              src="assets\Social Icons\StackOverflow.svg"
              alt="Stack Overflow"
            />
          </a>
          <div
            ref={contactRef}
            id="contact"
            className=" absolute  @apply transition-transform duration-[0.5s] ease-[ease-out] delay-[0s] sm:flex sm:absolute mt-96 text-6xl lg:text-8xl xl:text-8xl  font-semibold text-gray-300 opacity-50 dark:text-[rgb(71,71,71)] lg:-translate-x-full -translate-x-[50%]  xl:-translate-x-[80%] lg:w-[60%] "
          >
            CONTACT
          </div>
        </div>
      </div>
      <footer className="w-full text-center py-4 flex gap-3 justify-center items-center">
        <p className="text-gray-500">Developed by Hitesh Honmane </p>
        <a href="https://github.com/HiteshHonmane">
        <img width={18} src='Github.svg' alt="" />
        </a>
      </footer>
    </>
  );
}

export default Contact;
