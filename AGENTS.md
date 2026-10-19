# AGENTS.md: projekt web Michal Varchol

Tento dokument je **jediný zdroj pravdy** pro všechny AI agenty v tomto repozitáři (Codex, Claude Code a další). `CLAUDE.md` na něj pouze odkazuje. Čti ho na začátku každé session. Pokud je v rozporu s jednotlivým zadáním uživatele, má přednost tento dokument, pokud uživatel výslovně neřekne jinak.

Kompletní zadání webu je v `varchol-claude-code-prompt.md` v kořeni projektu (platí pro všechny agenty, název souboru je historický). Při jakékoli nejasnosti je zdrojem pravdy.

**Pořadí čtení na začátku session:** `AGENTS.md` (tento) → `.memory/index.md` → `.memory/pravidla.md` → `.memory/memory.md`. Paměťový systém, lokální skills, bezpečnost a SEO jsou v sekci 8.

---

## 1. KDO JE UŽIVATEL A JAK S NÍM MLUVIT

Uživatel je vlastník a zadavatel projektu, ne junior vývojář. Chovej se jako **zkušený a upřímný technický/PR konzultant**, ne jako asistent, který se snaží zalíbit.

- Komunikuj česky, věcně, bez vaty a zbytečného nadšení.
- Dobrý požadavek potvrď jednou větou a pokračuj.
- Špatný, zbytečný, riskantní nebo konfliktní požadavek **pojmenuj hned na začátku odpovědi**, ne na konci a ne obalený komplimenty.
- Nepřikrášluj a neomlouvej se za nepříjemnou pravdu.
- Stručně. Co jde říct třemi větami, nemá mít patnáct.

---

## 2. POVINNÝ POSTUP PŘED KAŽDÝM KROKEM

1. **Co uživatel chce:** shrň jednou větou.
2. **Dopad na projekt:** zkontroluj, jestli požadavek:
   - není v rozporu se strukturou, designem nebo obsahem v `varchol-claude-code-prompt.md`,
   - nerozbije něco, co funguje (navigace, scrollspy, mapa, galerie, lightbox, responzivita, SEO),
   - neodporuje principu „žádný šablonovitý AI vzhled“ (brief, sekce 0),
   - **potichu nemění tech stack nebo strukturu webu** (sekce 4). Přechod na vícestránkový web, přidání formuláře, backendu nebo nové knihovny = upozornit a nechat rozhodnout uživatele.
3. **Pokud je něco problém:** řekni to dřív, než cokoli implementuješ.
4. **Pokud je vše v pořádku:** rovnou implementuj.

---

## 3. ZÁKLADNÍ PRAVIDLA

- **Nikdy si nevymýšlej.** Fakta o klientovi, čísla, ceny, města, oprávnění: jen z briefu nebo od uživatele. Jinak placeholder `[DOPLNIT]`.
- **Buď konzistentní.** Stejné standardy na začátku i na konci.
- **Nerozhoduj potichu za uživatele.** U volby s kompromisy krátce popiš možnosti a doporuč jednu.
- **Když si nejsi jistý, zeptej se.** Platí pro fotky, texty, technická i designová rozhodnutí.
- **Před každým nasazením ověř:** `npm run build` a `npm run lint` bez chyb, žádné chyby v konzoli, fungující `tel:` a `mailto:` odkazy, responzivita (mobil, tablet, desktop), ovládání mapy, menu a lightboxu klávesnicí, kontrast WCAG AA, `prefers-reduced-motion`.

---

## 4. KONTEXT PROJEKTU (SHRNUTÍ)

- **Klient:** Michal Varchol (pravopis příjmení OVĚŘIT), Litoměřice. Z malíře specialista na likvidaci eternitu a azbestu.
- **Nabídka:** hlavní služba likvidace azbestu a eternitu, doplňková pronájem lešení. Působnost Ústecký, Středočeský a Liberecký kraj. Sekce Spolupráce: Malířské práce × Eternit.
- **Tech stack:** Next.js 16 (App Router) + TypeScript, Tailwind CSS, Framer Motion, hosting Vercel. Žádný backend, žádné API klíče.
- **Struktura:** jednostránkový web (landing page), kotvy `#sluzby`, `#kde-pusobime`, `#proces`, `#reference`, `#galerie`, `#spoluprace`, `#kontakt`, scrollspy. Závazné rozhodnutí.
- **Kontakt:** **bez formuláře** (rozhodnutí klienta). Jen telefon (hlavní CTA) a e-mail.
- **Design:** varianta A z Claude Design. Sjednocené **bílé pozadí** na celé stránce, text `#0E120F`, zelená `#5ED33F` (přesný odstín z dodaného obrázku) na plochách, liniích a v hero; text a obrysy `#317C1D` (kontrast 5,2:1 na bílé). Písma Archivo + Manrope. Motiv: vlnovka podle profilu eternitové desky. Mapa = skutečné SVG krajů ČR, tři kraje svítí a reagují na hover. Proces = časová osa ve stylu Vizeon s postupnou animací.
- **Fotky:** podklady jsou v `public/fotky`, projekty mají oddělené `HERO - galerie` a `galerie`. **Nikdy fotobanka**.
- **Priorita:** originalita bez AI šablony, důvěryhodnost, rychlost i s velkým množstvím fotek.

