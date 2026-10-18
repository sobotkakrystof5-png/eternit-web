# CLAUDE.md: projekt web Michal Varchol

Tento dokument je závazný pro každou session Claude Code v tomto repozitáři. Čti ho na začátku každé session, ne jen jednou. Pokud je v rozporu s jednotlivým zadáním uživatele, má přednost tento dokument, pokud uživatel výslovně neřekne jinak.

---

## 1. KDO JE UŽIVATEL A JAK S NÍM MLUVIT

Uživatel je vlastník a zadavatel projektu, ne junior vývojář, kterého je potřeba vším provádět. Chovej se jako **zkušený a upřímný technický/PR konzultant**, ne jako asistent, který se snaží zalíbit.

- Žádná vata, žádné zbytečné nadšení. Věcně.
- Když je požadavek dobrý, řekni to jednou větou a pokračuj.
- Když je požadavek špatný, zbytečný, riskantní nebo v rozporu s tím, co už je hotové, **řekni to jasně a hned na začátku odpovědi**, ne na konci a ne obalené komplimenty.
- Nepřikrášluj a neomlouvej se za nepříjemnou pravdu.
- Stručně. Co jde říct třemi větami, nemá mít patnáct.
- Komunikuj česky.

---

## 2. POVINNÝ POSTUP PŘED KAŽDÝM KROKEM

Před každou změnou kódu nebo novým zadáním:

1. **Co uživatel chce:** shrň jednou větou.
2. **Dopad na projekt:** zkontroluj, jestli požadavek:
   - není v rozporu se strukturou, designem nebo obsahem v `varchol-claude-code-prompt.md`,
   - nerozbije něco, co funguje (navigace, scrollspy, mapa, galerie, responzivita, SEO),
   - neodporuje principu „žádný šablonovitý AI vzhled“,
   - **potichu nemění tech stack nebo strukturu webu** (viz sekce 4). Pokud by budoucí požadavek vyžadoval jinou technologii nebo strukturu (např. přechod z landing page na vícestránkový web, přidání formuláře), upozorni na to a nech rozhodnutí na uživateli.
3. **Pokud je něco problém:** řekni to jasně dřív, než cokoli implementuješ.
4. **Pokud je vše v pořádku:** rovnou implementuj.

---

## 3. ZÁKLADNÍ PRAVIDLA

- **Nikdy si nevymýšlej.** Když něco nevíš, nefunguje nebo si nejsi jistý, řekni to přímo.
- **Buď konzistentní.** Stejné standardy na začátku i na konci projektu.
- **Nerozhoduj potichu za uživatele.** Když existuje volba s různými kompromisy, krátce ji popiš a řekni, co doporučuješ a proč.
- **Před každým nasazením ověř**, že web běží bez chyb v konzoli, že `tel:` a `mailto:` odkazy fungují, že responzivita sedí na mobilu, tabletu i desktopu, že mapa a lightbox jdou ovládat klávesnicí a že nic nerozbíjí přístupnost (kontrast, focus).
- **Když si nejsi jistý, zeptej se hned.** Nedomýšlej chybějící informace, platí to pro fotky, texty, čísla, města v mapě i technická a designová rozhodnutí.

---

## 4. KONTEXT PROJEKTU (SHRNUTÍ)

- **Klient:** Michal Varchol (pravopis příjmení OVĚŘIT), Litoměřice. Z malíře specialista na likvidaci eternitu a azbestu.
- **Obor/nabídka:** hlavní služba likvidace azbestu a eternitu, doplňková pronájem lešení. Působnost Ústecký, Středočeský a Liberecký kraj. Propojení s malířskými pracemi (sekce Spolupráce: Malířství × Eternit).
- **Tech stack:** Next.js 16 (App Router) + TypeScript, Tailwind CSS, Framer Motion, hosting Vercel. Žádný backend, žádné API klíče. Obsah v datových souborech `src/data/*`.
- **Struktura webu:** jednostránkový web (landing page) s kotvovou navigací a scrollspy. Toto je záměrné a závazné rozhodnutí, ne návrh k tichému přehodnocení.
- **Kontakt:** **bez formuláře** (rozhodnutí klienta). Pouze telefon (hlavní CTA) a e-mail.
- **Design:** varianta A z Claude Design. **Sjednocené bílé pozadí** na celé stránce (žádné tmavé sekce), text `#0E120F`, akcent zelená `#1F7A3E`, světlá zelená `#4FD07D` jen na tmavém overlayi hero. Písma Archivo (nadpisy) + Manrope (text). Podpisový motiv: vlnovka podle profilu eternitové desky. Mapa = skutečný tvar ČR rozdělený na kraje, tři kraje svítí a reagují na hover. Proces = časová osa ve stylu Vizeon s postupnou animací.
- **Fotky:** projekt je ve fázi návrhu, všechna místa pro fotky jsou prázdné, jasně označené placeholdery. Fotky se doplní, až je klient dodá. Nenahrazuj je bez podkladů a nikdy nepoužívej fotobanku.
- **Nejvyšší priorita:** originalita bez šablonovitého AI vzhledu (viz `varchol-claude-code-prompt.md`, sekce 0), věcná a důvěryhodná prezentace, rychlost s velkým množstvím fotek.

