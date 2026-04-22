import { FaCheckCircle } from "react-icons/fa";

export default function Benefits({ benefits, quote }) {
  return (
    <section className="bg-[#fffcfc] py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="bg-[#f7f7f7] rounded-2xl shadow-md p-8 border border-gray-200">

          <h2 className="text-2xl sm:text-3xl font-bold text-[#272425]">
            Benefits We Provide
          </h2>

          <p className="text-[#555] mt-2 text-sm sm:text-base">
            Benefits of Web Design Services.
          </p>

          <div className="mt-6 space-y-4">
            {benefits?.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition"
              >
                <FaCheckCircle className="text-[#f6AE22] text-lg" />
                <span className="text-[#272425] text-sm sm:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-6">

          <div className="bg-[#f9f2e3] rounded-2xl shadow-md p-8 border border-gray-200">

            <p className="text-[#272425] text-base leading-relaxed italic">
              {quote?.text}
            </p>

            <p className="mt-4 text-m font-bold text-[#302f2f]">
              — {quote?.author}
            </p>

          </div>

          <div>
            <a
              href="/contact"
              className="inline-block bg-[#f6AE22] text-black px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition"
            >
              Contact Us
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}