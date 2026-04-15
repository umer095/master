import { GraduationCap, Briefcase, Settings } from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    title: "Looking for Training?",
    description:
      "We offer a variety of corporate level training programs tailored for both IT and Non-IT Professionals, catering to freshers as well as experienced candidates.",
    link: "#courses",
  },
  {
    icon: Briefcase,
    title: "Looking for Internship?",
    description:
      "We offer live project internships specifically designed for IT and Non-IT Professionals those looking to enhance their expertise and kickstart a career in IT.",
    link: "#courses",
  },
  {
    icon: Settings,
    title: "Looking for Services?",
    description:
      "As an IT professional company leveraging the latest technology, we provide comprehensive, budget-friendly solutions tailored to your needs.",
    link: "#services",
  },
];

const LookingForSection = () => {
  return (
    <section id="looking-for" className="py-20 bg-section-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground">
            What are you <span className="text-primary">Looking For?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-card rounded-2xl p-8 shadow-lg card-hover border border-border group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <card.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-heading font-bold text-card-foreground mb-4">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {card.description}
              </p>
              <a
                href={card.link}
                className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1"
              >
                Know more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LookingForSection;
