import Image from "next/image";

type Props = {
  src?: string;
  alt: string;
  /** Popis fotky, která má na místo přijít (zobrazí se v placeholderu). */
  label: string;
  /** CSS aspect-ratio, např. "4 / 3". */
  ratio?: string;
  sizes: string;
  className?: string;
  preload?: boolean;
  tone?: "light" | "dark";
  /** Vyplní rodiče místo pevného poměru stran. */
  fill?: boolean;
  /** CSS object-position pro ořez při `object-cover`, např. "50% 30%". */
  objectPosition?: string;
  /** `cover` ořízne fotku do rámu, `contain` ji zobrazí celou ve svém původním poměru. */
  fit?: "cover" | "contain";
  /** Fotka se zobrazí celá ve svém přirozeném poměru stran, bez ořezu a bez pevného rámu. */
  natural?: boolean;
};

/**
 * Všechny obrázky webu jdou přes tuto komponentu.
 * Bez `src` vykreslí zřetelně označený placeholder. Fotky dodá klient, nikdy fotobanka.
 */
export function Photo({ src, alt, label, ratio = "4 / 3", sizes, className = "", preload, tone = "light", fill, objectPosition, fit = "cover", natural }: Props) {
  const box = fill ? "absolute inset-0" : "relative w-full";
  const style = fill ? undefined : { aspectRatio: ratio };

  if (natural && src) {
    return (
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1200}
        sizes={sizes}
        style={{ width: "100%", height: "auto" }}
        className={className}
      />
    );
  }

  if (!src) {
    const dark = tone === "dark";
    return (
      <div
        role="img"
        aria-label={`Místo pro fotku: ${label}`}
        style={style}
        className={`${box} overflow-hidden ${dark ? "bg-ink" : "bg-mist"} ${className}`}
      >
        <div
          aria-hidden="true"
          className={`absolute inset-0 ${dark ? "opacity-[0.07]" : "opacity-60"}`}
          style={{
            backgroundImage: `repeating-linear-gradient(135deg, ${dark ? "#fff" : "var(--color-line)"} 0 1px, transparent 1px 14px)`,
          }}
        />
        <div
          className={`absolute left-3 top-3 max-w-[calc(100%-1.5rem)] border px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${
            dark ? "border-white/25 text-white/70" : "border-line bg-paper text-ink-soft"
          }`}
        >
          Foto · {label}
        </div>
      </div>
    );
  }

  return (
    <div style={style} className={`${box} overflow-hidden ${tone === "dark" ? "bg-transparent" : "bg-mist"} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        preload={preload}
        style={objectPosition ? { objectPosition } : undefined}
        className={fit === "contain" ? "object-contain" : "object-cover"}
      />
    </div>
  );
}
