import { site } from "@/data/site";

type Props = {
  variant?: "mint" | "green" | "ghost";
  className?: string;
  label?: string;
};

const styles = {
  mint: "bg-mint text-ink hover:bg-white",
  green: "bg-green text-ink hover:bg-green-hover",
  ghost: "border border-ink/20 text-ink hover:border-green hover:text-green-text",
};

/** Hlavní CTA webu. Dokud chybí číslo, vede na sekci Kontakt. */
export function CallButton({ variant = "green", className = "", label }: Props) {
  const href = site.phone.href ?? "#kontakt";
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2.5 px-5 py-3 text-[15px] font-bold transition-colors duration-200 ${styles[variant]} ${className}`}
    >
      <PhoneIcon />
      <span>{label ?? site.phone.display}</span>
    </a>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 3h3.5l1.8 4.5-2.3 1.4a11 11 0 0 0 7.1 7.1l1.4-2.3L21 15.5V19a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
