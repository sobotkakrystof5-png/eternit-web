# CLAUDE CODE PROMPT: web Michal Varchol – likvidace eternitu a azbestu Litoměřice

Zkopíruj celý tento dokument jako první zadání do Claude Code (nový projekt/repo).

---

## 0. KRITICKÉ: WEB NESMÍ VYPADAT JAKO „AI ŠABLONA“

Tohle je nejdůležitější pokyn celého briefu a musí ovlivnit každé rozhodnutí níže. Naprostá většina webů generovaných AI vypadá stejně: rozpoznatelně, uniformně, bez duše. Tento web musí být opak. Musí působit, jako by ho navrhl a ručně doladil zkušený designér přímo pro tohoto klienta, s péčí o každý detail.

**Konkrétně SE VYHNI těmto typickým vzorům „AI webu“:**
- Generický hero „velký vycentrovaný nadpis + podnadpis + dvě tlačítka vedle sebe + ilustrace/gradient vpravo“. Hero je tu vycentrovaný záměrně (klient to chce), proto ho oživ proporcemi: obří H1, kontrast velikostí, vlnovka na spodní hraně, netypické umístění štítku s kraji.
- Přehnaná symetrie a centrování všeho ostatního. Mimo hero a sekci Spolupráce pracuj s asymetrickou mřížkou.
- Generické mřížky „feature karet“ (ikona nahoře, nadpis, text) opakované 3–4× stejně. Každá sekce má vlastní kompozici.
- Přepoužívané gradienty (fialovo-modré, duhové), glassmorphism bez důvodu, generické 3D ilustrace, neupravené sady ikon.
- Předvídatelné „fade-in + slide-up na všem“. Animace používej záměrně a s vlastním rytmem (viz sekce 4).
- Lorem ipsum nebo prázdné fráze („Jsme tým profesionálů“, „Kvalita je naší prioritou“). Každý text musí být konkrétní a znít jako řemeslník, který svou práci zná.
- Stejné odsazení a šířka kontejneru ve všech sekcích. Nech sekce dýchat různě, měň hustotu a rytmus.
- Dvojice písem, která vypadá jako výchozí Tailwind/shadcn bez typografické osobnosti. Tracking, line-height a kontrast velikostí ladit vědomě.

**Místo toho:**
- **Vlastní vizuální motiv z oboru: profil vlnité eternitové desky (vlnovka).** Sinusová linka v tloušťce 2–3 px, odvozená z profilu vlnitého eternitu. Použij ji jako podpis, ne dekoraci všude:
  1. spodní hrana hero fotky je vystřižená do vlnovky,
  2. tenká zelená vlnovka jako oddělovač mezi 2–3 klíčovými sekcemi (ne mezi všemi),
  3. jemná vlnovka v podtržení aktivní položky navigace / při hoveru odkazů.
  Druhý motiv: **značka „◉ Litoměřice“** (bod s pulzujícím kroužkem) se vrací v mapě a v kontaktu.
- Každá sekce má **vlastní kompoziční logiku** (jiný poměr textu a fotky, jiné zarovnání, jiný rytmus), aby procházení webu působilo jako dobře navržené portfolio, ne opakování jedné komponenty.
- Detaily, které dělají rozdíl: mikrointerakce při hoveru šité na obsah (ne generické `scale-105`), promyšlené přechody mezi sekcemi, autentický text.
- Piš CSS/komponenty, jako by je člověk ladil desetkrát pixel po pixelu.

Pokud si Claude Code není jistý, jestli prvek nepůsobí šablonovitě, má se zeptat nebo navrhnout originálnější variantu místo nejběžnějšího řešení. Pro designová rozhodnutí použij skill `frontend-design`, pokud je v Claude Code dostupný.

---

## 1. KONTEXT PROJEKTU A OBSAH OD KLIENTA

**Klient:** Michal Varchol (OVĚŘIT pravopis příjmení: Varchol vs. Varhol)
**Obor:** demontáž a likvidace eternitu a azbestu, doplňkově pronájem lešení; původně malířské práce
**Sídlo:** Litoměřice
**Působnost:** Ústecký, Středočeský a Liberecký kraj
**Adresa:** [DOPLNIT]
**IČO:** [DOPLNIT]
**Telefon:** [DOPLNIT]
**E-mail:** [DOPLNIT]

