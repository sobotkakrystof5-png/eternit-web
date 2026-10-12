"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WaveRule } from "@/components/ui/Wave";

const join = { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const };

export function Collaboration() {
  return (
    <section id="spoluprace" aria-labelledby="spoluprace-title" className="mx-auto max-w-[90rem] px-4 pt-28 sm:px-6 lg:px-10">
      <div className="border border-line px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
        <SectionHeading
          id="spoluprace-title"
          eyebrow="Spolupráce"
          title="Malířství a eternit pod jednou střechou."
          intro="Po demontáži eternitu často přijdou na řadu fasáda nebo interiér. Malířské a natěračské práce dělá stejný člověk, takže nemusíte shánět dalšího řemeslníka."
        />

        <motion.div
          initial="apart"
          whileInView="together"
          viewport={{ once: true, margin: "-20% 0px" }}
          className="font-wide mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[clamp(2.2rem,5.6vw,5.6rem)] font-black uppercase leading-none tracking-[-0.02em]"
          aria-label="Malířství a Eternit"
        >
          <motion.span variants={{ apart: { x: "-18%", opacity: 0 }, together: { x: 0, opacity: 1 } }} transition={join}>
            Malířství
          </motion.span>
          <motion.span
            aria-hidden="true"
            className="text-green"
            variants={{ apart: { scale: 0.4, opacity: 0 }, together: { scale: 1, opacity: 1 } }}
            transition={{ ...join, delay: 0.35 }}
          >
            ×
          </motion.span>
          <motion.span
            className="text-green"
            variants={{ apart: { x: "18%", opacity: 0 }, together: { x: 0, opacity: 1 } }}
            transition={join}
          >
            Eternit
          </motion.span>
        </motion.div>
        <WaveRule className="mx-auto mt-8" width="min(100%, 30rem)" />

        <div className="mt-12 flex justify-center">
          <a
            href={site.paintingWebUrl}
            className="inline-flex items-center gap-2 border border-ink px-5 py-3 text-[15px] font-bold transition-colors hover:border-green hover:bg-green hover:text-paper"
            rel="noopener"
            target="_blank"
          >
            Web malířských prací <span aria-hidden="true">↗</span>
            <span className="sr-only">(otevře se v novém okně)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
