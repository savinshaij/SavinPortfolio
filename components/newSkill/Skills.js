"use client";

import React from "react"
import Reveal from "../textUi/Reveal";
import { LettersPullUp } from "../textUi/lettersUp";
import { TextFade } from "../textUi/fadeUp";
import IconCloud from "../cloud/cloudProps";



const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];


export default function NewSkills() {
    
    return (


        <div className="w-full md:h-[100vh]  lg:px-44 flex">




            <div className="w-full   md:h-[100vh] lg:h-[100vh] flex flex-col gap-10 justify-center items-center  " id="skills">
               <Reveal><h1 style={{ fontFamily: 'Transcity' }} className=" my-10 pointer-events-none whitespace-pre-wrap bg-gradient-to-b bg-clip-text text-center md:text-8xl text-6xl font-semibold leading-none text-transparent from-[#fff] to-slate-900/10" > My Skills</h1></Reveal> 

                <div className="  border-white border-0 md:flex  justify-around items-center py-10 px-3 rounded-3xl md:bg-[#ffffff07] " >
                    <div className="  md:flex hidden  rounded-3xl ">
                        <IconCloud iconSlugs={slugs} className=" text-center"/>

                    </div>
                    <div className=" md:w-[40%] w-full">
                        <TextFade
                        direction="up"
                       className="pt-0 pb-5 flex-col flex  space-y-0"
                        >
                        <h2 className=" text-2xl font-bold text-[#F0BB78]"> <LettersPullUp text="Full-Stack Web Development:"/> </h2>
                        <p className=" text-[#ffffff7e] pb-4  md:font-medium py-2">I specialize in building web-based platforms, managing both frontend and backend development using modern technologies like Next.js, React, and Tailwind CSS for scalable, responsive applications with seamless API integrations.</p>
                        
                        <h2 className=" text-2xl md:font-bold text-[#F0BB78]"> <LettersPullUp text="AI & NLP Expertise:"/> </h2>

                        <p className=" text-[#ffffff7e] pb-4 font-medium py-2">I have hands-on experience working on AI and Natural Language Processing (NLP) projects, developing intelligent solutions such as chatbots, sentiment analysis, and language processing tools using advanced algorithms and machine learning frameworks.</p>
                        <h2 className=" text-2xl font-bold text-[#F0BB78]"> <LettersPullUp text="UI/UX Design:"/> </h2>
                        
                        <p className=" text-[#ffffff7e] md:font-medium py-2">I am skilled in crafting user-centered UI/UX designs, ensuring both functionality and aesthetics. By using tools like Figma and Adobe XD, I create intuitive, responsive, and visually appealing interfaces that enhance user experience across devices.</p>
                        </TextFade>
                    </div>

                </div>

            </div>

        </div>

    );
}