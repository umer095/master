import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import teamImg from "../../assets/about/OurTeam.svg";
import bgImg from "../../assets/about/earth-bg-team.svg";

gsap.registerPlugin(ScrollTrigger);

const TeamSection = () => {
  const sectionRef = useRef();
  const imageRef = useRef();
  const textRef = useRef();
  const bgRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.from(imageRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
      }).from(
        textRef.current,
        {
          x: 100,
          opacity: 0,
          duration: 1,
        },
        "-=0.7",
      );

      gsap.to(bgRef.current, {
        rotate: 360,
        duration: 8,
        repeat: -1,
        ease: "linear",
      });
    }, sectionRef);

    return () => ctx.revert(); // cleanup (important in React)
  }, []);

  return (
    <>
    <section ref={sectionRef} className="py-12 px-6 bg-blue-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div
          ref={imageRef}
          className="relative w-full flex justify-center items-center px-10"
        >
          {/* Background rotating image */}
          <img
            ref={bgRef}
            src={bgImg}
            alt="Rotating Background"
            className="absolute w-100 h-100 z-0  "
          />

          {/* Main image */}
          <img
            src={teamImg}
            alt="Team"
            className="relative z-10 w-full rounded-xl"
          />
        </div>

        {/* Text */}
        <div ref={textRef} className="px-10">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 pb-2">
            At Dezykode IT Solutions Pvt Ltd, our mission is to empower
            businesses and individuals by delivering exceptional IT development
            services, cutting-edge training programs, and hands-on internship
            opportunities.
          </p>
          <p className="text-gray-600 pt-2">
            We are committed to providing innovative and reliable solutions that
            drive digital transformation for our clients, while simultaneously
            equipping aspiring IT professionals with the skills and experience
            needed to thrive in the technology-driven world. Through our
            tailored training programs and real-world internships, we aim to
            create a talent pipeline that bridges the gap between academic
            learning and industry requirements. By fostering a culture of
            excellence, collaboration, and continuous learning, we strive to be
            a catalyst for growth and success, both for our clients and the
            future generation of tech leaders.
          </p>
        </div>
      </div>
    </section>
    </>
  );
};

export default TeamSection;
