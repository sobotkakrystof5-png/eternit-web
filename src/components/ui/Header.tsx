"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";
import { CallButton } from "./CallButton";
import { EmailButton } from "./EmailButton";

/** Pevná hlavička s kotvovou navigací a scrollspy. */
export function Header() {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));

    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      if (window.scrollY < window.innerHeight * 0.4) setActive(null);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 bg-paper transition-shadow duration-300 ${
        scrolled || open ? "shadow-[0_1px_0_var(--color-line)]" : ""
      }`}
    >
      <a
        href="#obsah"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
      >
        Přeskočit na obsah
      </a>
      <div className="mx-auto flex h-[4.5rem] max-w-[90rem] items-center justify-between gap-6 px-4 sm:px-6 lg:px-10">
        <a href="#" className="group flex flex-col leading-none" aria-label={`${site.ownerName}, zpět nahoru`}>
          <span className="font-wide text-[22px] font-black uppercase tracking-[-0.01em]">{site.wordmark}</span>
          <span className="mt-1 text-[10.5px] font-bold uppercase tracking-[0.22em] text-green-text">{site.wordmarkSub}</span>
        </a>

        <nav aria-label="Hlavní navigace" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                  className={`relative px-3 py-2 text-[14px] font-semibold transition-colors ${
                    active === item.id ? "text-green-text" : "text-ink hover:text-green-text"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 -bottom-0.5 h-[2px] origin-left bg-green transition-transform duration-300 ${
                      active === item.id ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <EmailButton variant="green" className="hidden md:inline-flex" label="Napsat" />
          <CallButton variant="green" className="hidden sm:inline-flex" label="Zavolat" />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-line xl:hidden"
            aria-expanded={open}
            aria-controls="mobilni-menu"
            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true" className="relative block h-3 w-5">
              <span className={`absolute left-0 h-[2px] w-5 bg-ink transition-all ${open ? "top-[5px] rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-[5px] h-[2px] w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-[2px] w-5 bg-ink transition-all ${open ? "top-[5px] -rotate-45" : "top-[10px]"}`} />
            </span>
          </button>
        </div>
      </div>

      <nav
        id="mobilni-menu"
        aria-label="Mobilní navigace"
        hidden={!open}
        className="max-h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-line bg-paper px-4 pb-6 sm:px-6 xl:hidden"
      >
        <ul className="divide-y divide-line">
          {nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                aria-current={active === item.id ? "true" : undefined}
                className={`font-wide block py-3.5 text-[20px] font-bold ${active === item.id ? "text-green-text" : "text-ink"}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-col gap-3 sm:hidden">
          <CallButton variant="green" className="w-full justify-center" />
          <EmailButton variant="green" className="w-full justify-center" />
        </div>
      </nav>
    </header>
  );
}
