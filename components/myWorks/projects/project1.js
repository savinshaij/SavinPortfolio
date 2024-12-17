
import Image from "next/image";
import de from "../../../public/de.png";

const Project1 = () => {
  return (
    <section className=" font-poppins w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center md:gap-8 max-w-6xl mx-auto">
          <Image src={de} alt="Network is slow to load this pic"
    loading="lazy"
    className=" md:hidden flex"
    />
      <div>
      
        <h3 className="text-4xl text-yellow-500 md:text-6xl font-semibold">
          DayEcho
        </h3>
        <p className="text-base md:text-lg text-[#ffffffde] mt-2 md:mt-4">
        DayEcho revolutionizes social media by blending public sharing with private journaling. With a unique UI, stunning animations, and a focus on user experience, its the platform everyone is talking about
        </p>
        <div className=" flex py-6 md:gap-5 gap-2 text-center ">
        <div className=" flex justify-center items-center md:text-sm text-xs border font-poppins rounded-xl border-[#ffffff7c] md:py-2 md:px-3 py-1 px-2 text-[#ffffff60]">Nextjs</div>
        <div className="flex justify-center items-center md:text-sm text-xs border font-poppins rounded-xl border-[#ffffff7c] md:py-2 md:px-3 py-1 px-2 text-[#ffffff60]">Tailwind</div>
        <div className="flex justify-center items-center md:text-sm text-xs border font-poppins rounded-xl border-[#ffffff7c] md:py-2 md:px-3 py-1 px-2 text-[#ffffff60]">MongoDB</div>
        <div className="flex justify-center items-center md:text-sm text-xs border font-poppins rounded-xl border-[#ffffff7c] md:py-2 md:px-3 py-1 px-2 text-[#ffffff60]">Framer motion</div>
        </div>
      
        <a className=" border rounded-xl  bg-white font-medium py-2 px-4 transition-all active:scale-95"
         href="https://dayecho.vercel.app" target="_blank" rel="noreferrer" 
        >
          view the project
        </a>
      </div>
      <Image src={de} alt="Network is slow to load this pic"
      loading="lazy"
      className=" hidden md:flex"
      
      />
    </section>
  );
};


export default Project1;