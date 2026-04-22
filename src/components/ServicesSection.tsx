import { motion } from "framer-motion";

import uiuxImg from "../assets/IUI.webp";
import devImg from "../assets/devs.png";
import webImg from "../assets/desktop.avif";
import appImg from "../assets/apps.jpg";
import marketingImg from "../assets/marketing.jpg";

const services = [
  { title: "UI/UX Design", image: uiuxImg },
  { title: "Development", image: devImg },
  { title: "Web Design", image: webImg },
  { title: "App Development", image: appImg },
  { title: "Digital Marketing", image: marketingImg },
];

// Animation Variants for Smooth Stagger Effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Har card thoda delay se aayega
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15 
    } 
  },
};

const ServicesSection = () => {
  return (
    <section className="py-24 bg-[#FDFDFD] overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black text-[#1e293b] tracking-tight">
            Services We <span className="text-blue-600">Provide</span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Staggered Grid Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              // variants={cardVariants}
              whileHover={{ 
                y: -12, 
                transition: { duration: 0.3 } 
              }}
              className="group bg-white rounded-[2rem] p-8 flex flex-col items-center justify-center border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-shadow duration-500 cursor-pointer"
            >
              {/* Image with Floating Animation */}
              <div className="w-24 h-24 mb-8 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-blue-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 opacity-60"></div>
                <motion.img 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-110" 
                />
              </div>

              <h4 className="text-xl font-extrabold text-[#0f172a] group-hover:text-blue-600 transition-colors">
                {service.title}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;