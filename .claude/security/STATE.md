# Bezpečnostní stav

> Aktuální postoj. Přepisuj volně, historie je v ostatních souborech.
> Čti na začátku každé session, která se dotýká bezpečnosti.

**Poslední aktualizace:** 2026-10-12 (kostra webu v Next.js 16.4, hlavičky zatím nenasazené)

## Projekt

- Web: doména zatím není potvrzená
- Hosting: Vercel (podle `CLAUDE.md`, klient to ještě nepotvrdil)
- Framework: Next.js 16, App Router, TypeScript, Tailwind, Framer Motion
- Repo: zatím nezaloženo samostatně, soukromé: ano (doporučeno)
- Soubor s hlavičkami: zatím nezvoleno, viz Otevřené položky

## Model hrozeb

Co web skutečně zpracovává, a tedy na čem záleží:

- [ ] Kontaktní formulář: **ne**, rozhodnutí klienta, žádný příjem dat od návštěvníků
- [ ] Nahrávání souborů: ne
- [ ] Přihlášení, účty: ne
- [ ] Platby: ne
- [ ] Osobní data návštěvníků: ne (bez formuláře; záleží na tom, zda přibude analytika, viz Otevřené položky)
- [x] Statický obsah: ano, hlavní rizika jsou pozměnění obsahu a reputace
- [x] Veřejný telefon a e-mail: ano, sběr robotů a spam (kontakt je jediné CTA)
- [x] Právně citlivá tvrzení (azbest): chybný nebo podvržený údaj o oprávnění je pro klienta reálné riziko

Realistický útočník: automatické skenery a boty na sběr kontaktů. Nejhorší případ pro klienta: podvržený obsah na jeho doméně (např. pozměněné telefonní číslo), případně zneužití domény pro phishing, pokud nebude nastavené DNS pro e-mail.

## Hlavičky nasazené

Nic zatím není nasazeno, web neexistuje.

| Hlavička | Stav | Poznámka |
|---|---|---|
| Strict-Transport-Security | ⏳ plán | `max-age=63072000; includeSubDomains`, bez `preload` |
| Content-Security-Policy | ⏳ plán | greenfield, viz sekce CSP |
| X-Content-Type-Options | ⏳ plán | nosniff |
| X-Frame-Options | ⏳ plán | DENY |
| Referrer-Policy | ⏳ plán | strict-origin-when-cross-origin |
| Permissions-Policy | ⏳ plán | zakázat vše, co web nepoužívá (kamera, mikrofon, geolokace…) |
| Cross-Origin-Opener-Policy | ⏳ plán | same-origin |
| Cross-Origin-Resource-Policy | ⏳ plán | same-origin |
| X-Powered-By odstraněno | ✅ v kódu | `poweredByHeader: false` v `next.config.ts` (2026-10-12) |

## CSP

Verze: zatím žádná (viz `CSP-LOG.md`)
Režim: plán je enforcing od začátku (greenfield). Web se staví tak, aby politice vyhovoval.
Třetí strany, které by měly být potřeba: **žádné plánované.** Mapa ČR je vlastní SVG, obrázky přes `next/image`. Písma Archivo a Manrope jen přes `next/font` (samohostovaná), ne přes Google Fonts CDN. Jakýkoli externí embed (mapa Google či Mapy.cz v Kontaktu, analytika, widget) znamená novou položku v CSP a záznam v `CSP-LOG.md`.
Známé výjimky: očekává se `style-src 'unsafe-inline'` (Next.js a Framer Motion vkládají styly za běhu), zapsat do `DECISIONS.md`, až se skutečně nasadí.

## DNS a e-mail

| Položka | Stav |
|---|---|
| DNSSEC | ❓ neznámo, závisí na registrátorovi domény |
| CAA | ❓ neznámo |
| SPF | ❓ neznámo, e-mail klienta pravděpodobně existuje, ověřit před nastavením `-all` |
| DKIM | ❓ neznámo |
| DMARC | ❓ neznámo |

## Aplikace

- Validace na serveru: n/a (žádný formulář ani API)
- Supabase RLS: n/a
- Rate limiting: n/a
- Captcha: n/a
- Tajemství: web žádná nepotřebuje (bez API klíčů). Pokud by přibyla, jen v env proměnných hostingu, nikdy v kódu.
- Zálohy: repo je zdroj pravdy, fotky a texty klienta mít i mimo repo (uložit kam: doplnit)

## Otevřené položky

| Položka | Proč na tom záleží | Vlastník | Termín |
|---|---|---|---|
| Zvolit způsob CSP: nonce přes `middleware.ts` vs. statická CSP v `next.config` | Next.js typicky vkládá inline skripty. Bez nonce nebo `unsafe-inline` se může web nespustit, nonce zase nutí k dynamickému vykreslování. Ověřit v report-only na buildu. | já | při inicializaci projektu |
| Potvrdit hosting a doménu | Určuje, kde hlavičky žijí (`vercel.json` / `next.config` / `middleware.ts`) | klient | — |
| Mapa v Kontaktu: vlastní odkaz, nebo embed? | Embed (Google, Mapy.cz) vyžaduje `frame-src` | já + klient | před návrhem Kontaktu |
| Analytika ano či ne | Přidá třetí stranu do CSP a otázku souhlasu | klient | — |
| `.gitignore`, `security.txt`, CI workflow | Základ ze skillu `web-security-setup`, kroky 5 a 7 | já | při inicializaci repa |
| HSTS preload | Až po měsíci bezproblémového provozu na https | já | po spuštění |
| DNS (DNSSEC, CAA, SPF/DMARC) | Bez nich může kdokoli posílat poštu z domény klienta | klient / registrátor | po získání přístupu k DNS |
| E-mailová adresa klienta | Veřejně uvedený e-mail láká spam, zvážit formu zobrazení (ne obfuskace na úkor přístupnosti) | já + klient | — |

## Neměnit bez ptaní

- Bez formuláře je rozhodnutí klienta (`CLAUDE.md` §4). Žádný příjem dat od návštěvníků se nepřidává potichu.
- Žádná třetí strana do CSP bez záznamu v `CSP-LOG.md` a důvodu.
