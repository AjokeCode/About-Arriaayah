import Image from "next/image";
import img1 from "./Polygon 1.png";

const ListofTutor = () => {
  const Tutors = [
    "Ustaadth Ahmad Mikail Olayiwola, Abu Abdir-Rahman, As-Salafiy",
    "Ustaadth Taofeeq Aadi, Al-Kutubiy",
    "Ustaadth Hamzat Miftaudeen Kolawole, Abu Abdir-Rahman, Ashajariy",
    "Ustaadth Abdul-waasii, Al-Muftiy",
  ];
  return (
    <div className="flex flex-col gap-4 items-center md:mt-8 mt-4 justify-center">
      {Tutors.map((tutor) => (
        <div
          className="flex md:pl-12 pl-6 gap-6 w-4/5 bg-white rounded-xl border h-20 items-center"
          style={{
            borderColor: "rgba(224, 224, 224, 1)",
            color: "rgba(51, 51, 51, 1)",
          }}
        >
          <Image src={img1} alt="img" />
          <p className="md:text-xl text-base font-normal">{tutor}</p>
        </div>
      ))}
    </div>
  );
};
export default ListofTutor;
