"use client";

import React from "react"
import Reveal from "../textUi/Reveal";
import { LettersPullUp } from "../textUi/lettersUp";
import { TextFade } from "../textUi/fadeUp";
import { DivOrigami } from "../other/iconani";





export default function NewSkills() {

    return (


        <div className="w-full md:h-screen  lg:px-44 flex">




            <div className="w-full   md:h-full lg:h-[100vh] flex flex-col gap-10 justify-center items-center  " id="skills">
                <Reveal><h1 style={{ fontFamily: 'Transcity' }} className=" my-10 pointer-events-none whitespace-pre-wrap bg-gradient-to-b bg-clip-text text-center md:text-8xl text-6xl font-semibold leading-none text-transparent from-[#fff] to-slate-900/10" > My Skills</h1></Reveal>

                <div className=" w-full flex flex-col md:flex-row items-start gap-6 rounded-3xl border border-zinc-700 bg-zinc-800 md:p-6">

{/* Left Image with border */}
<div className="w-full md:w-1/2 flex justify-center items-center h-full">
  {/* <img 
    src="/skillAvatar.png" 
    alt="Profile or Illustration" 
    className="w-full max-w-xs rounded-lg  object-cover"
  /> */}
  <DivOrigami/>
</div>

{/* Content on the right */}
<div className="w-full md:w-2/3">
  <TextFade direction="up" className="flex-col flex space-y-0">
    
    {/* Full-Stack Section */}
    <div className="max-w-4xl mx-auto p-6 pt-2 pb-2">
      <h2 className="text-xl md:text:xl font-bold text-white">
        <LettersPullUp text="Full-Stack Web Development:" />
      </h2>
      <div className="grid grid-cols-2 gap-4 md:text-base  font-light text-[#ffffff7e] py-1">
        <ul className="list-disc list-inside space-y-1">
          <li>Next.js</li>
          <li>Tailwind CSS</li>
          <li>Framer Motion</li>
          <li>Express.js</li>
        </ul>
        <ul className="list-disc list-inside space-y-1">
          <li>MongoDB</li>
          <li>React.js</li>
          <li>JavaScript</li>
        </ul>
      </div>
    </div>

    {/* AI/ML/DL Section */}
    <div className="max-w-4xl mx-auto p-6 pt-0 pb-2">
      <h2 className="text:xl font-bold text-white">
        <LettersPullUp text="AI/ML/DL:" />
      </h2>
      <div className="grid grid-cols-2 gap-4 md:text-base  font-light text-[#ffffff7e] py-1">
        <ul className="list-disc list-inside space-y-1">
          <li>Image Classification</li>
          <li>YOLO, SSD, R-CNN</li>
          <li>UNet, DeepLab</li>
          <li>OpenCV</li>
        </ul>
        <ul className="list-disc list-inside space-y-1">
          <li>TensorFlow & Keras</li>
          <li>NumPy</li>
          <li>NLTK</li>
          <li>Spacy</li>
        </ul>
      </div>
    </div>

    {/* Other Section */}
    <div className="max-w-4xl mx-auto p-6 pt-0 pb-2">
      <h2 className="text:xl font-bold text-white">
        <LettersPullUp text="Other:" />
      </h2>
      <div className="grid grid-cols-2 gap-4 md:text-base  font-light text-[#ffffff7e] py-1">
        <ul className="list-disc list-inside space-y-1">
          <li>Java</li>
          <li>MS Excel</li>
          <li>Figma</li>
          <li>Git/GitHub</li>
        </ul>
        <ul className="list-disc list-inside space-y-1">
          <li>Canva</li>
          <li>Linux</li>
          <li>Bash</li>
          <li>Copilot & other AI tools</li>
        </ul>
      </div>
    </div>

  </TextFade>
</div>
</div>

            </div>

        </div>

    );
}