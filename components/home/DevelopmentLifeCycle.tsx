"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const developmentLifeCycleData = [
    { id: 1, title: "Requirement Gathering", description: "We start by understanding your vision, goals, and requirements to ensure we're all on the same page." },
    { id: 2, title: "Planning", description: "Our team creates a detailed project plan, including timelines, milestones, and resource allocation." },
    { id: 3, title: "Design", description: "We design a user-friendly and visually appealing interface that aligns with your brand identity." },
    { id: 4, title: "Development", description: "Our expert developers bring the design to life, writing clean and efficient code." },
    { id: 5, title: "Testing", description: "We rigorously test the application to ensure it's bug-free and performs flawlessly." },
    { id: 6, title: "Deployment", description: "We deploy the application to a secure and scalable environment, making it accessible to your users." },
    { id: 7, title: "Maintenance", description: "We provide ongoing support and maintenance to ensure your application remains up-to-date and secure." },
];

export default function DevelopmentLifeCycle() {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["30%", "-70%"]);

    return (
        <section ref={targetRef} className="relative bg-white text-black">

            {/* 🌟 MOBILE VIEW (Vertical Timeline) */}
            <div className="md:hidden flex flex-col gap-10 px-4 py-10 relative">

                {developmentLifeCycleData.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.2 }}
                        transition={{ duration: 0.4 }}
                        className="relative pl-10"
                    >
                        {/* Line */}
                        <span className="absolute left-4 top-0 h-full w-1 bg-purple-600"></span>

                        {/* Circle */}
                        <div className="absolute left-0 top-0 h-8 w-8 rounded-full bg-purple-700 border-2 border-purple-400 text-white flex items-center justify-center font-bold">
                            {item.id}
                        </div>

                        {/* Content */}
                        <div className="bg-linear-to-br bg-[#7F56D9] p-4 rounded-lg shadow-lg text-white">
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="text-sm text-gray-300 mt-2">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* 🖥 DESKTOP VIEW (Horizontal Scroll Animation) */}
            <div className="hidden md:block h-[500vh] relative">
                <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex gap-4">
                        {developmentLifeCycleData.map((item, index) => (
                            <div key={item.id} className="relative w-screen md:w-[400px] px-4">

                                <div className="absolute left-1/2 top-1/2 h-1 w-full -translate-x-1/2 -translate-y-1/2 bg-primary"></div>

                                <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700 border-2 border-purple-400 text-white flex items-center justify-center font-bold">
                                    {item.id}
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: index % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ amount: 0.3 }}
                                    transition={{ duration: 0.5 }}
                                    className={`absolute left-1/2 -translate-x-1/2 ${index % 2 === 0 ? "top-1/2 mt-16" : "bottom-1/2 mb-16"
                                        }`}
                                >
                                    <div className="p-6 bg-linear-to-br from-primary to-purple-800 rounded-lg shadow-2xl w-80 text-white">
                                        <h3 className="text-2xl font-bold">{item.title}</h3>
                                        <p className="mt-3 text-sm text-gray-300">{item.description}</p>
                                    </div>
                                </motion.div>

                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

        </section>
    );
}
