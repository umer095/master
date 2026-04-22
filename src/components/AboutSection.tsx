import { useEffect, useRef } from "react";
// Images ko yahan import kiya gaya hai
import MissionImg from "../assets/Mission.avif";
import GoalImg from "../assets/Goal.avif";
import TeamImg from "../assets/Team.avif";

const aboutCards = [
  {
    image: MissionImg, 
    title: "Our Mission",
    fallback: "https://img.freepik.com/premium-vector/team-goals-concept-illustration_114360-5175.jpg?w=360",
    description:
      "DezyKode IT Solutions Pvt Ltd empowers businesses with innovative IT services, training, and internships. We bridge the gap between academics and industry by fostering growth, collaboration, and learning.",
  },
  {
    image: GoalImg,
    title: "Our Goal",
    fallback: "https://img.freepik.com/free-vector/ambition-abstract-concept_335657-3013.jpg?semt=ais_hybrid&w=740&q=80",
    description:
      "DezyKode IT Solutions Pvt Ltd delivers innovative IT services to empower businesses and bridge the skills gap through comprehensive training and internships. We equip aspiring professionals.",
  },
  {
    image: TeamImg,
    title: "Our Team",
    fallback: "https://img.freepik.com/free-vector/co-workers-landing-page-concept_52683-25032.jpg?semt=ais_hybrid&w=740&q=80",
    description:
      "At DezyKode IT Solutions Pvt Ltd, our skilled and passionate team drives our success. Our development experts deliver high-quality IT services, while trainers and mentors provide hands-on learning.",
  },
];

const AboutSection = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;
    
    const handleMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 25; 
      const rotateY = (centerX - x) / 25; 
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    
    const handleLeave = (card) => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    };

    cards.forEach(card => {
      if(card) {
        card.addEventListener('mousemove', (e) => handleMove(e, card));
        card.addEventListener('mouseleave', () => handleLeave(card));
      }
    });

    return () => {
      cards.forEach(card => {
        if(card) {
          card.removeEventListener('mousemove', (e) => handleMove(e, card));
          card.removeEventListener('mouseleave', () => handleLeave(card));
        }
      });
    };
  }, []);

  return (
    <section id="about" className="py-24 bg-[#fcfdfe]">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter text-gray-900 mb-4">
            About <span className="text-primary relative inline-block">
              DezyKode
              <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-primary/20 rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
            Innovating the future, empowering the next generation of tech leaders.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto items-stretch">
          {aboutCards.map((card, index) => (
            <div
              key={card.title}
              ref={el => cardsRef.current[index] = el}
              className="group bg-white rounded-[2rem] p-8 md:p-10 flex flex-col items-center text-center shadow-[0_15px_50px_-12px_rgba(0,0,0,0.05)] border border-gray-100/50 transition-all duration-300 ease-out will-change-transform h-full hover:border-primary/20 hover:shadow-primary/5"
            >
              <div className="w-48 h-48 flex items-center justify-center mb-8 relative">
                <div className="absolute inset-0 bg-primary/5 rounded-full scale-90 group-hover:scale-110 transition-transform duration-700 ease-in-out"></div>
                
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-32 h-32 object-contain relative z-10 transition-transform duration-500 group-hover:-translate-y-3"
                  onError={(e) => {

                  }}
                />
              </div>

              <h4 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                {card.title}
              </h4>
              
              <p className="text-gray-600 text-[15px] leading-relaxed font-normal">
                {card.description}
              </p>
              
              <div className="mt-8 w-12 h-1 bg-gray-100 rounded-full group-hover:bg-primary/40 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;