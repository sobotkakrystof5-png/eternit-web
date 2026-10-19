import { references } from "@/data/references";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function References() {
  return (
    <section id="reference" aria-labelledby="reference-title" className="mx-auto max-w-[90rem] px-4 pt-28 sm:px-6 lg:px-10">
      <SectionHeading id="reference-title" eyebrow="Reference" title="Co říkají lidé, kterým jsme sundali střechu." />
      <ul className="mt-14 grid gap-px border border-line bg-line md:grid-cols-3">
        {references.map((r, i) => (
          <li key={i} className="flex flex-col bg-paper p-6 sm:p-8">
            <span aria-hidden="true" className="font-wide text-[64px] font-black leading-[0.6] text-green-text">
              „
            </span>
            {r.date && <p className="mt-4 text-[14px] text-ink-soft">{r.date}</p>}
            <blockquote className="mt-4 flex-1 text-[17px] leading-relaxed">{r.quote}</blockquote>
            <p className="mt-8 border-t border-line pt-4 text-[14px]">
              <span className="font-bold">{r.author}</span>
              <span className="text-ink-soft">, {r.place}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
