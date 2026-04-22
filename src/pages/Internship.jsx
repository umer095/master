import React, { useState } from "react";
import InternshipCards from "../sections/internship/InternshipCards";
import internshipData from "../data/internshipData";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "UI/UX", value: "UI/UX" },
  { label: "DATA ANALYTICS", value: "Data" },
  { label: "FULLSTACK DEVELOPMENT", value: "Development" },
  { label: "DATA SCIENCE", value: "dataScience" },
  { label: "Digital Marketing", value: "Marketing" },
  { label: "SOFTWARE TESTING", value: "softwareTest" },
  { label: "BUSINESS ANALYTICS", value: "businessAnaly" },
  { label: "MERN STACK", value: "mernStack" },
  { label: "MEAN STACK", value: "meanStack" },
];
const Internship = () => {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? internshipData
      : internshipData.filter((item) => item.category === active);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Hero ── */}
      <PageHeader title={"Internship"} />

      {/* ── Filter Tabs ── */}
      <section className="sticky top-0 z-10 bg-white border-b border-gray-100 px-6 py-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#272425] mb-10">
          Explore our Popular Internship Programs
        </h2>
        <div className="max-w-6xl mx-auto flex gap-2 flex-wrap">
          {FILTERS.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActive(filter.value)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-150 ${
                active === filter.value
                  ? "bg-[#f6AE22] text-white"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
            >
              {filter.label}
            </button>
          ))}
          <span className="ml-auto text-xs text-gray-400 self-center">
            {filtered.length} programs
          </span>
        </div>
      </section>

      {/* ── Cards Grid ── */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400 text-sm">
              No programs found for this category.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filtered.map((item) => (
                <Link to={`/internship/internship-detail/${item.id}`} key={item.id}>
                  <InternshipCards key={item.id} data={item} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Internship;
