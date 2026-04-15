import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-bg text-dark-fg pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="text-primary font-heading text-2xl font-bold">DEZY</span>
              <span className="text-dark-fg font-heading text-2xl font-bold">KODE</span>
            </div>
            <p className="text-dark-fg/60 text-sm leading-relaxed">
              DezyKode IT Solutions Pvt Ltd empowers businesses with innovative
              IT services, training, and internships.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About Us", "Services", "Training", "Internship", "Blog", "Contact Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-dark-fg/60 hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {["UI/UX Design", "Web Development", "App Development", "Digital Marketing", "Data Analytics"].map((s) => (
                <li key={s}>
                  <a href="#" className="text-dark-fg/60 hover:text-primary transition-colors text-sm">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-dark-fg/60 text-sm">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                Pune, Maharashtra, India
              </li>
              <li className="flex items-center gap-3 text-dark-fg/60 text-sm">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                +91 9730822219
              </li>
              <li className="flex items-center gap-3 text-dark-fg/60 text-sm">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                info@dezykode.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-fg/10 pt-8 text-center">
          <p className="text-dark-fg/40 text-sm">
            © {new Date().getFullYear()} DezyKode IT Solutions Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
