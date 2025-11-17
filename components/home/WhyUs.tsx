import Image from "next/image";

export default function WhyUsSection() {
    return (
        <section className="w-full py-20 px-6 md:px-10 lg:px-20">


            {/* Outer Container */}
            <div className="border bg-bg-primary border-box-border rounded-3xl shadow-sm p-6 md:p-12 flex flex-col md:flex-row gap-10 md:gap-14 items-center">

                {/* LEFT SIDE CONTENT */}
                <div className="flex-1">
                    {/* Pill */}
                    <div className="flex mb-4">
                        <span className="px-5 py-1 rounded-full bg-[#EDEAFF] text-[#7F56D9] text-sm font-medium">
                            Why Us
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-4">
                        Empowering Businesses Through <br />
                        Next-Generation Technology
                    </h2>

                    {/* Text */}
                    <p className="text-neutral-700 leading-relaxed text-sm md:text-base whitespace-pre-line">
                        At Akdenar Labs, we empower businesses with next-generation
                        technology that drives growth and innovation.
                        Our team of experts blends strategy, engineering, and design to deliver
                        intelligent, secure solutions.
                        We create scalable SaaS, cloud, and full-stack applications tailored
                        to diverse industries.
                        With a focus on performance and customer success, we help
                        organizations streamline operations and thrive.
                        We don’t just build technology — we shape the future of how businesses
                        work, connect, and grow.
                    </p>
                </div>

                {/* RIGHT SIDE IMAGE */}
                <div className="flex-1 flex justify-center">
                    <div className="relative w-full max-w-sm md:max-w-md min-h-[260px] h-[260px] md:h-48 rounded-2xl overflow-hidden">
                        <Image
                            src="/home/whyus.svg"
                            alt="Why Us"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
