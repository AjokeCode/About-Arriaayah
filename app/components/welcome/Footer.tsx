import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div>
    <div className="md:flex md:items-center md:justify-start w-full mb-6">
      <Link href="https://arriaayah.com/enroll"
        className="text-white font-medium text-sm rounded-[14px]  justify-center bg-[#0362F2] p-3 px-6 flex"
      >
        Enroll Now
      </Link>
      </div>
      {/* <p className="text-[1rem] font-[400] text-[#535862] text-center md:hidden">
        Enrolment deadline: <span className= "text-[#FF7800]">15th August, 2024</span>
      </p> */}
      </div>
     
  )
}

export default Footer