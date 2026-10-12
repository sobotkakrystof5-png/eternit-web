import { nav, site } from "@/data/site";
import { WaveEdge } from "./Wave";

export function Footer() {
  return (
    <footer className="mt-24">
      <WaveEdge fill="var(--color-mist)" />
      <div className="bg-mist">
        <div className="mx-auto grid max-w-[90rem] gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_2fr] lg:px-10">
          <div>
            <p className="font-wide text-[26px] font-black uppercase">{site.wordmark}</p>
            <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.22em] text-green">{site.wordmarkSub}</p>
            <p className="mt-5 text-[14px] leading-relaxed text-ink-soft">
              {site.ownerName}, {site.town}
              <br />
              IČO {site.ico}
            </p>
          </div>
          <nav aria-label="Navigace v patičce">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-4">
              {nav.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-[14px] font-semibold text-ink hover:text-green">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mx-auto max-w-[90rem] border-t border-line px-4 py-5 text-[13px] text-ink-soft sm:px-6 lg:px-10">
          © {site.ownerName}
        </div>
      </div>
    </footer>
  );
}
