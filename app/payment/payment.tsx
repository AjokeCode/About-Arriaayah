import Image from "next/image";
import img2 from "../components/dashboard/💰.png";
import Mobileheader from "../components/welcome/mobile-header";
import Link from "next/link";
import Payment2 from "./payment2";

const Payment1 = () => {
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
        <h1 className="text-lg font-medium">Our Manhaj and Tutors</h1>
      </div>
      <Mobileheader />
        <Payment2/>
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
export default Payment1;