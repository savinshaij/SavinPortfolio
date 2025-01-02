'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from './Button/index';
import Nav from './Nav/index';

const menu = {
  open: {
    width: "100%",
    height: "650px",
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
  },
  closed: {
    width: "4rem",
    height: "1.75rem",
    top: "0px",
    right: "0px",
    transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
  }
};

export default function NavMob() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="fixed z-30  md:hidden top-3 right-3">
      <motion.div
        className={`relative  bg-white rounded-2xl`}
        style={{ overflow: 'hidden' }}
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>
          {isActive && <Nav />}
        </AnimatePresence>
      </motion.div>
      <Button isActive={isActive} toggleMenu={() => setIsActive(!isActive)} />
    </div>
  );
}
