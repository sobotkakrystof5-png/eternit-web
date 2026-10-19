# Log auditů a incidentů

> Jen historie. Audity, revize kódu, incidenty, rotace klíčů.
> Dá se z něj poznat, jestli se web za rok zlepšuje, nebo zhoršuje.

Formát:

```
## RRRR-MM-DD: <audit | revize | incident>
Spouštěč: <nasazení / měsíční / hlášení uživatele / alert>
Rozsah: co se kontrolovalo
Výsledek: X prošlo / Y varování / Z chyb, nebo popis
Nálezy: skutečné nálezy
Opraveno: co se změnilo, commit
Zůstává otevřené: co a proč
```

---

## 2026-10-12: založení
Spouštěč: nastavení pracovního prostředí projektu.
Rozsah: jen založení souborů, žádný audit (web ještě neexistuje, není co testovat).
Výsledek: n/a
Nálezy: n/a
Zůstává otevřené: první audit po prvním nasazení (`web-security-audit`, `security-check.sh` proti živé URL).

## 2026-10-19: revize před nasazením
Spouštěč: push a nasazení změn galerie na Vercel.
Rozsah: frontendové zdroje, odkazy, formuláře/API, DOM sinky, externí skripty a řetězce připomínající tajemství v pracovním stromu.
Výsledek: v kontrolovaném zdrojovém kódu nebyl nalezen formulář, API, `dangerouslySetInnerHTML`, `innerHTML`, externí skript ani přihlašovací/platební tok. Aktuální pracovní soubory neobsahují řetězce odpovídající běžným formátům klíčů; úplný sken git historie je přidán do GitHub Actions.
Nálezy: produkční doména není potvrzená a nasazení Vercel je chráněné Vercel Authentication. CSP není nastavena; Report-Only patří do další fáze po ověření základních hlaviček.
Opraveno: základní hlavičky Vercelu, `.gitignore`, `security.txt`, CI workflow a kontrolní skript jsou v produkčním commitu `c10baaa`; oprava obrazových URL je v `1c6a3de`.
Zůstává otevřené: živé potvrzení hlaviček; Vercel MCP vrací 403 a lokální skript skončil kódem 2 bez síťového spojení. Vlastní doména a DNS (DNSSEC, CAA, SPF/DMARC).

## 2026-10-19: audit po nasazení
Spouštěč: produkční nasazení opraveného commitu `1c6a3de`.
Rozsah: obsah stránky, fotografie, `tel:`/`mailto:`, responzivita 390/768/1440 px, klávesnicové menu, mapa a lightbox, konzole a `security.txt`.
Výsledek: nový obsah a `security.txt` se načetly; u kontrolovaného projektu se načetly všechny čtyři fotky. Bez horizontálního přetečení a bez chyb/varování v konzoli. Menu, ovládání mapy, šipky/Escape lightboxu a návrat fokusu fungují.
Nálezy: první nasazení `c10baaa` mělo dvojitě kódované cesty úvodních fotek a zastaralou cestu jedné službové fotky; opraveno a znovu nasazeno v `1c6a3de`. `security-check.sh` z tohoto shellu nedosáhl URL (exit 2), proto skutečné HTTP hlavičky zůstávají neověřené.
Opraveno: cesty v `src/data/projects.ts` a `src/data/site.ts`; fotografie znovu ověřeny v produkci.
Zůstává otevřené: ověřit bezpečnostní hlavičky z prostředí s přístupem k doméně, CSP v Report-Only, vlastní doména a DNS.

## Incidenty

Žádné. Pokud nějaký nastane, zapiš: co se pozorovalo, kdy, co bylo skutečně ohroženo, které klíče se rotovaly a co se změnilo, aby se to neopakovalo.
