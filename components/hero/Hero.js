"use client";
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";


const Hero = () => {
    return (
        <div className=" containerr text-white h-screen flex justify-center items-center w-full " id="home">
            <div className=" md:w-[50%] ">
                <div className=" w-full md:p-10 p-5 relative rounded-2xl border border-[#ffffff6e] backdrop-blur-[1px] md:bg-[#ffffff06]" >
                    <h2 className=" md:text-xl text-base font-semibold py-2 ">Hi, Glad You&rsquo;re Here! &#x1F31F;</h2>
                    <h1 className="  md:text-8xl text-6xl font-black">
                        I&rsquo;m <span className=" text-[#F0BB78]">Savin</span>,
                    </h1>
                    <h1 className=" py-3 md:font-light font-medium md:text-xl text-base text-[#ffffff9c]">
                        a <span className=" font-bold text-white">Full-Stack Developer</span> who crafts pixel-perfect and innovative digital experiences. Every project I build is driven by attention to detail and a touch of creativity.
                        Currently pursuing B.Tech in Computer Science at VIT University, I strive to bring ideas to life in ways that matter.
                    </h1>
                    <h3 className=" md:font-normal font-medium md:text-base text-sm text-white">
                        Scroll down to discover how I blend creativity and precision in my work!
                    </h3>
                    <div className="flex pt-5">
                        <a
                            className=" text-black md:px-8 md:py-3 py-2 px-5 rounded-2xl cursor-pointer border-0 bg-white shadow-md transition-all duration-500 ease-in-out md:text-[15px] text-base tracking-wider uppercase hover:tracking-widest hover:bg-[#F0BB78] hover:text-white active:tracking-widest active:bg-[#F0BB78] active:text-white active:shadow-none active:translate-y-[10px]"
                            type="button"
                            href="Resume-Savin.pdf"
                            download="Resume-Savin.pdf"
                        >
                            Get My <span className=" font-bold text-black ">Resume</span>
                        </a>
                    </div>
                </div>
                {/* Fixed height for the parent div */}
                <div className="w-full pt-16 md:pt-0 h-32 flex justify-center items-center relative">
                    <div className="text-slate-900 h-full flex">
                        <a href="mailto:savinshaij19@gmail.com">
                            <div className="flex bg-[#fff] rounded-bl-3xl rounded-tl-3xl md:rounded-tl-none  justify-center items-center duration-300 transition-all hover:bg-[#F0BB78] md:h-16 h-14 md:w-24 w-14 hover:h-24 hover:rounded-b-3xl">
                                <FiMail className="font-light md:text-4xl text-3xl" />
                            </div>
                        </a>
                        <a href="https://github.com/savinshaij" target="_blank" rel="noreferrer">
                            <div className="flex justify-center items-center border-l-2 border-black duration-300 bg-white transition-all hover:bg-[#F0BB78] md:h-16 h-14 md:w-24 w-14 hover:h-24 hover:rounded-b-3xl">
                                <FiGithub className="md:text-4xl text-3xl" />
                            </div>
                        </a>
                        <a href="https://www.instagram.com/_savin_shaij_/" target="_blank" rel="noreferrer">
                            <div className="flex border-l-2 border-black bg-white justify-center items-center duration-300 transition-all hover:bg-[#F0BB78] md:h-16 h-14 md:w-24 w-14 hover:h-24 hover:rounded-b-3xl">
                                <FiInstagram className="md:text-4xl text-3xl" />
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/savin-p-s-652665275/" target="_blank" rel="noreferrer">
                            <div className="flex rounded-br-3xl rounded-tr-3xl md:rounded-tr-none border-l-2 border-black justify-center items-center transition-all bg-white duration-300 hover:bg-[#F0BB78] md:h-16 h-14 md:w-24 w-14 hover:h-24 hover:rounded-b-3xl">
                                <FiLinkedin className="md:text-4xl text-3xl" />
                            </div>
                        </a>
                    </div>
                    
                </div>
      

               
            </div>
         
        </div>
    );
};

export default Hero;
 