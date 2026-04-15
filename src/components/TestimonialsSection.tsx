import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";

const testimonials = [
  {
    name: "Arti B.",
    role: "Digital Marketer",
    image: testimonial1,
    text: "After completing 200 days at DezyKode IT Solutions Pvt Ltd, I thought to share my journey with everyone. This experience has been transformative and has helped me grow both professionally and personally.",
  },
  {
    name: "Amit B.",
    role: "Career Switcher",
    image: testimonial2,
    text: "I am Amit from a non-technical background and I wanted to switch my career in the IT sector. DezyKode provided me the perfect platform to learn and grow with hands-on projects and mentorship.",
  },
  {
    name: "Mohini G.",
    role: "Frontend Developer",
    image: testimonial1,
    text: "When I joined DezyKode I was not having that much knowledge regarding technical skills. Once I got training from the team, I was able to build real projects and land my dream job.",
  },
  {
    name: "Shalini P.",
    role: "Software Tester",
    image: testimonial2,
    text: "I've had the pleasure of working with DezyKode IT Solutions for the last 3 months as a Quality Automation Analyst. This company truly values its employees and their growth.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-dark-fg">
            What our <span className="text-primary">Employees</span> Say!
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/20" />

            <div className="flex flex-col items-center text-center">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-20 h-20 rounded-full object-cover border-4 border-primary mb-6"
                loading="lazy"
              />
              <p className="text-muted-foreground leading-relaxed mb-6 italic text-sm md:text-base">
                "{testimonials[current].text}"
              </p>
              <h4 className="text-lg font-heading font-bold text-card-foreground">
                {testimonials[current].name}
              </h4>
              <span className="text-primary text-sm font-medium">
                {testimonials[current].role}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === current ? "bg-primary" : "bg-dark-fg/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
