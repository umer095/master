import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industrial Training", href: "#courses" },
  { label: "Internship", href: "#looking-for" },
  { label: "Blog", href: "#" },
  { label: "Contact Us", href: "#subscribe" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/95 backdrop-blur-sm border-b border-foreground/10">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="text-primary font-heading text-2xl font-bold tracking-wider">DEZY</span>
            <span className="text-dark-fg font-heading text-2xl font-bold tracking-wider">KODE</span>
          </div>
          <span className="text-dark-fg/60 text-xs font-body hidden sm:block">IT Solutions</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-dark-fg/80 hover:text-primary transition-colors text-sm font-medium font-body"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#subscribe"
            className="btn-gold text-sm px-6 py-2"
          >
            Enquire Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-dark-fg p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-dark-bg border-t border-foreground/10 py-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-3 text-dark-fg/80 hover:text-primary hover:bg-foreground/5 transition-colors font-body"
            >
              {link.label}
            </a>
          ))}
          <div className="px-6 pt-3">
            <a href="#subscribe" className="btn-gold block text-center text-sm">
              Enquire Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