**Podklady od klienta (stylisticky přeformuluj, ale fakta zachovej, nic nevymýšlej):**
- 5+ let praxe, 30+ zakázek, 100 % pozitivních hodnocení (čísla dodal klient).
- Hlavní služba: likvidace azbestu a eternitu. Doplňková služba: pronájem lešení.
- Příběh: během malířských zakázek se zákazníci opakovaně ptali na likvidaci eternitu, z této poptávky služba vznikla. Odtud propojení „Malířství × Eternit“.
- Reference jsou vlastní, přímo na webu. **Ne** Google recenze, **ne** Seznam.cz.
- Klient nemá logo. V navigaci bude textový wordmark „Michal Varchol“.

**Cíl webu:** okamžitě vzbudit důvěru a přivést poptávky **telefonem** (hlavní CTA) a e-mailem. Formulář na webu **nebude**.

**Tón:** lidský, věcný, řemeslný. Je tu skutečný příběh (z malíře k eternitu), ale bez přehnané familiárnosti. Bezpečnost a legálnost likvidace podávat sebevědomě, bez strašení.

**SEO title:** `Likvidace eternitu a azbestu Litoměřice | Ústecký, Středočeský a Liberecký kraj`
**Meta description:** demontáž a likvidace eternitu a azbestu, Litoměřice a 3 kraje, telefon.

---

## 2. LOGO A DESIGN SYSTEM

### Logo
Klient logo nemá. Používej textový wordmark **„Michal Varchol“** (Archivo 800, mírně záporný tracking). Nevymýšlej grafické logo ani ikonu.

### Barvy
- **Pozadí: sjednocená bílá `#FFFFFF` na celé stránce.** Žádné střídání tmavých a světlých sekcí. Jemné odlišení sekcí jen přes velmi světlý zelenošedý tón `#F3F7F3` u vnitřních bloků (karta doplňkové služby, citace), nikdy přes celou šířku stránky.
- **Text / „černá“:** `#0E120F` (téměř černá do zelena, ne čistá černá). Sekundární text `#4A5D50`.
- **Primární zelená (akcent):** `#1F7A3E`: CTA, čísla, linky, vlnovka, aktivní kraje. Na bílém splňuje WCAG AA.
- **Světlá zelená (sekundární):** `#4FD07D`: pouze na tmavém podkladu (overlay hero fotky), hover glow v mapě. Nikdy jako text na bílém.
- **Neaktivní prvky mapy:** `#E6ECE6`, obrys `#C9D3C6`.
- Poměr zhruba 85 % bílá/černá, zbytek zelená. Zelená přitahuje pozornost, nevyplňuje plochy.
- Zkontroluj kontrast (WCAG AA) u každé kombinace, hlavně bílý text na hero fotce s overlayem.

### Typografie
- Nadpisy: **Archivo** (800/900), H1 verzálkami, tracking −0.035em, výrazný kontrast velikostí.
- Text: **Manrope** (400/500/700), line-height 1.6–1.7.
- Čísla v pruhu statistik: Archivo 900, velká (≈88 px desktop).
- Načítat přes `next/font/google`.

### Vizuální jazyk
- Čistý, světlý, řemeslně precizní. Velkorysá bílá, ostrá černá typografie, zelená jako signál.
- Vlnovka jako jediný „grafický“ motiv (viz sekce 0).
- **Placeholdery fotek:** vždy jasně označený rámeček (přerušovaný okraj, šrafované světlé pozadí, ikona fotoaparátu, popisek co patří dovnitř, `aspect-ratio` podle finálního layoutu). **Nikdy fotobanka jako výplň.**

---

## 3. TECHNICKÝ STACK

**Zvolený stack:** Next.js 16 (App Router) + TypeScript, Tailwind CSS, Framer Motion (animace). Hosting **Vercel** (OVĚŘIT u klienta, pokud chce jiný hosting, ozvat se dřív, než se cokoli nasadí).

Důvod volby: web bude mít **hodně fotek**. `next/image` zajistí automatickou optimalizaci (WebP/AVIF, responzivní velikosti, lazy loading) a galerie i reference budou **data**, ne ručně psané HTML.

- **Žádný formulář, žádné API klíče, žádný backend.** Kontakt = `tel:` a `mailto:` odkazy.
- Obsah v datových souborech: `src/data/projects.ts` (galerie), `src/data/references.ts`, `src/data/process.ts`, `src/data/regions.ts`. Přidání projektu = nový záznam + složka s fotkami v `public/projekty/<slug>/`.
- **Mapa ČR:** vlastní inline SVG komponenta, žádná mapová knihovna. Hranice 14 krajů vygeneruj jednorázově z GeoJSON (např. `kraje.json` z repozitáře `siwekm/czech-geojson`), zjednoduš (mapshaper nebo vlastní skript, cíl < 60 kB) a ulož jako pole SVG cest v `src/data/czMap.ts`. Skript na převod ulož do `scripts/`.
- Mapa kontaktu: Mapy.cz iframe (lehký embed, žádné JS SDK), načítat lazy.
- Responzivita: mobile-first, plně funkční na všech breakpointech.
- SEO: metadata v `layout.tsx`, OpenGraph, `sitemap.ts`, `robots.ts`, sémantické HTML5, JSON-LD `LocalBusiness` (adresa, telefon, oblast působnosti).
- Respektuj `prefers-reduced-motion`: všechny animace mají statickou variantu.

