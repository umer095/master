import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import itService from "../../assets/images/itServices.jpg";
import itTraining from "../../assets/images/itTraining.jpg";

export default function WhyChoose() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".fade-item");
    if (!items) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -50px 0px" },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Inject animation styles */}
      <style>{`
        .fade-item {
          opacity: 0;
          // transform: translateY(10px);
          transform: translateY(20px);
          transition: 0.6s ease;
          // transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        .fade-item.show {
          opacity: 1;
          transform: translateY(0);
        }
       
        .why-btn:hover { background: #e09c1f; }
        .why-btn:hover .why-btn-arrow { transform: translateX(3px); }
        .why-btn-arrow { transition: transform 0.5s ease; }
        .why-col-img:hover img { transform: scale(1.04); }
      `}</style>

      <section
        ref={sectionRef}
        className="bg-gray-100 text-[#272425] px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="max-w-6xl mx-auto">
          {/* ── HEADER ── */}
          <div className=" text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#272425] leading-tight mb-4">
              Why Choose <span className="text-[#F6AE22]">DezyKode?</span>
            </h2>
            <p className="text-[#888] text-sm max-w-xl mx-auto leading-relaxed">
              Businesses and learners gain a trusted partner focused on driving
              growth and empowering success in the fast-evolving IT landscape.
            </p>
          </div>

          {/* ── TWO COLUMNS ── */}
          <div className="grid md:grid-cols-2 gap-6 mt-10 rounded-2xl overflow-hidden border border-[#bab8b8]">
            {/* ── LEFT — IT SERVICES ── */}
            <div className=" delay-1 flex flex-col p-8 md:p-10 border-b md:border-b-0 md:border-r border-[#f6ae22] bg-white">
              {/* Image */}
              <div
                className="why-col-img relative w-full rounded-xl overflow-hidden mb-6 border border-[#F6AE22]/10"
                style={{ aspectRatio: "16/7" }}
              >
                {/* Gold top bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F6AE22] z-10" />

                <img
                  src={itService}
                  alt="IT Services"
                  className="w-full h-full object-cover transition-transform duration-500"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(30,28,29,0.7) 0%, transparent 60%)",
                  }}
                />

                {/* Badge */}
                <div
                  className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase"
                  style={{
                    background: "rgba(246,174,34,0.12)",
                    border: "1px solid rgba(246,174,34,0.3)",
                    color: "#F6AE22",
                  }}
                >
                  IT Services
                </div>
              </div>

              {/* Title */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#F6AE22]" />
                <h3 className="text-[15px] font-black text-[#272425]">
                  IT Services
                </h3>
              </div>

              {/* Points */}
              <ul className="flex flex-col gap-3 flex-1 mb-6">
                <li className="flex gap-3 items-start">
                  <CheckCircle
                    className="text-[#F6AE22] flex-shrink-0 mt-0.5"
                    size={16}
                  />
                  <span className="text-[12px] text-[#636161] leading-relaxed">
                    Expertise in delivering innovative and customized IT
                    solutions — software development, web and mobile apps, and
                    cloud services.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle
                    className="text-[#F6AE22] flex-shrink-0 mt-0.5"
                    size={16}
                  />
                  <span className="text-[12px] text-[#636161] leading-relaxed">
                    A client-centric approach ensures high-quality and timely
                    results tailored to unique business needs.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle
                    className="text-[#F6AE22] flex-shrink-0 mt-0.5"
                    size={16}
                  />
                  <span className="text-[12px] text-[#636161] leading-relaxed">
                    Strong focus on security, compliance, and cutting-edge
                    technologies to give businesses a competitive edge.
                  </span>
                </li>
              </ul>

              {/* Button */}
              <button
                onClick={() => navigate("/services")}
                className="why-btn inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-xl text-[12px] font-bold text-[#272425] bg-[#F6AE22] transition-colors duration-150"
              >
                View services
                <svg
                  className="why-btn-arrow"
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                >
                  <path
                    d="M2 6.5h9M8 3.5l3 3-3 3"
                    stroke="#272425"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* ── RIGHT — IT TRAINING ── */}
            <div className=" delay-1 flex flex-col p-8 md:p-10 bg-white">
              {/* Image */}
              <div
                className="why-col-img relative w-full rounded-xl overflow-hidden mb-6 border border-[#F6AE22]/10"
                style={{ aspectRatio: "16/7" }}
              >
                {/* Gold top bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F6AE22] z-10" />

                <img
                  src={itTraining}
                  alt="IT Training"
                  className="w-full h-full object-cover object-top transition-transform duration-500"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(26,24,25,0.7) 0%, transparent 60%)",
                  }}
                />

                {/* Badge */}
                <div
                  className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase"
                  style={{
                    background: "rgba(246,174,34,0.12)",
                    border: "1px solid rgba(246,174,34,0.3)",
                    color: "#F6AE22",
                  }}
                >
                  IT Training
                </div>
              </div>

              {/* Title */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#F6AE22]" />
                <h3 className="text-[15px] font-black text-[#272425]">
                  IT Training
                </h3>
              </div>

              {/* Points */}
              <ul className="flex flex-col gap-3 flex-1 mb-6">
                <li className="flex gap-3 items-start">
                  <CheckCircle
                    className="text-[#F6AE22] flex-shrink-0 mt-0.5"
                    size={16}
                  />
                  <span className="text-[12px] text-[#636161] leading-relaxed">
                    Hands-on, industry-relevant training programs in trending
                    technologies like cloud computing and data science.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle
                    className="text-[#F6AE22] flex-shrink-0 mt-0.5"
                    size={16}
                  />
                  <span className="text-[12px] text-[#636161] leading-relaxed">
                    Personalized mentorship and interactive learning for
                    practical skills and job-ready education.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle
                    className="text-[#F6AE22] flex-shrink-0 mt-0.5"
                    size={16}
                  />
                  <span className="text-[12px] text-[#636161] leading-relaxed">
                    Commitment to quality training that empowers learners to
                    thrive in the dynamic IT landscape.
                  </span>
                </li>
              </ul>

              {/* Button */}
              <button
                onClick={() => navigate("/courses")}
                className="why-btn inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-xl text-[12px] font-bold text-[#272425] bg-[#F6AE22] transition-colors duration-150"
              >
                View trainings
                <svg
                  className="why-btn-arrow"
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                >
                  <path
                    d="M2 6.5h9M8 3.5l3 3-3 3"
                    stroke="#272425"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* ── BOTTOM STATS BAR ── */}
          <div className="fade-item delay-3 mt-6 rounded-2xl grid grid-cols-2 bg-[#1e1e1e] sm:grid-cols-4 border border-[#F6AE22]/10 overflow-hidden">
            {[
              { num: "50+", label: "Projects delivered" },
              { num: "200+", label: "Students trained" },
              { num: "10+", label: "Programs offered" },
              { num: "98%", label: "Satisfaction rate" },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center py-5 px-4 text-center border-r border-b sm:border-b-0 border-[#F6AE22]/08 last:border-r-0"
                style={{ borderColor: "rgba(246,174,34,0.08)" }}
              >
                <span className="text-2xl font-black text-[#F6AE22] leading-none">
                  {stat.num}
                </span>
                <span className="text-[10px] text-[#b4b2b2] mt-1.5 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
