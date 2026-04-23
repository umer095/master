import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, User, ArrowUpRight } from "lucide-react";

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] py-5 transition-all duration-500 ${
        scrolled 
          ? "bg-[#0a0a0a] py-3 shadow-2xl" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 flex items-center justify-between">
        
     
        <Link to="/" className="flex items-center no-underline mx-5" style={{ textDecoration: "none", fontSize:"17px" }}>
          <div className="flex items-center tracking-tighter">
            <span className="text-warning text-2xl md:text-3xl font-black">DEZY</span>
            <span className="text-white text-2xl md:text-3xl font-black">KODE</span>
          </div>
          <div className="hidden lg:block h-8 w-[1px] bg-white/20 mx-6"></div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              style={{ textDecoration: "none" }}
              className={({ isActive }) => `
                relative text-[15px] font-bold tracking-wide transition-colors duration-300 no-underline
                ${isActive ? "text-warning" : "text-white hover:text-warning"}
                /* Desktop only underline block */
                after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:h-[3px] 
                after:bg-warning after:transition-all after:duration-300
                ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
              `}
            >
              {link.label}
            </NavLink>
          ))}
          
          <div className="flex items-center gap-4 ml-4">
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-warning hover:bg-white text-black px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 no-underline shadow-lg"
              style={{ textDecoration: "none" }}
            >
              Enquire Now
              <ChevronRight size={16} />
            </Link>

            <div className="p-2 border border-warning rounded-full cursor-pointer hover:bg-warning/10 transition-all">
              <User size={20} className="text-warning" />
            </div>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2 transition-transform active:scale-90"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 z-[101] ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />
      
      {/* Mobile Sidebar Panel */}
      <div 
        className={`lg:hidden fixed top-0 right-0 h-full w-[85%] max-w-[350px] bg-[#0d0d0d] z-[102] p-8 pt-24 transition-transform duration-500 ease-in-out shadow-[-10px_0_40px_rgba(0,0,0,0.7)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-2">
          <p className="text-warning text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-70">Navigation</p>
          {navLinks.map((link) => (
            <NavLink 
              key={link.label} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `
                flex items-center justify-between text-2xl font-bold no-underline py-4 border-b border-white/5 transition-all
                ${isActive ? "text-warning" : "text-white"}
              `}
              style={{ textDecoration: "none" }} // Mobile se line hatane ke liye
            >
              {link.label}
              <ArrowUpRight size={20} className="opacity-30" />
            </NavLink>
          ))}
        </div>

        <div className="mt-12">
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-3 bg-warning text-black w-full py-4 rounded-2xl font-black text-sm uppercase tracking-widest no-underline shadow-xl"
            style={{ textDecoration: "none" }}
          >
            Enquire Now <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;