import { Palette, Code, Globe, Smartphone, BarChart3 } from "lucide-react";

const services = [
  { icon: Palette, title: "UI/UX Design" },
  { icon: Code, title: "Development" },
  { icon: Globe, title: "Web Design" },
  { icon: Smartphone, title: "App Development" },
  { icon: BarChart3, title: "Digital Marketing" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground">
            Services We <span className="text-primary">Provide</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-2xl p-6 shadow-md card-hover border border-border text-center group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h4 className="text-sm font-heading font-bold text-card-foreground">
                {service.title}
              </h4>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="btn-gold">
            View More
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
