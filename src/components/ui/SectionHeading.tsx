import { WaveRule } from "./Wave";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  id?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, intro, id, className = "" }: Props) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-green">{eyebrow}</p>
      <WaveRule className="mt-3" width={96} />
      <h2 id={id} className="font-wide mt-5 text-[clamp(2rem,4.6vw,3.4rem)] font-extrabold leading-[0.98] tracking-[-0.01em]">
        {title}
      </h2>
      {intro && <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-ink-soft">{intro}</p>}
    </div>
  );
}
