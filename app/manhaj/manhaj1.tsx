"use client"
import Image from "next/image";
import Mobileheader from "../components/welcome/mobile-header";
import Link from "next/link";
import ManhajandTutor from "./manhajtutor";
import ExpandableProfileList from "./Expandable";
import {  manhajImg,  } from "@/public/images";
import { motion } from "framer-motion";

const Manhaj1 = () => {
  return (
    <div
    className="w-full flex flex-col gap-4 pb-5 max-md:bg-white"
    
  >
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
        <div className="flex flex-col gap-5">
          <ManhajandTutor />
          <ExpandableProfileList />
          <div className="md:flex md:items-center md:justify-start w-full">
      <Link href={"/enroll"}
        className="text-white font-medium text-sm rounded-[14px]  justify-center bg-[#0362F2] p-3 px-6 flex"
      >
        Enroll Now
      </Link>
      </div>
      <p className="text-[1rem] font-[400] text-[#535862] text-center md:hidden">
        Enrolment deadline: <span className= "text-[#FF7800]">15th August, 2024</span>
      </p>
      </div>
      </div>
      </motion.div>
    </div>
  );
};
export default Manhaj1;
