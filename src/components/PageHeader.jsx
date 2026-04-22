import { Link } from "react-router-dom";

export default function PageHeader({ title }) {
  return (
    // Extra bottom padding makes room for the overlapping gold card
    <section className="relative bg-[#F6AE22] pt-6 pb-12 mb-12  overflow-visible rounded-b-2xl">

      {/* SUBTLE VERTICAL STRIPES — right side */}
      <div className="absolute inset-y-0 right-0 w-[45%] flex gap-2 items-stretch px-4 pointer-events-none">
        <div className="flex-1 rounded bg-[#F6AE22]/[0.03]" />
        <div className="flex-1 rounded bg-[#F6AE22]/[0.06]" />
        <div className="flex-1 rounded bg-[#F6AE22]/[0.03]" />
        <div className="flex-1 rounded bg-[#F6AE22]/[0.02]" />
      </div>

      {/* GRID TEXTURE */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(246,174,34,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(246,174,34,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
        }}
      />

      {/* TOP LEFT — DezyKode pill */}
      <div className="relative z-10 px-10 sm:px-10 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#F6AE22]/20 bg-[#F6AE22]/[0.08]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#272425] inline-block" />
          <span className="text-[10px] font-bold tracking-[0.14em] text-[#272425] uppercase">
            DezyKode
          </span>
        </div>
      </div>

      {/* FLOATING GOLD CARD — overlaps into next section */}
      <div className="absolute bottom-0 translate-y-1/2 left-6 right-6 sm:left-10 sm:right-10 z-20">
        <div className="bg-[#272425] rounded-2xl px-6 sm:px-10 py-5 flex items-center justify-between">

          {/* LEFT — tag + title + breadcrumb */}
          <div>
            <p className="text-[9px] font-bold tracking-[0.14em] uppercase text-[#272425]/50 mb-1">
              Current page
            </p>
            <h1 className="text-2xl sm:text-3xl font-black text-[#EEEEEE] leading-tight">
              {title}
            </h1>
            <div className="flex items-center gap-2 mt-2 text-[11px] text-[#EEEEEE]/55">
              <Link
                to="/"
                className="hover:text-[#EEEEEE] transition-colors duration-150"
              >
                Home
              </Link>
              <span className="text-[#EEEEEE]/40">›</span>
              <span className="text-[#EEEEEE] font-semibold">{title}</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
