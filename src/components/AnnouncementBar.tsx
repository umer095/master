import { X } from "lucide-react";
import { useState } from "react";

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-warning overflow-hidden">
      <div className="container mx-auto px-4 py-1.5 flex items-center justify-between">
        <div className="flex-1 overflow-hidden">
          <p className="text-warning-foreground text-xs md:text-sm font-medium animate-marquee whitespace-nowrap">
            🚀 Upgrade your skills — Learn smarter, grow faster. Now! &nbsp;&nbsp;&nbsp;
            🚀 Upgrade your skills — Learn smarter, grow faster. Now!
          </p>
        </div>
        <button onClick={() => setVisible(false)} className="text-primary-foreground/80 hover:text-primary-foreground ml-4">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;
