'use client';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

export function LettersPullUp({ text, className = '' }) {
  const splittedText = text.split('');

  const pullupVariant = {
    initial: { y: 10, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className="flex">
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? 'animate' : ''}
          custom={i}
          className={`text-2xl font-bold ${className}`}
        >
          {current === ' ' ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}
