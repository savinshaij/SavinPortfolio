"use client";
import { motion } from "framer-motion";
import React from "react"


export default function Skills() {
    return (
        <div className=" min-h-screen bg-cover bg-[url('/dot.png')] rounded-3xl lg:rounded-[10%] my-2" id="skills">
            <motion.div className=" text-center py-11 "

            >
                < motion.p className="  text-md text-white md:text-lg font-poppins font-small z-10   "> SKILLS</motion.p>
                <motion.h3 className="  text-4xl font-poppins text-teal-300 md:text-5xl  font-semibold  z-10   "> My Skills</motion.h3>
            </motion.div>
            <div className="flex items-center justify-center py-10">

                <div className=" mx-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">

                    <motion.div className="bg-[#25252552] rounded-3xl overflow-hidden shadow-lg   "
                        initial={{
                            opacity: 0,
                            y: 70,
                        }}
                        whileHover={{
                            scale: 1.05,
                            transition: {
                                duration: 0.1,
                            }
                        }}
                        whileInView={{

                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1,
                            }
                        }}


                        viewport={{ once: false }}
                    >

                        <div className=' flex justify-center my-6  text-2xl  font-medium text-[#ffffff1b] row-span-1 '>
                            <p className=' '>Languages</p>
                        </div>
                        <div className='grid grid-cols-3 grid-rows-4 row-span-5 gap-3 lg:gap-6 md:gap-6 lg:mx-6 md:mx-6  mx-3  my-10 font-normal text-md font-poppins '>
                            <button className='  text-[#ffffff61] rounded-xl border border-spacing-[0.5] bg-[#3f3f3f21] border-[#323232] hover:bg-[linear-gradient(90deg,_rgba(0,255,239,1)_50%,_rgba(255,255,255,0)_50%)] hover:text-black duration-500' >C++</button>
                            <button className='  text-[#ffffff61] rounded-xl border border-spacing-[0.5] bg-[#3f3f3f21] border-[#323232]'>Python</button>
                            <button className='  text-[#ffffff61] rounded-xl border border-spacing-[0.5] text-sm bg-[#3f3f3f21] border-[#323232]'>Javascript</button>
                            <button className='  text-[#ffffff61] rounded-xl border border-spacing-[0.5] bg-[#3f3f3f21] border-[#323232]'>Java</button>
                            <button className=' text-[#ffffff61] rounded-xl border border-spacing-[0.5] bg-[#3f3f3f21] border-[#323232]'>HTML5</button>
                            <button className='  text-[#ffffff61] rounded-xl border border-spacing-[0.5] bg-[#3f3f3f21] border-[#323232]'>CSS</button>
                            <button className='  px-3 py-1 md:py-4 text-[#ffffff61] rounded-xl border border-spacing-[0.5] bg-[#3f3f3f21] border-[#323232]'>mongo DB</button>
                        </div>


                    </motion.div>

                    <motion.div className="bg-[#25252552] rounded-3xl overflow-hidden shadow-lg  "
                        initial={{
                            opacity: 0,
                            scale: 0.7,

                        }}

                        whileInView={{
                            scale: 1,
                            opacity: 1,

                            transition: {
                                duration: 1,
                            }
                        }}
                        whileHover={{
                            scale: 1.05,
                            transition: {
                                duration: 0.1,
                            }
                        }}


                        viewport={{ once: false }}
                    >
                        <div className=' flex justify-center my-6  text-2xl  font-medium text-[#ffffff1b] row-span-1 '>
                            <p className=' '>Libraries</p>
                        </div>
                        <div className='grid grid-cols-3 grid-rows-4 row-span-5 gap-3 lg:gap-6 md:gap-6 lg:mx-6 md:mx-6  mx-3  my-10  font-medium font-poppins'>
                            <button className=' text-sm font-medium text-[#ffffff61] rounded-lg border border-spacing-[0.5] bg-[#3f3f3f21] border-[#323232]'>React JS</button>
                            <button className=' text-sm font-medium text-[#ffffff61] rounded-lg border border-spacing-[0.5] bg-[#3f3f3f21] border-[#323232]'>Taiwind</button>
                            <button className='text-sm font-medium text-[#ffffff61] rounded-lg border border-spacing-[0.5] bg-[#3f3f3f21] border-[#323232]'>Bootstrap</button>
                            <button className='text-sm font-medium text-[#ffffff61] rounded-lg border border-spacing-[0.5] bg-[#3f3f3f21] border-[#323232]'>Node JS</button>
                            <button className='text-sm font-medium text-[#ffffff61] rounded-lg border border-spacing-[0.5] bg-[#3f3f3f21] border-[#323232]'>express JS</button>
                            <button className='text-sm font-medium text-[#ffffff61] rounded-lg border border-spacing-[0.5] bg-[#3f3f3f21] border-[#323232]'>Axios</button>
                            <button className='text-sm font-medium text-[#ffffff61] rounded-lg border border-spacing-[0.5] bg-[#3f3f3f21] border-[#323232] '>Framer-Motion</button>
                            <button className='text-sm font-medium text-[#ffffff61] rounded-lg border border-spacing-[0.5] bg-[#3f3f3f21] border-[#323232]'>Material UI</button>
                            <button className='text-sm font-medium text-[#ffffff61] rounded-lg border border-spacing-[0.5] bg-[#3f3f3f21] border-[#323232]'>Next.js</button>
                            <button className='px-3 py-1 md:py-4 text-sm font-medium text-[#ffffff61] rounded-lg border border-spacing-[0.5] bg-[#3f3f3f21] border-[#323232]'>vite.js</button>

                        </div>


                    </motion.div>

                    <motion.div className="bg-[#25252552] rounded-3xl overflow-hidden shadow-lg "
                        initial={{
                            opacity: 0,
                            y: 70,

                        }}
                        whileHover={{
                            scale: 1.05,
                            transition: {
                                duration: 0.1,
                            }
                        }}
                        whileInView={{

                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1,
                            }
                        }}
                        viewport={{ once: false }}
                    >
                        <div className=' flex justify-center my-6  text-2xl  font-medium text-[#ffffff1b] row-span-1 '>
                            <p className=' '>Other</p>
                        </div>
                        <div className='grid grid-cols-3 grid-rows-4 row-span-5 gap-3 lg:gap-6 md:gap-6 lg:mx-6 md:mx-6  mx-3  my-10  font-medium font-poppins'>
                            <button className=' font-small text-sm text-[#ffffff61] rounded-xl border border-spacing-[0.5] bg-[#3f3f3f21] border-[#323232]'>Git</button>
                            <button className=' font-small text-[#ffffff61] rounded-xl border border-spacing-[0.5] bg-[#3f3f3f21] border-[#323232]'>Figma</button>
                            <button className=' px-3 py-1 md:py-4  font-small text-[#ffffff61] rounded-xl border border-spacing-[0.5] bg-[#3f3f3f21] border-[#323232]'>Adobe XD</button>

                        </div>


                    </motion.div>
                </div>
            </div>

        </div>

    )


}


