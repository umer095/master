import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap, Briefcase, Settings, ArrowRight } from "lucide-react";

const lookForCards = [
  {
    icon: <GraduationCap size={42} strokeWidth={1.5} />,
    title: "Looking for Training?",
    description: "Master industry-demand skills with our expert-led corporate training programs designed for modern professionals.",
    path: "/training",
    accent: "bg-blue-600",
    lightAccent: "bg-blue-50 text-blue-600"
  },
  {
    icon: <Briefcase size={42} strokeWidth={1.5} />,
    title: "Looking for Internship?",
    description: "Gain hands-on experience on live industry projects and kickstart your professional journey with confidence.",
    path: "/internship",
    accent: "bg-emerald-600",
    lightAccent: "bg-emerald-50 text-emerald-600"
  },
  {
    icon: <Settings size={42} strokeWidth={1.5} />,
    title: "Services looking for?",
    description: "Scale your business with our comprehensive, budget-friendly IT solutions leveraging cutting-edge technology.",
    path: "/services",
    accent: "bg-orange-600",
    lightAccent: "bg-orange-50 text-orange-600"
  },
];

const LookForSection = () => {
  return (
    <section className="py-28 bg-[#FDFDFD] overflow-hidden">
      <div className="container mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="text-center mb-24"
        >
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Opportunities</span>
          <h4 className="text-4xl md:text-5xl font-black text-slate-400 tracking-tight mb-6">
            What are you <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">looking for?</span>
          </h4>
          <div className="w-20 h-1.5 bg-slate-200 mx-auto rounded-full overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full h-full bg-blue-600"
            />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {lookForCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 20, 
                delay: index * 0.15 
              }}
              whileHover={{ y: -12 }}
              className="relative group bg-white rounded-[3rem] p-12 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] h-full"
            >

              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3rem]" />

              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className={`mb-10 p-8 rounded-3xl ${card.lightAccent} relative z-10 transition-transform duration-500 group-hover:scale-110 shadow-sm`}
              >
                {card.icon}
              </motion.div>

              <div className="relative z-10 flex flex-col flex-grow">
                <h3 className="text-3xl font-extrabold text-slate-800 mb-6 group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-12">
                  {card.description}
                </p>
              </div>

              <motion.div whileTap={{ scale: 0.96 }} className="relative z-10 w-full mt-auto">
                <Link
                  to={card.path}
                  className="group/btn flex items-center justify-center gap-3 w-full bg-slate-900 hover:bg-blue-600 text-white py-3 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl overflow-hidden relative"
                >
                  <span className="relative z-10">Know More</span>
                  <ArrowRight size={20} className="relative z-10 group-hover/btn:translate-x-2 transition-transform duration-300" />

                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.div>

              <span className="absolute top-8 right-12 text-slate-50 font-black text-7xl select-none group-hover:text-slate-100/50 transition-colors pointer-events-none">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LookForSection;