'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiChevronDown, FiEye, FiDownload } from 'react-icons/fi'

const GetResumrButton = () => {
  const [open, setOpen] = useState(false)

  const pdfUrl = '/Savin-Resume.pdf' 

  const handlePreview = () => {
    window.open(pdfUrl, '_blank')
    setOpen(false)
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = 'Savin-Resume.pdf'
    link.click()
    setOpen(false)
  }

  return (
   <div className="relative  inline-block text-left w-full md:w-auto">
  <motion.button
    onClick={() => setOpen((prev) => !prev)}
    className="w-full md:w-auto px-6 py-3 md:px-5 md:py-2 rounded-xl cursor-pointer border-0 hover:bg-[#F0BB78] shadow-md transition-all duration-500 ease-in-out text-sm tracking-wider uppercase hover:scale-110 bg-white text-black active:translate-y-1 inline-flex items-center justify-between md:justify-center gap-2"
    whileTap={{ scale: 0.95 }}
  >
    <span className="w-full text-center md:text-left">GET MY RESUME</span>
    <motion.span
      animate={open ? { rotate: 180 } : { rotate: 0 }}
      transition={{ duration: 0.2 }}
      className="ml-auto md:ml-0"
    >
      <FiChevronDown className="text-gray-500" />
    </motion.span>
  </motion.button>

      {open && (
        <motion.ul
          initial="closed"
          animate="open"
          exit="closed"
          variants={wrapperVariants}
          className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-xl bg-white shadow-xl ring-1 ring-black/5 overflow-hidden"
        >
          <DropdownItem icon={FiEye} text="Preview" onClick={handlePreview} />
          <DropdownItem icon={FiDownload} text="Download" onClick={handleDownload} />
        </motion.ul>
      )}
    </div>
  )
}

const DropdownItem = ({ icon: Icon, text, onClick }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={onClick}
      className="flex items-center gap-2 w-full p-3 text-xs font-medium whitespace-nowrap rounded-md hover:bg-[#F0BB78]  text-gray-700 hover:text-black transition-colors cursor-pointer"
    >
      <motion.span variants={iconMotion}>
        <Icon className="text-lg" />
      </motion.span>
      <span className="text-sm">{text}</span>
    </motion.li>
  )
}

export default GetResumrButton;

// Animation variants
const wrapperVariants = {
  open: {
    opacity: 1,
    scaleY: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  closed: {
    opacity: 0,
    scaleY: 0,
    transition: {
      when: 'afterChildren',
      duration: 0.2,
      ease: 'easeIn',
    },
  },
}

const itemVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -10 },
}

const iconMotion = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -5 },
}
