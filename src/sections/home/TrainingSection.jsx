// import { useState } from "react";

// import UIUXImg from "../../assets/images/UIUX.png";
// import FSDImg from "../../assets/images/FSD.png";
// import DMImg from "../../assets/images/DM.png";
// import DAImg from "../../assets/images/DA.png";
// import BAImg from "../../assets/images/BA.png";
// import DSImg from "../../assets/images/DS.webp";
// export default function TrainingSection() {
//   const trainings = [
//     {
//       title: "UI/UX Design & Development",
//       desc: "Learn full-stack web development with real-world projects and industry practices.",
//       img: UIUXImg,
//     },
//     {
//       title: "Full-Stack Development",
//       desc: "Build high-performance mobile applications for Android and iOS platforms.",
//       img: FSDImg,
//     },
//     {
//       title: "Digital Marketing",
//       desc: "Master data analysis, machine learning, and AI with hands-on training.",
//       img: DMImg,
//     },
//     {
//       title: "Data Analytics",
//       desc: "Master data analysis, machine learning, and AI with hands-on training.",
//       img: DAImg,
//     },
//     {
//       title: "Business Analytics",
//       desc: "Master data analysis, machine learning, and AI with hands-on training.",
//       img: BAImg,
//     },
//     {
//       title: "Data Science",
//       desc: "Master data analysis, machine learning, and AI with hands-on training.",
//       img: DSImg,
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <section className="bg-[#EEEEEE] text-[#EEEEEE] px-4 sm:px-6 lg:px-8 py-20">

//       {/* TITLE */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl sm:text-4xl text-[#272425] font-bold">
//           Popular Training & Internships We Provide
//         </h2>
//         <div className="w-20 h-1 bg-[#f6AE22] mx-auto mt-3 rounded-full"></div>
//       </div>

//       {/* MAIN LAYOUT */}
//       <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

//         {/* LEFT LIST */}
//         <div className="space-y-3">

//           {trainings.map((item, index) => (
//             <div
//               key={index}
//               onClick={() => setActiveIndex(index)}
//               className={`cursor-pointer p-4 rounded-lg transition-all duration-300 
//                 ${
//                   activeIndex === index
//                     ? "bg-[#f6AE22] text-black"
//                     : "bg-[#EEEEEE] text-black border-1r border-[#cccccc] hover:bg-[#bdbabb]"
//                 }`}
//             >
//               {item.title}
//             </div>
//           ))}

//         </div>

//         {/* RIGHT CONTENT */}
//         <div className="bg-[#cdd3d4] p-6 rounded-xl">

//           <img
//             src={trainings[activeIndex].img}
//             alt="training"
//             className="w-full h-60 object-cover rounded-lg hover:scale-105 transition-transform duration-600"
//           />

//           <h3 className="mt-5 text-xl text-[#272425] font-semibold">
//             {trainings[activeIndex].title}
//           </h3>

//           <p className="mt-3 text-[#272425]">
//             {trainings[activeIndex].desc}
//           </p>

//           <button className="mt-6 bg-[#f6AE22] text-black px-6 py-2.5 rounded-lg font-medium hover:bg-[#e09c1f] transition">
//             View More
//           </button>

//         </div>

//       </div>
//     </section>
//   );
// }

// import { useEffect, useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";

// import UIUXImg from "../../assets/images/UIUX.png";
// import FSDImg from "../../assets/images/FSD.png";
// import DMImg from "../../assets/images/DM.png";
// import DAImg from "../../assets/images/DA.png";
// import BAImg from "../../assets/images/BA.png";
// import DSImg from "../../assets/images/DS.webp";

// export default function TrainingSection() {
//   const navigate = useNavigate();
//   const sectionRef = useRef(null);

//   const trainings = [
//     { title: "UI/UX Design & Development", img: UIUXImg },
//     { title: "Full-Stack Development", img: FSDImg },
//     { title: "Digital Marketing", img: DMImg },
//     { title: "Data Analytics", img: DAImg },
//     { title: "Business Analytics", img: BAImg },
//     { title: "Data Science", img: DSImg },
//   ];

//   const [visibleCards, setVisibleCards] = useState(1);

//   useEffect(() => {
//     const handleScroll = () => {
//       const section = sectionRef.current;
//       const rect = section.getBoundingClientRect();

//       const scrollProgress = Math.min(
//         Math.max(-rect.top / rect.height, 0),
//         1
//       );

