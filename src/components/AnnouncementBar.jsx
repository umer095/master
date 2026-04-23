import React from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const AnnouncementBar = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[110] bg-warning overflow-hidden h-9 flex items-center shadow-md">
      <div className="flex w-full overflow-hidden whitespace-nowrap">
        {/* Scrolling Text using Framer Motion */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-20 text-black text-xs md:text-sm font-bold uppercase tracking-widest px-4"
        >
          <span className="flex items-center gap-2">🚀 DEZYKODE: Upgrade your skills — Learn smarter, grow faster. Now!</span>
          <span className="flex items-center gap-2">🚀 DEZYKODE: Upgrade your skills — Learn smarter, grow faster. Now!</span>
          <span className="flex items-center gap-2">🚀 DEZYKODE: Upgrade your skills — Learn smarter, grow faster. Now!</span>
        </motion.div>
      </div>
      
      {/* Close Button */}
      <button 
        onClick={onClose} 
        className="absolute right-0 z-20 bg-warning px-4 h-full flex items-center hover:opacity-70 transition-opacity"
      >
        <X className="w-4 h-4 text-black" />
      </button>
    </div>
  );
};

// YEH LINE ZAROORI HAI:
export default AnnouncementBar;