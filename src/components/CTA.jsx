export default function CTA() {
  return (
    <section className="px-5 py-20 bg-[#EEEEEE]">
      <div className="relative max-w-6xl mx-auto bg-[#f6AE22] rounded-2xl p-10 overflow-hidden">

        {/* FLOATING SHAPES */}
        <div className="absolute w-20 h-20 bg-[#efcb3e] rounded-full top-10 left-20 animate-float"></div>
        <div className="absolute w-10 h-10 bg-[#efcb3e] rounded-full bottom-10 left-40 animate-float2"></div>
        <div className="absolute w-16 h-16 bg-[#efcb3e] top-1/2 left-130 rotate-45 animate-spinSlow"></div>
        <div className="absolute w-15 h-15 border border-[#efcb3e] right-100 top-5 rotate-45 animate-spinSlow"></div>

        <div className="absolute w-30 h-30 bg-[#efcb3e] rounded-full top-10 right-20 animate-float"></div>
        <div className="absolute w-10 h-10 bg-[#efcb3e] rounded-full bottom-25 right-60 animate-float2"></div>
        <div className="absolute w-12 h-12 border border-[#efcb3e] left-100 top-15 rotate-45 animate-spinSlow"></div>

        {/* CONTENT */}
        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">

          {/* LEFT TEXT */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[#EEEEEE]">
            Subscribe for upcoming Workshops.
          </h2>

          {/* RIGHT INPUT */}
          <div className="flex bg-white rounded-full overflow-hidden shadow-md">
            <input
              type="email"
              placeholder="Enter Your E-mail"
              className="flex-1 px-5 py-3 outline-none text-[#272425]"
            />
            <button className="bg-[#272425] text-white px-6 py-3 hover:bg-black transition">
              SUBSCRIBE NOW
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}