//       const cardsToShow = Math.ceil(scrollProgress * trainings.length);

//       setVisibleCards(cardsToShow || 1);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="h-[300vh] bg-[#111]" // 🔥 SCROLL SPACE
//     >
//       {/* STICKY AREA */}
//       <div className="sticky top-0 h-screen flex items-center justify-center">

//         <div className="relative w-[400px] h-[500px]">

//           {trainings.map((item, index) => {
//             if (index >= visibleCards) return null;

//             return (
//               <div
//                 key={index}
//                 className="absolute w-full h-full rounded-xl overflow-hidden shadow-xl transition-all duration-500"
//                 style={{
//                   transform: `
//                     translateY(${index * 15}px)
//                     scale(${1 - index * 0.04})
//                   `,
//                   zIndex: index,
//                 }}
//               >
//                 <img
//                   src={item.img}
//                   className="w-full h-full object-cover"
//                 />

//                 <div className="absolute inset-0 bg-black/50 p-6 flex flex-col justify-end">
//                   <h2 className="text-white text-xl font-bold">
//                     {item.title}
//                   </h2>

//                   {index === visibleCards - 1 && (
//                     <button
//                       onClick={() => navigate("/courses")}
//                       className="mt-4 bg-[#f6AE22] text-black px-4 py-2 rounded"
//                     >
//                       View More
//                     </button>
//                   )}
//                 </div>
//               </div>
//             );
//           })}

//         </div>

//       </div>
//     </section>
//   );
// }

import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import UIUXImg from "../../assets/images/UIUX.png";
import FSDImg from "../../assets/images/FSD.png";
import DMImg from "../../assets/images/DM.png";
import DAImg from "../../assets/images/DA.png";
import BAImg from "../../assets/images/BA.png";
import DSImg from "../../assets/images/DS.webp";

const trainings = [
  {
    title: "UI/UX Design & Development",
    link: "/courses/courses-detail/1",
    desc: "Our UI/UX Design Training focuses on equipping you with the...",
    img: UIUXImg,
    category: "Design",
    skills: ["Figma", "Typography", "Design System", "ProtoTyping"],
  },
  {
    title: "Full-Stack Development",
    link: "/courses/courses-detail/3",
    desc: "This Full Stack with Python Training is designed for aspiring...",
    img: FSDImg,
    category: "Development",
    skills: ["React", "Node.js", "Java", "MongoDB"],
  },
  {
    title: "Digital Marketing",
    link: "/courses/courses-detail/5", 
    desc: "Our Digital Marketing Training empowers you with in-demand...",
    img: DMImg,
    category: "Marketing",
    skills: ["SEO", "Google Algo", "Affiliate Marketing", "Social Media Automation"],
  },
  {
    title: "Data Analytics",
    link: "/courses/courses-detail/2",
    desc: "Unlock the power of data with our comprehensive Data Analytics...",
    img: DAImg,
    category: "Data",
    skills: ["Python", "SQL", "Tableau", "Power BI"],
  },
  {
    title: "Business Analytics",
    link: "/courses/courses-detail/7",
    desc: "Our training and Internship program brighten your career journey...",
    img: BAImg,
    category: "Analytics",
    skills: ["Excel", "Power BI", "Agile", "JIRA"],
  },
  {
    title: "Data Science",
    link: "/courses/courses-detail/4",
    desc: "Unlock the world of data with our comprehensive Data Science...",
    img: DSImg,
    category: "Data Science",
    skills: ["ML", "TensorFlow", "Pandas", "Scikit-learn"],
  },
];

