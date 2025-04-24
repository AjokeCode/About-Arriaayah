import Image from "next/image";
import img1 from "../components/dashboard/💻.png";
import { relaunch } from "@/public/images";

const Tech2 = () => {

  return (
    <div
     
    >
     <div className="flex flex-col h-full justify-center pt-28 gap-5">
      <div className="flex items-center justify-center">
        <Image src={relaunch} alt="relaunch-image" className="w-20 h-20 md:w-[110px] md:h-[110px] lg:w-[140px] lg:h-[140px]" />
      </div>
      <div className="space-y-8 text-center">
        <div>
        <h2 className="font-[600] text-2xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#0362F2] via-[#5BD066] to-[#FB8A2E] text-transparent bg-clip-text">Re-launching Soon!</h2>
        </div>
        <p className="text-sm font-[400] text-[#535862] px-12 md:text-lg lg:text-xl">Re-launching Tech Training soon! A new experience is just around the corner.</p>
      </div>
     </div>
    </div>
  );
};
export default Tech2;