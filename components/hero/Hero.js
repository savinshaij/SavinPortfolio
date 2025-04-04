"use client";
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { TextFade } from "../textUi/fadeUp";
import { BackgroundBeams } from "../backgrounBeams/bkdBeams";
import Image from "next/image";
const Hero = () => {
  return (
    <div
      className="relative text-white min-h-screen md:flex justify-center items-center w-full px-1 md:px-10 lg:px-20"
      id="home"
    >
      <div className="z-10 w-full max-w-5xl">
        <div className="w-full flex p-5 md:pl-14 relative rounded-2xl md:border md:border-[#ffffff4a] backdrop-blur-[1px] bg-zinc-900">
          <TextFade direction="up" className="pt-0 pb-5  flex flex-col space-y-4">
            <h2 className="text-sm md:text-lg py-2">Hi, Glad You&rsquo;re Here</h2>
            <h1
              style={{ fontFamily: "Transcity" }}
              className="text-7xl md:text-8xl lg:text-9xl font-black"
            >
              I&rsquo;m <span className="text-[#F0BB78]">Savin</span>
            </h1>
            <h1 className=" md:text-lg lg:text-xl text-[#ffffff9c]">
              I engineer scalable solutions that work silently behind the scenes or dazzle on the frontend. Whether it&rsquo;s untangling spaghetti logic, automating tests for bulletproof apps, or teaching machines to think, I thrive where logic meets creativity.
            </h1>
            <h3 className="text-sm md:text-sm lg:text-base text-[#ffffff52]">
              Scroll down to discover how I blend creativity and precision in my work!
            </h3>
            <div className="flex text-center flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <a
                className="hover:text-black px-6 py-3 md:px-8 md:py-4 rounded-2xl cursor-pointer border-0 hover:bg-white shadow-md transition-all duration-500 ease-in-out text-sm md:text-base tracking-wider uppercase hover:tracking-widest bg-[#F0BB78] text-white active:translate-y-1"
                type="button"
                href="Resume-Savin.pdf"
                download="Resume-Savin.pdf"
              >
                Get My <span className="font-bold text-black">Resume</span>
              </a>

            </div>
          </TextFade>
          <div className="w-full md:w-3/3 hidden md:flex justify-center items-center p-5">
            <Image
              src="/avatar.jpg"
              alt="Savin's Avatar"
              width={250}
              height={250}
              className="rounded-full border-4 border-[#F0BB78] shadow-lg"
            />
          </div>
        </div>
        <div className="w-full text-black flex justify-center items-center relative mt-8">
          <div className="flex gap-4 md:gap-8">
            <a href="mailto:savinshaij19@gmail.com" className="p-3 md:p-4 bg-white rounded-lg hover:bg-[#F0BB78] transition-all">
              <FiMail className="text-xl md:text-3xl" />
            </a>
            <a href="https://github.com/savinshaij" target="_blank" rel="noreferrer" className="p-3 md:p-4 bg-white rounded-lg hover:bg-[#F0BB78] transition-all">
              <FiGithub className="text-xl md:text-3xl" />
            </a>
            <a href="https://www.instagram.com/_savin_shaij_/" target="_blank" rel="noreferrer" className="p-3 md:p-4 bg-white rounded-lg hover:bg-[#F0BB78] transition-all">
              <FiInstagram className="text-xl md:text-3xl" />
            </a>
            <a href="https://www.linkedin.com/in/savin-p-s-652665275/" target="_blank" rel="noreferrer" className="p-3 md:p-4 bg-white rounded-lg hover:bg-[#F0BB78] transition-all">
              <FiLinkedin className="text-xl md:text-3xl" />
            </a>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Hero;
