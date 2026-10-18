// Vlastní reference na webu (ne Google ani Seznam). Texty dodá klient.

export type Reference = { quote: string; author: string; place: string };

export const references: Reference[] = [
  {
    quote:
      "Spolupráce byla na profesionální úrovni. Včetně zajištění ohlášení prací na krajské hygienické stanici a následném doložení dokladů o odstranění azbestu.",
    author: "Aleš Muller",
    place: "vedoucí stavební kanceláře, Městský úřad Hoštka",
  },
  {
    quote: "Všechno bylo v pořádku, rychlá demontaz, za dobrý peníze. Děkujeme Szaffnerovi Blažim",
    author: "Blažim Szaffner",
    place: "Březina-Louny",
  },
  { quote: "[DOPLNIT] text reference od zákazníka.", author: "[DOPLNIT] jméno", place: "[DOPLNIT] obec" },
];