**Struktura webu:** jednostránkový web (landing page)
- Jedna scrollovací stránka, navigace odkazuje na kotvy: `#sluzby`, `#kde-pusobime`, `#proces`, `#reference`, `#galerie`, `#o-nas`, `#spoluprace`, `#kontakt`.
- Smooth scroll, scrollspy (aktivní položka navigace odpovídá sekci ve viewportu, podtržená vlnovkou).

---

## 4. STRUKTURA OBSAHU (SEKCE V POŘADÍ)

Layout vychází z odsouhlasené varianty **A** z Claude Design, se sjednoceným bílým pozadím.

### 0. Hlavička (sticky)
- Vlevo wordmark **Michal Varchol**.
- Uprostřed/vpravo kotvy: Služby · Kde působíme · Proces · Reference · Galerie · O nás · Spolupráce · Kontakt.
- Vpravo zelené tlačítko s telefonem.
- Bílé pozadí s jemným rozmazáním, po scrollu tenká spodní linka.
- Mobil: hamburger menu + **plovoucí tlačítko „Zavolat“** vpravo dole, stále viditelné.

### 1. Hero
- Fotka Litoměřic přes celou šířku s tmavým overlayem kvůli čitelnosti. *Placeholder: panorama Litoměřic (16:9, min. 2400 px šířka).*
- Štítek nad nadpisem: **Ústecký · Středočeský · Liberecký kraj** (světle zelená, verzálky, prostrkané).
- **H1 vycentrovaný, obří a výrazný („musí řvát“):** *Demontáž a likvidace eternitu a azbestu Litoměřice*. Verzálky, Archivo 900, clamp(48px, 7.4vw, 112px). Slova „eternitu a azbestu“ ve světle zelené.
- Podnadpis: bezpečně, legálně, s doklady o likvidaci. Od obhlídky po odvoz.
- CTA: „Zavolat a domluvit obhlídku“ (`tel:`) + „Kde působíme“ (kotva).
- Spodní hrana fotky vystřižená do **vlnovky** (motiv).
- Animace: H1 se při načtení odkryje po řádcích (maska zespodu nahoru), jemně a jednou.

### 2. Čísla (hned pod hero)
- **5+ let praxe · 30+ zakázek · 100 % pozitivních hodnocení.**
- Čísla **naběhnou od nuly** při vstupu do viewportu (jednou, ~1,4 s, easeOut). Zelené „+“ a „%“.
- Každé číslo má nad sebou zelenou linku 3 px. Asymetrické rozložení, ne tři stejné karty.

### 3. Služby
- **Hlavní služba: Likvidace azbestu a eternitu.** Velký blok: **fotka vlevo, popis vpravo**. Text: střechy, fasády, rozvody, kůlny; ohlášení, demontáž, balení, odvoz, uložení na skládku nebezpečného odpadu, doklad. Krátký seznam 4 bodů. *Placeholder: demontáž eternitové střechy (4:3).*
- **Doplňková služba: Pronájem lešení.** Menší, vizuálně podřízený blok pod hlavní službou, stejné rozložení fotka vlevo / text vpravo, na světlém podkladu `#F3F7F3`. *Placeholder: lešení (3:2). Text [DOPLNIT od klienta: samostatně i k zakázce? doprava, montáž?].*
- Hover na fotce: jemný posun obrazu uvnitř rámu, ne zvětšení celé karty.

