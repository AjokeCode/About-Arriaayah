"use client";
import { useState } from "react";
import Image from "next/image";
import img1 from "./👋.png";
import img2 from "./🎯.png";
import img3 from "./📕.png";
import img4 from "./⏰.png";
import img5 from "./💻.png";
import img6 from "./⭐.png";
import img7 from "./💰.png";
import img8 from "./Logo (4).svg";
import Link from "next/link";
import { arLogo3 } from "@/public/images";
import { handImg, laptopImg, bookImg, manhajImg, timeImg, paymentImg } from "@/public/images";
import { usePathname } from "next/navigation";

const links = [
  {src: handImg, text: "welcome", state: "/"},
  {src: manhajImg, text: "our manhaj & tutors", state: "/manhaj"},
  {src: bookImg, text: "our curriculum", state: "/curriculum"},
  {src: timeImg, text: "class Schedules", state: "/schedule"},
  {src: laptopImg, text: "Tech Training", state: "/techtraining"},
  {src: paymentImg, text: "payment", state: "/payment"}

]
const Dashboard = () => {
  const pathname = usePathname()
  const [path, setPath] = useState("/")
    const handleHomeClick = (e: React.MouseEvent) => {
      e.preventDefault();
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 500);
    };
  return (
    <div
      className="md:flex hidden flex-col gap-6 h-full sticky top-0  bg-white w-[35%] px-3 pt-8 text-sm font-medium text-white min-h-screen "
      style={{
        borderColor: "rgba(224, 224, 224, 1)",
        letterSpacing: "6%",
      }}
    >
      <div className="flex items-center justify-center">
        <div className='bg-[#0362F2] flex justify-center items-center h-10 w-10  rounded-full' 
          onClick={handleHomeClick}>
          <Image src={arLogo3} alt='logo-image' className='w-4'/>
        </div>
      </div>
      <div className=''>
      <Link  href="https://arriaayah.com/EnrollmentForm" className="bg-[#0362F2] text-white px-6 py-2.5 rounded-[10px] text-xs font-[400]  hover:bg-blue-700 transition flex items-center justify-center outline-none">
                Enroll now 
                </Link>
            </div>
      <div className="flex flex-col gap-3">
        {links.map((link, index)=>(
            <Link href={link.state} className={`${pathname === link.state ? "bg-[#F4F8FE] flex p-3 items-center gap-3 rounded-[10px] border-l-[2px] border-l-[#0362F2] rounded-tl-[12px] rounded-bl-[12px] font-[500] text-sm text-[#0362F2]": "flex items-center bg-white  gap-3 p-3 text-[#333333] font-[400] text-sm"}`} onClick={()=>setPath(link.state)} key={index}>
            <Image src={link.src} alt={`${link.state}-img`} width={18}/>
            <p
              className=" text-sm capitalize font-[400]"
            >
              {link.text}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Dashboard;
