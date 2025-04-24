"use client"

import Schedule3 from "./schedule3";
import Schedule4 from "./schedule4";
import img1 from "./⏰ (2).png";
import Image from "next/image";
import { useState } from "react"
import { Plus, Minus } from "lucide-react"


type ScheduleSection = {
  id: string
  title: string
  content: React.ReactNode
}


const Schedule2 = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  
  const scheduleSections: ScheduleSection[] = [
    {
      id: "days-for-classes",
      title: "Days for Classes",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-1">For Islamic Text</h4>
            <ul className="list-disc pl-5">
              <li>Monday</li>
              <li>Wednesday</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-1">For Qur&apos;an Class</h4>
            <p className="text-sm text-gray-700 mb-2">
              Each students fall to either of the following days i.e no student is with more than a day per week except
              for personalized classes. This is a Qur&apos;an class where each student recite their portion separately and
              memorize at their own pace.
            </p>
            <ul className="list-disc pl-5">
              <li>Friday</li>
              <li>Sunday</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-1">Personalized Classes</h4>
            <p className="text-sm text-gray-700">
              Days for personalized classes for Islamic text and Qur&apos;an is determined with the schedules of interested
              candidates and consequently the payment.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "mode-of-communication",
      title: "Mode of Communication",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>Classes are 100% online via telegram and WhatsApp.</li>
            <li>Audio recordings of classes are made available for accessibility at students&apos; convenience</li>
            <li>Qur&apos;an classes and progress tracking meeting are via Google meet</li>
            <li>
              Students are required to have listened to respective classes, and ask question(s) as needed before the
              next
            </li>
          </ul>
          <div className="mt-4 pt-4 ">
            <p className="text-sm text-gray-700">
              At Ar-Riyaayah Academy, we don&apos;t just leave our students to listen to classes on their own, we, however,
              track their progress in a weekly progress where each students would be questioned on what they&apos;ve learnt.
            </p>
            <p className="text-sm font-medium mt-2">
              This is a weekly online(google meeting) session that will enable us to detect and annihilate any act of
              unseriousness in our students.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "progress-tracking",
      title: "Progress Tracking",
      content: (
        <div>
          <p className="text-sm text-gray-700">
            We track student progress through weekly assessments and personalized feedback. Each student receives a
            progress report at the end of each month highlighting areas of strength and opportunities for improvement.
          </p>

          <h4 className="font-medium mt-3 mb-1">Assessment Methods:</h4>
          <ul className="list-disc pl-5">
            <li>Weekly recitation evaluations</li>
            <li>Monthly written assessments</li>
            <li>Participation in group discussions</li>
          </ul>
        </div>
      ),
    },
  ]

    const toggleExpand = (id: string) => {
      setExpandedId(expandedId === id ? null : id)
    }
  return (
    <div className="flex flex-col md:gap-8 gap-4 text-black">
       <div className="flex flex-col md:gap-8 gap-4">
          <div >
            <h1 className="text-lg font-[700] tracking-[0.5px]  md:text-2xl lg:text-4xl ">Class Schedules</h1>
          </div>
          <div className="flex flex-col gap-6">
          {scheduleSections.map((section) => (
            <div key={section.id} className="rounded-xl overflow-hidden shadow-sm bg-[#f3f2f2]/30 p-4 flex flex-col gap-3">
              <div
               className=" flex justify-between items-center cursor-pointer gap-5 mb-1"
                onClick={() => toggleExpand(section.id)}
              >
                <h3 className="text-[#414651] font-[600] text-sm md:text-lg lg:text-xl">{section.title}</h3>
                <div>
                <button
                 className="w-5 h-5 md:w-9 md:h-9 items-center justify-center rounded-full text-[#3056D3] border border-[#3056D3] flex"
                  aria-label={expandedId === section.id ? "Collapse details" : "Expand details"}
                >
                  {expandedId === section.id ? <Minus  className="w-2.5 md:w-[18px]"/> : <Plus className="w-2.5  md:w-[18px]" />}
                </button>
                </div>
              </div>

              {expandedId === section.id && (
                <div className="">{section.content}</div>
              )}
            </div>
          ))}
        
          </div>
      </div>
    </div>
  );
};
export default Schedule2;
