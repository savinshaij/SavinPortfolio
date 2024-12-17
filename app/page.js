

import ContactPage from "@/components/contact/contact";

import Hero from "@/components/hero/Hero";
import MyWorks from "@/components/myWorks/myWorks";
import { NavBar2 } from "@/components/navbar/NavBar";
import NewSkills from "@/components/newSkill/Skills";
import SkillText from "@/components/skilltext/skilltext";

export default function Home() {
  return (
    <div className=" scroll-smooth w-full h-full">
      <NavBar2 />
      <Hero />
      <SkillText />
      <NewSkills />
      <MyWorks />
      <ContactPage />
      <div className="flex text-white w-full justify-center my-10 mt-20 items-center">
        <p className=" font-light md:text-lg text-[#ffffff7e]">Made by Savin | Copyright © {new Date().getFullYear()} - All right reserved </p>
      </div>
    </div>
  );
}
