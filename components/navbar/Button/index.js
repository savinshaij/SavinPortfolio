import { motion } from 'framer-motion';

export default function Button({ isActive, toggleMenu }) {
  return (
    <div className="absolute top-0 right-0 text-sm  w-16  h-7 cursor-pointer rounded-full overflow-hidden">
      <motion.div
        className="relative w-full h-full"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className="w-full h-full bg-white flex justify-center items-center"
          onClick={toggleMenu}
        >
          <PerspectiveText label="Menu" />
        </div>
        <div
          className="w-full h-full bg-black text-white flex justify-center items-center"
          onClick={toggleMenu}
        >
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
}

function PerspectiveText({ label }) {
  return (
    <div className="flex  flex-col justify-center items-center h-full w-full transform-style-3d transition-transform duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)]">
      <p className="transition-all duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)] uppercase pointer-events-none">
        {label}
      </p>
      <p className="absolute origin-bottom-center transform -rotate-x-90 translate-y-2 opacity-0 transition-all duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)] uppercase pointer-events-none">
        {label}
      </p>
    </div>
  );
}