export default function TrainingSection() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [exitDir, setExitDir] = useState(null);
  const wrapperRef = useRef(null);
  const activeRef = useRef(0);
  const animRef = useRef(false);
  const scrollBuffer = useRef(0);

  const goTo = (next, dir) => {
    if (animRef.current) return;
    if (next < 0 || next >= trainings.length) return;
    animRef.current = true;
    setExitDir(dir);
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex(next);
      activeRef.current = next;
      setExitDir(null);
      setAnimating(false);
      setTimeout(() => { animRef.current = false; }, 80);
    }, 380);
  };

  useEffect(() => {
    const onWheel = (e) => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      // Sticky section is active when wrapper top is scrolled past viewport top
      const stickyActive = rect.top <= 0 && rect.bottom >= window.innerHeight;
      if (!stickyActive) return;

      const cur = activeRef.current;
      // Allow normal scroll when on last card going down, or first card going up
      if (e.deltaY > 0 && cur === trainings.length - 1) return;
      if (e.deltaY < 0 && cur === 0) return;

      e.preventDefault();
      scrollBuffer.current += e.deltaY;
      if (Math.abs(scrollBuffer.current) < 50) return;

      if (scrollBuffer.current > 0) goTo(cur + 1, "up");
      else goTo(cur - 1, "down");
      scrollBuffer.current = 0;
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  // Touch swipe
  const touchY = useRef(null);
  const onTouchStart = (e) => { touchY.current = e.touches[0].clientY; };
  const onTouchEnd = (e) => {
    if (touchY.current === null) return;
    const diff = touchY.current - e.changedTouches[0].clientY;
    if (Math.abs(diff) < 70) { touchY.current = null; return; }
    if (diff > 0) goTo(activeRef.current + 1, "up");
    else goTo(activeRef.current - 1, "down");
    touchY.current = null;
  };

  const active = trainings[activeIndex];

  const imgAnim = animating
    ? exitDir === "up" ? "opacity-0 -translate-y-10 scale-95" : "opacity-0 translate-y-10 scale-95"
    : "opacity-100 translate-y-0 scale-100";

  const textAnim = animating
    ? exitDir === "up" ? "opacity-0 translate-y-6" : "opacity-0 -translate-y-6"
    : "opacity-100 translate-y-0";

  return (
    // Tall wrapper — gives scroll room equal to (cards × 100vh)
    // The sticky child locks to the screen until user scrolls through all cards
    <div
      ref={wrapperRef}
      style={{ height: `${(trainings.length -1) * 100 + 100}vh` }}
      className="relative"
    >
      <div
        className="sticky top-0 h-screen bg-[#ffffff] text-black flex flex-col overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >

        {/* HEADER */}
        <div className="text-center pt-10 pb-4 px-4 flex-shrink-0">
          <span className="text-[10px] font-bold tracking-[0.15em] text-[#F6AE22] uppercase">
            Popular Programs
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#272428] mt-2 leading-tight">
            Popular Training &amp; Internships We Provide
          </h2>
          <div className="w-14 h-[3px] bg-[#F6AE22] mx-auto mt-3 rounded-full" />
        </div>

        {/* BODY */}
        <div className="flex-1 flex items-center overflow-hidden px-6 sm:px-10 lg:px-20 max-w-6xl mx-auto w-full gap-12">

          {/* LEFT — IMAGE */}
          <div className="hidden md:flex flex-col items-center gap-5 w-[400px] flex-shrink-0">

            {/* Image */}
            <div
              onClick={() => navigate(active.link)}
              className="relative w-full rounded-2xl overflow-hidden border"
              style={{ aspectRatio: "4/3", borderColor: "rgba(246,174,34,0.3)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F6AE22] z-10" />
              <img
                
                src={active.img}
                alt={active.title}
                className={`w-full h-full object-cover transition-all duration-380 ease-out ${imgAnim}`}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(39,36,37,0.65) 0%, transparent 55%)" }}
              />
              {/* Category */}
              <div
                className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase z-10 transition-all duration-380 ${textAnim}`}
                style={{ background: "rgba(246,174,34,0.12)", border: "1px solid rgba(246,174,34,0.3)", color: "#F6AE22" }}
              >
                {active.category}
              </div>
              {/* Counter */}
              <div className="absolute top-4 right-4 z-10 text-[11px] font-black" style={{ color: "rgba(246,174,34,0.6)" }}>
                {String(activeIndex + 1).padStart(2, "0")}
                <span style={{ color: "rgba(246,174,34,0.25)" }}>/{String(trainings.length).padStart(2, "0")}</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full">
              <div className="w-full rounded-full overflow-hidden" style={{ height: "3px", background: "rgba(246,174,34,0.1)" }}>
                <div
                  className="h-full bg-[#F6AE22] rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${((activeIndex + 1) / trainings.length) * 100}%` }}
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[10px] text-[#555]">Program {activeIndex + 1} of {trainings.length}</span>
                <span className="text-[10px] text-[#555]">
                  {activeIndex < trainings.length - 1 ? `${trainings.length - activeIndex - 1} more ↓` : "All viewed ✓"}
                </span>
              </div>
            </div>

            {/* Dots */}
            <div className="flex gap-2">
              {trainings.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > activeIndex ? "up" : "down")}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === activeIndex ? "22px" : "7px",
                    height: "7px",
                    background: i === activeIndex ? "#F6AE22" : i < activeIndex ? "rgba(246,174,34,0.4)" : "rgba(246,174,34,0.12)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* RIGHT — DETAILS */}
          <div className="flex-1 flex flex-col justify-center">

            {/* Mobile image */}
            <div
              onClick={()=> navigate(active.link)}
              className={`md:hidden relative w-full rounded-xl overflow-hidden mb-5 border transition-all duration-380 ease-out ${imgAnim}`}
              style={{ aspectRatio: "16/7",minHeight:"200px", borderColor: "rgba(246,174,34,0.2)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F6AE22] z-10" />
              <img src={active.img} alt={active.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(39,36,37,0.6) 0%, transparent 55%)" }} />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase z-10"
                style={{ background: "rgba(246,174,34,0.12)", border: "1px solid rgba(246,174,34,0.3)", color: "#F6AE22" }}>
                {active.category}
              </div>
              <span className="absolute top-3 right-3 text-[10px] font-black z-10" style={{ color: "rgba(246,174,34,0.6)" }}>
                {activeIndex + 1}/{trainings.length}
              </span>
            </div>

            {/* Text */}
            <div className={`transition-all duration-380 ease-out ${textAnim}`}>

              <h3 className="text-2xl sm:text-3xl font-black text-[#514e4e] leading-tight mb-3">
                {active.title}
              </h3>

              <p className="text-[13px] text-[#555] leading-relaxed mb-5">
                {active.desc}
              </p>

              <div className="mb-4" style={{ borderTop: "0.5px solid rgba(246,174,34,0.1)" }} />

              <p className="text-[10px] font-bold tracking-widest text-[#555] uppercase mb-3">
                Skills you'll gain
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {active.skills.map((skill) => (
                  <span key={skill} className="text-[11px] font-semibold px-3 py-1.5 rounded-lg"
                    style={{ background: "rgba(246,174,34,0.08)", color: "rgba(246,174,34,0.8)" }}>
                    {skill}
                  </span>
                ))}
              </div>

              {/* Duration */}
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl mb-7"
                style={{ background: "rgba(246,174,34,0.05)", border: "0.5px solid rgba(246,174,34,0.1)" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="5.5" stroke="#F6AE22" strokeWidth="1.2" />
                  <path d="M7 4v3l2 2" stroke="#F6AE22" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                <span className="text-[11px] text-[#888]">Duration:</span>
                <span className="text-[11px] font-bold text-[#F6AE22]">6 months</span>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => navigate("/courses")}
                  className="flex-1 sm:flex-none px-8 py-3 rounded-xl text-[13px] font-bold text-[#272425] bg-[#F6AE22] hover:bg-[#e09c1f] transition-colors duration-150"
                >
                  View More →
                </button>
                
              </div>
            </div>

            {/* Mobile dots + hint */}
            <div className="flex md:hidden items-center gap-3 mt-5">
              <div className="flex gap-1.5">
                {trainings.map((_, i) => (
                  <div key={i} className="rounded-full transition-all duration-300"
                    style={{
                      width: i === activeIndex ? "18px" : "6px",
                      height: "6px",
                      background: i === activeIndex ? "#F6AE22" : i < activeIndex ? "rgba(246,174,34,0.4)" : "rgba(246,174,34,0.12)",
                    }} />
                ))}
              </div>
              <span className="text-[10px] text-[#555] uppercase tracking-wider ml-1">Swipe to explore</span>
            </div>
          </div>
        </div>

        {/* BOTTOM SCROLL HINT */}
        <div className="flex-shrink-0 flex flex-col items-center gap-1 pb-5">
          {activeIndex < trainings.length - 1 ? (
            <>
              <p className="text-[9px] tracking-widest uppercase text-[#444]">Scroll down for next</p>
              <svg className="animate-bounce" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 6l5 5 5-5" stroke="#F6AE22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
              </svg>
            </>
          ) : (
            <>
              <p className="text-[9px] tracking-widest uppercase" style={{ color: "#F6AE22" }}>
                All programs viewed — keep scrolling
              </p>
              <svg className="animate-bounce" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 6l5 5 5-5" stroke="#F6AE22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
