import { site } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Photo } from "@/components/ui/Photo";

export function Collaboration() {
  return (
    <section id="spoluprace" aria-labelledby="spoluprace-title" className="mx-auto max-w-[90rem] px-4 pt-28 sm:px-6 lg:px-10">
      <div className="grid items-center gap-12 border border-line px-6 py-14 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-20">
        <div>
          <SectionHeading
            id="spoluprace-title"
            eyebrow="Spolupráce"
            title="Malířské práce a renovace dřevěných fasád"
            intro="Po odstranění eternitové krytiny často přichází na řadu oprava fasády, nátěr nebo další práce v interiéru. Nabízíme také malířské, natěračské a renovační práce, a proto po demontáži eternitu nemusíte hledat dalšího řemeslníka."
          />
          <a
            href={site.paintingWebUrl}
            className="mt-10 inline-flex items-center gap-2 border border-ink px-5 py-3 text-[15px] font-bold transition-colors hover:border-green hover:bg-green hover:text-ink"
            rel="noopener"
            target="_blank"
          >
            Web malířských prací <span aria-hidden="true">↗</span>
            <span className="sr-only">(otevře se v novém okně)</span>
          </a>
        </div>

        <Photo
          label="malířské nebo natěračské práce na fasádě (dodá klient)"
          alt="Malířské a natěračské práce na fasádě"
          ratio="4 / 3"
          sizes="(min-width: 1024px) 45vw, 100vw"
        />
      </div>
    </section>
  );
}
