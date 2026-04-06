---
sidebar_position: 4
---

import ScreensCarousel from '@site/src/components/ScreensCarousel';

# 📄 PDF Viewer
Keďže veľa navrhovaných inteligentných funkcií sa týkalo PDF čítačky, rozhodli sme sa preskúmať túto časť Elviry, zhodnotiť súčasný dizajn, použiteľnosť, identifikovať problémy a navrhnúť inteligentné funkcie tak, aby zlepšili používateľský zážitok pri čítaní kníh, prípadne tiež vylepšili samotnú čítačku.

## Usability testing, card sorting a analýza
Testovanie použiteľnosti PDF čítačky prebiehalo spolu s [user interview a concept testingom](./intelligent_features#user-interviews-a-concept-testing) inteligentných funkcií. Testovania sa zúčastnili 3 používatelia. Testovali sme dve verzie PDF čítačky - produkciu a development, keďže boli významne odlišné. Účastníci testovania dostali 13 rozličných úloh, ktoré pokrývali všetky funkcie PDF čítačky, pričom nie všetky úlohy sa dali vykonať v oboch verziách. Využili sme thinking aloud metódu, participanti počas úloh komentovali svoje myšlienky, pocity a problémy, ktoré sa vyskytli. Na záver sme použili card sorting metódu - používatelia mali ohodnotiť existujúce a navrhované funkcie PDF čítačky podľa toho, ako sú pre nich dôležité a užitočné.

**[Protokol](../../static/pdf/protocol_pdf_01.pdf)**.

PDF viewer bol tiež súčasťou predchádzajúceho [testovania](https://elvira.digital/TP2024-T5/docs/documentation/ux/ux_test/). Výsledky oboch testovaní sme analyzovali a spísali hlavné problémy, ktoré sme následne ohodnotili podľa [Severity Ratings for Usability Problems](https://www.nngroup.com/articles/how-to-rate-the-severity-of-usability-problems/). Okrem usability problémov sme identifikovali aj technické nedostatky a nefunkčné časti, ktoré tiež negatívne ovplyvňujú používateľský zážitok. V tabuľke preto rozlišujeme medzi UX a technickými problémami, pričom sme ohodnotili obe kategórie, keďže technické problémy väčšinou znemožňujú dokončenie úloh.

| **Rating** | **Description**                                                                    |
|------------|------------------------------------------------------------------------------------|
| **0**      | I don't agree that this is a usability problem at all                              |
| **1**      | Cosmetic problem only: need not be fixed unless extra time is available on project |
| **2**      | Minor usability problem: fixing this should be given low priority                  |
| **3**      | Major usability problem: important to fix, so should be given high priority        |
| **4**      | Usability catastrophe: imperative to fix this before product can be released       |

<br></br>
**Zoznam problémov**

| **Závažnosť** | Problém                                                                                                | Kategória    |
|--------------|---------------------------------------------------------------------------------------------------------|--------------|
|        **4** | Nefunkčné vyhľadávanie, nesprávne fungujúce vyhľadávanie – zlá časť textu, nesprávne zvýraznenie slova. | Technická    |
|        **3** | Biely text na bielom pozadí pri vyhľadávaní, v zdieľaní.                                                | UX           |
|        **3** | Problémy s kreslením, miestami vôbec nefunkčné.                                                         | Technická    |
|        **3** | Rušivé notifikácie pri kreslení, blokujú kreslenie.                                                     | Technická/UX |
|        **3** | Nesprávne fungujúci výber textu, preskakujú sa vety, riadky, odseky.                                    | Technická    |
|        **2** | Vizuálne nekonzistentné a rušivé okná (obsah, citácia).                                                 | UX           |
|        **2** | Rušivý spodný bar, aj po zmenšení narúša stránku, komplikuje čítanie knihy.                             | UX           |
|        **2** | Dlhé načítavanie pri vyhľadávaní, nie je jasné, či vyhľadávanie prebieha.                               | Technická/UX |
|        **2** | Pri kreslení náročné mazanie, chýbajúce šípky späť.                                                     | UX           |
|        **2** | Vizuálna nekonzistencia, nevhodne zvolené farby, prekrývajúce sa ikony.                                 | UX           |
|        **2** | Zdieľanie cez QR kód, neintuitívne, nepochopenie životnosti.                                            | UX           |
|        **2** | Problémy s priblížením dokumentu, nefungujúce priblíženie cez touchpad a klávesové skratky.             | Technická    |
|        **1** | Nepochopenie rozdielu medzi zavrieť a domov.                                                            | UX           |
|        **1** | Nedostatok štýlov citácií.                                                                              | UX           |
|        **1** | Nesprávne fungujúca funkcia tlačenia.                                                                   | Technická/UX |
|        **0** | Nepochopené a zbytočné informácie o generovaní dokumentu, metadáta.                                     | UX           |
|        **0** | Rôzne ikony v sidebare pre rôzne knihy.                                                                 | UX           |

## Low-fidelity prototyp

Keďže jedným z hlavných problémov dizajnu bolo umiestnenie a veľkosť spodného baru (obsahu so stranami), rozhodli sme sa navrhnúť dve alternatívy. Prvé riešenie spočívalo v presune obsahu so stranami do existujúceho sidebaru, druhé riešenie bolo presunúť celý sidebar do hornej časti obrazovky a rovnako zlúčiť spodný bar s obsahom. Takéto riešenie kopíruje rozloženie využívané v PDF čítačkách v prehliadačoch (Chrome, Edge, ...). Tretím riešením, ktoré bolo prototypované až v high-fidelity, bolo zmenšenie spodného baru.

export const lowfi_path = "/TP2025-T23/ux/pdf/lowfi/"

export const lowfi_slides = [
  {
    title: "Redizajn 2 - obsah v sidebare",
    image: lowfi_path + "1.png",
  },
  {
    title: "Redizajn 2 - obsah:strany",
    image: lowfi_path + "1_TOC_1.1.png",
  },
  {
    title: "Redizajn 2 - obsah:kapitoly",
    image: lowfi_path + "1_TOC_1.2.png",
  },
  {
    title: "Redizajn 3 - sidebar v hornej časti obrazovky",
    image: lowfi_path + "2.png",
  },
  {
    title: "Redizajn 3 - obsah",
    image: lowfi_path + "2_TOC.png",
  },
]

<ScreensCarousel slides={lowfi_slides} />

## High-fidelity prototyp

Finálny high-fidelity prototyp môžete nájsť v záložke **[Prototyp](/prototype)**.

Vybrané high-fidelity obrazovky:

export const highfi_path = "/TP2025-T23/ux/pdf/highfi/"

export const highfi_slides = [
  {
    title: "Redizajn 1",
    image: highfi_path + "01.png",
    text: "Zo sidebaru sme odstránili funkciu Tlačiť, Zatvoriť a Pomoc."
  },
  {
    title: "Redizajn 1 - zmenšený spodný bar",
    image: highfi_path + "01_collapsed.png",
  },
  {
    title: "Redizajn 1 - obsah",
    image: highfi_path + "01_toc.png",
    text: "Obsah sme presunuli zo samostatného pop-up okna do sidebaru, zmenili sme spôsob rozbalenia podkapitol."
  },
  {
    title: "Redizajn 1 - kreslenie",
    image: highfi_path + "01_draw.png",
    text: "Pridali sme šípky späť a dopredu a zmenili orientáciu elementu s nástrojmi kreslenia."
  },
  {
    title: "Redizajn 1 - citácia",
    image: highfi_path + "01_cite.png",
    text: "Pridali sme viac štýlov citácií, zmenili dizajn okna a spôsob kopírovania citácie. Pri otvorení citácie sa ako prvý zobrazí plain text."
  },
  {
    title: "Redizajn 2 - obsah:kapitoly",
    image: highfi_path + "02.png",
  },
  {
    title: "Redizajn 2 - obsah:strany",
    image: highfi_path + "03.png",
  },
  {
    title: "Redizajn 3 - obsah:kapitoly",
    image: highfi_path + "04.png",
  },
  {
    title: "Redizajn 3 - obsah:strany",
    image: highfi_path + "05.png",
  },
]

<ScreensCarousel slides={highfi_slides} />