### 4. Kde působíme (interaktivní mapa)
- Vlevo nadpis „Tři kraje, jedno sídlo v Litoměřicích“ + krátký text.
- Vpravo **skutečný tvar České republiky rozdělený na 14 krajů** (SVG).
- **Ústecký, Středočeský a Liberecký kraj jsou zelené a „svítí“**, ostatní kraje světle šedé.
- Při najetí myší na aktivní kraj: kraj se rozjasní, dostane jemnou zelenou záři (drop-shadow) a mírně se zvedne; ostatní kraje se přitlumí; zobrazí se popisek s názvem kraje a hlavními městy (Litoměřice, Ústí nad Labem, Děčín, Teplice / Mělník, Kladno, Mladá Boleslav / Liberec, Jablonec n. N., Česká Lípa). Města OVĚŘIT s klientem.
- Neaktivní kraj při hoveru reaguje jen nepatrně (popisek „mimo oblast působnosti“ nebo nic).
- Na Litoměřicích **pulzující bod „◉ Sídlo“**.
- Při vstupu sekce do viewportu se aktivní kraje postupně rozsvítí (stagger).
- Mobil: tap místo hoveru, pod mapou textový seznam krajů jako přístupná záloha. Kraje dostupné z klávesnice (`tabIndex`, `aria-label`).

### 5. Proces
- Vizuálně podle reference **Vizeon**: svislá časová osa, vlevo velké tenké číslo 01–06, na lince ikona v kroužku, vpravo nadpis a jedna dvě věty.
- **Animace:** linka se při scrollu postupně „dokresluje“ dolů (scroll-linked) a kroky se odkrývají jeden po druhém. Číslo kroku přejde ze světle šedé do zelené, když je krok aktivní.
- Kroky:
  1. **Poptávka a obhlídka:** zavoláte, přijedeme a posoudíme rozsah na místě.
  2. **Cenová nabídka:** jasná cena včetně odvozu a likvidace.
  3. **Povolení a ohlášení:** papírování vyřídíme za vás.
  4. **Bezpečná demontáž:** ochranné pomůcky, zvlhčení, balení do fólie.
  5. **Odvoz a uložení:** na certifikovanou skládku nebezpečného odpadu.
  6. **Předání dokladů:** potvrzení o legální likvidaci.
- Texty kroků OVĚŘIT s klientem (hlavně krok 3, ohlášení).

### 6. Reference
- Vlastní reference z `references.ts`: text, jméno, obec, typ zakázky. Žádné napojení na Google ani Seznam.
- 3 karty s **různým vertikálním odsazením** (prostřední posunutá níž), ne stejná řada. Na mobilu horizontální swipe.
- *Placeholdery: 3–6 referencí [DOPLNIT].*

### 7. Galerie
- Mřížka projektů: **úvodní fotka + název + lokalita + počet fotek**.
- Kliknutí otevře **lightbox** s fotkami daného projektu (šipky, swipe, klávesnice, Esc, počítadlo 3/8). Pokud jsou fotky před/po, zobrazit je jako dvojici.
- Data z `projects.ts`: `{ slug, title, location, cover, photos[], before?, after? }`.
- Všechny fotky přes `next/image`, lazy, `sizes` správně nastavené.
- *Placeholdery: 6 projektů × 1 úvodní + 4–6 fotek.*

### 8. O nás
- Foto vlevo (4:5), text vpravo. *Placeholder: Michal Varchol při práci / portrét.*
- Nadpis např. „Začalo to u štětce“. Příběh: z malířských zakázek vzešla poptávka po likvidaci eternitu. Proč na tom záleží: zdraví, bezpečnost, legální likvidace. Text [DOPLNIT/OVĚŘIT od klienta].

### 9. Spolupráce
- Vizuální propojení ve stylu **Alteno × Vizeon**: dva wordmarky **MALÍŘSTVÍ × ETERNIT** spojené tenkým znakem ×, vycentrované, velké. MALÍŘSTVÍ černě, ETERNIT zeleně.
- Pod tím: po demontáži střechy nebo fasády navážeme malířskými pracemi. Jeden člověk, jeden kontakt.
- Odkaz na malířský web, pokud existuje [OVĚŘIT].
- Animace: oba wordmarky přijedou k sobě a × se objeví až potom (jednou při vstupu).
- Na bílém pozadí, sekci oddělit vlnovkou.

### 10. Kontakt (bez formuláře)
- Nadpis „Zavolejte, domluvíme obhlídku“.
- **Velký klikací telefon** (zelený, Archivo 900), e-mail, IČO, adresa.
- Vpravo mapa z Mapy.cz s polohou v Litoměřicích (lazy iframe), se značkou ◉.

### 11. Patička
- Jméno, IČO, kraje působnosti, rok, odkaz na zásady ochrany osobních údajů (jen pokud bude analytika nebo cookies).

---

## 5. FUNKČNÍ POŽADAVKY: KONTAKT

