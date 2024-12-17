"use client";

import React from "react"



export default function NewSkills() {
    return (


        <div className="w-full md:h-[100vh]  lg:px-44 flex">




            <div className="w-full  h-[200vh] md:h-[100vh] lg:h-[100vh] flex flex-col gap-10 justify-center items-center  " id="skills">
                <h1 className=" my-10 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center md:text-8xl text-6xl font-semibold leading-none text-transparent dark:from-[#fff] dark:to-slate-900/10" > My Skills</h1>

                <div className="  border-white border-0 md:flex  justify-around items-center py-10 px-3 rounded-3xl md:bg-[#ffffff07] " >
                    <div className=" border-2 relative border-[#ffffff17] rounded-3xl mb-10">
                        <div className=' flex justify-center my-6  text-2xl  font-medium text-[#ffffff1b] row-span-1 '>
                            <p className=' '>Skills</p>
                        </div>
                        <div className='grid grid-cols-3 grid-rows-4 row-span-5 gap-3 lg:gap-6 md:gap-6 lg:mx-6 md:mx-6  mx-3  my-10 font-normal text-md font-poppins '>
                            <button className=' py-4  text-[#ffffff61] rounded-xl border border-spacing-[0.5] bg-[#3f3f3f21] border-[#323232] hover:bg-[linear-gradient(90deg,_rgba(0,255,239,1)_50%,_rgba(255,255,255,0)_50%)] hover:text-black duration-500' >C++</button>
                            <button className='  text-[#ffffff61] rounded-xl border border-spacing-[0.5] bg-[#3f3f3f21] border-[#323232]'>Python</button>
                            <button className='  text-[#ffffff61] rounded-xl border border-spacing-[0.5] text-sm bg-[#3f3f3f21] border-[#323232]'>Javascript</button>
                            <button className='  text-[#ffffff61] rounded-xl border border-spacing-[0.5] bg-[#3f3f3f21] border-[#323232]'>Java</button>
                            <button className=' text-[#ffffff61] rounded-xl border border-spacing-[0.5] bg-[#3f3f3f21] border-[#323232]'>HTML5</button>
                            <button className='  text-[#ffffff61] rounded-xl border border-spacing-[0.5] bg-[#3f3f3f21] border-[#323232]'>CSS</button>
                            <button className='   text-[#ffffff61] rounded-xl border border-spacing-[0.5] bg-[#3f3f3f21] border-[#323232]'>mongo DB</button>
                            <button className=' text-sm font-medium text-[#ffffff61] rounded-lg border border-spacing-[0.5] bg-[#3f3f3f21] border-[#323232]'>React JS</button>
                            <button className=' text-sm font-medium text-[#ffffff61] rounded-lg border border-spacing-[0.5] bg-[#3f3f3f21] border-[#323232]'>Taiwind</button>
                            <button className='text-sm font-medium text-[#ffffff61] rounded-lg border border-spacing-[0.5] bg-[#3f3f3f21] border-[#323232]'>Bootstrap</button>
                            <button className='text-sm font-medium text-[#ffffff61] rounded-lg border border-spacing-[0.5] bg-[#3f3f3f21] border-[#323232]'>Node JS</button>
                            <button className='text-sm font-medium text-[#ffffff61] rounded-lg border border-spacing-[0.5] bg-[#3f3f3f21] border-[#323232]'>express JS</button>
                            <button className='text-sm font-medium text-[#ffffff61] rounded-lg border border-spacing-[0.5] bg-[#3f3f3f21] border-[#323232]'>Axios</button>
                            <button className='text-sm font-medium text-[#ffffff61] rounded-lg border border-spacing-[0.5] bg-[#3f3f3f21] border-[#323232]'>Next.js</button>
                            <button className=' py-4  px-2 text-sm font-medium text-[#ffffff61] rounded-lg border border-spacing-[0.5] bg-[#3f3f3f21] border-[#323232]'>Framer-Motion</button>

                        </div>

                    </div>
                    <div className=" md:w-[40%] w-full">
                        <h2 className=" text-2xl font-bold text-[#F0BB78]">Full-Stack Web Development: </h2>
                        <p className=" text-[#ffffff7e] pb-4 font-medium py-2">I specialize in building web-based platforms, managing both frontend and backend development using modern technologies like Next.js, React, and Tailwind CSS for scalable, responsive applications with seamless API integrations.</p>
                        <h2 className=" text-2xl font-bold text-[#F0BB78]">AI & NLP Expertise:</h2>

                        <p className=" text-[#ffffff7e] pb-4 font-medium py-2">I have hands-on experience working on AI and Natural Language Processing (NLP) projects, developing intelligent solutions such as chatbots, sentiment analysis, and language processing tools using advanced algorithms and machine learning frameworks.</p>

                        <h2 className=" text-2xl font-bold text-[#F0BB78]">UI/UX Design:</h2>
                        <p className=" text-[#ffffff7e] font-medium py-2">I am skilled in crafting user-centered UI/UX designs, ensuring both functionality and aesthetics. By using tools like Figma and Adobe XD, I create intuitive, responsive, and visually appealing interfaces that enhance user experience across devices.</p>


                    </div>

                </div>

            </div>

        </div>

    );
}