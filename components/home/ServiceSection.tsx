'use client'

import Image from "next/image";
import { Button } from "../ui/button";
import ServiceCard from "../ServiceCard";
import { usePathname, useRouter } from "next/navigation";
import { services } from "@/data/services";

export default function ServicesSection() {

    const pathname = usePathname();

    const router = useRouter();

    return (
        <section className="w-full py-10 px-6 md:px-10 lg:px-20">
            <div className={`${pathname != "/" && "hidden"}`}>
                {/* Pill */}
                <div className="flex justify-center mb-4">
                    <span className="px-5 py-1 rounded-full bg-[#EDEAFF] text-[#7F56D9] text-sm font-medium">
                        Services
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-3xl md:text-5xl font-semibold text-gray-900">
                    Services That Transform Businesses
                </h2>

                {/* Subheading */}
                <p className="text-center text-neutral-600 mt-3 max-w-2xl mx-auto">
                    We design and deploy AI technologies that make your business smarter,
                    faster, and more efficient
                </p>
            </div>

            {/* Service Cards */}
            <div className="mt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, i) => {
                        if (pathname === "/" && i >= 3) return null;
                        return <ServiceCard service={service} i={i} key={i} />;
                    })}

                </div>
                {/* View All */}
                {
                    pathname != "/" ? "" :
                        <div className="flex justify-center mt-10">
                            <button onClick={() => router.push("/services")} className="flex items-center gap-2 text-[#7F56D9] font-medium hover:opacity-80 transition">
                                View All
                                <span className="text-lg">→</span>
                            </button>
                        </div>
                }
            </div>
        </section>
    );
}
