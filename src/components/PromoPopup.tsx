import { useState, useEffect } from "react";
import { X } from "lucide-react";
import certPoster from "@/assets/certification-poster.jpg";

const PromoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-dark-bg/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      <div className="relative bg-card rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden animate-fade-in-up">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-foreground/20 transition-colors"
        >
          <X className="w-5 h-5 text-card-foreground" />
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={certPoster}
              alt="Professional Certification"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-heading font-bold text-card-foreground mb-2">
              Cool Skills, Hot Opportunities.
            </h3>
            <p className="text-lg font-heading font-semibold text-primary mb-4">
              Your Future Starts This Summer
            </p>
            <p className="text-muted-foreground text-sm mb-2">
              With DezyKode — where innovation soars high!
            </p>
            <p className="text-primary font-semibold text-sm mb-6">
              Limited Seats Available!
            </p>
            <a
              href="#subscribe"
              onClick={() => setIsOpen(false)}
              className="btn-gold text-center"
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
