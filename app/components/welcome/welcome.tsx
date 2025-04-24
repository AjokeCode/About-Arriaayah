"use client"
import Image from "next/image";
import Mobileheader from "./mobile-header";
import Greeting from "./greeting";
import About from "./about";
import { arLogo2 } from "@/public/images";
import { handImg } from "@/public/images";
import Footer from "./Footer";
import {motion} from "framer-motion"

const Welcome = () => {
  return (
    <div
   
      className="w-full flex flex-col gap-4 pb-5 max-md:bg-white"
    >
         <div className="pt-4 md:flex hidden w-full">
      <div className="gap-4 items-center bg-[white] p-3 rounded-[1rem] text-black w-full flex ">
    <Image src={handImg} alt="img" className=" h-5 w-5" />
        <h1 className="text-[1rem] font-medium">Welcome</h1>
      </div>
      </div>
      <Mobileheader />
      <motion.div  initial={{ y: "50%", opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: "50%", opacity: 0 }}
    transition={{ duration: 0.6, ease: "easeInOut" }} className=" bg-white md:rounded-[1rem] ">
        <div className="flex flex-col gap-8 p-5 max-w-screen-md md:mx-auto">
      <div className="flex flex-col gap-5">
      <div className="bg-[#0362F2] rounded-[14px] flex items-center justify-center py-5">
        <div className="flex items-center gap-4 text-white">
        <div className='bg-[#fff] flex items-center justify-center rounded-full h-12 w-12 '>
              <Image src={arLogo2} alt='logo-image' className='w-5  ' />
            </div>
            <div className="">
              <h1 className="font-[500] text-xl tracking-[0.5px]  ">Ar-Ri&apos;aayah Academy</h1>
              <p className="text-xs font-[400]">Caring for muslims with busy schedules</p>
            </div>
        </div>
      </div>
      <Greeting />
      </div>
      <About />
      <div className="text-[#535862] text-[1rem] flex flex-col gap-4 font-[400]">
        <p>
          At Ar-Ri&apos;aayah Academy, our goal is to help every Muslim access quality Islamic education—regardless of how packed their schedule might be.
        </p>
        <p>
          Start your journey with us today, and make every step a step closer to growth and knowledge.
        </p>
      </div>
     <Footer/>
      </div>
      </motion.div>
    </div>
  );
};
export default Welcome;
