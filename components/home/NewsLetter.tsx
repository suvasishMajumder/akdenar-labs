import Image from "next/image";

export default function NewsletterSection() {
    return (
        <section className="w-full py-10 px-6 md:px-10 lg:px-20 z-40">
            <div className="relative w-full rounded-3xl overflow-hidden shadow-md border border-[#dfe3ff]">

                {/* Background Image */}
                <div className="absolute inset-0 z-10">
                    <Image
                        src="/home/newsletter.svg"   // ⭐ Use your image here
                        alt="Newsletter Background"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

                {/* Content */}
                <div className="relative z-20 flex flex-col items-center justify-center text-center py-20 px-6 md:px-12">

                    {/* Icon */}
                    <Image
                        src={"/home/messageIcon.svg"}
                        width={32}
                        height={32}
                        alt="message icon"
                    />

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">
                        Do cool things with us.
                    </h2>

                    {/* Subheading */}
                    <p className="text-neutral-200 max-w-lg text-sm md:text-base mb-8 leading-relaxed">
                        Stay in the loop with updates from our team
                        and community. Once a month.
                    </p>

                    {/* Input + Button */}
                    <div className="flex w-full max-w-lg bg-white rounded-md overflow-hidden p-1 shadow-sm">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 text-sm outline-none"
                        />
                        <button className="px-5 py-3 bg-[#7F56D9] text-white text-sm font-medium hover:bg-[#6b45cc] transition rounded-md flex">
                            Subscribe &nbsp; <span className="md:block hidden"> to newsletter</span>
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
}