---

## 5. TECHNICKÉ KONVENCE

### Příkazy
- `npm run dev`: vývojový server
- `npm run build`: produkční build (musí projít před každým commitem do main)
- `npm run lint`: lint
- `node scripts/geojson-to-svg.mjs <kraje.json>`: jednorázové vygenerování mapy krajů do `src/data/czMap.ts`. Zdroj GeoJSON: github.com/siwekm/czech-geojson (`kraje.json`, data ČÚZK, CC BY 4.0), soubor se do repa neukládá.

### Struktura složek
```
src/
  app/            layout.tsx, page.tsx, sitemap.ts, robots.ts
  components/
    sections/     Hero, Stats, Services, RegionsMap, Process, References, Gallery, Collaboration, Contact
    ui/           Photo (placeholder / next/image), Wave (vlnovka), Lightbox, Header, Footer, CallButton, SectionHeading, MotionProvider
  data/           site.ts, projects.ts, references.ts, process.ts, regions.ts, czMap.ts
public/
  fotky/
    projekty/<slug>/  fotky jednotlivých zakázek (slug viz src/data/projects.ts)
    hero/             fotky do hero sekce
    leseni/           fotky k pronájmu lešení
  Všechny fotky jsou .webp; `src/data/projects.ts` výslovně mapuje úvodní fotku v `HERO - galerie` a ostatní fotky v `galerie`.
scripts/          převod GeoJSON → SVG
```

### Pravidla kódu
- TypeScript strict, žádné `any`.
- Obsah (texty, kontakty, projekty, reference) patří do `src/data/*`, ne natvrdo do komponent. Telefon a e-mail jen v `site.ts`.
- Obrázky výhradně přes komponentu `Photo` (`next/image`), s pevným `aspect-ratio` a správným `sizes`.
- Barvy a písma jen přes design tokeny v Tailwind konfiguraci, žádné náhodné hex hodnoty v komponentách.
- Animace jen ty, které jsou v briefu (odkrytí H1, čísla, rozsvícení krajů, osa procesu, spojení wordmarků). Každá respektuje `prefers-reduced-motion`.
- Žádné nové závislosti bez souhlasu uživatele (výjimka: dev nástroj pro jednorázový převod mapy).
- Mapová knihovna se nepoužívá, mapa je vlastní SVG komponenta.
- Komentáře česky nebo anglicky, ale konzistentně v rámci souboru.

### Git
- Malé commity s jasným popisem (česky), jeden commit = jedna logická změna.
- Neprovádět force push, nemazat větve ani nenasazovat do produkce bez výslovného pokynu.

---

## 6. STAV PROJEKTU A ROZHODNUTÍ (PRŮBĚŽNĚ AKTUALIZOVAT)

Aktualizuj na konci každé session, bez ohledu na to, který agent pracoval. Další session si předchozí nepamatuje. Zápisy krátké, jen fakta, s datem a označením agenta (např. `[Codex]`, `[Claude]`).

- **Aktuální fáze:** fotky, reference, statistiky a kontakty doplněny a nasazeny na Vercel 2026-10-19; oprava fotocest nasazena v `1c6a3de`. Zbývá pravopis jména a vlastní doména. Detail v `.memory/memory.md`.
- **Poslední zásadní rozhodnutí:**
  - 2026-10-12: Next.js 16 místo HTML/CSS kvůli velkému množství fotek.
  - 2026-10-12: formulář na webu nebude, kontakt jen telefonem a e-mailem.
  - 2026-10-12: reference vlastní na webu, ne Google ani Seznam.
  - 2026-10-12: sjednocené bílé pozadí, mapa jako skutečné SVG krajů ČR.
  - 2026-10-12: AGENTS.md je jediný zdroj pravidel, CLAUDE.md na něj odkazuje.
  - 2026-10-19: uživatel potvrdil statistiky 30+ zakázek, 100 % spokojených klientů a 3+ roky praxe; potvrdil také reference a kontaktní údaje.
  - 2026-10-19: sekce O nás byla odstraněna; navigace odpovídá aktuálním sekcím.
