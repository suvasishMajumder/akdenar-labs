"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Image from "next/image";

type ServiceCardProps = {
  service: {
    title: string;
    description: string;
    link: string;
    path: string;
    alt: string;
  };
  i: number;
};

export default function ServiceCard({ service, i }: ServiceCardProps) {
  const router = useRouter();
  return (
    <div
      key={i}
      className="group relative rounded-2xl p-8 shadow-lg bg-white transform transition-transform duration-300 hover:scale-105"
    >
      <div className="flex items-center justify-center mb-5">
        <Image src={service.path} alt={service.alt} width={32} height={32} />
      </div>
      <h3 className="text-xl text-center font-semibold mb-3 text-gray-900">
        {service.title}
      </h3>
      <p className="text-sm text-center leading-relaxed text-gray-700">
        {service.description}
      </p>

      {/* Mobile View More Button */}
      <div onClick={() => router.push(service.link)} className="mt-6 text-center md:hidden">
        <Button className="bg-[#7F56D9] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#6941C6] transition-colors">
          View More
        </Button>
      </div>

      {/* Desktop Hover Overlay */}
      <div onClick={() => router.push(service.link)} className=" absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/40 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-end justify-center pb-8">

        <Button className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
          View More
        </Button>
      </div>
    </div>
  )
}