
import BackgroundBoxWrapper from "@/components/BackgroundBoxWrapper";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function HeroSection() {

    const [hovered, setHovered] = useState(false);

    return (
        <div className="min-h-screen relative w-full pt-10 md:pt-0 overflow-hidden bg-slate-900 flex flex-col items-center justify-center">

            {/* background */}
            <BackgroundBoxWrapper hovered={hovered} />

            <div className="absolute container pointer-events-none" />

            {/* HERO SECTION */}
            <div
                className="z-20 mt-20 flex flex-col items-center text-center px-4"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {/* Title */}
                <h1 className="text-white font-bold tracking-tight text-3xl md:text-6xl leading-tight">
                    Innovation isn’t an option, <br />
                    it’s our foundation

                </h1>

                {/* Subtitle */}
                <p className="text-neutral-300 text-lg md:text-xl max-w-2xl mt-4">
                    We build systems that think, learn, and evolve with your business.
                </p>

                {/* Button */}
                <div className="mt-8">
                    <Button className="rounded-md px-8 py-4 text-xl text-white bg-[#7F56D9] hover:bg-[#6c41cc]">
                        Contact Us
                    </Button>
                </div>

                {/* Stats Section */}
                <div className="mt-20 flex flex-row flex-wrap justify-center items-center gap-12 md:gap-20">

                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-5xl md:text-6xl font-semibold text-white">25+</h2>
                        <p className="text-base mt-2 text-neutral-300">Active clients</p>
                    </div>

                    <div className="hidden md:block h-14 w-px bg-white/20"></div>

                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-5xl md:text-6xl font-semibold text-white">80+</h2>
                        <p className="text-base mt-2 text-neutral-300">Projects delivered</p>
                    </div>

                    <div className="hidden md:block h-14 w-px bg-white/20"></div>

                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-5xl md:text-6xl font-semibold text-white">95%</h2>
                        <p className="text-base mt-2 text-neutral-300">Client satisfaction</p>
                    </div>

                    <div className="hidden md:block h-14 w-px bg-white/20"></div>

                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-5xl md:text-6xl font-semibold text-white">17+</h2>
                        <p className="text-base mt-2 text-neutral-300">countries served</p>
                    </div>

                </div>
            </div>
        </div>
    )
}