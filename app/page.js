import ContactPage from "../components/contact/contact";
import Hero from "../components/hero/Hero";
import { RevealBento as FeaturesGrid } from "../components/moreinfo/moreinfo2"; // Fix: Use named import
import MyWorks from "../components/myWorks/myWorks";
import NavMob from "../components/navbar/mobNav";
import { NavBar2 } from "../components/navbar/NavBar";
import NewSkills from "../components/newSkill/Skills";
import SkillText from "../components/skilltext/skilltext";
import  MarqueeDemo  from "../components/marquee/DemoMarquee";
import Testimonial from "../components/marquee/Testimonial"
export default function Home() {
  return (
    <div
      className="scroll-smooth w-full h-full "
     
    >
      <NavMob />
      <NavBar2 />
      <div className=" snap-y snap-mandatory overflow-y-scroll  hide-scrollbar "// i dont want to see that scroll bar hide it
      style={{ height: "100vh" }}
      >
      <section className="snap-start">
      <Hero />
      </section>
      
        <section className="snap-start">
        <FeaturesGrid />
      </section>
      </div>

   

      
        <SkillText />
        <NewSkills />
        <MyWorks />
        <Testimonial/>
        <ContactPage />
      

      <div className="flex text-white w-full justify-center my-10 mt-20 items-center">
        <p className="font-light md:text-lg text-[#ffffff7e]">
          Made by Savin | Copyright © {new Date().getFullYear()} - All right
          reserved
        </p>
      </div>
    </div>
  );
}
