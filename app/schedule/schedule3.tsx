import Image from "next/image";
import img1 from "./⏰ (2).png";

const Schedule3 = () => {
  return (
    <div
      className="flex bg-white border md:w-4/5 w-11/12 rounded-xl md:px-16 px-8 py-8 md:gap-8 gap-2 flex-col font-medium"
      style={{
        borderColor: "rgba(224, 224, 224, 1)",
        color: "rgba(51, 51, 51, 1)",
      }}
    >
      <div className="pl-10 flex flex-col pb-6">
        <div className="flex items-center gap-4 mb-4">
          <Image src={img1} alt="img" />
          <h1 className="font-bold">MODE OF COMMUNICATION</h1>
        </div>
        <ul className="list-disc pl-14">
          <li>Classes are 100% online via telegram and WhatsApp.</li>
          <li>
            Audio/Video recordings of classes are made available for
            accessibility at students' convenience
          </li>
          <li>
            Qur'an classes and progress tracking meeting are via Google meet
          </li>
          <li>
            Students are required to have listened to their respective classes,
            and ask question(s) as needed before the next class.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Schedule3;
