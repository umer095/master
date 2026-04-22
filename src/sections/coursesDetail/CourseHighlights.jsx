import {User, MessageSquare, FileText, Laptop, Briefcase, Award} from "lucide-react";


const CourseHighlights = ({ course }) => {
   const trainingData = [
  { icon: User, text: "Personality Development" },
  { icon: MessageSquare, text: "Mock Interviews" },
  { icon: FileText, text: "Resume Building" },
  { icon: Laptop, text: "Hands-on Projects" },
  { icon: Briefcase, text: "100% Placement Assistance" },
  { icon: Award, text: "Professional Certificate of Completion" },
];
  return (
    <div className="bg-white px-6 lg:px-16 py-16">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* 🔥 LEFT SIDE (DYNAMIC) */}
        <div>
          {/* ✅ TITLE */}
          <h2 className="text-3xl font-bold text-[#272425] mb-4">
            {course.title}
          </h2>

          {/* ✅ DESCRIPTION */}
          <p className="text-black/80 mb-8 leading-relaxed max-w-xl">
            {course.description}
          </p>

          {/* ✅ POINTS */}
          <div className="space-y-5">
            {course.layout === "detailed"
              ? // 👉 UI/UX DESIGN
                course.points.map((point, index) => (
                  <div key={index} className="p-5 rounded-xl bg-[#EEEEEE]">
                    <h4 className="font-semibold text-[#272425] mb-3">
                      {point.heading}
                    </h4>

                    <ul className="space-y-2">
                      {point.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-black/80"
                        >
                          <span className="mt-2 w-2 h-2 bg-[#272425] rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              : // 👉 OTHER COURSES
                course.points.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-[#EEEEEE]"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#272425] text-white text-sm font-semibold">
                      {index + 1}
                    </div>

                    <p className="text-black leading-relaxed">{point}</p>
                  </div>
                ))}
          </div>
        </div>

        {/* 🔥 RIGHT SIDE (STATIC) */}
        <div className="bg-[#4a4949] text-[#EEEEEE] p-8 rounded-2xl shadow-lg h-fit sticky top-10">
          <h3 className="text-2xl font-semibold mb-6">Training Includes</h3>
          <p className="font-light mb-6">
            It provide an opportunity to gain hands-on experience and build
            professional skills in a real-world setting. Here's what a typical
            training includes.
          </p>

          <div className="space-y-5">
  {trainingData.map((item, index) => {
    const Icon = item.icon;

    return (
      <div
        key={index}
        className="flex items-center gap-4 border-b border-white/10 pb-3 hover:translate-x-1 transition"
      >
        {/* ICON BOX */}
        <div className="w-8 h-8 flex items-center justify-center rounded-md bg-white/9">
          <Icon size={18} className="text-[#EEEEEE]" />
        </div>

        {/* TEXT */}
        <p>{item.text}</p>
      </div>
    );
  })}
</div>
        </div>
      </div>
    </div>
  );
};

export default CourseHighlights;
