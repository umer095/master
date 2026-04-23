// import heroImg from "../../assets/images/heroImg.avif";
// import { Brush, Code, Trophy } from "lucide-react";
// import AnimatedText from "../../components/AnimatedText";

// export default function Hero() {
//   return (
//     <section className="min-h-screen  bg-[#0f172a] text-white px-4 sm:px-6 lg:px-8 sm:py-20 lg:py-28 py-20 lg:pt-10 lg-pb-28">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
//         {/* LEFT CONTENT */}
//         <div>
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
//             <AnimatedText text="Innovative Solution for the Future Generation." />
//           </h1>

//           <h2 className="mt-4 text-xl sm:text-2xl text-gray-300 font-medium">
//             Be a Master, the Future of Technology.
//           </h2>

//           <div className="mt-8 flex flex-wrap gap-4">
//             <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-400 transition">
//               Get Started
//             </button>

//             <button className="border border-gray-500 px-6 py-3 rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition">
//               Explore More
//             </button>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="flex justify-center ">
//           <img
//             src={heroImg}
//             alt="hero"
//             className="w-full max-w-md lg:max-w-lg rounded-xl"
//           />
//         </div>
//       </div>

//       {/* FEATURES ROW (Design / Develop / Succeed) */}
//       <div className=" max-w-5xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
//         <div className="card icon-wrapper bg-[#1e293b] p-6 rounded-xl flex flex-col items-center">
//           <Brush className="text-yellow-400" size={28} />
//           <h3 className="mt-2 font-semibold text-lg">Design</h3>
//         </div>

//         <div className="card bg-[#1e293b] p-6 rounded-xl flex flex-col items-center">
//           <Code className="text-yellow-400" size={28} />
//           <h3 className="mt-2 font-semibold text-lg">Develop</h3>
//         </div>

//         <div className="card bg-[#1e293b] p-6 rounded-xl flex flex-col items-center">
//           <Trophy className="text-yellow-400" size={28} />
//           <h3 className="mt-2 font-semibold text-lg">Succeed</h3>
//         </div>
//       </div>
//     </section>
//   );
// }

import heroVideo from "../../assets/images/AI.mp4"; // Import ka naam thoda clear rakha hai
import { Brush, Code, Trophy } from "lucide-react";
import AnimatedText from "../../components/AnimatedText";

export default function Hero() {
  return (
    // relative aur overflow-hidden zaroori hai taaki video bahar na nikle
    <section className="relative min-h-screen w-full overflow-hidden text-[#EEEEEE]">
      
      {/* --- BACKGROUND VIDEO START --- */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark Overlay: Isse video thodi dark ho jayegi aur text bright dikhega */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      {/* --- BACKGROUND VIDEO END --- */}

      {/* MAIN CONTENT (z-10 taaki ye video ke upar rahe) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:pb-20 lg:pt-24">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <AnimatedText text="Innovative Solution for the Future Generation." />
            </h1>

            <h2 className="mt-4 text-lg sm:text-xl text-[#cfcfcf] font-medium">
              Be a Master, the Future of Technology.
            </h2>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-[#f6AE22] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#e09c1f] transition shadow-lg">
                Get Started
              </button>

              <button className="border border-[#f6AE22] px-6 py-3 rounded-lg hover:bg-[#f6AE22] hover:text-black transition shadow-lg">
                Explore More
              </button>
            </div>
          </div>

          {/* RIGHT SIDE (Ab khali hai kyunki video background mein hai) */}
          <div className="hidden lg:block"></div>
        </div>

        {/* FEATURES ROW (Transparent glass effect cards) */}
        <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
          
          <div className="card bg-white/5 backdrop-blur-md border border-white/10 p-4 sm:p-6 rounded-xl flex flex-col items-center transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(246,174,34,0.3)]">
            <Brush className="text-[#f6AE2]" size={26} />
            <h3 className="mt-3 font-semibold text-base sm:text-lg text-black">Design</h3>
          </div>

          <div className="card bg-white/5 backdrop-blur-md border border-white/10 p-4 sm:p-6 rounded-xl flex flex-col items-center transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(246,174,34,0.3)]">
            <Code className="text-[#f6AE22]" size={26} />
            <h3 className="mt-3 font-semibold text-base sm:text-lg text-black">Develop</h3>
          </div>

          <div className="card bg-white/5 backdrop-blur-md border border-white/10 p-4 sm:p-6 rounded-xl flex flex-col items-center transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(246,174,34,0.3)]">
            <Trophy className="text-[#f6AE22]" size={26} />
            <h3 className="mt-3 font-semibold text-base sm:text-lg text-black">Succeed</h3>
          </div>

        </div>
      </div>
    </section>
  );
}