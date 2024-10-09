import Image from "next/image";
import img1 from "../components/dashboard/💻.png";

const Tech2 = () => {
    const courses = [
        "UI/UX Design", "Frontend web development"
    ]
  return (
    <div
      className="flex font-bold md:px-16 px-8 pt-8 md:gap-8 gap-4 md:flex-row flex-col"
      style={{ color: "rgba(51, 51, 51, 1)" }}
    >
      <div>
        <Image src={img1} alt="img" className="md:w-20 md:h-7 h-8 w-8" />
      </div>
      <div className="flex flex-col md:gap-8 gap-4">
        <h1 className="text-2xl">Tech Trainings</h1>
        <h1 className="text-xl">Requirements</h1>
              <ul className="list-disc md:text-xl text-base font-normal ml-8">
                  <li>Must be ready to be committed, dedicated and strive in remote learning environment Must have a working laptop Must be able to dedicate at least 5-10hours per week</li>
                  <li>Must have a working laptop</li>
                  <li>Must be able to dedicate at least 5-10hours per week</li>
              </ul>
        <h1 className="text-xl">Avaliable Tech Courses</h1>
        <ul className="list-disc md:text-xl text-base font-normal ml-8">
              {courses.map((course, index) => (
                      <div  key={index}>
                      <li>{course}</li>
                      </div>
                  ))}
        </ul>
              <h1 className="text-xl">What you will get</h1>
              <ul className="list-disc md:text-xl text-base font-normal ml-8">
                  <li>Access to proper mentorship with clear learning direction Access to hands-on project for practicing Get started with building your portfolio Opportunity to learn how to monetize your skill</li>
                  <li>Access to hands-on project for practicing</li>
                  <li>Get started with building your portfolio</li>
                  <li>Opportunity to learn how to monetize your skill</li>
              </ul>
      </div>
    </div>
  );
};
export default Tech2;