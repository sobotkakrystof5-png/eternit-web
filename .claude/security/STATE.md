# Bezpečnostní stav

> Aktuální postoj. Přepisuj volně, historie je v ostatních souborech.
> Čti na začátku každé session, která se dotýká bezpečnosti.

**Poslední aktualizace:** 2026-10-19 (hlavičky v produkčním commitu `1c6a3de`; živý audit z lokálního prostředí blokuje síť)

## Projekt

- Web: `https://eternit-web-six.vercel.app/`; vlastní doména zatím není potvrzená
- Hosting: Vercel, uživatelem potvrzeno 2026-10-19
- Framework: Next.js 16, App Router, TypeScript, Tailwind, Framer Motion
- Repo: `sobotkakrystof5-png/eternit-web`, veřejné
- Soubor s hlavičkami: `vercel.json`
- Vercel Authentication: deployment URL je chráněná; po připojení vlastní domény ověřit veřejnou dostupnost.

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

Hlavičky jsou nakonfigurované v `vercel.json` a soubor je součástí produkčního commitu `1c6a3de`. Lokální `security-check.sh` skončil kódem 2 bez spojení na doménu, proto hodnoty hlaviček nejsou nezávisle potvrzené v HTTP odpovědi. CSP záměrně není nastavena; další krok je Report-Only.

| Hlavička | Stav | Poznámka |
|---|---|---|
| Strict-Transport-Security | 🟡 v produkční konfiguraci | `max-age=63072000; includeSubDomains`, bez `preload`; živě neověřeno |
| Content-Security-Policy | ⏳ otevřeno | Nejprve ověřit Report-Only; Next.js 16 CSP s nonce může změnit statické renderování |
| X-Content-Type-Options | 🟡 v produkční konfiguraci | nosniff; živě neověřeno |
| X-Frame-Options | 🟡 v produkční konfiguraci | DENY; živě neověřeno |
| Referrer-Policy | 🟡 v produkční konfiguraci | strict-origin-when-cross-origin; živě neověřeno |
| Permissions-Policy | 🟡 v produkční konfiguraci | Zakázané nepoužívané funkce; fullscreen povolený; živě neověřeno |
| Cross-Origin-Opener-Policy | 🟡 v produkční konfiguraci | same-origin; živě neověřeno |
| Cross-Origin-Resource-Policy | 🟡 v produkční konfiguraci | same-origin; živě neověřeno |
| X-Powered-By odstraněno | ✅ v kódu | `poweredByHeader: false` v `next.config.ts` (2026-10-12) |

## CSP

Verze: zatím žádná (viz `CSP-LOG.md`)
Režim: živý web; nasadit postupně v Report-Only po ověření základních hlaviček a chování v prohlížeči.
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
| Ověřit CSP v Report-Only a zvolit finální režim | Next.js 16 používá `proxy.ts` pro per-request nonce; nonce může změnit statické vykreslování. | já | po nasazení základních hlaviček |
| Potvrdit vlastní doménu | Deployment URL je chráněná Vercel Authentication; nutné pro veřejné spuštění a SEO. | klient | — |
| Mapa v Kontaktu: vlastní odkaz, nebo embed? | Embed (Google, Mapy.cz) vyžaduje `frame-src` | já + klient | před návrhem Kontaktu |
| Analytika ano či ne | Přidá třetí stranu do CSP a otázku souhlasu | klient | — |
| Zpřístupnit `security.txt` na veřejné doméně | Soubor je v repozitáři, ale Vercel Authentication může blokovat veřejný přístup. | já | po připojení vlastní domény |
| HSTS preload | Až po měsíci bezproblémového provozu na https | já | po spuštění |
| DNS (DNSSEC, CAA, SPF/DMARC) | Bez nich může kdokoli posílat poštu z domény klienta | klient / registrátor | po získání přístupu k DNS |
| E-mailová adresa klienta | Veřejně uvedený e-mail láká spam, zvážit formu zobrazení (ne obfuskace na úkor přístupnosti) | já + klient | — |

## Neměnit bez ptaní

- Bez formuláře je rozhodnutí klienta (`CLAUDE.md` §4). Žádný příjem dat od návštěvníků se nepřidává potichu.
- Žádná třetí strana do CSP bez záznamu v `CSP-LOG.md` a důvodu.
