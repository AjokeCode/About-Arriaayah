import React from "react";

const Payment2 = () => {
  return (
    <div className="flex flex-col md:gap-8 gap-4">
       <div className="flex flex-col gap-3">
        <h1 className="text-lg font-[600] tracking-[0.5px]  md:text-2xl lg:text-4xl text-[#414651]">Payments</h1>
        <p className="text-[1rem] font-normal text-[#535862]">
        After careful consideration, classes in the Academy are to be made with commitment fee.
        </p>
        </div>
        <div>
          <h2 className="text-[#535862] font-[700] text-[1rem] md:text-xl">
        &quot;Quality isn&apos;t cheap but we made ours affordable&quot;</h2>
        </div>
        <div>
          <ul className="text-[#535862] list-disc space-y-7 pl-7">
          <li>Commitment fee is #3,000/month. </li>
          <li>If a participant is seen to be inconsistent, and not dedicated for a maximum period of 2months, the payment for such participant increases to #5,000/month.</li>
          <li>If after additional 2months, the same is experienced, such participant is removed from the academy or the payment increases to #8,000/month.</li>
          </ul>
        </div>
    </div>
    // <div
    //   className="flex flex-col md:text-xl font-normal gap-8 text-base"
    //   style={{ color: "rgba(51, 51, 51, 1)" }}
    // >
     
    //       <div className="flex flex-col md:items-center items-start w-full gap-8 md:px-0 px-4">
    //       <div className="md:w-4/5 w-full h-20 rounded-xl bg-white border md:pl-12 pl-6 md:pt-6 pt-3" style={{borderColor: "rgba(224, 224, 224, 1)"}}>
    //           <h1 className="font-medium" style={{color: "rgba(7, 13, 37, 1)"}}>“Quality isn&apos;t cheap but we made ours affordable” - Techeeroh Academy</h1>
    //       </div>
    //       <h1 className="font-normal md:w-4/5 w-full" style={{color: "rgba(255, 121, 0, 1)"}}>After careful consideration, classes in Techeeroh Academy are to be made with commitment fee.</h1>
    //       <div className="flex flex-col pb-6 md:w-4/5 w-full">
    //         <h1 className="font-bold mb-3">For Islamic classes</h1>
    //         <ol className="list-decimal pl-8 flex flex-col gap-3">
    //           <li>Commitment fee is #6k/3months.</li>
    //           <li>If a participant is seen to be inconsistent, and not dedicated for a maximum period of 2months, the payment for such participant increases to #15k/3months.</li>
    //           <li>If after 2months, the same is experienced, such participant is removed from the academy or the payment increases to #25k/3months.</li>
    //         </ol>
    //           </div>
    //           <div className="flex flex-col pb-6 md:w-4/5 w-full">
    //         <h1 className="font-bold mb-3">For Tech classes</h1>
    //         <ol className="list-decimal pl-8 flex flex-col gap-3">
    //           <li> Commitment fee is #20k for a period of 4 -6months to ease it for our brethren.</li>
    //           <li>If the participant isn&apos;t serious at the end for up to like 2 to 3months frame, such participant will be required to make additional payment of #80k before continuing with the academy in tech aspect.</li>
    //         </ol>
    //       </div>
    //       </div>
          
    //   </div>
  );
};
export default Payment2;
