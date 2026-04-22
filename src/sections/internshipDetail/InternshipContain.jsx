import { CheckCircle } from "lucide-react";

const InternshipContain = ({ data }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-start">

      {/* LEFT SECTION */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {data.title}
        </h1>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {data.description}
        </p>

        <ul className="space-y-3 mb-8">
          {data.features.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700">
              <CheckCircle className="text-orange-500 mt-1" size={18} />
              {item}
            </li>
          ))}
        </ul>

        <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full text-white font-semibold shadow-md">
          Book your seat
        </button>
      </div>

      {/* RIGHT SECTION */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition">

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Internship Includes
        </h2>

        <p className="text-gray-600 mb-6 text-sm">
          Hands-on experience + real-world exposure to build strong career foundation.
        </p>

        <ul className="space-y-4">
          {data.includes.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition"
            >
              <span className="w-10 h-10 flex items-center justify-center bg-orange-100 text-orange-500 rounded-lg font-bold">
                {index + 1}
              </span>
              <span className="text-gray-800 font-medium">{item}</span>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default InternshipContain;