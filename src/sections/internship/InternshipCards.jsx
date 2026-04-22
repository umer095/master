import React from "react";

const icons = {
  design: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="2" width="6" height="6" rx="1.5" fill="currentColor" />
      <rect x="10" y="2" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.4" />
      <rect x="2" y="10" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.4" />
      <rect x="10" y="10" width="6" height="6" rx="1.5" fill="currentColor" />
    </svg>
  ),
  data: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="10" width="4" height="6" rx="1" fill="currentColor" />
      <rect x="7" y="7" width="4" height="9" rx="1" fill="currentColor" opacity="0.5" />
      <rect x="12" y="3" width="4" height="13" rx="1" fill="currentColor" />
    </svg>
  ),
  code: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M6 5L2 9l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 3l-2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  ),
  science: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 9.5l2.5 2.5 4-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  marketing: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M3 12l4-4 3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="15" cy="5" r="1.5" fill="currentColor" />
    </svg>
  ),
  analytics: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2" y="2" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 11l3-3 2 2 3-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  testing: (
    <svg width="28" height="28" viewBox="0 0 18 18" fill="none">
      <path d="M6 2h6v6l2 8H4L6 8V2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6 8h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

const InternshipCards = ({ data }) => {

  
  return (
    
    <div className="group h-[280px] w-full" style={{ perspective: "1000px" }}>
      <div
        className="relative w-full h-full transition-transform duration-500 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateY(0deg)",
        }}

        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "rotateY(180deg)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "rotateY(0deg)";
        }}
      >
        {/* ── FRONT: image + title overlay ── */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden border border-gray-100"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover"
          />
          {/* dark overlay at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-white font-semibold text-[15px] leading-tight">
              {data.title}
            </p>
            <p className="text-white/70 text-xs mt-1">{data.duration}</p>
          </div>
        </div>

        {/* ── BACK: Option A card ── */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden bg-white border border-gray-100 flex flex-col"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* accent bar */}
          <div
            className="h-[4px] w-full flex-shrink-0"
            style={{ backgroundColor: data.accentColor }}
          />

          <div className="flex flex-col flex-1 p-5">
            {/* icon */}
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
              style={{
                backgroundColor: data.iconBg,
                color: data.accentColor,
              }}
            >
              {icons[data.icon]|| icons.design}
            </div>

            {/* title */}
            <h3 className="text-[14px] font-semibold text-gray-900 mb-2 leading-snug">
              {data.title}
            </h3>

            {/* description */}
            <p className="text-[12px] text-gray-500 leading-relaxed flex-1">
              {data.description}
            </p>

            {/* footer */}
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
              <span className="text-[11px] text-gray-400">{data.duration}</span>
              <button
                className="text-[11px] font-semibold px-3 py-1.5 rounded-lg transition-colors duration-150"
                style={{
                  backgroundColor: data.iconBg,
                  color: data.accentColor,
                }}
                
              >
                Read More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipCards;
