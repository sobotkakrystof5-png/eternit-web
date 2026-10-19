// Vlastní reference na webu (ne Google ani Seznam). Texty dodá klient.

export type Reference = { quote: string; author: string; place: string; date?: string };

export const references: Reference[] = [
  {
    quote:
      "Spolupráce byla na profesionální úrovni. Včetně zajištění ohlášení prací na krajské hygienické stanici a následném doložení dokladů o odstranění azbestu.",
    author: "Aleš Müller",
    date: "17.7.2025",
    place: "vedoucí stavební kanceláře, Městský úřad Hoštka",
  },
  {
    quote: "Všechno bylo v pořádku, rychlá demontaz, za dobrý peníze. Děkujeme Schaffnerovi Blažim",
    author: "Pan Schaffner",
    date: "20.4.2025",
    place: "Blažim, okres Louny",
  },
  {
    quote:
      "Zjistil jsem, že střecha garáže s eternitovou krytinou o ploše 45 m² je špatná. V rodině máme rakovinu. Když jsem si načetl, jaké jsou potíže s likvidací eternitu, požádal jsem hygienickou stanici o radu. Dostal jsem 3 kontakty, pan Varchol byl cenově nejvýhodnější, vyřídil povolení, na smluvený přijel se svými pracovníky, eternit sundali, naložili a odjeli. Vřele doporučuji.",
    author: "Pan Březina",
    date: "24.8.2026",
    place: "Libochovice",
  },
];
