import { Target, Flag, Users } from "lucide-react";

const aboutCards = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "DezyKode IT Solutions Pvt Ltd empowers businesses with innovative IT services, training, and internships. We bridge the gap between academics and industry by fostering growth, collaboration, and learning.",
  },
  {
    icon: Flag,
    title: "Our Goal",
    description:
      "DezyKode IT Solutions Pvt Ltd delivers innovative IT services to empower businesses and bridge the skills gap through comprehensive training and internships. We equip aspiring professionals with practical experience.",
  },
  {
    icon: Users,
    title: "Our Team",
    description:
      "At DezyKode IT Solutions Pvt Ltd, our skilled and passionate team drives our success. Our development experts deliver high-quality IT services, while trainers and mentors provide hands-on, industry-relevant learning.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground">
            About <span className="text-primary">DezyKode</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {aboutCards.map((card) => (
            <div
              key={card.title}
              className="bg-card rounded-2xl p-8 shadow-lg card-hover border border-border text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <card.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-heading font-bold text-card-foreground mb-4">
                {card.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                "{card.description}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
