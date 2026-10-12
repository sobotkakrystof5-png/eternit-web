import { services } from "@/data/site";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  const [main, ...rest] = services;
  return (
    <section id="sluzby" aria-labelledby="sluzby-title" className="mx-auto max-w-[90rem] px-4 pt-28 sm:px-6 lg:px-10">
      <SectionHeading id="sluzby-title" eyebrow="Co děláme" title="Eternit dolů, střecha připravená na novou krytinu." />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.7fr_1fr]">
        <article className="grid border border-line md:grid-cols-2">
          <Photo src={main.photo?.src} label={main.photoLabel} alt={main.photo?.alt ?? ""} ratio="4 / 5" sizes="(min-width: 1024px) 32vw, (min-width: 768px) 50vw, 100vw" className="md:h-full" />
          <div className="flex flex-col p-6 sm:p-8">
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-green">Hlavní služba</p>
            <h3 className="font-wide mt-3 text-[clamp(1.6rem,2.6vw,2.2rem)] font-extrabold leading-[1.02]">{main.title}</h3>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">{main.lead}</p>
            {main.pointsTitle && <h4 className="mt-7 text-[15px] font-extrabold">{main.pointsTitle}</h4>}
            <ul className={`${main.pointsTitle ? "mt-3" : "mt-6"} divide-y divide-line border-t border-line`}>
              {main.points.map((p) => (
                <li key={p} className="flex gap-3 py-3 text-[15px] font-semibold">
                  <span aria-hidden="true" className="mt-[0.55em] h-1.5 w-1.5 shrink-0 bg-green" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </article>

        {rest.map((s) => (
          <article key={s.id} className="flex flex-col border border-line">
            <Photo src={s.photo?.src} label={s.photoLabel} alt={s.photo?.alt ?? ""} ratio="16 / 10" sizes="(min-width: 1024px) 30vw, 100vw" />
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-ink-soft">Doplňková služba</p>
              <h3 className="font-wide mt-3 text-[1.6rem] font-extrabold leading-[1.05]">{s.title}</h3>
              <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">{s.lead}</p>
              <ul className="mt-5 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="text-[15px] font-semibold">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
