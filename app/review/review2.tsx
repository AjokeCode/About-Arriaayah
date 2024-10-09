import img1 from "./⭐ (1).png";
import Image from "next/image";
import img2 from "./Vector (1).png";
const Review2 = () => {
    const review = [
        {
            name: "Maryam Odekanle",
            review: "I would like to continue over and over again with techeeroh academy.",
            position: "Student at techeeroh"
        },
        {
            name: "Maryam Odekanle",
            review: "I would like to continue over and over again with techeeroh academy.",
            position: "Student at techeeroh"
        },
        {
            name: "Maryam Odekanle",
            review: "I would like to continue over and over again with techeeroh academy.",
            position: "Student at techeeroh"
        },
        {
            name: "Maryam Odekanle",
            review: "I would like to continue over and over again with techeeroh academy.",
            position: "Student at techeeroh"
        }

    ]
  return (
    <div
      className="flex flex-col text-xl font-normal"
      style={{ color: "rgba(51, 51, 51, 1)" }}
    >
      <div className="md:pl-16 pl-4 flex md:flex-row flex-col gap-4">
        <Image src={img1} alt="img" />
        <h1 className="text-2xl font-bold">Students Review</h1>
      </div>
      <div className="md:px-16 px-4 grid md:grid-cols-2 grid-cols-1 md:mt-8 mt-4 place-items-center gap-8 mb-8 text-base font-medium " style={{color: "rgba(76, 82, 106, 1)"}}>
              {review.map((rev, index) => (
                  <div key={index} className="flex flex-col bg-white
                  justify-between items-center px-6 py-4 max-w-96 h-60 rounded-3xl border" style={{borderColor: "rgba(0, 0, 0, 0.08)"}}>
                      <Image src={img2} alt="img" />
                      <p className="text-center">{rev.review}</p>
                      <h1 className="font-semibold text-lg" style={{color: "rgba(2, 13, 55, 1)"}}>{rev.name}</h1>
                      <p>{ rev.position}</p>
            </div>
        ))}
      </div>
    </div>
  );
};
export default Review2;
