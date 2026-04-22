import React from "react";
import uiux from "../../assets/course/UIUX.webp";
import webDesign from "../../assets/course/WebDesign.webp";
import webDev from "../../assets/course/WebDevelopment.webp";
import mobDev from "../../assets/course/MobileDevelopment.webp";
import digital from "../../assets/course/DigitalMarketing.webp";
import { Link } from 'react-router-dom';

const services = [
  {
    id: "01",
    title: "UI/UX Design",
    desc: "We design intuitive and modern interfaces.",
    bg: "bg-orange-100",
    rotate: "-rotate-3",
    image: uiux,
  },
  {
    id: "02",
    title: "Web Design",
    desc: "Scalable and fast web applications.",
    bg: "bg-blue-100",
    rotate: "rotate-3",
    image: webDesign,
  },
  {
    id: "03",
    title: "Website Development",
    desc: "Android apps with smooth performance.",
    bg: "bg-purple-100",
    rotate: "-rotate-2",
    image: webDev,
  },
  {
    id: "04",
    title: "Android Development",
    desc: "Grow your business with smart strategies.",
    bg: "bg-orange-100",
    rotate: "rotate-2",
    image: mobDev,
  },
  {
    id: "05",
    title: "Degital Marketing",
    desc: "Grow your business with smart strategies.",
    bg: "bg-orange-100",
    rotate: "rotate-2",
    image:digital ,
  },
  {
    id: "06",
    title: "IOS App Development",
    desc: "Grow your business with smart strategies.",
    bg: "bg-blue-100",
    rotate: "rotate-2",
    image: mobDev,
  },
];

export default function ServicesDiamond() {
  return (
    <section className="bg-[#f5f5f5] py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center text-[#272425] mb-12">
          Our Services
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service) => (
  <Link to={`/services/${Number(service.id)}`} key={service.id}>
    <div
      className={`group relative p-5 rounded-2xl shadow-lg ${service.bg} ${service.rotate} transition hover:rotate-0 hover:scale-105`}
    >
      {/* PIN */}
      <div className="absolute -top-3 left-6 w-5 h-5 bg-orange-500 rounded-full shadow-md"></div>

      <div className="flex items-center justify-between gap-6">
        
        {/* LEFT */}
        <div className="flex-1">
          <span className="text-sm font-bold text-gray-500">
            {service.id}
          </span>

          <h3 className="text-lg font-semibold mt-1 text-[#272425]">
            {service.title}
          </h3>

          <p className="text-sm text-gray-600 mt-2">
            {service.desc}
          </p>
        </div>

        {/* RIGHT */}
        <div className="w-24 h-24 sm:w-32 sm:h-28 flex-shrink-0">
          <div className="w-full h-full bg-white/70 rounded-2xl flex items-center justify-center overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
            />
          </div>
        </div>

      </div>
    </div>
  </Link>
))}
        </div>
      </div>
    </section>
  );
}
