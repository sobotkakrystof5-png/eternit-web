"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { stats, DOPLNIT } from "@/data/site";

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const reduce = useReducedMotion();
  // Server vykreslí skutečnou hodnotu, animace od nuly běží až při zobrazení.
  const [value, setValue] = useState(to);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, to]);

  return (
    <span ref={ref} aria-label={String(to)}>
      <span aria-hidden="true">{value}</span>
    </span>
  );
}

export function Stats() {
  return (
    <section aria-label="Ve zkratce" className="mx-auto max-w-[90rem] px-4 pt-10 sm:px-6 lg:px-10">
      <dl className="grid border-y border-line sm:grid-cols-3 sm:divide-x sm:divide-line">
        {stats.map((s) => (
          <div key={s.label} className="flex items-baseline gap-4 border-b border-line py-6 last:border-b-0 sm:border-b-0 sm:px-8 sm:first:pl-0">
            <dt className="order-2 text-[15px] font-semibold text-ink-soft">{s.label}</dt>
            <dd className="font-wide order-1 text-[clamp(2.4rem,5vw,3.6rem)] font-black leading-none text-green-text">
              {s.value === null ? <span className="text-[16px] font-bold tracking-normal text-ink-soft">{DOPLNIT}</span> : <Counter to={s.value} />}
              {s.suffix}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
