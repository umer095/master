import { Link } from "react-router-dom";

const CourseCTA = () => {
  return (
    <div className="bg-[#ded5c3] text-[#EEEEEE] px-6 lg:px-16 py-16 text-center">

      {/* TITLE */}
      <h2 className="text-black text-3xl lg:text-4xl font-bold mb-4">
        Start Your Learning Journey Today
      </h2>

      <p className="text-[#272425] mb-10 max-w-xl mx-auto">
        Choose your preferred day and secure your seat. Limited slots available.
      </p>

      {/* DAYS */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
          <button
            key={index}
            className="w-12 h-12 border rounded-4xl bg-[#EEEEEE] text-[#272425] font-semibold hover:bg-yellow-400 transition"
          >
            {day}
          </button>
        ))}
      </div>

      {/* CTA BUTTON */}
      <Link to="/enquire">
        <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
          Book Your Seat
        </button>
      </Link>

    </div>
  );
};

export default CourseCTA;