import { useState, useEffect } from "react";
import { X } from "lucide-react";
import certPoster from "@/assets/certification-poster.jpg";

const PromoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setShouldRender(true);
    const animTimer = setTimeout(() => setIsOpen(true), 500);
    return () => clearTimeout(animTimer);
  }, []);

  if (!shouldRender) return null;

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setShouldRender(false), 500);
  };

  return (
    <div className={`fixed inset-0 z-[999] flex items-center justify-center p-4 transition-opacity duration-700 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      
     
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />
      
      <div className={`relative bg-white rounded-2xl shadow-2xl max-w-[95%] md:max-w-2xl w-full flex flex-col md:flex-row overflow-hidden transform transition-all duration-700 ease-out 
        ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}>
        
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-50 w-7 h-7 md:w-8 md:h-8 rounded-full bg-black/80 flex items-center justify-center hover:scale-110 transition-transform text-white shadow-lg"
          aria-label="Close"
        >
          <X className="w-4 h-4 md:w-5 md:h-5 stroke-[3px]" />
        </button>

        {/* Left/Top: Image Section - Responsive Layout */}
        <div className="w-full md:w-[40%] p-4 md:p-5 flex items-center justify-center bg-gray-50 border-b md:border-b-0 md:border-r border-gray-100">
          <div className="rounded-xl overflow-hidden shadow-sm w-full h-full max-h-[150px] sm:max-h-[200px] md:max-h-full">
            <img
              src={certPoster}
              alt="Certification"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Right/Bottom: Content Section */}
        <div className="w-full md:w-[60%] p-6 md:p-10 flex flex-col justify-center text-center">
          <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 leading-tight">
            Cool skills, Hot opportunities. <br />
            <span className="text-[#FBB03B]">Your future starts this summer</span>
          </h3>
          
          <p className="text-gray-500 text-xs md:text-base mb-4 md:mb-5">
            With Dezykode — where innovation soars high!
          </p>
          
          <p className="text-red-500 font-semibold text-[10px] md:text-xs mb-5 md:mb-6 animate-pulse uppercase tracking-wider">
            Limited Seats Available!
          </p>
          
          <div className="flex justify-center">
            <a
              href="#subscribe"
              onClick={handleClose}
              className="bg-[#FBB03B] hover:bg-[#e89a2e] text-white py-2.5 px-6 md:py-4 md:px-10 rounded-full text-base md:text-lg font-bold shadow-lg transform transition-all active:scale-95"
            >
              Get Offer Now!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;