import { useId } from "react";

// Podpisový motiv: profil vlnité eternitové desky.
// Vlna se opakuje přes <pattern>, takže má stejnou velikost na mobilu i desktopu.

const PERIOD = 44;

/** Jedna perioda sinusovky z kvadratických křivek, začíná a končí na střední ose. */
function waveLine(height: number, amp: number) {
  const mid = height / 2;
  return `M0 ${mid} Q${PERIOD / 4} ${mid - amp} ${PERIOD / 2} ${mid} T${PERIOD} ${mid}`;
}

type EdgeProps = { className?: string; fill?: string };

/** Vyplněná vlna, např. spodní okraj hero (bílá „střecha“ zakusující se do fotky). */
export function WaveEdge({ className = "", fill = "var(--color-paper)" }: EdgeProps) {
  const id = useId();
  const h = 22;
  const amp = 7;
  return (
    <svg className={`block w-full ${className}`} height={h} aria-hidden="true" focusable="false">
      <defs>
        <pattern id={id} width={PERIOD} height={h} patternUnits="userSpaceOnUse">
          <path d={`${waveLine(h, amp)} V${h} H0 Z`} fill={fill} />
        </pattern>
      </defs>
      <rect width="100%" height={h} fill={`url(#${id})`} />
    </svg>
  );
}

type RuleProps = { className?: string; width?: number | string; stroke?: string };

/** Tenká vlnovka místo rovné linky pod nadpisy. */
export function WaveRule({ className = "", width = 132, stroke = "var(--color-green)" }: RuleProps) {
  const id = useId();
  const h = 12;
  const amp = 3.6;
  return (
    <svg className={`block ${className}`} width={width} height={h} aria-hidden="true" focusable="false">
      <defs>
        <pattern id={id} width={PERIOD / 2} height={h} patternUnits="userSpaceOnUse">
          <path
            d={`M0 ${h / 2} Q${PERIOD / 8} ${h / 2 - amp} ${PERIOD / 4} ${h / 2} T${PERIOD / 2} ${h / 2}`}
            fill="none"
            stroke={stroke}
            strokeWidth={2}
          />
        </pattern>
      </defs>
      <rect width="100%" height={h} fill={`url(#${id})`} />
    </svg>
  );
}