**Formulář na webu nebude** (rozhodnutí klienta). Kontakt probíhá přes:
1. `tel:` odkazy (hlavička, hero, plovoucí tlačítko na mobilu, kontakt).
2. `mailto:` odkaz v kontaktu.
3. Telefon a e-mail definované na jednom místě (`src/data/site.ts`), aby se měnily jen jednou.

Nepřidávej formulář, Resend ani jiné API bez výslovného souhlasu.

---

## 6. PRAVIDLA PRO PLACEHOLDERY FOTEK

- Klient fotky zatím nedodal. **Žádné fotky z fotobanky jako výplň.**
- Každý placeholder = jasně odlišený rámeček (přerušovaný okraj, neutrální šrafované pozadí, ikona fotoaparátu, popisek co patří dovnitř).
- Placeholder má finální `aspect-ratio`, aby se po vložení fotek layout neměnil.
- Počty a umístění:
  - Hero: 1× panorama Litoměřic (16:9)
  - Služby: 1× demontáž eternitu (4:3), 1× lešení (3:2)
  - Galerie: 6 projektů × (1 úvodní 4:3 + 4–6 fotek)
  - O nás: 1× portrét / při práci (4:5)
- Komponenta `<Photo>` zobrazí placeholder, pokud `src` chybí, jinak `next/image`. Výměna fotky = jen doplnit cestu v datech.

---

## 7. PŘÍSTUPNOST A VÝKON

- Kontrast min. WCAG AA, jedno H1 na stránce, správná hierarchie nadpisů.
- `alt` texty u všech fotek (i popisný alt u placeholderů).
- Mapa, lightbox i menu ovladatelné klávesnicí, viditelný focus.
- `prefers-reduced-motion`: čísla se zobrazí rovnou, linka procesu je celá, bez pohybu.
- Core Web Vitals: hero fotka s `priority`, ostatní lazy, žádný layout shift (pevné `aspect-ratio`), Mapy.cz iframe až při přiblížení do viewportu.
- Cíl: Lighthouse 90+ ve všech kategoriích na mobilu.

---

## 8. PRÁVNÍ POŽADAVKY

- Bez formuláře odpadá GDPR checkbox.
- Cookie lišta jen pokud se přidá analytika nad rámec nezbytných cookies (Vercel Analytics bez cookies ji nepotřebuje). Pokud ano, přidat stránku zásad jako placeholder k doplnění klientem nebo právníkem. Právní texty negeneruj.
- U tvrzení o povoleních a certifikacích nic nevymýšlej: [OVĚŘIT, jaká oprávnění klient má].

---

## 9. POSTUP IMPLEMENTACE

1. Inicializovat Next.js 16 (App Router, TS, Tailwind), přidat Framer Motion.
2. Design tokeny v Tailwind configu (barvy, písma, odsazení), fonty přes `next/font`.
3. Datové soubory (`site`, `projects`, `references`, `process`, `regions`).
4. Skript pro převod GeoJSON krajů na zjednodušené SVG cesty → `czMap.ts`.
5. Layout: hlavička se scrollspy, plovoucí tlačítko na mobilu, patička.
6. Sekce v pořadí 1–10, každá jako vlastní komponenta v `src/components/sections/`.
7. Komponenta vlnovky (SVG, parametrizovaná) a komponenta `<Photo>` s placeholderem.
8. Animace záměrně: odkrytí H1, naběhnutí čísel, rozsvícení krajů, dokreslení osy procesu, spojení wordmarků. Nic dalšího.
9. Lightbox galerie.
10. Mapy.cz embed.
11. Kontrola responzivity na všech breakpointech.
12. SEO (metadata, OG, sitemap, robots, JSON-LD) a přístupnost.
13. Build, nasazení na Vercel, kontrola bez chyb v konzoli.

---

## 10. VÝSLEDNÝ DOJEM

Web musí na první pohled působit jako **práce řemeslníka, který ví, co dělá, a bere bezpečnost vážně**: čistý, světlý, s jasným a hlasitým sdělením v hero, a nesmí být poznat, že vznikl pomocí AI nástroje. Musí být rychlý, bezchybný na mobilu a vést návštěvníka k jediné akci: **zavolat**. Návštěvník má mít pocit, že web navrhl někdo, kdo zná klienta i obor do detailu.

---

**Poznámka pro Claude Code:** Piš čistý, komentovaný kód, drž konzistentní strukturu a pojmenování a připrav projekt tak, aby šlo skutečné fotky a texty vložit bez zásahu do struktury kódu. Před dokončením každé sekce si polož otázku: „Vypadá to jako záměrná práce pro tohoto klienta, nebo jako generická šablona?“ Pokud to druhé, přepracuj podle sekce 0.