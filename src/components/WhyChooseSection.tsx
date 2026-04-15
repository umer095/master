import { ShieldCheck, CheckCircle } from "lucide-react";
import whyChooseImg from "@/assets/why-choose.jpg";

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Image Side */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 bg-primary/20 rounded-2xl w-full h-full" />
            <img
              src={whyChooseImg}
              alt="Quality Services"
              className="relative rounded-2xl shadow-xl w-full object-cover"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="absolute top-4 left-4 bg-primary px-4 py-2 rounded-full flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary-foreground" />
              <span className="text-primary-foreground text-sm font-semibold">Quality Services</span>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2">
            <h2 className="section-title text-foreground">
              Why Choose <span className="text-primary">DezyKode?</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              By choosing DezyKode, businesses and learners gain a trusted
              partner focused on driving growth and empowering success in the
              fast-evolving IT landscape.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-heading font-bold text-foreground mb-3">
                  IT Services
                </h4>
                <ul className="space-y-2">
                  {[
                    "Expertise in delivering innovative and customized IT solutions, including software development, web and mobile apps.",
                    "A client-centric approach ensures high-quality and timely results tailored to unique business needs.",
                    "Strong focus on security, compliance, and cutting-edge technologies.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-heading font-bold text-foreground mb-3">
                  IT Training
                </h4>
                <ul className="space-y-2">
                  {[
                    "Hands-on, industry-relevant training programs in trending technologies like cloud computing and data science.",
                    "Personalized mentorship and interactive learning for practical skills.",
                    "Commitment to quality training that empowers learners to thrive.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a href="#" className="btn-gold inline-block mt-8">
              More Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
