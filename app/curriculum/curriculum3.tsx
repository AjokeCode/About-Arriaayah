import Image from "next/image";
import img1 from "../components/dashboard/Logo (4).svg";
const Curriculum3 = () => {
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
              Ability to read, recite and memorize the Qura&apos;n with sound
              Tajweed
            </li>
            <li>
              Ability to be memorizing the Qur&apos;an at their own pace (No
              group memorization)
            </li>
            <li className="md:my-3 my-1">
              Strong foundational knowledge of the Islamic principles with sound
              ideology of the pious predecessors
            </li>
            <li>
              Ability to understand and speak Arabic Language fluently and read
              Arabic texts with ease (If serious and consistent)
            </li>
            <li className="md:my-3 my-1">
              Ability to seek-out Islamic studies resources (scholars and texts)
            </li>
            <li className="md:mt-3 mt-1">
              Opportunity to kickstart a career in tech preparing students for
              the future.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Curriculum3;
