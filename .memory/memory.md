# MEMORY: živý stav

Co se opravdu stalo, aktuální stav a proč. Pravidla zápisu viz `pravidla.md`.

## Aktuální stav
- **Projekt:** Eternit - web, osobní web Michala Varchola (pravopis příjmení ověřit), Litoměřice. Z malíře specialista na likvidaci eternitu a azbestu.
- **Fáze:** Kostra webu hotová (2026-10-12). Všechny sekce podle AGENTS.md §4 a §5 existují s placeholdery, `npm run build` a `npm run lint` prochází bez chyb a varování. Čeká se na podklady od klienta.
- **Stack:** Next.js 16 (App Router) + TypeScript, Tailwind CSS, Framer Motion, hosting Vercel (potvrzení hostingu čeká na klienta).
- **Co existuje:** Next.js 16.4 + React 19.3 + Tailwind 4 + framer-motion 12. Sekce Hero, Stats, Služby, Kde působíme (SVG mapa krajů), Postup (časová osa), Reference, Galerie (projekty + lightbox na `<dialog>`), O nás, Spolupráce, Kontakt, hlavička se scrollspy a mobilním menu, patička. `robots.ts`, `sitemap.ts`, metadata.
- **Brief chybí:** `varchol-claude-code-prompt.md` v kořeni není a prázdný je i `web-project-brief.md`. Kostra vznikla jen z `AGENTS.md` a z této paměti. Až brief dorazí, porovnat s ním.

## Klíčová rozhodnutí
Nepřehodnocují se bez výslovného pokynu uživatele. Převzato z `AGENTS.md` §4 a §6 a z `CLAUDE.md` (stav k 2026-10-12), dál se vedou tady. Technické konvence (příkazy, struktura složek, pravidla kódu, kotvy) jsou v `AGENTS.md` §5 a sem se nekopírují.
- **2026-10-12:** Next.js 16 místo čistého HTML/CSS. Důvod: velké množství fotek (optimalizace přes `next/image`, galerie jako data v `src/data/*`).
- **2026-10-12:** Jednostránkový web (landing page) s kotvovou navigací a scrollspy. Záměrné a závazné.
- **2026-10-12:** Bez kontaktního formuláře, rozhodnutí klienta. Kontakt jen telefonem (hlavní CTA) a e-mailem. Žádný backend, žádné API klíče.
- **2026-10-12:** Reference jsou vlastní na webu, ne Google ani Seznam.
- **2026-10-12:** Design varianta A: sjednocené bílé pozadí na celé stránce (žádné tmavé sekce), text `#0E120F`, zelená `#5ED33F` (přesný odstín z dodaného obrázku) na plochách a v hero; text `#317C1D`. Viz rozhodnutí 2026-10-18. Písma Archivo (nadpisy) a Manrope (text). Podpisový motiv: vlnovka podle profilu eternitové desky.
- **2026-10-12:** Mapa je skutečný tvar ČR rozdělený na kraje (SVG), tři kraje svítí a reagují na hover. Proces je časová osa ve stylu Vizeon s postupnou animací.
- **2026-10-18:** Akcent webu je přesná zelená z dodaného obrázku `#5ED33F` (na pokyn uživatele, nahrazuje `#1F7A3E` a `#4FD07D`). Na bílé se tato zelená jako text nesmí použít (kontrast 1,9:1), text a obrysy jdou v `#317C1D`, tlačítka mají tmavý text. Hero zesvětlený (překryv ink/80 → ink/10).
- **2026-10-12:** Bez loga. Inspirace likvidace-eternitu.org (zelená, černá), přebírá se jen směr, ne copy ani layout 1:1. Zdroj: poznámky uživatele v Pages.
- **2026-10-12:** `AGENTS.md` je jediný zdroj pravidel pro všechny agenty, `CLAUDE.md` na něj má jen odkazovat. Rozhodla jiná session při paralelní práci, zde zaznamenáno.
- **2026-10-12:** Paměť žije ve skryté složce `.memory/`, ne v `memory/`. Důvod: složku takto založil uživatel.
- **2026-10-12:** Skills jsou jednou, v `.claude/skills/`. `.agents/skills` je symlink, aby Codex, Cursor a další četly totéž a kopie se nerozešly.

## Zadání z poznámek (Pages „Eternit - web“, ~/Documents)
Sekce webu: Hero (fotka Litoměřic, likvidace eternitu a azbestu, demontáž) · Co děláme (likvidace eternitu a azbestu, pronájem lešení) · Kde působíme (interaktivní mapa: Ústecký, Středočeský, Liberecký kraj) · Jak to děláme (animace postupu práce) · Reference · Galerie (po projektech, každý má úvodní fotku) · O nás · Spolupráce (propojení malířských prací a eternitu) · Kontakt (telefon, IČO, mapa).
Úpravy fotek z poznámek (není jasné, ke kterému zdroji): pronájem lešení a malířské práce potřebují jinou fotku, u malířských prací odstranit 16. fotku, u maleb interiéru 13. a 15., u stříkání jsou 6. a 7. stejné a 10., 13., 14. vymazat, změnit fotku lešení.

