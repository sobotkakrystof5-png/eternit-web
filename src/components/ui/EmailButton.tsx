import { site } from "@/data/site";

type Props = {
  variant?: "mint" | "green" | "ghost";
  className?: string;
  label?: string;
};

const styles = {
  mint: "border border-paper/50 text-paper hover:border-mint hover:text-mint",
  green: "border border-green-text text-green-text hover:bg-green hover:text-ink",
  ghost: "border border-ink/20 text-ink hover:border-green hover:text-green-text",
};

/** Druhé kontaktní CTA vedle telefonu. Dokud chybí e-mail, vede na sekci Kontakt. */
export function EmailButton({ variant = "ghost", className = "", label }: Props) {
  const href = site.email.href ?? "#kontakt";
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2.5 px-5 py-3 text-[15px] font-bold transition-colors duration-200 ${styles[variant]} ${className}`}
    >
      <MailIcon />
      <span>{label ?? site.email.display}</span>
    </a>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="1" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="m3.5 6.5 8.5 7 8.5-7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
