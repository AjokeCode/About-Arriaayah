import Image from "next/image";
import img1 from "../dashboard/Logo (4).svg";
import { arLogo2 } from "@/public/images";
import { CheckCircle } from "lucide-react";


const points = [
  "Learn at your own pace, no pressure, no tight deadlines.",
  "Flexible classes designed to fit your busy lifestyle.",
  "Weekly progress tracking for steady growth.",
  "A supportive community focused on continuous improvement."
];
const About = () => {
  return (
    <div className=" py-6 px-4 bg-[#EDF8FF] rounded-2xl">
      <div
        className="flex md:flex-row flex-col font-medium gap-5"
      >
       <div className='bg-[#fff] flex items-center justify-center rounded-full h-10 w-10 '>
          <Image src={arLogo2} alt='logo-image' className='w-4' />
        </div>
        <div className="">
          <h1 className=" text-lg text-[#414651] font-[600]">
          Why Choose Us?
          </h1>
          <ul className="space-y-3">
        {points.map((point, index) => (
          <li key={index} className="">
            <span className="text-[#535862] font-[400]"><span className="text-lg">✔</span> {point}</span>
          </li>
        ))}
      </ul>
      
        </div>
      </div>
    </div>
  );
};
export default About;
