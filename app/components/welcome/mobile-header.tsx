"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import img2 from "./Logo (3).svg";
import Image from "next/image";
import { useState } from "react";
import img1 from "../dashboard/👋.png";
import img8 from "../dashboard/🎯.png";
import img3 from "../dashboard/📕.png";
import img4 from "../dashboard/⏰.png";
import img5 from "../dashboard/💻.png";
import img6 from "../dashboard/⭐.png";
import img7 from "../dashboard/💰.png";
import { usePathname } from "next/navigation";

const Mobileheader = () => {
  const pathname = usePathname();
  const getLinkClassName = (path: string) =>
    `${
      pathname === path
        ? "bg-blue-100 flex h-9 pr-2 self-center items-center pl-4 gap-4 rounded-lg"
        : "flex h-9 pr-2 self-center items-center bg-white pl-4 gap-4 rounded-lg"
    }`;
  const [isclick, setIsclick] = useState(false);
  return (
    <>
      <div className="md:hidden px-4 flex justify-between items-center md:mb-4 mb-2">
        <div className="flex gap-1 items-center">
          <Image src={img2} alt="img" />
          <h1 className="text-base" style={{ color: "rgba(51, 51, 51, 1)" }}>
            Techeeroh Academy
          </h1>
        </div>
        <div
          style={{ backgroundColor: "rgba(0, 30, 154, 1)" }}
          className="rounded-full h-8 w-8 flex items-center justify-center"
        >
          <RxHamburgerMenu
            onClick={() => setIsclick(true)}
            className="text-white text-xl"
          />
        </div>
      </div>
      {isclick ? (
        <nav
          className="fixed inset-0 flex flex-col items-center justify-center h-screen z-[1500]"
          style={{
            backgroundColor: "#ffffff",
            color: "rgba(13, 12, 34, 1)",
          }}
        >
          <AiOutlineClose
            className="text-2xl absolute top-4 right-12 cursor-pointer"
            onClick={() => setIsclick(false)}
            style={{ color: "rgba(60, 66, 66, 1)" }}
          />
          <ul className="space-y-8 text-center" style={{ color: "#807D7E" }}>
            <div className={getLinkClassName("/")}>
              <Image src={img1} alt="img" />
              <Link
                href={"/"}
                className="font-normal"
                style={{ color: "rgba(51, 51, 51, 0.7)" }}
              >
                Welcome
              </Link>
            </div>
            <div className={getLinkClassName("/manhaj")}>
              <Image src={img8} alt="img" />
              <Link
                href={"/manhaj"}
                className="font-normal"
                style={{ color: "rgba(51, 51, 51, 0.7)" }}
              >
                Our Manhaj & Tutors
              </Link>
            </div>
            <div className={getLinkClassName("/curriculum")}>
              <Image src={img3} alt="img" />
              <Link
                href={"/curriculum"}
                className=" font-normal"
                style={{ color: "rgba(51, 51, 51, 0.7)" }}
              >
                Curriculum
              </Link>
            </div>
            <div className={getLinkClassName("/schedule")}>
              <Image src={img4} alt="img" />
              <Link
                href={"/schedule"}
                className=" font-normal"
                style={{ color: "rgba(51, 51, 51, 0.7)" }}
              >
                Class Schedules
              </Link>
            </div>
            <div className={getLinkClassName("/tech")}>
              <Image src={img5} alt="img" />
              <Link
                href={"/tech"}
                className=" font-normal"
                style={{ color: "rgba(51, 51, 51, 0.7)" }}
              >
                Tech Training
              </Link>
            </div>
            <div className={getLinkClassName("/review")}>
              <Image src={img6} alt="img" />
              <Link
                href={"/review"}
                className=" font-normal"
                style={{ color: "rgba(51, 51, 51, 0.7)" }}
              >
                Student Reviews
              </Link>
            </div>
            <div className={getLinkClassName("/payment")}>
              <Image src={img7} alt="img" />
              <Link
                href={"/payment"}
                className=" font-normal"
                style={{ color: "rgba(51, 51, 51, 0.7)" }}
              >
                Payments
              </Link>
            </div>
          </ul>
        </nav>
      ) : (
        <></>
      )}
    </>
  );
};
export default Mobileheader;
