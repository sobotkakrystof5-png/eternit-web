"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import { Photo } from "@/components/ui/Photo";
import { CallButton } from "@/components/ui/CallButton";
import { EmailButton } from "@/components/ui/EmailButton";
import { WaveEdge } from "@/components/ui/Wave";

const lines = ["Likvidace", "eternitu", "a azbestu"];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate mt-[4.5rem] overflow-hidden bg-ink text-paper">
      <Photo src="/fotky/hero/hero-litomerice.webp" objectPosition="50% 30%" label="Litoměřice, úvodní fotka" alt="" sizes="100vw" tone="dark" fill preload />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-100 from-ink/90 via-ink/70 to-ink/25"
      />

      <div className="relative mx-auto flex min-h-[min(86svh,52rem)] max-w-[90rem] flex-col justify-end px-4 pb-20 pt-24 sm:px-6 lg:px-10 lg:pb-28">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[12px] font-bold uppercase tracking-[0.2em] text-mint"
        >
          {site.town} a široké okolí
        </motion.p>

        <h1 id="hero-title" className="font-wide mt-5 text-[clamp(3rem,10.5vw,8.6rem)] font-black uppercase leading-[0.88] tracking-[-0.02em]">
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
          <p className="max-w-md text-[17px] leading-relaxed text-paper/80">
            Bezpečná demontáž eternitových střech, profesionální přístup a důraz na ochranu zdraví.
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
