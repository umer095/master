import heroBg from "@/assets/AI.mp4";

const HeroSection = () => {
  return (
    <section className="relative h-[85vh] md:h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video - Container height optimized */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroBg} type="video/mp4" />
        </video>
        
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* Compact Content Container */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        
        {/* Small Badge */}
        <div className="inline-block px-3 py-1 mb-4 border border-primary/20 bg-primary/5 backdrop-blur-sm rounded-full">
          <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-widest">
            Innovate with Us
          </span>
        </div>

        <h2 className="text-white/80 text-lg md:text-xl font-medium mb-3 tracking-tight">
          Master the <span className="text-white">Future Technology</span>
        </h2>

        {/* Scaled Down Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tighter">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-yellow-500">
            Design.
          </span>{" "}
          <span className="text-white">Develop.</span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-l from-primary to-white">
            Succeed.
          </span>
        </h1>

        <p className="text-gray-400 text-sm md:text-lg max-w-xl mx-auto mb-8 leading-relaxed font-light">
          Transforming ideas into <span className="text-white">digital reality</span>. 
          Empowering the next generation.<br></br>Be a Master, the Future of Technology
        </p>
        
        {/* Compact CTA Buttons */}
        <div className="flex flex-row gap-4 justify-center items-center">
          <a 
            href="#about" 
            className="btn-gold px-6 py-3 rounded-full text-sm md:text-base font-bold transition-all shadow-lg active:scale-95"
          >
            Explore Vision
          </a>
          
          <a
            href="/contact"
            className="border border-white/30 text-white font-semibold px-6 py-3 rounded-full backdrop-blur-md hover:bg-white hover:text-black transition-all text-sm md:text-base"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Mini Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 opacity-50">
        <div className="w-[1px] h-10 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;