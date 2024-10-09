import Schedule3 from "./schedule3";
import Schedule4 from "./schedule4";
import img1 from "./⏰ (2).png";
import Image from "next/image";

const Schedule2 = () => {
  return (
    <div
      className="flex flex-col text-xl font-normal"
      style={{ color: "rgba(51, 51, 51, 1)" }}
    >
      <div className="md:pl-16 pl-4 flex md:flex-row flex-col gap-4">
        <Image src={img1} alt="img" />
        <h1 className="text-2xl font-bold">Class Schedules</h1>
      </div>
      <div className="flex items-center md:mt-8 mt-4 justify-center flex-col gap-8">
        <div
          className="flex bg-white border md:w-4/5 w-11/12 rounded-xl md:px-16 px-8 py-8 md:gap-8 gap-2 flex-col font-medium"
          style={{
            borderColor: "rgba(224, 224, 224, 1)",
            color: "rgba(51, 51, 51, 1)",
          }}
        >
          <div className="flex md:flex-row flex-row items-center gap-4">
            <Image src={img1} alt="img" className="h-6 w-6" />
            <h1 className="md:text-2xl text-lg md:mb-0 mb-2">
              Days for classes
            </h1>
          </div>
          <div className="md:pl-10 pl-4 flex flex-col pb-6">
            <h1 className="font-bold">For Islamic text</h1>
            <ul className="list-disc pl-8">
              <li>Monday</li>
              <li>Wednesday</li>
            </ul>
          </div>

          <div className="md:pl-10 pl-4 flex flex-col pb-6">
            <h1 className="font-bold">For Quran classes</h1>
            <p className="mb-2">
              Each students fall to either of the following days i.e no student
              is with more than a day per week except for personalized classes.
              This is a class where each student recite their portion separately
              and memorize at their own pace.
            </p>
            <ul className="list-disc pl-8">
              <li>Friday</li>
              <li>Saturday</li>
              <li>Sunday</li>
            </ul>
          </div>

          <div className="pl-10 flex flex-col pb-6">
            <h1 className="font-bold">Personalized classes</h1>
            <p className="mb-2">
              Days for personalized classes for Islamic text and Qur'an is
              determined with the schedules of interested candidates and
              consequently the payment.
            </p>
          </div>
        </div>
        <Schedule3 />
        <Schedule4 />
      </div>
    </div>
  );
};
export default Schedule2;
