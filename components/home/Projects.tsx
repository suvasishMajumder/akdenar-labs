import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectCard from "../ProjectCard";

export default function ProjectsSection() {
    const router = useRouter();
    const pathname = usePathname();
    return (
        <section className="w-full py-10 px-6 md:px-10 lg:px-20">

            {/* Pill */}
            <div className="flex justify-center mb-3">
                <span className="px-5 py-1 rounded-full bg-[#EDEAFF] text-[#7F56D9] text-sm font-medium">
                    Projects
                </span>
            </div>

            {/* Heading */}
            <h2 className="text-center text-3xl md:text-5xl font-semibold text-gray-900">
                From our Latest Projects
            </h2>

            {/* Cards Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">

                {projects.map((project, index) => {
                    return pathname === "/" || index < 3 ?
                        <ProjectCard key={index} project={project} index={index} />
                        : null
                }
                )}

            </div>

            {/* View All */}
            <div className="flex justify-center mt-10">
                <button onClick={() => router.push("projects")} className="flex items-center gap-2 text-[#7F56D9] font-medium hover:opacity-80 transition">
                    View All
                    <span className="text-lg">→</span>
                </button>
            </div>

        </section>
    );
}