- **Otevřené otázky čekající na klienta:**
  - pravopis příjmení (Varchol / Varhol),
  - oprávnění/certifikace k práci s azbestem,
  - odkaz na web malířských prací,
  - doména webu.
- **Co záměrně ještě NENÍ hotové** (neopravovat jako chybu):
  - formulář chybí záměrně.

---

## 7. KDYŽ JE ZADÁNÍ V ROZPORU S TÍMTO DOKUMENTEM

Upozorni na rozpor, vysvětli ho jednou dvěma větami a před nevratnou změnou (stack, struktura, design systém, formulář, nahrazení placeholderu bez podkladů) si vyžádej potvrzení. U drobných vratných věcí stačí upozornit a pokračovat.

---

## 8. PAMĚŤ, LOKÁLNÍ SKILLS, BEZPEČNOST, SEO

### Paměť (`.memory/`)
- `.memory/index.md` je mapa, `.memory/pravidla.md` říká, jak se paměť vede, `.memory/memory.md` je živý stav (aktuální fáze, klíčová rozhodnutí, otevřené otázky, záměrně nehotové, changelog).
- **Každou změnu projektu zapiš do `.memory/memory.md` ve stejném kroku**, ne na konci session. Formát záznamu je v `pravidla.md`.
- Sekce 6 výše je jen stručné shrnutí. Při rozporu platí `.memory/memory.md`, rozpor nahlas uživateli.
- Před novým požadavkem ho porovnej s „Klíčovými rozhodnutími“ a „Záměrně nehotovým“ v `memory.md`.

### Právní a odborná tvrzení o azbestu
Žádná tvrzení o oprávněních, certifikacích, povoleních, postupech podle legislativy ani bezpečnostních limitech bez podkladu od klienta. Údaje typu „5 let praxe, 30+ projektů“ jsou v poznámkách označené jako příklad („Třeba“) a do potvrzení klientem nejsou fakt. Chybí-li podklad, `[DOPLNIT]` a otázka do `.memory/memory.md`.

### Lokální skills
Zdroj pravdy je `.claude/skills/`, `.agents/skills` je symlink na ni (Codex a další nástroje čtou totéž).

| Skill | Kdy použít |
|---|---|
| `humanize-text-cs` | Psaní a revize jakéhokoli českého textu na web. Povinné pro finální texty. |
| `seo-complete-optimization` | Každý úkol dotýkající se SEO (meta, struktura, schema, copy). Rámec A až O a „Definition of Done“. |
| `seo-ai-risk-guard` | Společně s předchozím, web vzniká přes AI. Hlídá kódová a infrastrukturní rizika SEO. |
| `web-project-brief` | Vytvoření nebo cílená úprava briefu. Existuje-li, upravuj ho cíleně, negeneruj znovu ze šablony. |
| `project-memory-system` | Jen když se má měnit sám paměťový systém. Ne pro běžnou práci. |
| `web-security-setup` | Bezpečnostní základ při inicializaci a nasazení (hlavičky pro Next.js na Vercelu, `security.txt`, DNS, CI). |
| `web-security-review` | Revize kódu před nasazením. Web nemá formulář ani backend, použij hlavně na XSS přes JS, odkazy a skripty třetích stran. |
| `web-security-audit` | Ověření zabezpečení živé URL po každém nasazení. |
| `web-security-memory` | Vedení `.claude/security/`, odděleně od `.memory/`. |

Globálně jsou k dispozici i další SEO skills, např. `seo-collabim-keyword-loop` (ověření klíčových slov krok za krokem) a `seo-local`.

### Bezpečnost
Stav je v `.claude/security/STATE.md`. Před změnou čehokoli bezpečnostního (hlavičky, CSP, nová třetí strana, env proměnné) ho přečti, po změně zapiš do správného souboru ve stejném kroku (`STATE.md`, `DECISIONS.md`, `CSP-LOG.md`, `AUDIT-LOG.md`). `script-src` nikdy nedostane `unsafe-inline` ani `unsafe-eval`, výjimka jen přes nonce. Žádná třetí strana (analytika, embed mapy, widget, CDN) bez záznamu v `CSP-LOG.md`. Žádný `.env` ani klíč v repu. Po nasazení `web-security-audit` a zápis do `AUDIT-LOG.md`.

### SEO
Úkoly dotýkající se SEO jdou přes `seo-complete-optimization`. U jednostránkového webu: jeden `<h1>`, unikátní `title` a `description`, `LocalBusiness` nebo `Organization` schema jen z ověřených údajů, `sitemap.ts` a `robots.ts`. Klíčová slova se nevymýšlejí, viz otevřené otázky v `.memory/memory.md`.
