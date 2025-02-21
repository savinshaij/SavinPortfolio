"use client";
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";

import { TextFade } from "../textUi/fadeUp";
import { BackgroundBeams } from "../backgrounBeams/bkdBeams";

const Hero = () => {
  return (
    <div
      className="relative text-white h-screen flex justify-center items-center w-full"
      id="home"
    >
      <div className="z-10 md:w-[50%] ">
      {/* md:border border-[#ffffff4a] backdrop-blur-[1px] md:bg-[#ffffff06] */}
        <div className="w-full p-5 relative rounded-2xl md:border border-[#ffffff4a] backdrop-blur-[1px] md:bg-zinc-900 ">
          <TextFade direction="up" className="pt-0 pb-5 flex-col  flex space-y-0">
            <h2 className="md:text-lg text-base py-2 md:pb-4">
              Hi, Glad You&rsquo;re Here
            </h2>
            <h1
              style={{ fontFamily: "Transcity" }}
              className="md:text-[12rem] pl-10 text-8xl font-black"
            >
              I&rsquo;m <span className="text-[#F0BB78]">Savin</span>
            </h1>

            <h1 className="md:pb-3 pb-2 pl-10 md:font-light md:text-xl text-base text-[#ffffff9c]">
              
              I engineer scalable solutions that work silently behind the scenes or dazzle on the frontend. Whether it&rsquo;s untangling spaghetti logic, automating tests for bulletproof apps, or teaching machines to think, I thrive where logic meets creativity.
            </h1>

            <h3 className="md:font-normal pl-10 font-medium md:text-base  text-xs text-[#ffffff52]">
              Scroll down to discover how I blend creativity and precision in
              my work!
            </h3>

            <div className="flex pt-5 pl-10 justify-between items-center">
              <a
                className="hover:text-black md:px-8 md:py-3 py-2 px-5 rounded-2xl cursor-pointer border-0 hover:bg-white shadow-md transition-all duration-500 ease-in-out md:text-[15px] text-base tracking-wider uppercase hover:tracking-widest bg-[#F0BB78] text-white active:tracking-widest active:bg-[#F0BB78] active:text-white active:shadow-none active:translate-y-[10px]"
                type="button"
                href="Resume-Savin.pdf"
                download="Resume-Savin.pdf"
              >
                Get My <span className="font-bold text-black">Resume</span>
              </a>

              <div className=" gap-6 px-3  hidden border py-2 border-white rounded-2xl">
                <a
                  href="mailto:savinshaij19@gmail.com"
                  className="text-white hover:text-[#F0BB78] transition-all duration-300"
                >
                  <FiMail className="text-2xl md:text-3xl opacity-70" />
                </a>
                <a
                  href="https://github.com/savinshaij"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-[#F0BB78] transition-all duration-300"
                >
                  <FiGithub className="text-2xl md:text-3xl opacity-70" />
                </a>
                <a
                  href="https://www.instagram.com/_savin_shaij_/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-[#F0BB78] transition-all duration-300"
                >
                  <FiInstagram className="text-2xl md:text-3xl opacity-70" />
                </a>
                <a
                  href="https://www.linkedin.com/in/savin-p-s-652665275/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-[#F0BB78] transition-all duration-300"
                >
                 <FiLinkedin className="text-2xl md:text-3xl opacity-70" />


                </a>
              </div>
            </div>
          </TextFade>
        </div>

        <div className="w-full md:pt-0 h-32 flex justify-center items-center relative">
          <div className="md:text-slate-900 h-full flex md:w-0 w-full md:justify-center justify-around">
            <a href="mailto:savinshaij19@gmail.com">
              <div className="flex md:bg-[#fff] rounded-bl-3xl rounded-tl-3xl md:rounded-tl-none justify-center items-center duration-300 transition-all hover:bg-[#F0BB78] md:h-16 h-14 md:w-24 hover:h-24 hover:rounded-b-3xl">
                <FiMail className="font-light md:text-4xl text-3xl" />
              </div>
            </a>
            <a
              href="https://github.com/savinshaij"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex justify-center items-center md:border-l-2 border-black duration-300 md:bg-white transition-all hover:bg-[#F0BB78] md:h-16 h-14 md:w-24 hover:h-24 hover:rounded-b-3xl">
                <FiGithub className="md:text-4xl text-3xl" />
              </div>
            </a>
            <a
              href="https://www.instagram.com/_savin_shaij_/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex md:border-l-2 border-black md:bg-white justify-center items-center duration-300 transition-all hover:bg-[#F0BB78] md:h-16 h-14 md:w-24 hover:h-24 hover:rounded-b-3xl">
                <FiInstagram className="md:text-4xl text-3xl" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/savin-p-s-652665275/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex rounded-br-3xl rounded-tr-3xl md:rounded-tr-none md:border-l-2 border-black justify-center items-center transition-all md:bg-white duration-300 hover:bg-[#F0BB78] md:h-16 h-14 md:w-24 hover:h-24 hover:rounded-b-3xl">
                <FiLinkedin className="md:text-4xl text-3xl" />
              </div>
            </a>
          </div>
        </div>
      </div>

      <BackgroundBeams />
    </div>
  );
};

export default Hero;
