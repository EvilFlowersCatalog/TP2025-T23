---
sidebar_position: 1
---

# Analýza vyhľadávania
V predchádzajúcej [evaluácii](https://elvira.digital/TP2024-T5/docs/documentation/ux/analysis/) Elvíry bolo vyhľadávanie označené ako katastrofa použiteľnosti, problém s najväčšou závažnosťou, ktorý je potrebné napraviť čo najskôr. Cieľom tejto analýzy bolo preto identifikovať problémy s použiteľnosťou a celkovým dizajnom vyhľadávania. Analyzovali sme predchádzajúce testovanie Elvíry, analytiku stránky, vykonali a vyhodnotili sme tiež vlastné testovanie. Poznatky z analýzy sme použili pri návrhu riešenia - redizajne vyhľadávania. 


## Analýza predchádzajúceho UX testovania
Na základe existujúcej [analýzy](https://elvira.digital/TP2024-T5/docs/documentation/ux/analysis/) a [testovania](https://elvira.digital/TP2024-T5/docs/documentation/ux/ux_test/) portálu Elvíra sme identifikovali a spísali problémy súvisiace s vyhľadávaním - jeho dizajnom, použiteľnosťou a funkcionalitou. Do zoznamu sme zahrnuli návrhy používateľov na vylepšenia a tiež vlastné postrehy k vyhľadávaniu.

**Pokročilé vyhľadávanie/Advanced search**
- Málo viditeľné, skryté.
- Nepochopenie rozdielu medzi *category* a *feed*.
- Hľadanie knihy cez feed nie je tak intuitívne ako pomocou mena autora alebo názvu knihy.
- *Názov publikácie* je nadbytočný.   

**Zoradenie/Sort**
- Málo viditeľný sort.
- Neintuitívne pomenovania pomocou šípok.
- Existuje možnosť zoradenia podľa dátumu publikovania, no dátum nie je v detaile knihy uvedený. 

**Funkcionalita**
- Nefunguje vyhľadávanie autora priamo, ide to len cez advanced search.
- Pri vyhľadávaní krátkych slov, písmen (napr. "E") sa nič nenašlo.
- Vyhľadávanie funguje inak v Knižnici, Poličke a Skupinách, vyhľadáva sa nad rôznymi subsetmi kníh alebo nad skupinami, čo je pre používateľov mätúce.
- Hľadaný výraz po vyhľadaní zmizne; nie je jasné, pre aký dopyt sa zobrazujú výsledky. 

**Iné**
- Nepochopenie anglických výrazov, nejasné pomenovania. 
- Nie je vidieť celý názov knihy.
- "No results" stránka neposkytuje používateľom pomoc, návrhy, čo robiť ďalej. Umožňuje len vymazať všetky filtre (a hľadaný výraz, o čom používateľa však neinformuje). 

**Návrhy používateľov**
- Pri vyhľadávaní dávať suggestions (napr. názvy kníh, autorov), alebo automaticky už filtrovať a ukazovať výsledky.
- Odstrániť skupiny a dať ich len ako filter.
- Literal search (" "), používanie boolean operátorov (AND, OR).
- Pokročilejšie vyhľadávanie, vyhľadávanie predmetu priamo.


## Analytika
Aby sme lepšie pochopili skutočné správanie používateľov pri používaní Elvíry, predovšetkým vyhľadávania, preštudovali sme údaje z analytiky portálu. Výsledkom sú nasledujúce zistenia:

- **Pokročilé vyhľadávanie** sa takmer nevyužíva. 
    - Najpoužívanejším parametrom v pokročilom vyhľadávaní je **skupina/feed**.
    - Najmenej používaným parametrom je **názov publikácie**.
- **Sort** sa takmer nevyužíva.
- Najčastejšie full-textové vyhľadávanie:
    1. predmety (PPI)
    2. programovacie jazyky (C, Java)
    3. kľúčové slová, téma knihy (programovanie)
    4. konkrétny názov knihy, prípadne jeho časť
    5. autor, najmä priezvisko


## Komparatívne testovanie použiteľnosti
Keďže predchádzajúce UX testovanie sa týkalo celého systému a vyhľadávaniu boli venované len 4 otázky, rozhodli sme sa vykonať vlastné testovanie, ktoré by doplnilo existujúci používateľský výskum. Komparatívne testovanie je metóda používateľského výskumu, kde sa porovnávajú dve alebo viac verzií produktu/dizajnu (rôzne varianty prototypov, komerčné riešenie). Cieľom je identifikovať silné a slabé stránky produktov a tiež pochopiť, ako používatelia interagujú s rôznymi dizajnmi a ako premýšľajú počas vyhľadávania. Porovnávali sme **Elvíru** a **Martinus**: účastníkom testovania boli zadané 3 úlohy, ktoré vykonali na oboch stránkach. Poradie stránok sa menilo pre každého účastníka, aby sme minimalizovali zaujatosť (bias). Zamerali sme sa predovšetkým na otvorené otázky a thinking aloud metódu, ale zaznamenávali sme aj metriky ako task completion rate a task completion time. 

**[Nevyplnený protokol](../../static/pdf/protocol_01.pdf)**.


### Výsledky

Na základe odpovedí účastníkov a ich interakcie s oboma systémami sme spísali silné a slabé stránky vo vyhľadávaní, filtrovaní a zoradení výsledkov.

**Slabé stránky:**
- **Filtre** (Martinus) - P3 si nebol istý, či mu aplikovalo filtre, ktoré zvolil, keďže sa zobrazovali rovnaké výsledky. 
- **Umiestnenie filtrov** (Elvíra) - používateľom prekážalo umiestenie filtrov na pravej strane, bolo to pre nich neintuitívne.
- **Vyhľadávanie podľa autora** (Elvíra) - nefunguje priamo, len cez advanced search.
- **Vyhľadávanie podľa kľúčového slova** (Elvíra) - nedostatočné, používatelia nechápali, na základe čoho im vyhľadalo konkrétne knihy. Pri zadaní anglického výrazu sa nenašli relevantné knihy v slovenčine a naopak.

**Silné stránky:**
- **Auto-suggestions** (Martinus) - dvaja z troch účastníkov túto funkciu aktívne využívali a niektoré úlohy dokončili len s využitím priebežných výsledkov počas vyhľadávania.
- **Kategórie a počet kníh** (Martinus) - používatelia sa rozhodovali o svojom ďalšom postupe aj podľa zobrazených kategórií/tém a počtu kníh.
- **Feeds/skupiny** (Elvíra) - používatelia ocenili možnosť vyhľadávania cez skupiny - predmety.

Testovanie pomohlo lepšie pochopiť, ako používatelia rozmýšľajú nad tým, čo a ako vyhľadávajú, na základe čoho sa rozhodujú pre danú knihu a ako reagujú na irelevantné, prípadne žiadne výsledky. 

**[Vyplnený protokol](../../static/pdf/protocol_02.pdf)**.


## Návrh riešenia
Na základe analýzy navrhujeme nasledovné zmeny a vylepšenia:

**Pokročilé vyhľadávanie/Advanced search**
- Odstrániť parametre *názov publikácie* a *autorove meno*.
- Presunúť filtre na ľavú stranu alebo pod search bar. 
- Pridať k jednotlivým filtrom počet kníh.
- Pridať filtrovanie podľa jazyka. 
- Jasnejšie zobrazovať aplikované filtre.

**Zoradenie/Sort**
- Zmeniť označenie pomocou šípok na jasnejšie pomenovanie možností zoradenia (Dátum publikovania -> Najnovšie/Najstaršie)
- Pridať zoradenie podľa popularity.
- Spraviť viditeľnejšie.
- Pridať dátum publikovania do detailu knihy.

**Funkcionalita**
- Umožniť vyhľadávanie podľa autora priamo.
- Vylepšiť vyhľadávanie cez kľúčové slová.
- Zjednotiť vyhľadávanie v Knižnici, Poličke a Skupinách alebo na každej stránke uviesť, nad čím sa vyhľadáva.
- Zobrazovať vyhľadávaný výraz na stránke s výsledkami.
- Pridať auto-suggestions (knihy, autori, skupiny/kategórie).
- Zmeniť stránku "nič nebolo nájdené", pridať alternatívy alebo "did you mean?".

<br></br>
<br></br>
<br></br>
<br></br>

*Testovanie a analytika sú ovplyvnené počtom dostupných kníh v Elvíre (48 pre FIIT). Pri tomto počte používatelia dokážu nájsť konkrétnu knihu scrollovaním alebo cez skupiny - vyhľadávanie sa preto využíva minimálne. V analytike je tiež jasne vidieť, ktoré slová boli hľadané pri UX testovaniach. Celková analýza a používateľský výskum preto môžu byť mierne skreslené.