"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { processSteps } from "@/data/process";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CallButton } from "@/components/ui/CallButton";

export function Process() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section id="proces" aria-labelledby="proces-title" className="mx-auto max-w-[90rem] px-4 pt-28 sm:px-6 lg:px-10">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="proces-title"
            eyebrow="Postup"
            title="Jak probíhá likvidace eternitu?"
            intro="Od první konzultace a zaměření střechy až po odvoz a předání azbestového odpadu."
          />
          <CallButton variant="green" className="mt-8" label="Domluvit prohlídku" />
        </div>

        <ol ref={listRef} className="relative">
          <span aria-hidden="true" className="absolute bottom-6 left-[23px] top-6 w-[2px] bg-line" />
          <motion.span
            aria-hidden="true"
            className="absolute bottom-6 left-[23px] top-6 w-[2px] origin-top bg-green"
            style={{ scaleY: progress }}
          />
          {processSteps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative grid grid-cols-[48px_1fr] gap-6 pb-12 last:pb-0 sm:gap-8"
            >
              <span className="font-wide relative z-10 flex h-12 w-12 items-center justify-center border-2 border-green bg-paper text-[17px] font-black text-green-text">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pt-2">
                <h3 className="font-wide text-[clamp(1.35rem,2.2vw,1.75rem)] font-extrabold leading-tight">{step.title}</h3>
                {step.text.map((p) => (
                  <p key={p} className="mt-2 max-w-xl text-[16px] leading-relaxed text-ink-soft">
                    {p}
                  </p>
                ))}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
