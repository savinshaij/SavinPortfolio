"use client"
import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import {  FiMail, FiMapPin,FiInstagram } from "react-icons/fi";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";


export const RevealBento = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-zinc-900 px-4 py-12 text-zinc-50">
     
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        
      </motion.div>
      
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    
    <h1 className=" text-2xl md:text-xl font-medium leading-tight">
    Hobbies & Personal Strengths{" "}
      <span className="text-zinc-400">
      
      <ul className="list-disc text-base pl-0">
        <li className="flex items-center">
          <span className=" mr-2">⚪</span> I love researching and exploring new technologies.
        </li>
        <li className="flex items-center">
          <span className=" mr-2">⚪</span> Always looking for creative ways to solve problems.
        </li>
        <li className="flex items-center">
          <span className=" mr-2">⚪</span> Fast self-learner  I pick up new skills quickly.
        </li>
        <li className="flex items-center">
          <span className=" mr-2">⚪</span> A solid team player who collaborates well with others.
        </li>
      </ul>
      </span>
    </h1>
   
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-red-500 md:col-span-3"
    >
      <a
        href="https://www.instagram.com/_savin_shaij_/" target="_blank" rel="noreferrer"
        className="grid h-full place-content-center text-3xl text-white"
      >
          <FiInstagram />
        
        
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-green-600 md:col-span-3"
    >
      <a
        href="mailto:savinshaij19@gmail.com"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiGmail />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-zinc-50 md:col-span-3"
    >
      <a
        href="https://github.com/savinshaij" target="_blank" rel="noreferrer" 
        className="grid h-full place-content-center text-3xl text-black"
      >
        <SiGithub />
      
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-500 md:col-span-3"
    >
      <a
        href="https://www.linkedin.com/in/savin-p-s-652665275/" target="_blank" rel="noreferrer"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiLinkedin/> {/* Updated icon */}
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-2xl md:text-3xl leading-snug">
    <p>
     {" "}
      <span className="text-zinc-400">
      I build fast and make things that stand out. I always try new, creative ways to solve problems. I learn new tools quickly, and my skills in AI, ML, and software development help me build better, smarter projects.
      </span>
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <FiMapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">Cyberspace</p>
  </Block>
);

const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-9">
    <p className="mb-3 text-lg">Join my mailing list</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
      />
      <button
        type="submit"
        className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
      >
        <FiMail /> Join the list
      </button>
    </form>
  </Block>
);


const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="text-center text-zinc-400">
        Made with ❤️ by{" "}
        <a href="#" className="text-red-300 hover:underline">
          @tomisloading
        </a>
      </p>
    </footer>
  );
};