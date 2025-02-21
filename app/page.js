

import ContactPage from "@/components/contact/contact";


import Hero from "@/components/hero/Hero";
import FeaturesGrid from "@/components/moreinfo/moreInfo";
import MyWorks from "@/components/myWorks/myWorks";
import NavMob from "@/components/navbar/mobNav";
import { NavBar2 } from "@/components/navbar/NavBar";
import NewSkills from "@/components/newSkill/Skills";
import SkillText from "@/components/skilltext/skilltext";
import SocialIcons from "@/components/social/social";

export default function Home() {
  return (
    <div className=" scroll-smooth w-full  h-full">
    <h1 className=" fixed  bottom-1 right-1">o</h1>

       <NavMob/>
      <NavBar2 />
      <Hero />
      <FeaturesGrid/>
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
