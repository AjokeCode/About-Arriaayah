"use client";

import Image from "next/image";
import { useState } from "react";
import img1 from "./Polygon 1.png";

const ListofTutor = () => {
  const Tutors = [
    {
      name: "Ustaadth Ahmad Mikail Olayiwola, Abu Abdir-Rahman, As-Salafiy",
      id: "ahmad-mikail",
      bio: "Detailed biography of Ustaadth Ahmad Mikail Olayiwola...",
      qualifications: "PhD in Islamic Studies",
    },
    {
      name: "Ustaadth Taofeeq Aadi, Al-Kutubiy",
      id: "taofeeq-aadi",
      bio: "Detailed biography of Ustaadth Taofeeq Aadi...",
      qualifications: "Masters in Islamic Jurisprudence",
    },
    {
      name: "Ustaadth Hamzat Miftaudeen Kolawole, Abu Abdir-Rahman, Ashajariy",
      id: "hamzat-miftaudeen",
      bio: "Detailed biography of Ustaadth Hamzat Miftaudeen Kolawole...",
      qualifications: "Expert in Hadith Sciences",
    },
    {
      name: "Ustaadth Abdul-waasii, Al-Muftiy",
      id: "abdul-waasii",
      bio: "Detailed biography of Ustaadth Abdul-waasii...",
      qualifications: "Scholar in Islamic Theology",
    },
  ];
  const [selectedTutor, setSelectedTutor] = useState<string | null>(null);

  const toggleTutor = (id: string) => {
    setSelectedTutor(selectedTutor === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-4 items-center md:mt-8 mt-4 justify-center">
      {Tutors.map((tutor) => (
        <div key={tutor.id} className="w-4/5">
          <div
            className="flex md:pl-12 pl-6 gap-6 bg-white rounded-xl border h-20 items-center cursor-pointer"
            style={{
              borderColor: "rgba(224, 224, 224, 1)",
              color: "rgba(51, 51, 51, 1)",
            }}
            onClick={() => toggleTutor(tutor.id)}
          >
            <Image src={img1} alt="img" />
            <p className="md:text-xl text-base font-normal">{tutor.name}</p>
          </div>

          {selectedTutor === tutor.id && (
            <div className="bg-white p-4 mt-2 rounded-lg border border-gray-300">
              <h2 className="text-lg font-semibold">Details</h2>
              <p>{tutor.bio}</p>
              <p className="mt-2">
                <strong>Qualifications:</strong> {tutor.qualifications}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ListofTutor;