## Otevřené otázky
Čekají na uživatele nebo klienta. Po zodpovězení smazat.
- **Kandidáti z malířského webu klienta** (`~/Desktop/Podnikání/Klienti /dokončené projekty /Varchol - malíř /index.html`), do webu zatím NEDOSAZENO: telefon +420 734 212 595, e-mail mvarchy@gmail.com, IČO 05850100, lešení „rámové lešení Pletac PD 70“. Ověřit, jestli platí i pro eternit. Portfolio VIZEON píše příjmení „Varchol“, což je silná nápověda k pravopisu.
- Copy sekcí spolupráce, o nás a nadpis služeb je pracovní návrh. Hero, služby (úvod a výhody), kde působíme, postup a kontakt jsou od klienta (2026-10-12).
- Odkaz ve Spolupráci vede na malířský web klienta. Potvrdit, že ho tam klient chce.
- Pravopis příjmení (Varchol / Varhol).
- Telefon, e-mail, IČO, adresa.
- Texty referencí, seznam projektů do galerie a fotky.
- Popis pronájmu lešení.
- Oprávnění a certifikace k práci s azbestem: co firma skutečně má a co smí web uvádět.
- Existuje web malířských prací (odkaz ve Spolupráci)?
- Města v popiscích mapy.
- Potvrzení hostingu na Vercelu a domény.
- Platí „5 let praxe, 30+ projektů“? V poznámkách je to pod „Třeba“, tedy jako příklad. Do potvrzení se nepoužije.
- Kde je brief? `AGENTS.md` i `CLAUDE.md` odkazují na `varchol-claude-code-prompt.md`, soubor v kořeni není. Vznikne skillem `web-project-brief`, nebo leží jinde? Prázdný `web-project-brief.md` v kořeni je asi zbytek, rozhodnout, jestli se smaže.
- Složky `~/Downloads/likvidace-eternitu-azbestu-litomerice.cz-main` a `...-2.cz-main` (Drupal): původní web, zdroj fotek, nebo nesouvisí? Nic se z nich nepřebírá, dokud to není jasné.
- Klíčová slova a cílení (Litoměřice, kraje) nejsou validovaná. Nevymýšlet, navrhnout kandidáty a ověřit v nástroji (skill `seo-collabim-keyword-loop`).
- Konec věty v sekci O NÁS v poznámkách je useknutý („…sdílejí poptávku po“).
- Mapa v Kontaktu: pouhý odkaz, nebo embed? Embed (Google, Mapy.cz) by vyžadoval `frame-src` v CSP.

## Záměrně nehotové
Aby to příští session neopravila jako chybu.
- **Fotky jsou prázdné, zřetelně označené placeholdery.** Čeká se na klienta. Nenahrazovat bez podkladů, nikdy fotobanka.
- **Kontaktní údaje jsou placeholdery `[DOPLNIT]`.**
- **Formulář chybí záměrně.**
- **Web je neindexovaný** (`robots: noindex` v `layout.tsx`, `LAUNCHED = false` v `robots.ts`). Důvod: placeholdery a neznámá doména. Přepnout při spuštění, spolu se `site.url`.
- **Doména v `site.url` je zástupná** (`doplnit-domenu.cz`).
- **Čísla „let praxe“ a „zakázek“ ve Stats jsou `[DOPLNIT]`.** Jediné číslo je 3 kraje.
- **Bez JSON-LD schema.** Přidá se až z ověřených údajů (jméno, telefon, IČO, adresa).
- **Bezpečnostní hlavičky a CSP nejsou nastavené.** Jen `poweredByHeader: false`. Celý základ přes `web-security-setup` najednou, ne po částech.
- **`.codex/` je prázdná.** Codex čte `AGENTS.md` a skills z `.agents/skills`, vlastní konfigurace se zatím nepotřebuje.
- **Živý stav je zatím i v `AGENTS.md` §6 a v `CLAUDE.md` §5.** Zůstalo tam, protože tyhle soubory paralelně upravuje jiná session. Podle `AGENTS.md` §8 při rozporu platí `.memory/memory.md`. Doporučené sjednocení (rozhodnout s uživatelem): obě sekce změnit na odkaz sem, jako u ostatních klientských webů.

## Changelog
Nejnovější nahoře.

