import { useState, useEffect } from "react";
import { X } from "lucide-react";
// Image path confirm kar lein:
import certPoster from "../assets/certification-poster.jpg";

const PromoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Session Storage logic (Strict Mode Fix)
    const isAlreadyShown = sessionStorage.getItem("popupShownInThisSession");

    if (!isAlreadyShown) {
      setShouldRender(true);
      
      const animTimer = setTimeout(() => {
        setIsOpen(true);
      }, 500);

      sessionStorage.setItem("popupShownInThisSession", "true");

      return () => clearTimeout(animTimer);
    }
  }, []);

  // Refresh par reset karein
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem("popupShownInThisSession");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  if (!shouldRender) return null;

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setShouldRender(false), 500);
  };

  return (
    <div className={`fixed inset-0 z-[999] flex items-center justify-center p-4 transition-opacity duration-700 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />
      
      {/* Popup Box - Size optimized (Compact & Responsive) */}
      {/* MD/LG main max-w-lg (compact) and mobile main max-w-[90%] (responsive) */}
      <div className={`relative bg-white rounded-2xl shadow-2xl max-w-[90%] md:max-w-lg lg:max-w-xl w-full flex flex-col sm:flex-row overflow-hidden transform transition-all duration-700 ease-out 
        ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}>
        
        {/* Close Button - Clean & Compact */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 z-50 w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 hover:scale-105 transition-all text-gray-800"
          aria-label="Close Offer"
        >
          <X className="w-4 h-4 stroke-[3px]" />
        </button>

        {/* Left Section: Image - Responsive Layout */}
        <div className="w-full sm:w-[35%] p-3 sm:p-4 flex items-center justify-center bg-gray-50 border-b sm:border-b-0 sm:border-r border-gray-100">
          {/* Image Container with responsive constraints */}
          <div className="rounded-lg overflow-hidden shadow-sm w-full h-full max-h-[180px] sm:max-h-full">
            <img
              src={certPoster}
              alt="Certification Poster"
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                // Placeholder image in case import fails
                e.target.src = "https://via.placeholder.com/300x500?text=Summer+Offer";
              }}
            />
          </div>
        </div>

        {/* Right Section: Content - Reduced Padding & Compact Font */}
        <div className="w-full sm:w-[65%] p-5 sm:p-7 flex flex-col justify-center text-center">
          <h3 className="text-base md:text-xl font-bold text-gray-800 mb-2 leading-tight">
            Cool skills, Hot opportunities.<br />
            <span className="text-[#FBB03B]">Your future starts this summer</span>
          </h3>
          
          {/* Tagline/Description - Reduced Margin & Subtler Text */}
          <p className="text-gray-500 text-xs md:text-sm mb-3 md:mb-4">
            With Dezykode — where innovation soars high!
          </p>
          
          {/* Limited Seats Text - Red & Flashing */}
          <p className="text-red-500 font-semibold text-[10px] md:text-xs mb-4 md:mb-5 animate-pulse uppercase tracking-wider">
            Limited Seats Available!
          </p>
          
          {/* Call to Action Button - Smaller & Responsive */}
          <div className="flex justify-center" >
            <a
              href="#subscribe"
              onClick={handleClose}
              className="bg-[#FBB03B] hover:bg-[#e89a2e] text-white py-2 px-6 sm:py-3 sm:px-8 rounded-full text-sm md:text-base font-bold shadow-lg transform transition-all active:scale-95"
            style={{textDecoration:"none"}}>
              Get Offer Now!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;