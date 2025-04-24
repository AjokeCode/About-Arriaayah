"use client";

import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import { useState } from "react";
import { arLogo2 } from "@/public/images";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { handImg, laptopImg, bookImg, manhajImg, timeImg, paymentImg } from "@/public/images";
import { motion, AnimatePresence } from "framer-motion";
const links = [
  {src: handImg, text: "welcome", state: "/"},
  {src: manhajImg, text: "our manhaj & tutors", state: "/manhaj"},
  {src: bookImg, text: "our curriculum", state: "/curriculum"},
  {src: timeImg, text: "class Schedules", state: "/schedule"},
  {src: laptopImg, text: "Tech Training", state: "/techtraining"},
  {src: paymentImg, text: "payment", state: "/payment"}

]
type OverlayType = {
  // isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;

}
const Mobileheader = () => {
  const [exitAnim, setExitAnim] = useState(false);
  const pathname = usePathname();
  const [isclick, setIsclick] = useState(false);
   const handleHomeClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 500);
      };
  return (
    <>
      <div className="md:hidden px-3 flex justify-between items-center sticky top-0 z-50 bg-white h-16 shadow-sm">
      <div className='flex items-center gap-3  '>
            
            <div className='bg-[#fff] flex items-center justify-center rounded-full h-9 w-9 md:h-10  md:w-10 border border-[#F6FCFF] shadow-sm' onClick={handleHomeClick}>
                <Image src={arLogo2} alt='logo-image' className=' w-4 md:w-5 '/>
            </div>

            <div>
                <h1 className='font-semibold text-[14px] sm:text-[1rem] lg:text-xl text-[#19213D]'>
                    Ar-Ri&apos;aayah Academy</h1>
            </div>
        </div>
        <button className='md:hidden outline-none text-[#414651] bg-[#0362F2] h-8 w-8 rounded-full flex items-center justify-center' onClick={()=>setIsclick(true)}>
            <Menu className="w-4 text-[#FFFFFF]"/>
        </button>
       
      </div>
      {isclick && (
         <AnimatePresence>
          {!exitAnim && (
                <motion.section
                className="fixed inset-0 flex flex-col items-center justify-center h-screen z-[1500]"
                style={{
                  backgroundColor: "#ffffff",
                  color: "rgba(13, 12, 34, 1)",
                }}
                key="mobile-menu"
            initial={{ opacity: 0, scale:0.9}}
            animate={{ opacity: 1, scale:1 }}
            exit={{ opacity: 0,  scale:0.9}}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <AiOutlineClose
                  className="text-2xl absolute top-4 right-12 cursor-pointer"
                  onClick={() => setIsclick(false)}
                  style={{ color: "rgba(60, 66, 66, 1)" }}
                />
                <ul className="space-y-8 text-center" style={{ color: "#807D7E" }}>
                {links.map((link, index)=>(
                  <Link href={link.state} className={`${pathname === link.state ? "bg-[#F4F8FE] flex p-3 items-center gap-3 rounded-[10px] border-l-[2px] border-l-[#0362F2] rounded-tl-[12px] rounded-bl-[12px] font-[500] text-sm text-[#0362F2]": "flex items-center bg-white  gap-3 p-3 text-[#333333] font-[400] text-sm"}`} key={index}>
                  <Image src={link.src} alt={`${link.state}-img`} width={18}/>
                  <p
                    className=" text-sm capitalize font-[400]"
                  >
                    {link.text}
                  </p>
                </Link>
              ))}
                </ul>
              </motion.section>
          )}
    
        </AnimatePresence>
      )}
    </>
  );
};
export default Mobileheader;
