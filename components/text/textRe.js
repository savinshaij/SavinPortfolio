"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Utility function to conditionally combine class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const TextRevealByWord = ({ text, className }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh] text-center", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[50%]  max-w-5xl items-center text-center   bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <p
          ref={targetRef}
          className={
            "flex flex-wrap text-2xl text-center font-bold text-white/20 md:text-3xl lg:text-4xl "
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 text-center relative mx-1 lg:mx-2.5 " >
      <span className={"absolute opacity-30 text-center"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-white text-center  "}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
