import { useState } from "react";
import { Link } from "react-router-dom";
// import uiux from "../assets/services/uiux.webp";
import uiux from "../../assets/services/uiux.webp";
import webDesign from "../../assets/services/webDesign.webp";
import webDev from "../../assets/services/WEBDEV.webp";
import android from "../../assets/services/ANDROID.webp";
import digital from "../../assets/services/DM.webp";
import ios from "../../assets/services/IOS.webp";

const ServicesCards = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { label: "All", value: "all" },
    { label: "UI/UX Design", value: "uiux" },
    { label: "Web Design", value: "webdesign" },
    { label: "Website Development", value: "webdev" },
    { label: "App Development", value: "app" },
    { label: "Digital Marketing", value: "marketing" },
  ];

  const services = [
    {
      id: 1,
      title: "UI/UX",
      description:
        "We craft intuitive and visually appealing UI/UX designs that...",
      category: "uiux",
      image: uiux,
    },
    {
      id: 2,
      title: "Web Design",
      description:
        "We specialize in creating stunning, user-friendly websites that ...",
      category: "webdesign",
      image: webDesign,
    },
    {
      id: 3,
      title: "Website Development",
      description:
        "We offer top-notch web development services tailored to ...",
      category: "webdev",
      image: webDev,
    },
    {
      id: 4,
      title: "Android App Development",
      description:
        "Our Android application services offer customized, user-friendly mobile ...",
      category: "app",
      image:android ,
    },
    {
      id: 5,
      title: "Digital Marketing",
      description:
        "At DezyKode IT Solutions we offers Digital marketing services encompass a wide range...",
      category: "marketing",
      image: digital,
    },
    {
      id: 6,
      title: "IOS App Development",
      description:
        "IOS application development services, creating seamless, user-friendly apps...",
      category: "app",
      image: ios,
    },
  ];

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((item) => item.category === activeCategory);

  return (
    <section className="py-16 px-6 bg-[#ffffff] min-h-screen">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#272425] mb-10">
        Explore What We Offer
      </h2>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition 
              ${
                activeCategory === cat.value
                  ? "bg-[#f6AE22] text-white"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }
            `}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 max-w-6xl  mx-auto">
        {filteredServices.map((service) => (
          <Link
            to={`/services/service-detail/${service.id}`}
            key={service.id}
            className="group block"
          >
            <div className="relative rounded-xl overflow-hidden">
              {/* IMAGE WRAPPER */}
              <div className="w-full h-96 bg-[#EEEEEE] flex items-center justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* OVERLAY */}
              <div
                className="absolute inset-0 bg-black/60 
      flex flex-col justify-end p-4
      opacity-0 translate-y-6
      group-hover:opacity-100 group-hover:translate-y-0
      transition duration-300"
              >
                <h3 className="text-[#f6AE22] text-lg font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-white text-sm mb-5">{service.description}</p>

                <span className="inline-block px-3 py-2 text-sm bg-[#f6AE22] text-black rounded">
                  View More →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServicesCards;
