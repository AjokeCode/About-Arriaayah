"use client";

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
import { usePathname } from "next/navigation";

const Dashboard = () => {
  const pathname = usePathname();
  const getLinkClassName = (path: string) =>
    `${
      pathname === path
        ? "bg-blue-100 flex w-5/6 h-9 pr-2 self-center items-center pl-4 gap-3 rounded-lg"
        : "flex w-5/6 h-9 pr-2 self-center items-center bg-white pl-4 gap-3 rounded-lg"
    }`;
  return (
    <div
      className="md:flex hidden flex-col gap-6 h-full sticky top-0 z-20 bg-white w-1/5 border-r pt-6 text-sm font-medium text-white"
      style={{
        borderColor: "rgba(224, 224, 224, 1)",
        letterSpacing: "6%",
      }}
    >
      <div className="flex gap-1 items-center">
        <Image src={img8} alt="img" />
        <div className="flex flex-col gap-1">
          <h1 className="text-base" style={{ color: "rgba(51, 51, 51, 1)" }}>
            Techeeroh Academy
          </h1>
          <h2
            className="text-xs font-normal"
            style={{ color: "rgba(170, 170, 170, 1)" }}
          >
            Islamic Knowledge and Tech skills
          </h2>
        </div>
      </div>
      <div
        className="w-5/6 h-9 text-white font-medium text-sm rounded-lg text-center pt-2 self-center"
        style={{ backgroundColor: "rgba(0, 30, 154, 1)" }}
      >
        <Link href={"/enroll"}>Enroll Now</Link>
      </div>
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
        <Image src={img2} alt="img" />
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
      <div className={getLinkClassName("/techtraining")}>
        <Image src={img5} alt="img" />
        <Link
          href={"/techtraining"}
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
      <div
        className="flex w-5/6 text-center h-9 self-center rounded-lg pt-2"
        style={{
          backgroundColor: "rgba(245, 245, 245, 1)",
        }}
      >
        <Image src={img8} alt="img" />
        <p className="font-normal" style={{ color: "rgba(51, 51, 51, 1)" }}>
          Techeeroh Academy
        </p>
      </div>
    </div>
  );
};
export default Dashboard;
