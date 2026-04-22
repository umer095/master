import { useState, useEffect } from "react";
import quotes from "../../assets/images/quote.svg";
import artiImg from "../../assets/images/arti.jpg";
import amitImg from "../../assets/images/amit.jpg";
import mohiniImg from "../../assets/images/mohini.jpg";
const data = [
  {
    name: "Arti B.",
    role: "Digital Marketer",
    text: "After Completing 200 days at Dezykode it solutions Pvt Ltd. I thought to share my journey with everyone. This experience... View full review details",
    img: artiImg
  },
  {
    name: "Amit B.",
    role: "Anonymous",
    text: "Hello, let me introduce myself first.. I am Amit from non technical background guys and I wanted to switch my career in IT sector ... View full review details",
    img: amitImg
  },
  {
    name: "Mohini G.",
    role: "Frontend Developer",
    text: "When I joined Dezykode i was not having that much of knowledge regarding the technical skills,once i got training from the ... View full review details",
    img: mohiniImg
  },
  {
   name:"Shalini P.",
   role:"Software tester",
   text:"I've the pleasure of working with Dezykode IT Solutions for the last 3 months as a Quality Automation Analyst . This company truly ... View full review details",
   img:artiImg,
  }
];
 
export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % data.length);
  const prev = () => setIndex((index - 1 + data.length) % data.length);

  useEffect(() => {
    const t = setInterval(() => next(), 4000);
    return () => clearInterval(t);
  }, [index]);

  return (
    <section className="bg-[#e6edf1] text-[#272425] py-20 px-4">
      {/* TITLE */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">
          What our Employee says!
        </h2>

        <div className="w-20 h-1 bg-[#f6AE22] mx-auto mt-3 mb-3 rounded-full"></div>
      </div>

      {/* SLIDER */}
      <div className="relative max-w-xl mx-auto mt-10">
        {/* BACK STACK EFFECT */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-full h-full bg-[#cabcc1] rounded-xl scale-95 opacity-60"></div>
          <div className="w-full h-full bg-[#c5c0c2] rounded-xl scale-90 opacity-40 absolute"></div>
        </div>

        {/* MAIN CARD */}
        <div className="relative bg-[#b6bbbe] p-8 rounded-xl shadow-lg text-center">
          {/* Avatar */}
          <img
            src={data[index].img}
            alt={data[index].name}
            className="w-16 h-16 mx-auto rounded-full object-cover border-2 border-[#f6AE22] mb-4"
          />

          {/* Name */}
          <h3 className="font-semibold">{data[index].name}</h3>

          {/* Role */}
          <p className="text-[#212223] text-xl">{data[index].role}</p>

          {/* Text */}
          <p className="mt-4 text-[#292828] text-sm leading-relaxed">
            "{data[index].text}"
          </p>

          {/* Quote Icon */}
          <img
            src={quotes}
            alt="quote"
            className="w-8 absolute top-4 right-4 opacity-60"
          />
        </div>

        {/* BUTTONS */}
        <button
          onClick={prev}
          className="absolute left-[-40px] top-1/2 -translate-y-1/2 bg-[#e6edf1] hover:bg-[#f6AE22] hover:text-black transition p-2 rounded-full"
        >
          ←
        </button>

        <button
          onClick={next}
          className="absolute right-[-40px] top-1/2 -translate-y-1/2 bg-[#e6edf1] hover:bg-[#f6AE22] hover:text-black transition p-2 rounded-full"
        >
          →
        </button>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-6">
        {data.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition ${
              i === index ? "bg-[#f6AE22]" : "bg-[#555]"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
