import { site } from "@/data/site";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";

const aboutStats = [
  { value: 30, suffix: "+", label: "projektů" },
  { value: 5, suffix: "+", label: "let praxe" },
];

export function About() {
  return (
    <section id="o-nas" aria-labelledby="onas-title" className="mx-auto max-w-[90rem] px-4 pt-28 sm:px-6 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
        <Photo src="/fotky/varchol/varchol.webp" label={`${site.ownerName}, portrét při práci`} alt="" ratio="4 / 5" sizes="(min-width: 1024px) 40vw, 100vw" className="lg:max-w-[34rem]" />
        <div>
          <SectionHeading id="onas-title" eyebrow="O nás" title="Od kvalitní výmalby až po demontáž eternitu. Spolehlivě a pečlivě." />
          <div className="mt-8 max-w-xl space-y-5 text-[17px] leading-relaxed text-ink-soft">
            <p>
              Jmenuji se {site.ownerName} a pocházím z Litoměřic. Malířské a natěračské práce dělám dodnes. Při nich jsem ale
              opakovaně viděl, že lidé potřebují odstranit eternit a azbest, a tak jsem se do toho pustil. Dnes je to můj hlavní obor.
            </p>
            <p>Za sebou mám více než 30 zakázek a přes pět let praxe.</p>
          </div>
          <dl className="mt-10 grid max-w-xl grid-cols-2 border-y border-line divide-x divide-line">
            {aboutStats.map((s) => (
              <div key={s.label} className="py-6 pr-6 [&:not(:first-child)]:pl-8">
                <dd className="font-wide text-[clamp(2.4rem,5vw,3.6rem)] font-black leading-none text-green">
                  {s.value}
                  {s.suffix}
                </dd>
                <dt className="mt-2 text-[15px] font-semibold text-ink-soft">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
