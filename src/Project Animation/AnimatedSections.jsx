import React from "react";

const AnimatedSections = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full flex items-center justify-between px-5 z-3 h-28 font-bold uppercase">
        <div>Animated Sections</div>
        <div>
          <a href="https://codepen.io/BrianCross/pen/PoWapLP">Original By Brian</a>
        </div>
      </header>
      <section className="first fixed top-0 left-0 w-full h-full overflow-y-hidden hidden">
        <div className="outer w-full h-full">
          <div className="inner w-full h-full">
            <div className="bg one h-full flex items-center justify-center">
              <h2 className="section-heading text-white text-center text-3xl md:text-5xl lg:text-7xl uppercase tracking-wider">
               
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="second fixed top-0 left-0 w-full h-full overflow-y-hidden hidden">
        <div className="outer w-full h-full">
          <div className="inner w-full h-full">
            <div className="bg h-full flex items-center justify-center">
              <h2 className="section-heading text-white text-center text-3xl md:text-5xl lg:text-7xl uppercase tracking-wider">
                
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="third fixed top-0 left-0 w-full h-full overflow-y-hidden hidden">
        <div className="outer w-full h-full">
          <div className="inner w-full h-full">
            <div className="bg h-full flex items-center justify-center">
              <h2 className="section-heading text-white text-center text-3xl md:text-5xl lg:text-7xl uppercase tracking-wider">
              
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="fourth fixed top-0 left-0 w-full h-full overflow-y-hidden hidden">
        <div className="outer w-full h-full">
          <div className="inner w-full h-full">
            <div className="bg h-full flex items-center justify-center">
              <h2 className="section-heading text-white text-center text-3xl md:text-5xl lg:text-7xl uppercase tracking-wider">
              
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="fifth fixed top-0 left-0 w-full h-full overflow-y-hidden hidden">
        <div className="outer w-full h-full">
          <div className="inner w-full h-full">
            <div className="bg h-full flex items-center justify-center">
              <h2 className="section-heading text-white text-center text-3xl md:text-5xl lg:text-7xl uppercase tracking-wider">
                
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AnimatedSections;
