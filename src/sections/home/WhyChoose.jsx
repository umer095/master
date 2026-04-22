import { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import whyImg from "../../assets/images/whyImg.webp";
import circleImg from "../../assets/images/circle.svg";

export default function WhyChoose() {
  useEffect(() => {
    const items = document.querySelectorAll(".fade-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 },
    );

    items.forEach((item) => observer.observe(item));
  }, []);

  return (
    <section className="bg-[#EEEEEE] text-[#EEEEEE] px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="relative flex justify-center items-center overflow-hidden">
          {/* YELLOW SHAPE */}
          <div className="absolute w-64 h-64 bg-[#d08f0d] rounded-full -left-10 -top-10 -z-10"></div>

          {/* MAIN IMAGE */}
          <img
            src={whyImg}
            alt="why"
            className="w-full max-w-md relative z-10"
          />
          <img
            src={circleImg}
            alt="circle"
            className="absolute -top-10 left-[-30px] w-40 opacity-80 animate-rotate"
          />

          {/* ROTATING IMAGE */}
          <img
            src={circleImg}
            alt="circle"
            className="absolute -bottom-10 right-[-30px] w-60 opacity-80 animate-rotate"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="fade-item opacity-0 translate-y-10 transition-all duration-500">
          {/* TITLE */}
          <h2 className="text-3xl text-[#272425] sm:text-4xl font-bold">
            Why Choose DezyKode
          </h2>

          <div className="w-20 h-1 bg-[#edac2a] mt-3 rounded-full"></div>

          <p className="mt-6 text-[#464445]">
            By choosing Dezykode, businesses and learners gain a trusted partner
            focused on driving growth and empowering success in the
            fast-evolving IT landscape.
          </p>

          {/* IT SERVICES */}
          <h3 className="mt-8 text-xl font-semibold text-[#f6AE22]">
            IT Services
          </h3>

          <ul className="mt-4 space-y-3 text-[#272425]">
            <li className="flex gap-3 ">
              <CheckCircle className="text-[#f6AE22] mt-1" size={18} />
              <span>
                Expert IT solutions including software, web, mobile & cloud.
              </span>
            </li>

            <li className="flex gap-3">
              <CheckCircle className="text-[#f6AE22] mt-1" size={18} />
              <span>Client-centric approach with high-quality delivery.</span>
            </li>

            <li className="flex gap-3">
              <CheckCircle className="text-[#f6AE22] mt-1" size={18} />
              <span>Strong focus on security and cutting-edge technology.</span>
            </li>
          </ul>

          {/* IT TRAINING */}
          <h3 className="mt-8 text-xl font-semibold text-[#f6AE22]">
            IT Training
          </h3>

          <ul className="mt-4 space-y-3 text-[#272425]">
            <li className="flex gap-3">
              <CheckCircle className="text-[#f6AE22] mt-1" size={18} />
              <span>Hands-on training in trending technologies.</span>
            </li>

            <li className="flex gap-3">
              <CheckCircle className="text-[#f6AE22] mt-1" size={18} />
              <span>Personalized mentorship and interactive learning.</span>
            </li>

            <li className="flex gap-3">
              <CheckCircle className="text-[#f6AE22] mt-1" size={18} />
              <span>Job-ready skills for real-world success.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
