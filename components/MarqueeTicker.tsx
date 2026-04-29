"use client";

export default function MarqueeTicker() {
  const items = [
    "STRENGTH",
    "CONDITIONING",
    "NUTRITION",
    "MINDSET",
    "RECOVERY",
    "FLEXIBILITY",
    "ENDURANCE",
    "POWER",
  ];

  const renderItems = () =>
    items.map((item, i) => (
      <span key={i} className="flex items-center gap-6 whitespace-nowrap">
        <span className="font-heading font-bold text-lg md:text-xl tracking-[0.15em] uppercase">
          {item}
        </span>
        <span className="text-accent text-2xl">◆</span>
      </span>
    ));

  return (
    <div className="relative overflow-hidden py-6 bg-accent/[0.03] border-y border-accent/10">
      {/* Row 1 */}
      <div className="flex gap-6 animate-marquee marquee-track mb-3">
        <div className="flex gap-6 shrink-0">{renderItems()}</div>
        <div className="flex gap-6 shrink-0">{renderItems()}</div>
      </div>
      {/* Row 2 — reverse */}
      <div className="flex gap-6 animate-marquee-reverse marquee-track text-light/30">
        <div className="flex gap-6 shrink-0">{renderItems()}</div>
        <div className="flex gap-6 shrink-0">{renderItems()}</div>
      </div>
    </div>
  );
}
