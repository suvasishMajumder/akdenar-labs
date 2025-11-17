export default function FAQSection() {
  const faqs = [
    {
      q: "What services does Akdenar Labs provide?",
      a: "Akdenar Labs offers a full range of technology and SaaS solutions including Full-Stack Development, App Development, Cloud & DevOps, AI & Automation, UI/UX Design, Digital Marketing, SEO, Content Creation, Video Editing, and Animation."
    },
    {
      q: "Why should we choose Akdenar Labs over other companies?",
      a: "We deliver intelligent, secure, and scalable solutions that blend innovation with design excellence. Our expert team ensures measurable results, long-term value, and continuous support to keep your business ahead of the competition."
    },
    {
      q: "What industries do you serve?",
      a: "We cater to a wide range of industries including technology, healthcare, education, finance, retail, and e-commerce. Each solution is customized to match the unique goals and requirements of the client's business domain."
    },
    {
      q: "How can we get started with Akdenar Labs?",
      a: "Getting started is simple — contact our team through our website or email. We'll schedule a consultation, understand your goals, and craft a personalized strategy to accelerate your digital transformation."
    },
  ];

  return (
    <section className="bg-bg-primary py-10 px-6 md:px-10 lg:px-24">

      {/* Badge */}
      <div className="flex justify-center">
        <span className="px-5 py-1 rounded-full bg-[#EDEAFF] text-[#7F56D9] text-sm font-medium">
          FAQs
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-center text-3xl md:text-5xl mt-4 font-semibold text-gray-900">
        Answers to some of your questions
      </h2>

      {/* Subheading */}
      <p className="text-center text-neutral-600 mt-3 max-w-2xl mx-auto">
        Don't find the answers you were looking for? Contact us at{" "}
        <span className="text-[#7F56D9] font-medium cursor-pointer">
          akdenarlabs@gmail.com
        </span>
      </p>

      {/* FAQ Grid */}
      <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-6"
          >
            <h3 className="text-[#7F56D9] font-semibold mb-3">
              {item.q}
            </h3>
            <hr className="my-3 border-gray-200" />
            <p className="text-gray-700 text-sm leading-relaxed">
              {item.a}
            </p>
          </div>
        ))}
      </div>

      {/* View All */}
      <div className="flex justify-center mt-10">
        <button className="flex items-center gap-2 text-[#7F56D9] text-sm font-medium hover:opacity-80">
          View All <span>⌄</span>
        </button>
      </div>
    </section>
  );
}
