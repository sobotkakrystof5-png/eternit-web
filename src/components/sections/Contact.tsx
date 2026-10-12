import { site } from "@/data/site";
import { CallButton } from "@/components/ui/CallButton";
import { SectionHeading } from "@/components/ui/SectionHeading";

function ContactValue({ href, children }: { href: string | null; children: React.ReactNode }) {
  return href ? (
    <a href={href} className="underline decoration-line decoration-2 underline-offset-[6px] hover:decoration-green">
      {children}
    </a>
  ) : (
    <span>{children}</span>
  );
}

export function Contact() {
  return (
    <section id="kontakt" aria-labelledby="kontakt-title" className="mx-auto max-w-[90rem] px-4 pt-28 sm:px-6 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <SectionHeading
            id="kontakt-title"
            eyebrow="Kontakt"
            title="Plánujete demontáž eternitu?"
            intro="Ozvěte se nám a domluvíme si nezávaznou konzultaci. Posoudíme rozsah prací, připravíme cenovou nabídku a vysvětlíme vám celý postup od první návštěvy až po odvoz odpadu."
          />
          <CallButton variant="green" className="mt-8 px-7 py-4 text-[17px]" />
        </div>

        <dl className="divide-y divide-line self-end border-y border-line text-[17px]">
          <div className="grid grid-cols-[7rem_1fr] gap-4 py-4">
            <dt className="font-semibold text-ink-soft">Telefon</dt>
            <dd className="font-bold">
              <ContactValue href={site.phone.href}>{site.phone.display.replace("Telefon ", "")}</ContactValue>
            </dd>
          </div>
          <div className="grid grid-cols-[7rem_1fr] gap-4 py-4">
            <dt className="font-semibold text-ink-soft">E-mail</dt>
            <dd className="font-bold">
              <ContactValue href={site.email.href}>{site.email.display.replace("E-mail ", "")}</ContactValue>
            </dd>
          </div>
          <div className="grid grid-cols-[7rem_1fr] gap-4 py-4">
            <dt className="font-semibold text-ink-soft">Adresa</dt>
            <dd>{site.address}</dd>
          </div>
          <div className="grid grid-cols-[7rem_1fr] gap-4 py-4">
            <dt className="font-semibold text-ink-soft">IČO</dt>
            <dd>{site.ico}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
