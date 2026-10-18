"use client";

import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { czMapViewBox, czProject, czRegions, type CzRegionId } from "@/data/czMap";
import { homeBase, serviceRegions } from "@/data/regions";
import { SectionHeading } from "@/components/ui/SectionHeading";

const activeIds = new Set<CzRegionId>(serviceRegions.map((r) => r.id));
const [homeX, homeY] = czProject(homeBase.lon, homeBase.lat);
// Jeden řetězec: <title> s více textovými uzly způsobí chybu hydratace.
const mapLabel = `Mapa Česka po krajích. Zvýrazněné jsou ${serviceRegions.map((r) => r.name).join(", ")}. Sídlo: ${homeBase.name}.`;

export function RegionsMap() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-25% 0px" });
  const [hover, setHover] = useState<CzRegionId | null>(null);

  const order = serviceRegions.map((r) => r.id);

  return (
    <section id="kde-pusobime" aria-labelledby="kde-title" className="mx-auto max-w-[90rem] px-4 pt-28 sm:px-6 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.9fr] lg:items-center">
        <div>
          <SectionHeading
            id="kde-title"
            eyebrow="Kde působíme"
            title="Tři kraje kolem Litoměřic."
            intro="Působíme především v Litoměřicích a Ústeckém kraji, ale za zakázkami vyjíždíme také do Libereckého a Středočeského kraje. Vzdálenost pro nás není překážkou. Každou zakázku posuzujeme individuálně a snažíme se zákazníkům nabídnout spolehlivé řešení podle konkrétního rozsahu prací."
          />
          <ul className="mt-10 border-t border-line">
            {serviceRegions.map((r) => (
              <li key={r.id} className="border-b border-line">
                <button
                  type="button"
                  onMouseEnter={() => setHover(r.id)}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover(r.id)}
                  onBlur={() => setHover(null)}
                  aria-pressed={hover === r.id}
                  className="group flex w-full items-center justify-between py-4 text-left"
                >
                  <span className={`font-wide text-[22px] font-extrabold transition-colors ${hover === r.id ? "text-green-text" : ""}`}>
                    {r.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[15px] leading-relaxed text-ink-soft">
            Za zakázkami vyjíždíme i do vzdálenějších míst uvedených krajů. Pokud potřebujete odstranit eternitovou střechu na
            rodinném domě, garáži, chatě nebo jiné nemovitosti, neváhejte nás kontaktovat.
          </p>
        </div>

        <div ref={ref} className="relative">
          <svg viewBox={czMapViewBox} className="h-auto w-full" role="img" aria-labelledby="mapa-popis">
            <title id="mapa-popis">{mapLabel}</title>
            {czRegions.map((region) => {
              const active = activeIds.has(region.id);
              const lit = active && inView;
              const isHover = hover === region.id;
              return (
                <path
                  key={region.id}
                  d={region.d}
                  strokeWidth={2}
                  strokeLinejoin="round"
                  onMouseEnter={active ? () => setHover(region.id) : undefined}
                  onMouseLeave={active ? () => setHover(null) : undefined}
                  style={{ transitionDelay: lit && !hover ? `${0.2 + order.indexOf(region.id) * 0.25}s` : "0s" }}
                  className={`stroke-paper transition-[fill] duration-500 ${
                    lit ? (isHover ? "cursor-pointer fill-green-hover" : "cursor-pointer fill-green") : active ? "fill-line" : "fill-mist"
                  }`}
                />
              );
            })}
            {czRegions
              .filter((r) => activeIds.has(r.id))
              .map((r) => (
                <text
                  key={r.id}
                  x={r.center[0]}
                  y={r.center[1] + (r.id === "ustecky" ? 44 : r.id === "stredocesky" ? 40 : 0)}
                  textAnchor="middle"
                  className="pointer-events-none fill-ink font-sans text-[17px] font-bold max-sm:hidden"
                  style={{ opacity: inView ? 1 : 0, transition: "opacity .6s 1s" }}
                >
                  {r.name.replace(" kraj", "")}
                </text>
              ))}
            <g aria-hidden="true">
              <circle cx={homeX} cy={homeY} r={7} className="fill-paper stroke-ink" strokeWidth={3} />
              <text
                x={homeX - 12}
                y={homeY - 10}
                textAnchor="end"
                className="max-sm:hidden fill-ink stroke-paper font-sans text-[15px] font-extrabold"
                strokeWidth={4}
                style={{ paintOrder: "stroke" }}
              >
                {homeBase.name}
              </text>
            </g>
          </svg>
          <p className="mt-3 flex items-center gap-2 text-[13px] font-semibold text-ink-soft sm:hidden">
            <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full border-2 border-ink bg-paper" />
            {homeBase.name}
          </p>
        </div>
      </div>
    </section>
  );
}
