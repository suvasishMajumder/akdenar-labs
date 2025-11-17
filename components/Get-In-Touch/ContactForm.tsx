"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname } from "next/navigation";

export default function ContactForm() {
  const [agree, setAgree] = useState(false);
  const [service, setService] = useState("all");
  const pathname = usePathname()

  return (
    <section className={`${pathname !== "/get-in-touch" ? "pt-1 pb-20" : "py-20"} mt-6 px-6 md:px-10 lg:px-24 bg-bg-primary`}>

      <div className={`${pathname !== '/get-in-touch' ? 'hidden' : ''}`}>
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-5xl tracking-tight text-gray-900">
          Get in touch
        </h2>

        {/* Subheading */}
        <p className="text-center text-neutral-600 mt-3 max-w-3xl mx-auto leading-relaxed">
          At FutureSphere our mission is to empower individuals and businesses
          through innovative technology solutions that enrich lives, foster
          growth, and drive positive change.
        </p>
      </div>

      {/* Layout Grid */}
      <div className="mt-14 flex flex-col md:flex-row gap-36 items-start">

        {/* LEFT SIDE FORM */}
        <div className=" flex-1 bg-white rounded-2xl shadow-sm p-8">

          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-gray-700">First Name</label>
              <input
                type="text"
                placeholder="Ali"
                className="mt-2 w-full px-4 py-2.5  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7F56D9]"
              />
            </div>

            <div>
              <label className="text-sm text-gray-700">Last Name</label>
              <input
                type="text"
                placeholder="Osama"
                className="mt-2 w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7F56D9]"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="text-sm text-gray-700">Email</label>
              <input
                type="email"
                placeholder="sakshi7007@gmail.com"
                className="mt-2 w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7F56D9]"
              />
            </div>

            <div>
              <label className="text-sm text-gray-700">Phone No.</label>
              <input
                type="text"
                placeholder="+91"
                className="mt-2 w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7F56D9]"
              />
            </div>
          </div>

          {/* Services Dropdown */}
          <div className="mt-6">
            <label className="text-sm text-gray-700">Services</label>
            <Select value={service} onValueChange={setService}>
              <SelectTrigger className="mt-2 z-20 bg-white w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#7F56D9]">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent className="z-30 bg-white">
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="web">Web Development</SelectItem>
                <SelectItem value="cloud">Cloud & DevOps</SelectItem>
                <SelectItem value="design">UI/UX Design</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Message Box */}
          <div className="mt-6">
            <label className="text-sm text-gray-700">Messages</label>
            <textarea
              rows={4}
              placeholder="Add Text"
              className="mt-2 w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7F56D9] resize-none"
            />
          </div>

          {/* Checkbox + Submit */}
          <div className="mt-6 flex items-center justify-between flex-wrap gap-4">

            <label className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                checked={agree}
                onChange={() => setAgree(!agree)}
                className="w-4 h-4"
              />
              I agree with terms of usage and privacy policy.
            </label>

            <button
              disabled={!agree}
              className={`px-6 py-2 rounded-lg text-white transition shadow-sm ${agree
                ? "bg-[#7F56D9] hover:bg-[#6b45cc]"
                : "bg-gray-300 cursor-not-allowed"
                }`}
            >
              Submit
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE — Replace with your image */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/get-in-touch/heroImg.svg" // replace with your actual image
            alt="Get in touch illustration"
            width={315}
            height={400}
            className="object-contain drop-shadow-xl"
          />
        </div>

      </div>

      {pathname !== '/get-in-touch' ? null : (
        <div className="mt-10 bg-white border border-gray-200 shadow-sm rounded-2xl py-8 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-8">

            {/* 1. Sales and Business */}
            <div className="flex flex-col items-center">
              <Image
                src="/get-in-touch/icon1.svg"   // ← replace with your icon
                alt="Sales Icon"
                width={40}
                height={40}
              />

              <h3 className="mt-3 font-medium text-gray-900">Sales and Business</h3>

              <p className="text-sm text-gray-600 mt-1">
                akdenarlabs@gmail.com
              </p>
            </div>

            {/* 2. Partners */}
            <div className="flex flex-col items-center">
              <Image

                src="/get-in-touch/icon2.svg"  // ← replace with your icon
                alt="Partners Icon"
                width={40}
                height={40}
              />

              <h3 className="mt-3 font-medium text-gray-900">Partners</h3>

              <p className="text-sm text-gray-600 mt-1">
                partners1234@gmail.com
              </p>
            </div>

            {/* 3. Customer Support */}
            <div className="flex flex-col items-center">
              <Image
                src="/get-in-touch/icon3.svg"  // ← replace with your icon
                alt="Support Icon"
                width={40}
                height={40}
              />

              <h3 className="mt-3 font-medium text-gray-900">Customer Support</h3>

              <p className="text-sm text-gray-600 mt-1">
                support1234@gmail.com
              </p>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
