"use client";

import { motion } from "framer-motion";
import { Photo } from "@/components/ui/Photo";
import { CallButton } from "@/components/ui/CallButton";
import { EmailButton } from "@/components/ui/EmailButton";
import { WaveEdge } from "@/components/ui/Wave";

const lines = ["Likvidace", "eternitu", "a azbestu"];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate mt-[4.5rem] overflow-hidden bg-ink text-paper">
      <Photo src="/fotky/hero/hero-zakazka.webp" objectPosition="100% 0%" label="Úvodní fotka" alt="" sizes="100vw" tone="dark" fill preload />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-100 from-ink/55 via-ink/20 to-transparent"
      />

      <div className="relative mx-auto flex min-h-[min(86svh,52rem)] max-w-[90rem] flex-col justify-end px-4 pb-20 pt-24 sm:px-6 lg:px-10 lg:pb-28">
        <h1 id="hero-title" className="font-display text-[clamp(2.5rem,8vw,6.4rem)] font-black uppercase leading-[0.88] tracking-[-0.02em] [font-stretch:100%]">
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.04em]">
              <motion.span
                className={`block ${i === 2 ? "text-mint" : ""}`}
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-lg text-[21px] font-semibold leading-relaxed text-paper">
            Likvidace eternitu a azbestu v Litoměřicích a okolí. Demontujeme střechy bezpečně, podle předpisů a s ohledem na zdraví lidí i ochranu přírody. Pronájem lešení v Litoměřicích zajistíme také.
          </p>
          <div className="flex flex-wrap items-center gap-3 lg:mr-16 xl:mr-24">
            <CallButton variant="mint" />
            <EmailButton variant="mint" />
            <a
              href="#kde-pusobime"
              className="inline-flex items-center px-5 py-3 text-[15px] font-bold text-paper underline decoration-paper/40 underline-offset-[6px] hover:decoration-mint"
            >
              Kam jezdíme
            </a>
          </div>
        </motion.div>
      </div>

      <WaveEdge className="absolute inset-x-0 -bottom-px" />
    </section>
  );
}
