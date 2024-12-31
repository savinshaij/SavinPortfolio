"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const NavBar2 = () => {
  return (
    <div className=" hidden z-50 top-0 left-0 right-0 fixed py-5 md:flex justify-center">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="flex w-fit rounded-full font-bold border border-white backdrop-blur-lg bg-transparent p-1"
    >
        <AnchorLink href="#home">
      <Tab setPosition={setPosition}>Home</Tab>
      </AnchorLink>
      <AnchorLink href="#skills">
      <Tab setPosition={setPosition}>Skills</Tab>
      </AnchorLink>
      <AnchorLink href="#exp">
        <Tab setPosition={setPosition}>Works</Tab>
      </AnchorLink>
      <AnchorLink href="#contact">
      <Tab setPosition={setPosition}>Contacts</Tab>
      </AnchorLink>
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-[#ffffffd2] mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      className="absolute z-0 h-7 rounded-full bg-white md:h-12"
    />
  );
};