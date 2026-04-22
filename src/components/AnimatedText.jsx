import { useEffect, useState } from "react";

export default function AnimatedText({ text }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setActiveIndex(i);
      i++;

      if (i === text.length) {
        clearInterval(interval);
      }
    }, 60); // speed control

    return () => clearInterval(interval);
  }, [text]);

  return (
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`transition-colors duration-300 ${
            index <= activeIndex ? "text-yellow-500" : "text-white"
          }`}
        >
          {char}
        </span>
      ))}
    </h1>
  );
}