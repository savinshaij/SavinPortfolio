
import Image from "next/image";
import de from "../../../public/stp.png";
const Project2 = () => {
  return (
    <section className="  font-poppins w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center md:gap-32 max-w-6xl mx-auto">
    <Image src={de} alt="Network is slow to load this pic"
    loading="lazy"
   
    />
    <div>
      {/* <span className="block mb-4 text-xs md:text-sm text-[#ffffff17] font-medium">
        #project 1
      </span> */}
      <h3 className="text-4xl text-orange-500 md:text-6xl font-semibold">
        Restaurent app
      </h3>
      <p className="text-base md:text-lg text-[#ffffffde] mt-2 md:mt-4">
      ST-Pizza simplifies food ordering with an intuitive interface that lets you browse menus, place orders, and make payments all in one seamless platform. Enjoy a hassle-free dining experience from the comfort of your home with ST-Pizza
      </p>
      <div className=" flex py-6 md:gap-5 gap-2 text-center ">
        <div className=" flex justify-center items-center md:text-sm text-xs border font-poppins rounded-xl border-[#ffffff7c] md:py-2 md:px-3 py-1 px-2 text-[#ffffff60]">Nextjs</div>
        <div className="flex justify-center items-center md:text-sm text-xs border font-poppins rounded-xl border-[#ffffff7c] md:py-2 md:px-3 py-1 px-2 text-[#ffffff60]">Tailwind</div>
        <div className="flex justify-center items-center md:text-sm text-xs border font-poppins rounded-xl border-[#ffffff7c] md:py-2 md:px-3 py-1 px-2 text-[#ffffff60]">MongoDB</div>
        <div className="flex justify-center items-center md:text-sm text-xs border font-poppins rounded-xl border-[#ffffff7c] md:py-2 md:px-3 py-1 px-2 text-[#ffffff60]">Framer motion</div>
        </div>
    <div className="  md:flex justify-end items-end">
    <a className=" border rounded-xl  bg-white font-medium py-2 px-4 transition-all active:scale-95"
    href="https://github.com/savinshaij/ST-PIZZA/" target="_blank" rel="noreferrer" 
    >
        view the project
      </a>
    </div>
    
    </div>
   
  </section>
  );
};


export default Project2;