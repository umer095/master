import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Industrial Training", path: "/training" },
  { label: "Internship", path: "/internship" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Check karo ki kya hum home page par hain ya nahi
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const shouldShowSolidBg = !isHomePage || scrolled;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        shouldShowSolidBg 
          ? "bg-[#0a0a0a] py-4 shadow-2xl border-b border-white/10" 
          : "bg-transparent py-7"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex items-center tracking-tighter leading-none">
            <span className="text-warning font-heading text-2xl md:text-4xl font-black transition-transform group-hover:scale-105">
              DEZY
            </span>
            <span className="text-white font-heading text-2xl md:text-4xl font-black">
              KODE
            </span>
          </div>
          <div className="hidden lg:block h-10 w-[1px] bg-gradient-to-b from-transparent via-white/30 to-transparent mx-4"></div>
          
        </Link>

        <div className="hidden mt-6 lg:flex items-center gap-12 mx-5 " >
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              className={({ isActive }) => `
                relative text-[15px] font-bold tracking-wide transition-all duration-300 hover:text-warning
                ${isActive ? "text-warning" : "text-gray-200"}
                after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] 
                after:bg-primary after:transition-all after:duration-300 hover:after:w-full
                ${isActive ? "after:w-full" : ""}
              `}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="group flex items-center gap-3 bg-warning hover:bg-white text-black px-8 py-3 rounded-full font-extrabold text-sm uppercase tracking-widest transition-all duration-500 shadow-lg hover:-translate-y-1"
          >
            Enquire Now
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2.5 bg-white/5 rounded-xl border border-white/10 active:scale-90 transition-all"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Sidebar Content (Same as before) */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/98 backdrop-blur-md transition-all duration-500 z-[101] ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div 
        className={`lg:hidden fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-[#0a0a0a] border-l border-white/10 p-10 pt-28 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-[102] shadow-[-20px_0_60px_rgba(0,0,0,0.8)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <span className="text-gray-500 text-[10px] uppercase tracking-[0.4em] font-bold mb-8 opacity-60">Navigation</span>
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) => 
                  `group flex items-center justify-between py-4 border-b border-white/5 transition-all duration-300 ${
                    isActive ? "text-primary border-primary/20" : "text-white/90"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className={`text-2xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-2 ${isActive ? "translate-x-2" : ""}`}>
                      {link.label}
                    </span>
                    <ArrowUpRight size={20} className={`transition-all duration-300 ${isActive ? "opacity-100 rotate-45 text-primary" : "opacity-0 group-hover:opacity-40"}`} />
                  </>
                )}
              </NavLink>
            ))}
          </div>
          <div className="mt-auto">
            <Link to="/contact" className="flex items-center justify-center gap-3 bg-warning text-black w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl">
              Get Started Now <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;