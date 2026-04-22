// import { Users, Briefcase, GraduationCap } from "lucide-react";
// import missionImg from "../../assets/images/aboutPreview1.svg";
// import GoalImg from "../../assets/images/aboutPreview2.svg";
// import TeamImg from "../../assets/images/aboutPreview3.svg";

// export default function AboutPreview() {
//   return (
//     <section className="text-[#272425] bg-[#EEEEEE] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
//       <div className="max-w-6xl mx-auto text-center">
//         {/* TITLE */}
//         <h2 className="text-3xl  sm:text-4xl font-bold">About DezyKode</h2>

//         {/* UNDERLINE */}
//         <div className="w-20 h-1 bg-[#f6AE22] mx-auto mt-3 rounded-full"></div>

//         {/* DESCRIPTION */}
//         <p className="mt-6  text-[#464444] max-w-2xl mx-auto">
//           We provide industry-level training and real-world experience to help
//           students build successful careers in technology.
//         </p>
//       </div>

//       {/* CARDS */}
//       <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         <div className="bg-[#1f1c1d] p-6 rounded-xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(246,174,34,0.3)]">
          
//           <img
//             src={missionImg}
//             alt="mission"
//             className="w-25 h-25 mx-auto object-contain"
//           />
//           <h3 className="mt-4 text-lg text-[#EEEEEE] font-semibold">Our Mission</h3>
//           <p className="mt-2 text-sm text-[#cfcfcf]">
//             "Dezykode IT Solutions Pvt Ltd empowers businesses with innovative
//             IT services, training, and internships. We bridge the gap between
//             academics and industry by fostering growth, collaboration, and
//             learning. Our aim is to develop skilled tech professionals, helping
//             them thrive while driving digital transformation and success for
//             businesses."
//           </p>
//         </div>

//         <div className="bg-[#1f1c1d] p-6 rounded-xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(246,174,34,0.3)]">
          
//           <img
//             src={GoalImg}
//             alt="goal"
//             className="w-25 h-25 mx-auto object-contain"
//           />
//           <h3 className="mt-4 text-lg text-[#EEEEEE] font-semibold">Our Goal</h3>
//           <p className="mt-2 text-sm text-[#cfcfcf]">
//             "Dezykode IT Solutions Pvt Ltd delivers innovative IT services to
//             empower businesses and bridge the skills gap through comprehensive
//             training and internships. We equip aspiring professionals with
//             practical experience and foster continuous learning, driving success
//             for clients and developing a skilled workforce."
//           </p>
//         </div>

//         <div className="bg-[#272425] p-6 rounded-xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(246,174,34,0.3)]">
          
//           <img
//             src={TeamImg}
//             alt="team"
//             className="w-25 h-25 mx-auto object-contain"
//           />
//           <h3 className="mt-4 text-lg text-[#EEEEEE] font-semibold">Our Team</h3>
//           <p className="mt-2 text-sm text-[#cfcfcf]">
//             "At Dezykode IT Solutions Pvt Ltd, our skilled and passionate team
//             drives our success. Our development experts deliver high-quality IT
//             services, while trainers and mentors provide hands-on,
//             industry-relevant learning. Internship coordinators ensure
//             meaningful real-world experience, fostering continuous growth and
//             innovation."
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }


// import missionImg from "../../assets/images/aboutPreview1.svg";
// import GoalImg from "../../assets/images/aboutPreview2.svg";
// import TeamImg from "../../assets/images/aboutPreview3.svg";

// export default function AboutPreview() {
//   const items = [
//     {
//       number: "01",
//       label: "MISSION",
//       title: "Our Mission",
//       description:
//         "Dezykode IT Solutions Pvt Ltd empowers businesses with innovative IT services, training, and internships. We bridge the gap between academics and industry by fostering growth, collaboration, and learning. Our aim is to develop skilled tech professionals, helping them thrive while driving digital transformation and success for businesses.",
//       img: missionImg,
//       alt: "mission",
//       reverse: false,
//     },
//     {
//       number: "02",
//       label: "GOAL",
//       title: "Our Goal",
//       description:
//         "Dezykode IT Solutions Pvt Ltd delivers innovative IT services to empower businesses and bridge the skills gap through comprehensive training and internships. We equip aspiring professionals with practical experience and foster continuous learning, driving success for clients and developing a skilled workforce.",
//       img: GoalImg,
//       alt: "goal",
//       reverse: true,
//     },
//     {
//       number: "03",
//       label: "TEAM",
//       title: "Our Team",
//       description:
//         "At Dezykode IT Solutions Pvt Ltd, our skilled and passionate team drives our success. Our development experts deliver high-quality IT services, while trainers and mentors provide hands-on, industry-relevant learning. Internship coordinators ensure meaningful real-world experience, fostering continuous growth and innovation.",
//       img: TeamImg,
//       alt: "team",
//       reverse: false,
//     },
//   ];

