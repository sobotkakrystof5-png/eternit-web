// Jediné místo pro kontaktní údaje a základní texty webu.
// Hodnoty v hranatých závorkách čekají na klienta (viz .memory/memory.md, Otevřené otázky).

export const DOPLNIT = "[DOPLNIT]";

export type Contact = {
  /** Zobrazený tvar, např. „+420 000 000 000“. */
  display: string;
  /** Odkaz tel:/mailto:. Null, dokud údaj nedodá klient. */
  href: string | null;
};

export const site = {
  /** Pravopis příjmení ověřit (Varchol / Varhol). */
  ownerName: "Michal Varchol",
  wordmark: "Varchol",
  wordmarkSub: "eternit · azbest",
  town: "Litoměřice",
  /** Doména zatím není známá. Do spuštění zůstává web neindexovaný (viz layout.tsx). */
  url: "https://www.doplnit-domenu.cz",
  phone: { display: "+420\u00a0734\u00a0212\u00a0595", href: "tel:+420734212595" } as Contact,
  email: { display: "mvarchy@gmail.com", href: "mailto:mvarchy@gmail.com" } as Contact,
  ico: "05850100",
  address: "Werichova 2007/2, 412 01 Litoměřice",
  /** Malířský web klienta, odkaz ve Spolupráci. Ověřit, že ho klient chce propojit. */
  paintingWebUrl: "https://www.malirske-nateracske-prace-litomerice.cz",
  seo: {
    title: "Likvidace eternitu a azbestu Litoměřice | Michal Varchol",
    description:
      "Bezpečná demontáž eternitových střech a likvidace azbestového odpadu. Litoměřice, Ústecký, Liberecký a Středočeský kraj. Pronájem lešení.",
  },
};

export type NavItem = { id: string; label: string };

export const nav: NavItem[] = [
  { id: "sluzby", label: "Služby" },
  { id: "kde-pusobime", label: "Kde působíme" },
  { id: "proces", label: "Postup" },
  { id: "reference", label: "Reference" },
  { id: "galerie", label: "Galerie" },
  { id: "spoluprace", label: "Spolupráce" },
  { id: "kontakt", label: "Kontakt" },
];

export type Stat = {
  /** Číslo se animuje. Null = čeká na potvrzení klientem. */
  value: number | null;
  suffix?: string;
  label: string;
};

// 30+ zakázek a 100 % potvrdil zadavatel 2026-10-12; praxi na 3+ upřesnil 2026-10-19.
export const stats: Stat[] = [
  { value: 30, suffix: "+", label: "dokončených zakázek" },
  { value: 100, suffix: "\u00a0%", label: "spokojených klientů" },
  { value: 3, suffix: "+", label: "let praxe" },
];

export type Service = {
  id: string;
  title: string;
  lead: string;
  pointsTitle?: string;
  points: string[];
  photoLabel: string;
  photo?: { src: string; alt: string };
  primary: boolean;
};

export const services: Service[] = [
  {
    id: "eternit",
    title: "Likvidace eternitu a azbestu",
    // Texty dodal klient (2026-10-12).
    lead: "Zajišťujeme demontáž eternitových střech a likvidaci azbestového odpadu s důrazem na bezpečnost, dodržování platných předpisů a ochranu zdraví lidí i životního prostředí.",
    pointsTitle: "Proč si vybrat právě nás?",
    points: [
      "Individuální přístup ke každé zakázce.",
      "Přehledná cenová nabídka před zahájením prací.",
      "Zajištění potřebných náležitostí před realizací.",
      "Důraz na bezpečnost a správné ochranné pomůcky.",
      "Kontrola hygienickou stanicí při každé realizaci.",
      "Zajištění demontáže, dopravy a předání azbestového odpadu oprávněnému zařízení.",
    ],
    photoLabel: "Demontáž eternitové střechy",
    photo: { src: "/fotky/projekty/13-libochovice/04.webp", alt: "Pracovník v ochranném obleku snímá eternitovou vlnovku ze střechy" },
    primary: true,
  },
  {
    id: "leseni",
    title: "Pronájem lešení",
    // Text dodal klient (2026-10-12).
    lead: "Nabízím pronájem kvalitního rámového lešení Pletac PD 70 pro stavební, rekonstrukční a dokončovací práce.",
    points: [
      "Vhodné pro rodinné domy, fasády, střechy a další stavební práce",
      "Možnost pronájmu jednotlivých částí nebo kompletní sestavy",
      "Doprava a montáž po dohodě",
      "Pronájem krátkodobý i dlouhodobý",
      "Cena dle množství lešení a délky pronájmu",
    ],
    photoLabel: "Lešení na stavbě",
    photo: { src: "/fotky/leseni/foto.webp", alt: "Lešení postavené u rozestavěného domu" },
    primary: false,
  },
];
