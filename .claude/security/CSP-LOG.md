# Změny CSP

> Každá změna Content-Security-Policy a funkce, která si ji vyžádala.
> Smysl souboru: umět s jistotou odstranit zastaralou položku.

Formát:

```
## vN: RRRR-MM-DD
Změna: direktiva + přidaná/odebraná hodnota
Vyžádáno: konkrétní funkce
Ověřeno: projité stránky, prohlížeče, konzole čistá ano/ne
```

---

## Zatím žádná politika
2026-10-12: Web ještě neexistuje. První záznam (v1) vznikne při prvním nasazení. Výchozí návrh podle skillu `web-security-setup` je `default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; form-action 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; upgrade-insecure-requests`, upraví se podle toho, co Next.js skutečně potřebuje (viz Otevřené položky ve `STATE.md`).

2026-10-19: CSP zatím není nakonfigurovaná. Web je již živý; před Report-Only ověřit základní hlavičky a chování v přihlášeném prohlížeči. Žádné externí skripty, fonty, mapy ani API nejsou plánované.

## Odebráno

Nic.