//   return (
//     <section className="bg-[#FFF7F9] text-[#272425] px-4 sm:px-6 lg:px-8 py-8 sm:py-14 lg:py-14">
//       {/* HEADER */}
//       <div className="max-w-4xl mx-auto text-center mb-8 divide-[#272425]">
//         <h2 className="text-3xl sm:text-4xl font-bold text-[#272425]">
//           About DezyKode
//         </h2>
//         <div className="w-16 h-1 bg-[#f6AE22] mx-auto mt-3 rounded-full"></div>
//         <p className="mt-4 text-[#2c2a2a] max-w-xl mx-auto text-m leading-relaxed ">
//           We provide industry-level training and real-world experience to help
//           students build successful careers in technology.
//         </p>
//       </div>

//       {/* ROWS */}
//       <div className="max-w-4xl mx-auto  ">
//         {items.map((item) => (
//           <div
//             key={item.number}
//             className={`flex items-center gap-8 ${
//               item.reverse ? "flex-row-reverse" : "flex-row"
//             }`}
//           >
//             {/* Icon Box */}
//             <div className="flex-shrink-0 w-54 h-54 bg-[#fff7f9] rounded-xl flex items-center justify-center">
//               <img
//                 src={item.img}
//                 alt={item.alt}
//                 className="w-54 h-54 object-contain"
//               />
//             </div>

//             {/* Text */}
//             <div className="flex-1 mx-20 ">
//               {/* <p className=" text-[#f6AE22] text-xs font-semibold tracking-widest uppercase mb-1">
//                 {item.number} — {item.label}
//               </p> */}
//               <h3 className="text-[#f6AE22] text-xl font-bold mb-3">
//                 {item.title}
//               </h3>
//               <p className="text-[#3a3939] text-sm leading-relaxed ">
//                 &ldquo;{item.description}&rdquo;
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import missionImg from "../../assets/images/aboutPreview1.svg";
import GoalImg from "../../assets/images/aboutPreview2.svg";
import TeamImg from "../../assets/images/aboutPreview3.svg";

export default function AboutPreview() {
  const items = [
    {
      number: "01",
      label: "MISSION",
      title: "Our Mission",
      description:
        "Dezykode IT Solutions Pvt Ltd empowers businesses with innovative IT services, training, and internships. We bridge the gap between academics and industry by fostering growth, collaboration, and learning. Our aim is to develop skilled tech professionals, helping them thrive while driving digital transformation and success for businesses.",
      img: missionImg,
      alt: "mission",
      reverse: false,
    },
    {
      number: "02",
      label: "GOAL",
      title: "Our Goal",
      description:
        "Dezykode IT Solutions Pvt Ltd delivers innovative IT services to empower businesses and bridge the skills gap through comprehensive training and internships. We equip aspiring professionals with practical experience and foster continuous learning, driving success for clients and developing a skilled workforce.",
      img: GoalImg,
      alt: "goal",
      reverse: true,
    },
    {
      number: "03",
      label: "TEAM",
      title: "Our Team",
      description:
        "At Dezykode IT Solutions Pvt Ltd, our skilled and passionate team drives our success. Our development experts deliver high-quality IT services, while trainers and mentors provide hands-on, industry-relevant learning. Internship coordinators ensure meaningful real-world experience, fostering continuous growth and innovation.",
      img: TeamImg,
      alt: "team",
      reverse: false,
    },
  ];

  return (
    <section className="bg-[#FFF7F9] text-[#272425] px-4 sm:px-6 lg:px-8 py-10">
      
      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold">
          About DezyKode
        </h2>
        <div className="w-16 h-1 bg-[#f6AE22] mx-auto mt-3 rounded-full"></div>
        <p className="mt-4 text-[#2c2a2a] max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          We provide industry-level training and real-world experience to help
          students build successful careers in technology.
        </p>
      </div>

      {/* ROWS */}
      <div className="max-w-5xl mx-auto ">
        {items.map((item) => (
          <div
            key={item.number}
            className={`flex flex-col md:flex-row md:items-center gap-6 md:gap-10 ${
              item.reverse ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            {/* Image */}
            <div className="w-full flex justify-center lg:w-2/5">
              <img
                src={item.img}
                alt={item.alt}
                className="w-48 sm:w-64 lg:w-52 object-contain"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-[#f6AE22] text-lg sm:text-xl font-bold mb-3">
                {item.title}
              </h3>
              <p className="text-[#3a3939] text-sm sm:text-base leading-relaxed">
                &ldquo;{item.description}&rdquo;
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}