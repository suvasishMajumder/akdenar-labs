"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ServiceCarousel() {
    const slides = [
        {
            pill: "Services",
            title: "Web & app Development",
            description:
                "At Akdenar Labs, we develop custom mobile and web applications that combine sleek design, robust functionality, and scalability. Our full-stack experts build high-performance Android, iOS, and web solutions with secure integrations, smooth user experiences, and efficient backend systems—helping businesses engage users and achieve measurable growth.",
            image: "/home/webTool.svg",
        },
        {
            pill: "Services",
            title: "Cloud & DevOps",
            description:
                "We automate, scale, and optimize cloud infrastructures on AWS, Azure, and Google Cloud. From CI/CD pipelines to container orchestration (Docker, Kubernetes), our DevOps team ensures faster deployments, higher efficiency, and more reliability.",
            image: "/home/clouddevops.png",
        },
        {
            pill: "Services",
            title: "UI/UX & Branding",
            description:
                "We design clean, modern, and visually striking digital experiences using deep user research, interactive wireframes, and scalable design systems. Your brand becomes memorable and intuitive.",
            image: "/services/uiux-stack.png",
        },
    ];

    const [index, setIndex] = useState(0);

    const nextSlide = () =>
        setIndex((prev) => (prev + 1) % slides.length);

    const prevSlide = () =>
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="w-full py-10 px-6 md:px-10 lg:px-20">
            <div className="bg-white border border-box-border rounded-3xl shadow-sm p-6 md:px-16">

                <div className="relative overflow-hidden">

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
                        >
                            {/* LEFT SIDE */}
                            <div className="space-y-4">
                                <span className="inline-block px-4 py-1 rounded-full bg-[#EDEAFF] text-[#7F56D9] text-sm font-medium">
                                    {slides[index].pill}
                                </span>

                                <h2 className="text-3xl md:text-4xl font-semibold text-[#3C3C3C]">
                                    {slides[index].title}
                                </h2>

                                <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
                                    {slides[index].description}
                                </p>

                                {/* Buttons */}
                                <div className="flex items-center gap-3 pt-4">
                                    <button
                                        onClick={prevSlide}
                                        className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
                                    >
                                        ←
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="w-10 h-10 rounded-full bg-[#7F56D9] text-white flex items-center justify-center hover:bg-[#6a4bcb] transition"
                                    >
                                        →
                                    </button>
                                </div>
                            </div>

                            {/* RIGHT SIDE IMAGE */}
                            <div className="flex justify-center md:justify-end">
                                <div className="relative w-[240px] md:w-[400px] h-[240px] md:h-[350px] rounded-2xl overflow-hidden">
                                    <Image
                                        src={slides[index].image}
                                        alt={slides[index].title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                </div>
            </div>
        </section>
    );
}
