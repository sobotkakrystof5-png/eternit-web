// Texty dodal klient (2026-10-12). Obsah neměnit bez jeho souhlasu.

/** `text`: odstavce kroku. */
export type ProcessStep = { title: string; text: string[] };

export const processSteps: ProcessStep[] = [
  {
    title: "Konzultace a zaměření střechy",
    text: [
      "Nejprve s vámi probereme vaše požadavky a domluvíme si prohlídku nemovitosti. Na místě posoudíme stav eternitové krytiny, zaměříme plochu střechy a zjistíme rozsah potřebných prací.",
    ],
  },
  {
    title: "Výpočet ceny a cenová nabídka",
    text: [
      "Na základě zaměření připravíme přehlednou cenovou nabídku. Zohledníme demontáž krytiny, potřebná bezpečnostní opatření, manipulaci s odpadem, dopravu a jeho předání oprávněnému zařízení.",
    ],
  },
  {
    title: "Odsouhlasení ceny a příprava dokumentace",
    text: [
      "Pokud vám nabídka vyhovuje, odsouhlasíme si podmínky zakázky a připravíme potřebné podklady. Zajistíme příslušné oznámení a další náležitosti vůči krajské hygienické stanici podle charakteru prací a platných předpisů.",
    ],
  },
  {
    title: "Vyřízení potřebných náležitostí",
    text: [
      "Před zahájením demontáže je nutné splnit všechny příslušné zákonné požadavky. Příprava a vyřízení potřebných náležitostí může orientačně trvat přibližně 30 dní. Konkrétní termín závisí na okolnostech zakázky a požadavcích příslušných orgánů.",
    ],
  },
  {
    title: "Kontrola hygienické stanice při každé realizaci",
    text: [
      "Každou naši realizaci osobně kontrolují pracovníci hygienické stanice. Při kontrole ověřují dodržování stanovených požadavků, používání ochranných pracovních oděvů a dalších ochranných pomůcek i správný postup při práci s materiálem obsahujícím azbest. Průběh kontroly dokumentují také fotograficky.",
      "Díky tomu je nad průběhem našich prací zajištěn pravidelný dohled ze strany hygienické stanice. Bezpečnost pracovníků, zákazníků i okolí bereme vážně a dbáme na dodržování příslušných předpisů.",
    ],
  },
  {
    title: "Odborná demontáž eternitové střechy",
    text: [
      "Po splnění potřebných požadavků přistoupíme k samotné demontáži. Krytinu odstraňujeme s důrazem na bezpečnost a omezení uvolňování nebezpečných azbestových vláken. Práce provádíme s ohledem na ochranu pracovníků, majitelů nemovitosti, sousedů i okolního prostředí.",
    ],
  },
  {
    title: "Odvoz a předání azbestového odpadu",
    text: [
      "Demontovaný eternit zabezpečíme pro přepravu a zajistíme jeho odvoz do zařízení oprávněného k převzetí tohoto druhu odpadu. S odpadem nakládáme podle platných pravidel a požadavků na jeho bezpečnou přepravu a odstranění.",
    ],
  },
  {
    title: "Dokončení zakázky",
    text: [
      "Po dokončení demontáže a odvozu odpadu zkontrolujeme provedené práce a předáme vám informace o dokončení zakázky. Vy tak máte odstranění staré eternitové krytiny vyřešené a můžete pokračovat v plánované rekonstrukci střechy.",
    ],
  },
];
