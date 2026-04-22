import uiImg from "../../assets/icons/ui.svg";
import devImg from "../../assets/icons/dev.svg";
import webImg from "../../assets/icons/web.svg";
import appImg from "../../assets/icons/app.svg";
import digitalImg from "../../assets/icons/digital.svg";

export default function ServicesPreview() {
  const services = [
    { title: "UI/UX Design", img: uiImg },
    { title: "Development", img: devImg },
    { title: "Web Design", img: webImg },
    { title: "App Development", img: appImg },
    { title: "Digital Marketing", img: digitalImg },
  ];

  return (
    <section className="bg-[#F5F6F0] px-4 sm:px-6 lg:px-8 py-20">
      {/* TITLE */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#272425]">
          Services We Provide
        </h2>

        <div className="w-20 h-1 bg-[#f6AE22] mx-auto mt-3 rounded-full"></div>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {services.map((service, index) => (
          <div
            className="group bg-white rounded-xl p-6 text-center 
  transition-all duration-300 
  shadow-sm hover:shadow-xl hover:-translate-y-2 relative overflow-hidden"
          >
            {/* ICON */}
            <img
              src={service.img}
              alt={service.title}
              className="w-14 h-14 mx-auto object-contain"
            />

            {/* TITLE */}
            <h3 className="mt-5 text-sm sm:text-base font-bold text-[#272425]">
              {service.title}
            </h3>

            {/* MULTI COLOR LINE */}
            <div
              className="absolute bottom-0 left-0 w-full h-1 
    bg-linear-to-r from-[#f6AE22] via-pink-500 to-blue-500 
    scale-x-0 group-hover:scale-x-100 
    transition-transform duration-300 origin-left"
            ></div>
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <div className="mt-12 flex justify-center">
        <button className="bg-[#f6AE22] text-black px-8 py-3 rounded-full font-medium hover:bg-[#e09c1f] transition">
          View more
        </button>
      </div>
    </section>
  );
}
