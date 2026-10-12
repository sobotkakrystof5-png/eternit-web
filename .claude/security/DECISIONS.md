# Bezpečnostní rozhodnutí

> Jen se přidává. Každý vědomý kompromis s důvodem a datem revize.
> Přijaté riziko bez data revize je zapomenuté riziko.

Formát:

```
## NNN: krátký název
Datum: RRRR-MM-DD
Rozhodnutí: co se rozhodlo
Důvod: proč, konkrétně (co se rozbilo, co by stála alternativa)
Zvažované alternativy: co ještě přicházelo v úvahu a proč neuspělo
Přijaté riziko: co je teď možné, co by jinak nebylo
Revize: RRRR-MM-DD nebo „když <podmínka>“
```

---

## 001: Výchozí stav k datu založení
Datum: 2026-10-12
Rozhodnutí: Bezpečnostní paměť založena před existencí webu. Žádné hlavičky ani CSP zatím nejsou nasazené.
Důvod: Web se staví od nuly (greenfield), politika se tedy dá zavést enforcing od začátku a web se jí přizpůsobí.
Přijaté riziko: Žádné, nic neběží.
Revize: při prvním nasazení (založit záznam o zvoleném způsobu CSP).

## 002: Bez formuláře, bez backendu
Datum: 2026-10-12
Rozhodnutí: Web nebude mít kontaktní formulář ani vlastní API. Kontakt je jen telefon a e-mail.
Důvod: Rozhodnutí klienta (zdroj: `CLAUDE.md` §4 a §5). Zmenšuje to útočnou plochu na minimum: žádný příjem dat, žádná tajemství, žádný spam z formuláře.
Zvažované alternativy: formulář přes serverless funkci a e-mailovou službu (zamítnuto klientem).
Přijaté riziko: veřejně uvedený telefon a e-mail mohou sbírat roboti.
Revize: když klient požádá o formulář. Pak spustit `web-security-review` a doplnit rate limit, captchu a validaci na serveru.
