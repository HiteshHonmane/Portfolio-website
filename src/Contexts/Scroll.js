import React from 'react'
import { useEffect, useRef } from 'react';

function Scroll() {
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


 
}

export default Scroll