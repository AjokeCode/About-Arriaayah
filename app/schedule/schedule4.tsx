import Image from "next/image";
import img1 from "./⏰ (2).png";

const Schedule4 = () => {
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
          <h1 className="font-bold">PROGRESS TRACKING</h1>
        </div>
        <p className="pl-8">
          At Techeeroh Academy, we don't just leave our students to listen to
          classes on their own, we, however, track their progress in a weekly
          progress where each students would be questioned on what they've done
          for the week.
        </p>
        <p className="pl-8">
          <span className="underline">
            This is a weekly online(google meeting) interactive session.
          </span>
          And it enable us to detect and anihilate any act of unseriousness in
          students.
        </p>
      </div>
    </div>
  );
};
export default Schedule4;
