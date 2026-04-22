import { useEffect, useRef, useState } from "react";

const TopicsSection = ({ topics }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const containerRef = useRef(null);
  const topicRefs = useRef([]);

  // ✅ Detect visible topic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = topicRefs.current.indexOf(entry.target);
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    topicRefs.current.forEach((el) => el && observer.observe(el));

    return () => {
      topicRefs.current.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  // ✅ Smooth progress line
  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const scrollTop = el.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;

      const percent = scrollTop / scrollHeight;
      setProgress(percent);
    };

    const div = containerRef.current;
    div?.addEventListener("scroll", handleScroll);

    return () => div?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full lg:w-1/2 m-2 h-auto lg:h-full overflow-y-auto px-6 py-10 lg:px-12 bg-[#EEEEEE]"
    > 
      <h2 className="text-2xl font-bold mb-10 text-black">
        Course Topics
      </h2>

      <div className="relative">

        {/* Base line */}
        <div className="absolute left-4 top-2 w-[2px] h-full bg-black"></div>

        {/* Progress line */}
        <div
          className="absolute left-4 top-2 w-[2px] bg-[#272425] transition-all duration-150"
          style={{ height: `${progress * 100}%` }}
        />

        {topics.map((topic, index) => (
          <div
            key={index}
            ref={(el) => (topicRefs.current[index] = el)}
            className="flex items-start mb-12 relative"
          >
            {/* Dot */}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold z-10 transition-all duration-300 ${
                index <= activeIndex
                  ? "bg-[#272425] text-[#EEEEEE]"
                  : "bg-white border-2 border-black text-black"
              }`}
            >
              {index + 1}
            </div>

            {/* Text */}
            <div
              className={`ml-5 text-base leading-relaxed transition-all duration-300 ${
                index <= activeIndex
                  ? "text-[#272425] font-semibold"
                  : "text-black"
              }`}
            >
              {topic}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicsSection;