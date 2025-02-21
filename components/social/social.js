"use client";
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";

const SocialIcons = () => {
  return (
    <div className="fixed z-50 bottom-10 right-10 p-4 flex flex-col items-center gap-6 border border-white rounded-2xl bg-[#00000060] backdrop-blur-md">
      <a
        href="mailto:savinshaij19@gmail.com"
        className="text-white hover:text-[#F0BB78] transition-all duration-300"
      >
        <FiMail className="text-3xl md:text-4xl" />
      </a>
      <a
        href="https://github.com/savinshaij"
        target="_blank"
        rel="noreferrer"
        className="text-white hover:text-[#F0BB78] transition-all duration-300"
      >
        <FiGithub className="text-3xl md:text-4xl" />
      </a>
      <a
        href="https://www.instagram.com/_savin_shaij_/"
        target="_blank"
        rel="noreferrer"
        className="text-white hover:text-[#F0BB78] transition-all duration-300"
      >
        <FiInstagram className="text-3xl md:text-4xl" />
      </a>
      <a
        href="https://www.linkedin.com/in/savin-p-s-652665275/"
        target="_blank"
        rel="noreferrer"
        className="text-white hover:text-[#F0BB78] transition-all duration-300"
      >
        <FiLinkedin className="text-3xl md:text-4xl" />
      </a>
    </div>
  );
};

export default SocialIcons;
