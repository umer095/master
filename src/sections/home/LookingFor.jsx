import trainingImg from "../../assets/images/Training.svg";
import internshipImg from "../../assets/images/Internship.svg";
import servicesImg from "../../assets/images/Services.svg";
import { useNavigate } from "react-router-dom";

export default function LookingFor() {
  const data = [
    {
      id: "01",
      label: "TRAINING",
      title: "Looking for Training?",
      desc: "Corporate programs for IT and Non-IT professionals — freshers and experienced candidates welcome.",
      img: trainingImg,
      route: "/courses",
    },
    {
      id: "02",
      label: "INTERNSHIP",
      title: "Looking for Internship?",
      desc: "Live project internships for IT and Non-IT professionals to enhance expertise and kickstart a career in tech.",
      img: internshipImg,
      route: "/internship",
    },
    {
      id: "03",
      label: "SERVICES",
      title: "Services looking for?",
      desc: "Comprehensive, budget-friendly IT solutions leveraging the latest technology tailored to your needs.",
      img: servicesImg,
      route: "/services",
    },
  ];

  const navigate = useNavigate();

  return (
    <section className="bg-gray-50 py-20 px-4">
      {/* TITLE */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">
          What you Looking For?
        </h2>

        <div className="w-24 sm:w-28 h-1 bg-[#f6ae22] mx-auto mt-3 rounded-full"></div>

        <p className="my-6 text-[#242725] max-w-2xl mx-auto">
          We offer a wide range of services to help you grow in the tech
          industry.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-12 space-y-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition"
          >
            {/* LEFT STRIP */}
            <div className="relative w-24 sm:w-28 bg-[#F6AE22] flex flex-col items-center justify-center py-6">
              {/* Number */}
              {/* <span className="text-black font-bold text-lg mb-6">
          {item.id}
        </span> */}

              {/* Vertical Label */}
              <span className="rotate-[-90deg] text-[11px] font-bold tracking-[2px] text-black">
                {item.label}
              </span>

              {/* Dot */}
              <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-black rounded-full"></div>
            </div>

            {/* CONTENT */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 px-6 sm:px-8 py-6 w-full">
              {/* LEFT CONTENT */}
              <div className="flex items-start gap-4 max-w-lg">
                {/* Icon */}
                <div className=" hidden sm:flex w-24 h-24 rounded-lg bg-gray-100 items-center justify-center p-2">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* BUTTON */}
              <button
  onClick={() => navigate(item.route)}
  className="w-full sm:w-auto border border-[#F6AE22] text-[#F6AE22] px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#F6AE22] hover:text-black transition"
>
  Know more →
</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
