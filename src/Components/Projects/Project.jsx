import React from "react";

function Projects(props) {
  return (

    <div
      className=" sm:flex sm:flex-row flex-row sm:h-[100vh] sm:w[100vw] h-[200vh] relative  dark:bg-[#374151] "
      id="main"
    >
      <div
        id="left-side "
        className=" flex flex-col justify-between relative h-[100vh] sm:w-[50vw]"
      >
        <div
          id="top"
          className=" text-[16px]  ml-5 sm:px-20 pt-14  font-bold text-[#333333] dark:text-gray-400"
        >
        {props.index} 
        {/* //Coming Form Projects File */}
        </div>
        <div id="middle" className=" relative top-[-186px] flex flex-col items-start px-5  sm:px-24 ">
          <h2 className=" font-Avenir text-4xl  sm:text-4xl font-bold text-[#333333]  pb-8 dark:text-gray-950">
           {props.name}
          </h2>
          <div className="flex ">
            <h4 className=" font-AvenirMedium text-[#333333]  sm:text-xl text-[18px] dark:text-gray-400 font- ">
              {props.Highlight2}
            </h4>
            <img
              className="sm:h-7 sm:m-3 m-2 h-3 "
              src="src\assets\Text Icons\Dot.svg"
              alt=""
            />
            <h4 className="font-AvenirMedium text-[#333333] dark:text-gray-400 sm:text-xl text-[18px] ">
             {props.Highlight1}
            </h4>
          </div>

          <p className="text-[16px] text-gray-700  dark:text-gray-400">
           {props.detailText}
          </p>
          <div  className=" flex sm:gap-3 gap-2 mt-3 ">
            <div className="flex
            "><span className=" text-[16px]  font-AvenirMedium dark:text-gray-400 text-[#333333]  sm:text-lg sm:font-medium font-semibold  ">
            Tech
            </span>
            <img
              className="sm:h-7  sm:m-1 h-3 mx-1 my-[5px] "
              src="src\assets\Text Icons\Dot.svg"
              alt=""
            />
            </div>
            
            <img className="sm:w-9 w-5" src="src\assets\Skills Icons\Js.svg" alt="" />
            <img className="sm:w-9 w-5" src="src\assets\Skills Icons\Css.svg" alt="" />
            <img
              className="sm:w-9 w-5 "
              src="src\assets\Skills Icons\Html.svg"
              alt=""
            />
          </div>
        </div>

        <div
          id="bottom"
          className=" flex underline relative bottom-14  sm:text-lg font-bold text-[#333333] dark:text-gray-400 px-5 sm:px-20 "
        >
          LIVE APP{" "}
          <img
            className=" sm:h-6  sm:mt-3 h-5 mt-1"
            src="src\assets\Text Icons\Arrow.svg"
            alt=""
          />
        </div>
      </div>
      <div
        id="right-side "
        className=" relative sm:h-[100vh]  sm:w-[50vw] w-[100vh] h-[100vh]"
      >
        <div className=" sm:flex gap-7  sm:flex-row flex-row ">
          <img
            className="w-60"
            src="src\assets\Project Imgs\Spotify Mobile .png"
            alt=""
          />
          <img
            className="w-60"
            src="src\assets\Project Imgs\Spotify Mobile library.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
