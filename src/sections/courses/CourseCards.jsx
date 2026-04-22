import React, { useState } from "react";
import {Link} from "react-router-dom";
import uiux from "../../assets/courses/1.webp";
import digital from "../../assets/courses/2.webp";
import fsd from "../../assets/courses/3.webp";
import da from "../../assets/courses/4.webp";
import ds from "../../assets/courses/5.webp";
import st from "../../assets/courses/7.webp";
import mean from "../../assets/courses/9.webp";
import ba from "../../assets/courses/ba.webp";
import mern from "../../assets/courses/mern.webp";

const CourseCards = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { label: "All", value: "all" },
    { label: "UI/UX Design", value: "uiux" },
    { label: "Data Analytics", value: "dataAnalytics" },
    { label: "FullStack Development", value: "fullStackdev" },
    { label: "Data Science", value: "dataSc" },
    { label: "Digital Marketing", value: "marketing" },
    { label: "Business Analytics", value: "BusinessAnaly" },
    { label: "MERN-Stack", value: "mern" },
    { label: "MEAN-Stack", value: "mean" },
    { label: "Software testing", value: "softTest" },
  ];

  const courses = [
    {
      id: 1,
      title: "UI/UX",
      description:
        "Our UI/UX Design Training focuses on equipping you with the...",
      category: "uiux",
      image: uiux,
    },
    {
      id: 2,
      title: "Data Analytics",
      description:
        "Unlock the power of data with our comprehensive Data Analytics...",
      category: "dataAnalytics",
      image: da,
    },
    {
      id: 3,
      title: "Full Stack Development",
      description:
        "This Full Stack with Python Training is designed for aspiring...",
      category: "fullStackdev",
      image: fsd,
    },
    {
      id: 4,
      title: "Data Science",
      description:
        "Unlock the world of data with our comprehensive Data Science...",
      category: "dataSc",
      image: ds,
    },
    {
      id: 5,
      title: "Digital Marketing",
      description: "Our Digital Marketing Training empowers you with in-demand...",
      category: "marketing",
      image: digital,
    },
    {
      id: 6,
      title: "Full Stack Development",
      description:
        "This comprehensive Full Stack Java Developer Training equips...",
      category: "fullStackdev",
      image: fsd,
    },
    
    {
      id: 7,
      title: "Business Analytics",
      description: "Our training and Internship program brighten your career journey...",
      category: "BusinessAnaly",
      image: ba,
    },
    {
      id: 8,
      title: "MERN Stack",
      description: "Unlock the full potential of modern web development with our MERN...",
      category: "mern",
      image: mern,
    },
    {
      id: 9,
      title: "MEAN Stack",
      description: "This MEAN Stack training is designed to help you become proficient...",
      category: "mean",
      image: mean,
    },
    {
      id: 10,
      title: "Software Testing",
      description: "A software testing course equips learners with essential skills...",
      category: "softTest",
      image: st,
    },
  ];

  const filteredCourses =
    activeCategory === "all"
      ? courses
      : courses.filter((item) => item.category === activeCategory);

  return (
    <section className="py-16 px-6 bg-[#ffffff] min-h-screen">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#272425] mb-10">
        Explore What We Offer
      </h2>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition 
              ${
                activeCategory === cat.value
                  ? "bg-[#f6AE22] text-white"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }
            `}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 max-w-6xl  mx-auto">
        {filteredCourses.map((course) => (
          <Link
            to={`/courses/courses-detail/${course.id}`}
            key={course.id}
            className="group block"
          >
            <div className="relative rounded-xl overflow-hidden">
              {/* IMAGE WRAPPER */}
              <div className="w-full h-96 bg-[#EEEEEE] flex items-center justify-center">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* OVERLAY */}
              <div
                className="absolute inset-0 bg-black/60 
            flex flex-col justify-end p-4
            opacity-0 translate-y-6
            group-hover:opacity-100 group-hover:translate-y-0
            transition duration-300"
              >
                <h3 className="text-[#EEEEEE] text-lg font-semibold mb-4">
                  {course.title}
                </h3>

                <p className="text-white text-sm mb-5">{course.description}</p>

                <span className="inline-block px-3 py-2 text-sm bg-[#f6AE22] text-black rounded">
                  View More →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CourseCards;
