import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="IT Solutions Team"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-dark-bg/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
        <h3 className="text-dark-fg/70 text-lg md:text-xl font-body mb-4 tracking-wide">
          Innovative Solution for the Future Generation.
        </h3>
        <h2 className="text-dark-fg text-2xl md:text-4xl font-heading font-semibold mb-4">
          Be a Master, the Future of Technology.
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-8">
          <span className="text-primary">Design</span>{" "}
          <span className="text-dark-fg">Develop</span>{" "}
          <span className="text-dark-fg">Succeed</span>
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a href="#about" className="btn-gold text-lg px-10 py-4">
            Explore More
          </a>
          <a
            href="#subscribe"
            className="border-2 border-primary text-primary font-semibold px-10 py-4 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-dark-fg/40 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
