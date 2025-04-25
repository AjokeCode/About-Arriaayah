import Image from "next/image";
import img1 from "./👋 (1).png";
import { handImg } from "@/public/images";

const Greeting = () => {
  return (
    <div
      className="flex flex-col gap-5"
    >
      <div className="flex items-center gap-2">
        <Image src={handImg} alt="img" className=" h-9 w-9" />
        <h2 className="font-[500] text-2xl tracking-[0.5px] text-[#414651]">As-salaamu Alaykum!</h2>
      </div>
      <h2 className="font-[500] text-[1rem] text-[#414651]">Welcome to Ar-Ri&apos;aayah Academy; Caring for Muslims with busy schedules.</h2>
      <div className="flex flex-col gap-4 text-[#535862] text-[1rem] font-[400]">
        <p className="">
          Balancing life&apos;s responsibilities while seeking Islamic knowledge isn&apos;t always easy. That&apos;s why Ar-Ri&apos;aayah Academy (formerly Techeeroh Academy) was created, to make learning Islamic knowledge accessible, flexible, and sustainable for people with busy schedules.
        </p>
        <p>
          We offer bite-sized lessons, live and pre-recorded classes, and weekly progress tracking to help students, professionals, and remote workers build a solid foundation in Islam at their own pace without the rush.
        </p>
        <p>
          Whether you&apos;re starting your journey with the Qur&apos;an or deepening your understanding of Islamic principles, Ar-Ri&apos;aayah Academy is here to guide you step by step.
        </p>
       
      </div>
    </div>
  );
};
export default Greeting;
