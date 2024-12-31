"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Enlarge = ({ children }) => {
  const ref = useRef(null);

  // UseScroll for tracking the animation of the specific section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"], // Animation triggers between 0 and 1
  });

  // Animations
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mb-12"
    >
      {children}
    </motion.div>
  );
};

export default Enlarge;
