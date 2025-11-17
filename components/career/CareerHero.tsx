import Image from "next/image";

export default function CareerHero() {
  return (
    <>

      <section className=" bg-bg-primary py-20 mt-16 px-6 md:px-10 lg:px-20 text-center">

        {/* Text Section */}
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
          Join Our Team and Shape the Future
        </h2>

        <p className="text-neutral-600 max-w-3xl mx-auto mt-4 leading-relaxed">
          At Akdenar Labs, we believe innovation starts with people. We’re always looking for passionate minds,
          creative thinkers, and problem-solvers who want to make an impact in the digital world. Join a team that
          values growth, collaboration, and excellence—where your ideas matter, your skills are nurtured, and your
          work helps shape the future of technology. Together, let’s build solutions that transform industries worldwide.
        </p>

        {/* Layout Grid */}
        <div className="mt-20 w-full overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300" style={{ height: '400px' }}>
          <Image
            src="/career.jpg"
            width={1000}
            height={400}
            alt="career hero image"
            className="object-cover w-full h-full"
          />
        </div>
      </section>
      <section className=" bg-bg-primary py-5 px-6 md:px-10 lg:px-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE BOX */}
          <div className="rounded-2xl">
            <div className="relative w-full h-[300px] md:h-[350px] lg:h-[380px]">
              <Image
                src="/career/img.png" // replace with your image
                alt="Perks Icons"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="text-left">

            {/* Small Badge */}
            <span className="px-4 py-1 rounded-full bg-[#EDEAFF] text-[#7F56D9] text-xs font-medium">
              Perks
            </span>

            {/* Heading */}
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
              Perks That Go Beyond <br /> Borders
            </h2>

            {/* Description */}
            <p className="mt-4 text-neutral-600 leading-relaxed max-w-xl">
              “Experience a world of benefits with our global presence. Enjoy
              flexible work environments, cultural diversity, professional
              development opportunities, travel adventures, global networking,
              and competitive compensation.”
            </p>

          </div>

        </div>

      </section>
    </>
  );
}
