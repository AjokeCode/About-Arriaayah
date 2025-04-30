"use client"
import Image from "next/image";
import Mobileheader from "../components/welcome/mobile-header";
import ManhajandTutor from "./manhajtutor";
import ExpandableProfileList from "./Expandable";
import {  manhajImg,  } from "@/public/images";
import { motion } from "framer-motion";
import Footer from "../components/welcome/Footer";

const Manhaj1 = () => {
  return (
    <div
    className="w-full flex flex-col gap-4 pb-5 max-md:bg-white">
       <div className="pt-4 md:flex hidden">
       <div className="gap-4 items-center bg-[white] p-3 rounded-[1rem] text-black w-full flex ">
          <Image src={manhajImg} alt="img" className=" h-5 w-5"/>
          <h1 className="text-[1rem] font-medium">Our Manhaj and Tutors</h1>
        </div>
        </div>
        <Mobileheader />
        <motion.div  initial={{ y: "40%", opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: "40%", opacity: 0 }}
    transition={{ duration: 0.6, ease: "easeInOut" }} className=" bg-white md:rounded-[1rem] ">
        <div className="flex flex-col gap-8 p-5 max-w-screen-md md:mx-auto">
        <div className="flex flex-col gap-10">
          <ManhajandTutor />
          <ExpandableProfileList />
          <Footer/>
        </div>
      </div>
      </motion.div>
    </div>
  );
};
export default Manhaj1;
