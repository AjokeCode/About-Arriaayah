import Image from "next/image";
import img1 from "./📕 (2).png";

const Curriculum2 = () => {
  return (
    <div
      className="flex font-bold md:px-16 px-8 pt-8 md:gap-8 gap-4 md:flex-row flex-col"
      style={{ color: "rgba(51, 51, 51, 1)" }}
    >
      <div>
        <Image src={img1} alt="img" className="md:w-20 md:h-7 h-8 w-8" />
      </div>
      <div className="flex flex-col md:gap-8 gap-4">
        <h1 className="text-2xl">Our Curriculum</h1>
        <ul className="list-disc">
          <li className="md:text-xl text-base font-normal">
            This academy is designed for{" "}
            <span className="underline font-semibold">
              Young Muslim Learners, people with busy schedules and Muslim Tech
              Enthusiasts
            </span>{" "}
            who are ready and willing to have a strong foundation of their DEEN
            by learning in a bite-sized manner (taking a memorization approach
            to learning) and kickstart a career in tech(optional) in a fast
            paced technology era.
          </li>
          <li className="md:text-xl text-base font-normal my-6">
            Classes in this academy are of 6 divisions (Level 1 to 6). Students
            who fall into each of the levels has a set of books they would have
            to finish before moving to another level to ensure the basics are
            well taught and the intended strong foundations are well built.
            These books are taken one after the other, not like 2 or 3 or 4 at a
            time (i.e when a book from the list for a particular class is not
            finished, another won&apos;t be taken)
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Curriculum2;
