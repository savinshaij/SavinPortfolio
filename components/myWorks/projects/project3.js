
import Image from "next/image";
import de from "../../../public/wc.png";
const Project3 = () => {
  return (
    <section className=" font-poppins md:w-4/6 px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center md:gap-8 gap-6 max-w-6xl mx-auto">
        <Image src={de} alt="Network is slow to load this pic"
      loading="lazy"
      className=" md:hidden flex"
      
      />
      <div>
        {/* <span className="block mb-4 text-xs md:text-sm text-[#ffffff17] font-medium">
          #project 1
        </span> */}
        <h3 className="text-4xl text-teal-500 md:text-6xl font-semibold">
          WasteConnect
        </h3>
        <p className="text-base md:text-lg font-light text-zinc-500 mt-2 md:mt-4">
       WasteConnect lets users manage waste efficiently by reporting disposal issues, registering for garbage collection, and tracking requests, all from one easy-to-use platform.
        </p>
        <div className=" flex py-6 md:gap-5 gap-2 text-center ">
        <div className=" flex justify-center items-center md:text-sm text-xs border font-poppins rounded-xl border-[#ffffff7c] md:py-2 md:px-3 py-1 px-2 text-[#ffffff60]">react</div>
        <div className="flex justify-center items-center md:text-sm text-xs border font-poppins rounded-xl border-[#ffffff7c] md:py-2 md:px-3 py-1 px-2 text-[#ffffff60]">mongoDB</div>
        <div className="flex justify-center items-center md:text-sm text-xs border font-poppins rounded-xl border-[#ffffff7c] md:py-2 md:px-3 py-1 px-2 text-[#ffffff60]">CSS</div>
        <div className="flex justify-center items-center md:text-sm text-xs border font-poppins rounded-xl border-[#ffffff7c] md:py-2 md:px-3 py-1 px-2 text-[#ffffff60]">expressjs</div>
        </div>
      
        <a className=" border rounded-xl  bg-white font-medium py-2 px-4 transition-all active:scale-95"
        href="https://github.com/savinshaij/waste-connect/" target="_blank" rel="noreferrer"
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


export default Project3;