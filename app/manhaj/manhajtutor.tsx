import Image from "next/image";
import img1 from "../components/dashboard/🎯.png";

const ManhajandTutor = () => {
  return (
    <div
      className="flex font-bold md:px-16 px-8 pt-8 md:gap-8 gap-4 md:flex-row flex-col"
      style={{ color: "rgba(51, 51, 51, 1)" }}
    >
      <div>
        <Image src={img1} alt="img" className="md:w-20 md:h-7 h-8 w-8" />
      </div>
      <div className="flex flex-col md:gap-8 gap-4">
        <h1 className="text-2xl">Our Manhaj and Tutors</h1>
        <h1 className="text-xl">Our Manhaj</h1>
        <p className="md:text-xl text-base font-normal">
          Our Manhaj is built upon the Quran and the Sunnah, as understood by
          the pious predecessors. We are dedicated towards striving for
          spiritual growth and moral development guided by the teachings of the
          Prophet Muhammad (peace be upon him).
        </p>
        <h1 className="text-xl">Our Islamic Tutors(Ustaadth)</h1>
        <p className="md:text-xl text-base font-normal">
          Our team of tutors consists of experienced educators and scholars in
          Islamic studies, are committed to helping students develop a strong
          foundation in Quran memorization, Islamic knowledge and Arabic
          language.
        </p>
      </div>
    </div>
  );
};
export default ManhajandTutor;
