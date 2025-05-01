"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

type ProfileData = {
  id: string
  name: string
  skills: string[]
  experience: {
    period: string
    position: string
  }[]
  certification: {
    title: string
    items: string[]
  }
  education: {
    year: string
    certificate: string
  }[]
}

export default function ExpandableProfileList() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const profiles: ProfileData[] = [
    {
      id: "ahmad-mikail",
      name: "Ustaadth Ahmad Mikail, Abu Abdir-Rahman, As-Salafiy",
      skills: ["Teaching", "Writing", "Reading", "Researching", "Graphics design"],
      experience: [
        {
          period: "2016 - 2018",
          position: "TEACHER @ MARKAZU AS-SALAFIYYAH LI TAHFIZH QURAN, EDE. (NOW MADRAH)",
        },
        {
          period: "2017 - TILL DATE",
          position: "FOUNDER @ DAARUL ATHAR ONLINE CLASS",
        },
        {
          period: "2019 - 2021",
          position: "IMAM TEACHER AND DIRECTOR @ MADRASSUL MINHAJ EFFE",
        },
        {
          period: "2021 - 2022",
          position: "QURAN AND ARABIC TEACHER @ KHALID BN WALEED HOME SCHOOL",
        },
        {
          period: "2021 - TILL DATE",
          position: "QURAN AND ARABIC TEACHER @ MARKAZU5 SOHAABAL IJEBU-ODE",
        },
      ],
      certification: {
        title: "Ijaazaat on some arabic books:",
        items: [
          "Al-aqeedatul waasitiyyah",
          "Riyaadus saaliheen",
          "Al-usulul-thalaathiyyah",
          "Lam'iyatul i'tiqaad",
          "Kashfush shubuhaat",
          "Arba'una Tadbiyyah",
          "Al hadithu musalsil bil awaliyyah",
          "Thulaathiyaatul bukhaariy",
          "Al awaailil as sunniyyah and some other books",
          "Participant of Imam Maalik seminar,2,3,4,5 and Arabic seminar for non arab (2018 - 2019)",
        ],
      },
      education: [
        {
          year: "2011",
          certificate: "Junior secondary school certificate, Igando community secondary school lagos",
        },
        {
          year: "2014",
          certificate: "",
        },
      ],
    },
    {
      id: "taofeeq-aadi",
      name: "Ustaadth Taofeeq Aadi, Al-Kutubiy",
      skills: ["Teaching", "Research", "Islamic Studies"],
      experience: [
        {
          period: "2018 - PRESENT",
          position: "ISLAMIC STUDIES TEACHER",
        },
      ],
      certification: {
        title: "Certifications:",
        items: ["Islamic Studies Diploma", "Arabic Language Certificate"],
      },
      education: [
        {
          year: "2010",
          certificate: "Secondary School Certificate",
        },
      ],
    },
    {
      id: "ridwan",
      name: "Ustaadth Ridwan, Abu Ahmad, Ashaokaaníy",
      skills: ["Teaching", "Counseling", "Research"],
      experience: [
        {
          period: "2017 - PRESENT",
          position: "ISLAMIC STUDIES INSTRUCTOR",
        },
      ],
      certification: {
        title: "Certifications:",
        items: ["Advanced Islamic Studies Certificate"],
      },
      education: [
        {
          year: "2012",
          certificate: "Bachelor's Degree in Islamic Studies",
        },
      ],
    },
    {
      id: "hamzat",
      name: "Ustaadth Hamzat Miftaudeen, Abu Abdir-Rahman, Ashajariy",
      skills: ["Teaching", "Mentoring", "Research"],
      experience: [
        {
          period: "2015 - PRESENT",
          position: "QURAN TEACHER",
        },
      ],
      certification: {
        title: "Certifications:",
        items: ["Quran Memorization Certificate"],
      },
      education: [
        {
          year: "2009",
          certificate: "Islamic Studies Diploma",
        },
      ],
    },
    {
      id: "abdullah",
      name: "Ustaadth Abdullah, Abu Yaasir",
      skills: ["Teaching", "Leadership", "Research"],
      experience: [
        {
          period: "2016 - PRESENT",
          position: "ISLAMIC STUDIES COORDINATOR",
        },
      ],
      certification: {
        title: "Certifications:",
        items: ["Advanced Arabic Language Certificate"],
      },
      education: [
        {
          year: "2011",
          certificate: "Bachelor's Degree in Arabic Language",
        },
      ],
    },
  ]

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="flex flex-col gap-6">
      {profiles.map((profile) => (
        <div key={profile.id} className="rounded-xl overflow-hidden shadow-sm bg-[#f3f2f2]/30 p-4 ">
          <div
            className=" flex justify-between items-center cursor-pointer gap-5 mb-1"
           
          >
            <h3 className="text-[#414651] font-[600] text-sm md:text-[1rem] lg:text-lg">{profile.name}</h3>
            <div>
            <button
              className="w-5 h-5 md:w-8 md:h-8 items-center justify-center rounded-full text-[#3056D3] border border-[#3056D3] flex disabled:cursor-not-allowed disabled:opacity-50"
              aria-label={expandedId === profile.id ? "Collapse details" : "Expand details"}
            disabled={profile.id !== "ahmad-mikail"}  onClick={() => toggleExpand(profile.id)}>
              {expandedId === profile.id ? <Minus  className="w-2.5 md:w-[16px]"/> : <Plus className="w-2.5  md:w-[16px]" />}
            </button>
            </div>
          </div>

          {expandedId === profile.id && (
            <div className="flex flex-col gap-y-3">
              {/* <div className="bg-[#E9EAEB] h-[1px] w-full"></div> */}
            <div className="bg-gray-50 p-4 border-t border-gray-100 space-y-6">
              {/* Skills Section */}
              <div>
                <h4 className="text-[#535862] font-[700] mb-2 text-[1rem]">SKILLS</h4>
                <p className="text-[#535862] text-sm md:text-[1rem]">{profile.skills.join(", ")}</p>
              </div>

              {/* Experience Section */}
              <div>
                <h4 className="text-[#535862] font-[700] mb-2 text-[1rem]">EXPERIENCE</h4>
                <div className="space-y-4">
                  {profile.experience.map((exp, index) => (
                    <div key={index}>
                      <p className="text-[#535862] text-sm md:text-[1rem]">{exp.period}</p>
                      <p className="text-[#535862] text-sm md:text-[1rem]">{exp.position}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certification Section */}
              <div>
                <h4 className="text-[#535862] font-[700] mb-2 text-[1rem]">CERTIFICATION</h4>
                <p className="text-gray-700 mb-2">{profile.certification.title}</p>
                <ul className="list-disc pl-5">
                  {profile.certification.items.map((item, index) => (
                    <li className="text-[#535862] text-sm md:text-[1rem]" key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Education Section */}
              <div>
                <h4 className="text-[#535862] font-[700] mb-2 text-[1rem]">EDUCATION</h4>
                <div className="space-y-2">
                  {profile.education.map((edu, index) => (
                    <div key={index}>
                      <p className="text-[#535862] text-sm md:text-[1rem]">{edu.year}</p>
                      <p className="text-[#535862] text-sm md:text-[1rem]">{edu.certificate}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
