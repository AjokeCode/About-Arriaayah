import Image from "next/image";
import img1 from "../components/dashboard/🎯.png";

const ManhajandTutor = () => {
  return (
    <div className="text-black">
      <div className="flex flex-col md:gap-8 gap-4">
        <div className="flex flex-col gap-3">
        <h1 className="text-lg font-[700] tracking-[0.5px]  md:text-2xl lg:text-4xl ">Our Manhaj</h1>
        <p className="text-[1rem] font-normal text-[#535862]">
        Our Manhaj is built upon the Quran and the Sunnah, as understood by the pious predecessors. We are dedicated towards striving for spiritual growth and moral development guided by the teachings of the Prophet Muhammad (peace be upon him).
        </p>
        </div>
        <div className="flex flex-col gap-3">
        <h1 className="text-lg font-[700] tracking-[0.5px]  md:text-2xl lg:text-4xl">Some of our Teachers(Ustaadth)</h1>
        <p className="text-[1rem] font-normal text-[#535862]">
           Our team of ustaadth consists of experienced educators and scholars in Islamic studies, are committed to helping students develop a strong foundation in Qur&apos;an memorization, Islamic knowledge and Arabic language.
        </p>
        </div>
      </div>
    </div>
  );
};
export default ManhajandTutor;
