"use client";

import Mobileheader from "../components/welcome/mobile-header";
import Curriculum2 from "./curriculum2";
import Curriculum3 from "./curriculum3";
import Image from "next/image";
import Curriculum4 from "./curriculum4";
import {  bookImg, } from "@/public/images";
import Footer from "../components/welcome/Footer";
import { motion } from "framer-motion";
const Curriculum1 = () => {
  return (
    <div
    className="w-full flex flex-col gap-4 pb-5 max-md:bg-white "
  >
      <div className="pt-4 md:flex hidden">
      <div className="gap-4 items-center bg-[white] p-3 rounded-[1rem] text-black w-full flex ">
          <Image src={bookImg} alt="img" />
          <h1 className="text-[1rem] font-medium">Our Curriculum</h1>
        </div>
      </div>
      <Mobileheader />
      <motion.div  initial={{ y: "40%", opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: "40%", opacity: 0 }}
    transition={{ duration: 0.6, ease: "easeInOut" }} className=" bg-white md:rounded-[1rem] ">
        <div className="flex flex-col gap-8 p-5 max-w-screen-md md:mx-auto">
        <div className="flex flex-col gap-10">
      <Curriculum2 />
      <Curriculum3 />
      <Curriculum4 />
      <Footer/>
      </div>
      </div>
      </motion.div>
    </div>
  );
};
export default Curriculum1;
