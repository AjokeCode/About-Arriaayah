import Image from "next/image";
import img1 from "../dashboard/Logo (4).svg";
import { arLogo2 } from "@/public/images";
import { CheckCircle } from "lucide-react";


const points = [
  "Ability to read, recite and memorize the Qura'n with sound Tajweed.",
  "Ability to memorize the Qur'an at their own pace (No group memorization).",
  "Strong foundational knowledge of the islamic principles with sound ideology of the pious predecessors.",
  "Ability to understand and speak Arabic Language fluently and read Arabic texts with ease(If serious and consistent).",
  "Ability to seek-out Islamic studies resources (schlars and texts).",
  "Oppurtunity to kickstart a career in tech preparing students for the future.."
];
const Curriculum3 = () => {
  return (
  <div className=" py-6 px-4 bg-[#EDF8FF] rounded-2xl">
        <div
          className="flex md:flex-row flex-col font-medium gap-5"
        >
          <div>
         <div className='bg-[#fff] flex items-center justify-center rounded-full h-10 w-10 '>
                  <Image src={arLogo2} alt='logo-image' className='w-4 ' />
          </div>
          </div>
          <div className="">
         
            <h1 className=" text-lg text-[#414651] font-[600]">
            What students will gain by enrolling with us:
            </h1>
            <ul className="space-y-3">
          {points.map((point, index) => (
            <li key={index} className="text-[#535862] font-[400]">
              {point}
            </li>
          ))}
        </ul>
          </div>
        </div>
      </div>
  );
};
export default Curriculum3;
