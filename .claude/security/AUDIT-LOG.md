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
Opraveno: připraveny základní hlavičky Vercelu, `.gitignore`, `security.txt`, CI workflow a lokální kontrolní skript. Změna čeká na vzdálený build.
Zůstává otevřené: živý audit hlaviček po buildu; Vercel MCP nyní vrací 403 pro tým a lokální CLI nemá síťový přístup. Vlastní doména a DNS (DNSSEC, CAA, SPF/DMARC).

## Incidenty

Žádné. Pokud nějaký nastane, zapiš: co se pozorovalo, kdy, co bylo skutečně ohroženo, které klíče se rotovaly a co se změnilo, aby se to neopakovalo.
