import Image from "next/image";
import img2 from "../components/dashboard/⭐.png";
import Mobileheader from "../components/welcome/mobile-header";
import Review2 from "./review2";

const Review = () => {
  return (
    <div
      className="md:w-4/5 w-full bg-white py-6"
      style={{ color: "rgba(51, 51, 51, 1)" }}
    >
      <div
        className="md:flex hidden gap-4 items-center mb-4 pl-4 border-b"
        style={{ outlineColor: "rgba(224, 224, 224, 1)" }}
      >
        <Image src={img2} alt="img" />
        <h1 className="text-lg font-medium">Students Review</h1>
      </div>
          <Mobileheader />
          <Review2/>
    </div>
  );
};
export default Review;