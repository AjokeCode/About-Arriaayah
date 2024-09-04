import Image from "next/image";
import img1 from "../dashboard/Logo (4).svg";

const About = () => {
  return (
    <div className="flex items-center md:mt-8 mt-4 justify-center">
      <div
        className="flex md:w-4/5 w-11/12 rounded-2xl md:px-16 px-8 py-8 md:gap-8 gap-2 md:flex-row flex-col font-medium"
        style={{
          backgroundColor: "rgba(219, 238, 250, 1)",
          color: "rgba(51, 51, 51, 1)",
        }}
      >
        <div>
          <Image src={img1} alt="img" />
        </div>
        <div>
          <h1 className="md:text-2xl text-lg md:mb-4 mb-2">
            Techeeroh Academy:
          </h1>
          <ul className="md:text-xl text-base list-disc">
            <li className="md:mb-3 mb-1">
              Allow individuals to learn in a bite-sized manner. No rushing!
            </li>
            <li>
              For Young Muslim Learners, and people with busy schedules{" "}
              <span className="font-bold">
                willing dedicate themselves to studying online
              </span>
            </li>
            <li className="md:my-3 my-1">
              Offer an opportunity to kick-start a relevant career in tech
            </li>
            <li>Offer personalized classes</li>
            <li className="md:my-3 my-1">
              Flexible: Allows student to listen to recordings of classes
              catering for their busy schedules.
            </li>
            <li>100% Online</li>
            <li className="md:mt-3 mt-1">Affordable</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default About;
