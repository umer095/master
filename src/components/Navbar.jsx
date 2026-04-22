import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, User } from "lucide-react";

// Move this later to /data/navLinks.js if needed
const navLinks = [
  //  {name:"Home", path:"/"},
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Industrial Training", path: "/courses" },
  { name: "Internship", path: "/internship" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1e1e1e] text-white px-6 py-4 sticky top-0 z-50 border-b border-gray-600">
      
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <NavLink to="/">Dezy<span className="text-yellow-400">Kode</span></NavLink>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-4 lg:gap-8 text-sm lg:text-base">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400"
                    : "hover:text-yellow-400 transition"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-400 transition font-medium">
            Enquire Now
          </button>

          <div className="w-10 h-10 border border-yellow-400 rounded-full flex items-center justify-center cursor-pointer">
            <User size={18} />
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden z-50">
  {!isOpen && (
    <Menu size={28} onClick={() => setIsOpen(true)} />
  )}
</div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center gap-8 text-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button inside menu */}
        <X
          className="absolute top-6 right-6"
          size={28}
          onClick={() => setIsOpen(false)}
        />

        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400"
                : "hover:text-yellow-400 transition"
            }
          >
            {link.name}
          </NavLink>
        ))}

        <button className="bg-yellow-500 text-black px-6 py-3 rounded-full mt-4">
          Enquire Now
        </button>
      </div>
    </nav>
  );
}