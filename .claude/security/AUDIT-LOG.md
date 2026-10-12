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

## Incidenty

Žádné. Pokud nějaký nastane, zapiš: co se pozorovalo, kdy, co bylo skutečně ohroženo, které klíče se rotovaly a co se změnilo, aby se to neopakovalo.