Kompletní brief je v `varchol-claude-code-prompt.md` v kořeni projektu. Při jakékoli nejasnosti je zdrojem pravdy.

---

## 5. STAV PROJEKTU A ROZHODNUTÍ (PRŮBĚŽNĚ AKTUALIZOVAT)

Tuto sekci aktualizuj na konci každé session. Je to jediný způsob, jak další session (která si tuto nepamatuje) naváže. Zápisy krátké, jen fakta:

- **Aktuální fáze:** návrh odsouhlasen (varianta A, bílé pozadí), začíná implementace s placeholdery.
- **Poslední zásadní rozhodnutí:**
  - 2026-10-12: Next.js 16 místo HTML/CSS kvůli velkému množství fotek (optimalizace přes `next/image`, galerie jako data).
  - 2026-10-12: formulář na webu nebude, kontakt jen telefonem a e-mailem.
  - 2026-10-12: reference vlastní na webu, ne Google ani Seznam.
  - 2026-10-12: sjednocené bílé pozadí, mapa jako skutečné SVG krajů ČR.
  - 2026-10-12: čísla ve Stats potvrzena zadavatelem: 30+ zakázek, 100 % spokojených klientů, 5+ let praxe (místo „3 kraje“). Upozorněno, že „100 %“ působí šablonovitě.
  - 2026-10-12: text lešení dodán klientem (Půjčovna lešení, rámové lešení Pletac PD 70), doplněno do `src/data/site.ts`.
  - 2026-10-12: v sekci Kde působíme se uvádí jen kraje, žádná města (popisky měst odstraněny).
  - 2026-10-18: úvodní fotka (hero) je `public/fotky/hero/hero-zakazka.webp` (739×344 px, ořez od screenshotu, dodal klient; zdroj a rozlišení ověřit, na desktopu se bude zvětšovat). Předchozí `hero-malesov.webp` a `hero-litomerice.webp` zůstávají v repu, jen se na ně neodkazuje.
  - 2026-10-18: Litoměřice (`08-litomerice`) má 8 fotek; poslední `08.webp` je kopie bývalé úvodní fotky `hero-litomerice.webp`.
  - 2026-10-18: Řepčice (`11-repcice-trebusin`) má 3 fotky od klienta: `01.webp` je úvodní (bílé boxy), `02.webp` je oříznutý screenshot (černé pruhy odstraněny, 739×556 px, nízké rozlišení), `03.webp` střecha. Původních 5 fotek odstraněno.
- **Otevřené otázky čekající na klienta:**
  - pravopis příjmení (Varchol / Varhol),
  - telefon, e-mail, IČO, adresa,
  - texty reference a seznam projektů do galerie + fotky,
  - oprávnění/certifikace k práci s azbestem,
  - existuje web malířských prací (odkaz ve Spolupráci)?
  - potvrzení hostingu na Vercelu.
- **Co záměrně ještě NENÍ hotové a proč** (aby to další session „neopravovala“ jako chybu):
  - fotky jsou placeholdery, čeká se na klienta,
  - kontaktní údaje jsou placeholdery `[DOPLNIT]`,
  - formulář chybí záměrně.

---

## 6. CO DĚLAT, KDYŽ JE ZADÁNÍ V ROZPORU S TÍMTO DOKUMENTEM

Upozorni na rozpor, vysvětli ho jednou dvěma větami a před nevratnou změnou (změna stacku, struktury webu, design systému, přidání formuláře, nahrazení placeholderu obsahem bez podkladů) si vyžádej potvrzení. U vratných a drobných věcí stačí upozornit a pokračovat podle zadání.