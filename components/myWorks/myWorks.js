"use client";
import React from "react";
import Project1 from "./projects/project1";
import Project2 from "./projects/project2";
import Project3 from "./projects/project3";
import Project4 from "./projects/project4";
import Enlarge from "../scrollUi/enlarge";
import Reveal from "../textUi/Reveal";
const MyWorks = () => {
  return (
    <>
      <div className="  pb-20" >


        <div className="flex flex-col gap-10 justify-center items-center text-center py-28  pt-10"
          id='exp'
        >
          <Reveal><h1 style={{ fontFamily: 'Transcity' }} className=" my-10 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center md:text-8xl text-6xl font-semibold leading-none text-transparent dark:from-[#fff] dark:to-slate-900/10" > My Projects/Works</h1></Reveal> 
        </div>
        <Enlarge>
        <Project1 />
        <hr className=" md:w-[60%] m-auto  md:border-[#ffffff17] border-[#ffffff3b]" />
        </Enlarge>
        <Enlarge>
        <Project2 />
        <hr className=" md:w-[60%] m-auto  md:border-[#ffffff17] border-[#ffffff3b]" />
        </Enlarge>
        <Enlarge>
        <Project3 />
        <hr className=" md:w-[60%] m-auto  md:border-[#ffffff17] border-[#ffffff3b]" />
        </Enlarge>
        <Enlarge>
        <Project4 />
        </Enlarge>
        <div className="  py-20 flex w-full justify-center items-center">
          <a href=" https://github.com/savinshaij" className="hover:scale-110 cursor-pointer hover:text-white transition-all duration-500 md:text-xl flex justify-center items-center font-poppins font-semibold text-[#ffffffb4]">  View More Projects <span className=" text-3xl ">→</span></a>
        </div>
      </div>
    </>
  )


}
export default MyWorks;