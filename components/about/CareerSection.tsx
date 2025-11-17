import { ArrowRight } from "lucide-react";

const jobs = [
  {
    title: "Product Manager",
    type: "Full Time",
    location: "On site",
    description:
      "FutureSphere is in need of a talented Product Designer with more than 3 years of past experience in tech sector.",
  },
  {
    title: "Human Resources",
    type: "Full Time",
    location: "On site",
    description:
      "FutureSphere is in need of a talented Product Designer with more than 3 years of past experience in tech sector.",
  },
  {
    title: "UI/UX Designer",
    type: "Full Time",
    location: "Remote",
    description:
      "FutureSphere is in need of a talented Product Designer with more than 3 years of past experience in tech sector.",
  },
];

export default function CareersSection() {
  return (
    <section className=" bg-bg-primary py-10 px-6 md:px-10 lg:px-24 text-center">

      {/* Small Badge */}
      <span className="px-5 py-1 rounded-full bg-[#EDEAFF] text-[#7F56D9] text-sm font-medium">
        Careers
      </span>

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl mt-4 font-semibold text-gray-900">
        New job opportunities
      </h2>

      {/* Subheading */}
      <p className="text-neutral-600 mt-3 max-w-2xl mx-auto">
        Browse through vacancies, internships and job postings at FutureSphere
      </p>

      {/* Job List */}
      <div className="mt-12 space-y-5 max-w-5xl mx-auto">
        {jobs.map((job, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm border border-gray-200 px-6 py-6 flex justify-between items-center"
          >
            {/* Left Side */}
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>

              <p className="text-sm text-gray-500 mt-1">
                {job.type} —{" "}
                <span className="text-[#7F56D9] font-medium">{job.location}</span>
              </p>

              <p className="text-gray-600 text-sm mt-2 max-w-2xl leading-relaxed">
                {job.description}
              </p>
            </div>

            {/* Right Side Arrow */}
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#E0D9FF] text-[#7F56D9] hover:bg-[#F4F0FF] transition">
              <ArrowRight size={18} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
