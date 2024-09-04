"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import img2 from "./Logo (3).svg";
import Image from "next/image";
import { useState } from "react";

const Mobileheader = () => {
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
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      ) : (
        <></>
      )}
    </>
  );
};
export default Mobileheader;
