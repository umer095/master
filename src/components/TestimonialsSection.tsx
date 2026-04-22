import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Aap in paths ko apne images ke hisab se update kar sakte hain
const manAvatar = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
const womanAvatar = "https://cdn-icons-png.flaticon.com/512/3135/3135789.png";

const testimonials = [
  {
    name: "---",
    role: "Digital Marketer",
    image: womanAvatar,
    text: "After completing 200 days at DezyKode IT Solutions Pvt Ltd, I thought to share my journey with everyone. This experience has been transformative and has helped me grow both professionally and personally.",
  },
  {
    name: "Anurag S",
    role: "Data analytics",
    image: manAvatar,
    text: "I am Amit from a non-technical background and I wanted to switch my career in the IT sector. DezyKode provided me the perfect platform to learn and grow with hands-on projects.",
  },
  {
    name: "--",
    role: "Frontend Developer",
    image: womanAvatar,
    text: "When I joined DezyKode I was not having that much knowledge regarding technical skills. Once I got training from the team, I was able to build real projects and land my dream job.",
  },
  {
    name: "Samir A",
    role: "Full Stack Developer",
    image: manAvatar, 
    text: "When I joined DezyKode I was not having that much knowledge regarding technical skills. Once I got training from the team, I was able to build real projects and land my dream job.",
  },
  {
    name: "Akash A",
    role: "Full Stack Developer",
    image: manAvatar,
    text: "The work culture here is amazing. I got to work on high-end server technologies that really pushed my limits as a developer.",
  },
  {
    name: "Shivam S",
    role: "Full Stack Developer",
    image: manAvatar,
    text: "DezyKode is not just a company; it's a learning hub. The mentors are always there to guide you through complex architecture problems.",
  },
  {
    name: "Manish M",
    role: "UI/UX Designer",
    image: manAvatar,
    text: "The creative freedom I get here is unparalleled. Designing user-centric solutions for international clients has been an incredible experience.",
  },
  {
    name: "Ranvijay R",
    role: "Project Manager",
    image: manAvatar,
    text: "Managing teams at DezyKode has taught me the true meaning of collaboration. We deliver quality solutions on time, every time.",
  },
  {
    name: "Vinod V",
    role: "Full Stack Developer",
    image: manAvatar,
    text: "Managing teams at DezyKode has taught me the true meaning of collaboration. We deliver quality solutions on time, every time.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-[#0f172a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            What our <span className="text-blue-500">Employees</span> Say!
          </motion.h2>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto relative px-4">
          <div className="relative h-[400px] md:h-[350px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -100 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[2.5rem] p-10 md:p-14 shadow-2xl relative w-full text-center"
              >
                <Quote className="absolute top-8 right-10 w-16 h-16 text-blue-500/10" />

                <div className="flex flex-col items-center">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-20 animate-pulse"></div>
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 relative z-10 bg-slate-800 p-1"
                    />
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed mb-8 italic text-lg md:text-xl font-medium">
                    "{testimonials[current].text}"
                  </p>
                  
                  <h4 className="text-2xl font-bold text-white mb-1">
                    {testimonials[current].name}
                  </h4>
                  <span className="text-blue-400 font-semibold tracking-wide uppercase text-xs">
                    {testimonials[current].role}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between mt-12 gap-8">
            <div className="flex gap-4 order-2 md:order-1">
              <button
                onClick={prev}
                className="w-14 h-14 rounded-full border-2 border-white/10 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={next}
                className="w-14 h-14 rounded-full border-2 border-white/10 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center gap-3 order-1 md:order-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-10 bg-blue-500" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;