### 2026-10-18: Přesná zelená a zesvětlené hero
- **Co:** Akcent přepnut na `#5ED33F` (vzorkováno z dodaného obrázku). Pro text, ikony a obrysy na bílém přidán tmavší odstín `#317C1D`, hover ploch `#4EC72E`. Tlačítka s tmavým textem, mapa s tmavým popiskem. Překryv hero zesvětlen z ink/90–25 na ink/80–10.
- **Proč:** na pokyn uživatele. Tmavý odstín kvůli WCAG AA, zelená z obrázku na bílém nesplňuje kontrast jako text.
- **Dopad:** všechny sekce (barvy přes tokeny v `globals.css`). Hero čitelnost ověřena na mobilním náhledu. Focus ring v `#317C1D`. Build a lint bez chyb.
- **Soubory:** `src/app/globals.css`, `src/components/ui/CallButton.tsx`, `src/components/ui/EmailButton.tsx`, `src/components/sections/Hero.tsx`, `src/components/sections/RegionsMap.tsx`, `src/components/sections/*.tsx`, `src/components/ui/{Header,Footer,SectionHeading}.tsx`

### 2026-10-12: Texty od klienta
- **Co:** Dosazeny texty dodané klientem: hero (nadtitulek „Litoměřice a široké okolí“, podtitulek), úvod hlavní služby a seznam „Proč si vybrat právě nás?“ místo bodů služby, úvod a závěrečná věta v Kde působíme, postup rozšířen z 6 na 8 kroků (krok může mít víc odstavců), nadpis a úvod Kontaktu, SEO description. Pořadí krajů změněno na Ústecký, Liberecký, Středočeský podle klienta.
- **Proč:** Na pokyn uživatele, přesné informace od klienta. Tvrzení o hygienické stanici a lhůtě ~30 dní jsou od klienta, tedy s podkladem.
- **Dopad:** Pořadí krajů mění i pořadí rozsvícení na mapě. Texty se nepřepisovaly stylisticky, jen převzaly.
- **Soubory:** `src/data/process.ts`, `src/data/site.ts`, `src/data/regions.ts`, `src/components/sections/{Hero,Services,RegionsMap,Process,Contact}.tsx`

### 2026-10-12: Kostra webu v Next.js
- **Co:** Založen Next.js 16.4 (create-next-app, App Router, TS, Tailwind 4, ESLint, výchozí `cacheComponents`) a přidán framer-motion 12. Vznikly všechny sekce, datové soubory `src/data/*`, komponenta `Photo` s placeholdery, vlnovka (`Wave`) jako spodní hrana hero a linka pod nadpisy, SVG mapa krajů ze skriptu `scripts/geojson-to-svg.mjs`, lightbox na nativním `<dialog>`. Písma Archivo (s osou `wdth`, nadpisy rozšířené na 118 %) a Manrope přes `next/font`. Barvy jen jako tokeny v `globals.css` (`@theme`).
- **Proč:** Na pokyn uživatele „začni s realizací“. Brief neexistuje, vycházelo se z `AGENTS.md` a této paměti.
- **Dopad:** Stack beze změny. Nová závislost jen framer-motion (je ve stacku). `next.config.ts` má `turbopack.root`, protože v domovské složce leží cizí `package-lock.json`. Ověřeno v prohlížeči: desktop 1160 px, mobil 390 px bez vodorovného přetečení, scrollspy, mobilní menu, rozsvícení krajů, lightbox (šipky, Esc, návrat fokusu), konzole bez chyb. Opravena chyba hydratace u SVG `<title>`. `npm audit` hlásí 5 high zranitelností jen ve vývojovém řetězci eslint-config-next (braces), do produkce nejdou.
- **Soubory:** `package.json`, `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `.gitignore`, `src/**`, `scripts/geojson-to-svg.mjs`, `AGENTS.md` (§5 příkaz a složky, §6 fáze), `.claude/security/STATE.md`

### 2026-10-12: Založení pracovního prostředí
- **Co:** Zkopírovány lokální skills (`web-security-setup`, `web-security-audit`, `web-security-review`, `web-security-memory`, `seo-complete-optimization`, `seo-ai-risk-guard`, `humanize-text-cs`, `web-project-brief`, `project-memory-system`) do `.claude/skills/`. `.agents/skills` je symlink na ně. Založeny `.memory/` a `.claude/security/`. V `project-memory-system` upraveny cesty z `memory/` na `.memory/`. Do `AGENTS.md` doplněny řádek s pořadím čtení a sekce 8 (paměť, skills, bezpečnost, SEO, pravidlo o právních tvrzeních), text jiné session nezměněn. Do `memory.md` převzat stav z `AGENTS.md` a `CLAUDE.md`.
- **Proč:** Na pokyn uživatele, stejná sada jako u ostatních klientských webů, přizpůsobená tomuhle projektu.
- **Dopad:** Izolované, projekt zatím neobsahuje web. Skills vycházejí z verze v projektu UCIK (novější `security-check.sh`), `humanize-text-cs` z globální verze (má `references/patterns.md`).
- **Soubory:** `.claude/skills/*`, `.agents/skills`, `.memory/*`, `AGENTS.md` (jen řádek o pořadí čtení a §8), `.claude/security/*`
