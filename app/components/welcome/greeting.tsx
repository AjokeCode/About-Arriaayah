import Image from "next/image";
import img1 from "./👋 (1).png";

const Greeting = () => {
  return (
    <div
      className="flex font-bold md:px-16 px-8 pt-8 md:gap-8 gap-4 md:flex-row flex-col"
      style={{ color: "rgba(51, 51, 51, 1)" }}
    >
      <div>
        <Image src={img1} alt="img" className="md:w-28 md:h-9 h-8 w-12" />
      </div>
      <div className="flex flex-col md:gap-8 gap-4">
        <h1 className="md:text-3xl text-lg">Assalamu Alaykum!</h1>
        <h2 className="md:text-xl text-sm">
          Welcome to Techeeroh Academy; Bridging the gap between faith and
          future.
        </h2>
        <p className="md:text-xl text-base font-normal">
          Techeeroh Academy is an Islamic online learning platform that combines
          learning Islamic knowledge with tech skills focusing on people with
          busy schedules to help maintain their Islamic learning journey taking
          a memorization approach to learning in a bite-sized manner.
        </p>
        <p className="md:text-xl text-base font-normal">
          At Techeeroh Academy, we're on a quest to empower lifelong learners
          with Islamic knowledge and a career opportunity in tech(optional). We
          believe knowledge is a treasure chest, and we provide the key to
          unlock its riches. Our students gain the tools needed to navigate the
          vast landscapes of Quran, Sunnah, and classical Islamic texts,
          fostering a well-rounded understanding of their faith coupled with
          preparing them for the future.
        </p>
      </div>
    </div>
  );
};
export default Greeting;
