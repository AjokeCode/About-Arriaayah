"use client";

import Mobileheader from "../components/welcome/mobile-header";
import Curriculum2 from "./curriculum2";
import Curriculum3 from "./curriculum3";
import img2 from "./📕 (1).png";
import Image from "next/image";
import Link from "next/link";
import Curriculum4 from "./curriculum4";

const Curriculum1 = () => {
  return (
    <div
      className="md:w-4/5 w-full bg-white py-6"
      style={{ color: "rgba(51, 51, 51, 1)" }}
    >
      <div
        className="md:flex hidden gap-4 items-center mb-4 pl-4 border-b"
        style={{ outlineColor: "rgba(224, 224, 224, 1)" }}
      >
        <Image src={img2} alt="img" />
        <h1 className="text-lg font-medium">Our Curriculum</h1>
      </div>
      <Mobileheader />
      <Curriculum2 />
      <Curriculum3 />
      <Curriculum4 />
      <div className="md:ml-28 mt-6 ml-6">
        <h1 className="text-2xl font-bold mb-4">Books Curriculum</h1>
        <p className="text-xl font-normal">
          Below are summary of the topics of the books that will be taken one
          after the other in each class with advancement in the books as the
          level advances. Qur'an is constant and once per week for each student.
        </p>
      </div>
      <div
        className="md:w-44 w-11/12 h-12 md:ml-28 mt-6 ml-6 text-white font-medium text-sm rounded-lg text-center pt-4 justify-self-center"
        style={{ backgroundColor: "rgba(0, 30, 154, 1)" }}
      >
        <Link href={"/enroll"}>Enroll Now</Link>
      </div>
      <p className="text-xl font-normal mt-4 md:ml-28 ml-8">
        Enrolment deadline:
        <span style={{ color: "rgba(255, 121, 0, 1)" }}>15th August, 2024</span>
      </p>
    </div>
  );
};
export default Curriculum1;
