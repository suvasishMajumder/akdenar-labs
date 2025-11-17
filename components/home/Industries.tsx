"use client";

import Image from "next/image";

const industries = [
  {
    title: "E-Commerce",
    img: "/industries/e-commerce.png",
    color: "bg-[#D7EDEB]",
  },
  {
    title: "FinTech",
    img: "/industries/fintech.png",
    color: "bg-[#A4D4DC]",
  },
  {
    title: "Healthcare",
    img: "/industries/healthcare.png",
    color: "bg-[#5CC6D0]",
  },
  {
    title: "Real Estate",
    img: "/industries/realstate.png",
    color: "bg-[#C0E4F7]",
  },
  {
    title: "AI & Automation",
    img: "/industries/ai.png",
    color: "bg-[#F7E18C]",
  },
  {
    title: "EdTech",
    img: "/industries/edtech.png",
    color: "bg-[#F3C2C0]",
  },
];

export default function Industries() {
  return (
    <section className="w-full py-10 px-6 md:px-10 lg:px-20 z-40">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Our Industry Expertise</h2>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto">
          We deliver end-to-end digital solutions tailored to transform industries with
          modern technology, automation, and innovation.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-3 gap-1">

          {/* Row 1 */}
          <div className="col-span-1 flex md:justify-between flex-col-reverse md:flex-row h-52  md:h-64 bg-[#8FD3C9] relative">
            <img src="/industries/banking.png"
              className="absolute right-0 bottom-0 md:h-full object-contain" />
            <div className="absolute left-4 top-3 md:top-auto md:bottom-4 text-white font-bold">
              Banking & Financial Services
            </div>
          </div>

          <div className="col-span-1 flex md:justify-between flex-col-reverse md:flex-row h-52  md:h-64 bg-[#9DD9D2] relative">
            <img src="/industries/insurance.png"
              className="absolute right-0 md:h-full object-contain" />
            <div className="absolute left-4 md:bottom-4 top-3 md:top-auto text-white font-bold">
              Insurance
            </div>
          </div>

          <div className="col-span-1 flex md:justify-between flex-col-reverse md:flex-row h-52  md:h-64 bg-[#5AC9D5] relative">
            <img src="/industries/healthcare.png"
              className="absolute right-0 md:h-full object-contain" />
            <div className="absolute left-4 md:bottom-4 top-3 md:top-auto text-white font-bold">
              Healthcare
            </div>
          </div>

          {/* Row 2 */}
          <div className="col-span-1 flex md:justify-between flex-col-reverse md:flex-row h-52  md:h-64 bg-[#8CD7F2] relative">
            <img src="/industries/fin-tech.png"
              className="absolute right-0 md:h-full object-contain" />
            <div className="absolute left-4 md:bottom-4 top-3 md:top-auto text-white font-bold">
              Fin tech
            </div>
          </div>

          <div className="col-span-1 flex md:justify-between flex-col-reverse md:flex-row h-52  md:h-64 bg-[#FFD43B] relative">
            <img src="/industries/e-commerce.png"
              className="absolute right-0 bottom-0 md:h-full object-contain" />
            <div className="absolute left-4 md:bottom-4 top-3 md:top-auto text-white font-bold">
              E commerce
            </div>
          </div>

          <div className="col-span-1 flex md:justify-between flex-col-reverse md:flex-row h-52  md:h-64 bg-[#FF9BAA] relative">
            <img src="/industries/software.png"
              className="absolute right-0 md:h-full object-contain" />
            <div className="absolute left-4 md:bottom-4 top-3 md:top-auto text-white font-bold">
              Software & Hi-Tech
            </div>
          </div>

          {/* Row 3 */}
          <div className="col-span-1 flex md:justify-between flex-col-reverse md:flex-row h-56 md:h-64 bg-[#B7E0AA] relative">
            <img src="/industries/telecom.png"
              className="absolute right-0 md:h-full object-contain" />
            <div className="absolute left-4 top-3 md:top-auto md:bottom-4 text-white font-bold">
              Telecom & Media
            </div>
          </div>

          <div className="col-span-2 flex md:justify-between flex-col-reverse  md:flex-row h-56  md:h-64 bg-[#8C82FF] relative overflow-hidden">
            <img src="/industries/consumer.png"
              className="absolute right-0 -bottom-10 md:h-full object-contain" />
            <div className="absolute left-4 md:bottom-4 top-3 md:top-auto text-white font-bold">
              Consumer Tech
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
