import Image from "next/image";

export default function WhoWeAre() {
    return (
        <section className="relative container mx-auto w-full py-10 px-6 md:px-10 lg:px-20 bg-white text-[#0F172A]">
            {/* Section Tag */}
            <div className="flex justify-center mb-6">
                <span className="px-5 py-1 rounded-full bg-[#EDEAFF] text-[#7F56D9] text-sm font-medium">
                    Who Are We
                </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl text-center leading-tight max-w-5xl mx-auto tracking-tight">
                Your trusted partner for digital transformation <br /> at scale.
            </h2>

            {/* Sub text */}
            <p className="text-center text-neutral-600 mt-4 max-w-3xl mx-auto">
                We design and deploy AI technologies that make your business smarter,
                faster, and more efficient.
            </p>

            {/* Content Box */}
            <div className="mt-16 bg-bg-primary rounded-3xl border border-box-border p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
                {/* Left Content */}
                <div className="flex-1">
                    <h3 className="text-2xl font-semibold leading-snug mb-4">
                        Global technology powerhouse specializing in next-generation
                        digital transformation.
                    </h3>

                    <p className="text-neutral-700 leading-relaxed text-sm md:text-base">
                        Akdenar Labs is a global technology company focused on SaaS, cloud
                        solutions, full-stack development, and digital innovation. Their
                        goal is to help businesses scale and automate using next-generation
                        technology. Their expert team combines innovation and engineering to
                        build intelligent, secure, and high-performance solutions. They
                        position themselves as a trusted partner for enterprises needing
                        digital transformation, combining global expertise with local
                        insights to drive growth and efficiency.
                    </p>
                </div>

                {/* Right Image */}
                <div className="flex-1 flex justify-center">
                    <div className="rounded-2xl overflow-hidden shadow-lg max-w-xs md:max-w-sm lg:max-w-md">
                        <Image
                            src="/home/whoweare.webp" // Change as needed
                            alt="Cloud Technology"
                            width={500}
                            height={350}
                            className="object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}