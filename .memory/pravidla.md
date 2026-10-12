# PRAVIDLA: jak se vede paměť tohoto projektu

## 1. Základní princip
Každá změna projektu se zapíše do `memory.md` okamžitě, ve stejném tahu. Ne na konci session, ne až po připomenutí.

## 2. Co se zapisuje
Vznik, přejmenování nebo smazání souboru či složky. Změny obsahu, designu a textů. Technická rozhodnutí (stack, knihovna, hosting, integrace). Cokoli, co se zkusilo a nefungovalo. Cokoli záměrně odložené a proč. Otevřené otázky na uživatele nebo klienta.

## 3. Co se nezapisuje
Vyprávění postupu („nejdřív jsem hledal, pak jsem…“). Co je vidět přímo v kódu. Sebechvála a shrnutí typu „vše hotovo a funguje“. Duplikace obsahu z `AGENTS.md` nebo `CLAUDE.md`. Session, ve které se nic nezměnilo.

## 4. Formát záznamu v changelogu
Nejnovější nahoře:
```markdown
### RRRR-MM-DD: Krátký název
- **Co:** jedna dvě věcné věty v minulém čase.
- **Proč:** důvod, nebo „na pokyn uživatele“, pokud jiný není.
- **Dopad:** čeho se to ještě týká (SEO, responzivita, stack, jiné sekce). „Izolované“, pokud ničeho.
- **Soubory:** `cesta/k/souboru`
```
Vždy absolutní datum. Žádná vymyšlená fakta o klientovi ani firmě. Co chybí, jde do „Otevřených otázek“, nikdy do projektu jako předpokládaný fakt.

## 5. Údržba ostatních sekcí memory.md
| Sekce | Aktualizuje se, když |
|---|---|
| Aktuální stav | Změní se fáze nebo je hotový větší celek. Přepisuje se, nepřipisuje. |
| Klíčová rozhodnutí | Padne rozhodnutí, které se nebude přehodnocovat. Jen se přidává. |
| Otevřené otázky | Vznikne otázka pro uživatele nebo klienta. Zodpovězená se maže, odpověď přejde do rozhodnutí nebo changelogu. |
| Záměrně nehotové | Něco se úmyslně vynechá. Chrání to před tím, aby to příští session „opravila“ jako chybu. |

## 6. Kdy sahat na AGENTS.md, CLAUDE.md, index.md
- `AGENTS.md`: když se změní pravidla, stack, struktura, příkazy nebo konvence. Je to jediný zdroj pravidel pro všechny agenty.
- `CLAUDE.md`: jen na výslovné rozhodnutí uživatele, má jen odkazovat na `AGENTS.md`.
- `.memory/index.md`: když vznikne systémový soubor nebo se změní fáze.
- `.memory/pravidla.md`: jen na výslovný pokyn uživatele.

## 7. Začátek a konec session
**Začátek:** přečti `AGENTS.md` → `index.md` → `pravidla.md` → `memory.md`. Každý nový požadavek porovnej s Klíčovými rozhodnutími a Záměrně nehotovým dřív, než něco uděláš. Kolizi hlas hned, ne po implementaci.
**Konec:** ověř, že každá změna je v changelogu, Aktuální stav sedí a žádná zodpovězená otázka nezůstala v Otevřených.

## 8. Ověřuj, nepředpokládej
Když `memory.md` tvrdí něco o souboru, funkci nebo nastavení, na čem se má stavět, ověř nejdřív v projektu, že to platí. Paměť popisuje stav v době zápisu, ne nutně dnešní.

## 9. Pravidla specifická pro tento projekt
- Obor je likvidace eternitu a azbestu. **Žádná právní ani odborná tvrzení bez podkladu od klienta** (oprávnění, certifikace, povolení, postupy podle legislativy, bezpečnostní limity). Chybí-li podklad, jde to do Otevřených otázek.
- Čísla typu „5 let praxe, 30+ projektů“ jsou ze zadání označená jako příklad („Třeba“). Dokud je klient nepotvrdí, nejsou fakt a do webu nepatří.
- Bezpečnostní změny se kromě `memory.md` zapisují i do `.claude/security/` (viz `web-security-memory`).
