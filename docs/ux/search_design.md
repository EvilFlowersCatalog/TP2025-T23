---
sidebar_position: 2
---

import ScreensCarousel from '@site/src/components/ScreensCarousel';


# 🔍 Návrh vyhľadávania

## User scenarios a user flows
Ako prvé sme vytvorili user scenarios a user flows pre funkcie vyhľadávania, ktoré je nutné upraviť alebo ktoré sme sa rozhodli pridať.

**Auto-suggestions**
![Auto-suggestions](/ux/search/user_research/01_auto_suggestions.png)

**Výsledky vyhľadávania - autor**
![Authors as results](/ux/search/user_research/02_authors.png)

**Výsledky vyhľadávania - feed/kategória**
![Feeds/categories as results](/ux/search/user_research/03_feeds_categories.png)

**Pokročilé vyhľadávanie/filter**
![Pokročilé vyhľadávanie/filter](/ux/search/user_research/04_filter.png)

**Did you mean?**
![Did you mean?](/ux/search/user_research/05_did_you_mean.png)

## Low-fidelity prototyp

export const lowfi_path = "/TP2025-T23/ux/search/lowfi/"

export const lowfi_slides = [
  {
    title: "Pokročilé vyhľadávanie/filter",
    image: lowfi_path + "01_advanced_search.png",
    text: "Filter sme presunuli na ľavú stranu, pridali možnosti filtrovania pomocou roku vydania a jazyka. Zmenili sme spôsob filtrovania pomocou checkboxov, pri každej možnosti (language/feed/category) je tiež zobrazený počet kníh v danej kategórii. Pri vyššom počte možností sa zvyšné dajú rozbaliť a zabaliť podľa potreby."
  },
  {
    title: "Pokročilé vyhľadávanie/filter + collapsed sidebar",
    image: lowfi_path + "01_advanced_search_collapsed.png",
    text: "Pri menších obrazovkách vznikal problém, kedy hlavný sidebar a filter zaberali väčšinu obrazovky. Používateľom tiež prekážalo mať neustále otvorený sidebar, ktorý využívali minimálne. Preto sme navrhli collapsible sidebar."
  },
  {
    title: "Auto-suggestions",
    image: lowfi_path + "02_auto_suggestions.png",
    text: "Používatelia pri vyhľadávaní dostávajú okamžitú odozvu na vyhľadávaný výraz prostredníctvom auto-suggestions (priebežných výsledkov)."
  },
  {
    title: "Výsledky vyhľadávania - knihy",
    image: lowfi_path + "03_search_result_book.png",
    text: "Na stránku s výsledkami sme pridali vyhľadávaný výraz."
  },
  {
    title: "Výsledky vyhľadávania - author/feed/category",
    image: lowfi_path + "03_search_result_author_feed_category.png",
    text: "Výsledkom vyhľadávania môže byť tiež autor, skupina (feed) alebo kategória. Ich zobrazením umožňujeme používateľom jednoduchšie nájsť konkrétneho autora alebo oblasť, ktorá ich zaujíma, bez nutnosti manuálne aplikovať filtre a prehľadávať všetky výsledky."
  },
  {
    title: "Author/feed/category page",
    image: lowfi_path + "07_author_feed_category_page.png",
    text: "Po kliknutí na autora, feed alebo kategóriu je používateľ presmerovaný na samostatnú stránku s daným výsledkom."
  },
  {
    title: "Žiadne výsledky + did you mean?",
    image: lowfi_path + "04_no result_did_you_mean.png",
    text: "Redizajnovali sme stránku \"nič nebolo nájdené\" a pridali sme funkciu \"did you mean?\", ktorá používateľa navedie na správny výraz v prípade preklepu."
  },
  {
    title: "Zoradenie/sort - anglicky",
    image: lowfi_path + "05_sort_en.png",
    text: "Zmenili sme označenie pomocou šípok na jasnejšie pomenovanie možností zoradenia. Pridali sme zoradenie podľa popularity."
  },
  {
    title: "Zoradenie/sort - slovensky",
    image: lowfi_path + "05_sort_sk.png",
    text: "Zmenili sme označenie pomocou šípok na jasnejšie pomenovanie možností zoradenia. Pridali sme zoradenie podľa popularity."
  },
  {
    title: "Aplikované filtre + vyhľadávanie",
    image: lowfi_path + "06_applied_filters_search.png",
    text: "Aby sme jasnejšie zobrazovali aplikované filtre, pridali sme \"filter chips\" nad výsledky vyhľadávania."
  }
];

<ScreensCarousel slides={lowfi_slides} />

## Preference testing
Následne sme vytvorili high-fidelity prototyp navrhnutých zmien. Aby sme získali spätnú väzbu od používateľov počas prototypovania, realizovali sme preference testing (tiež ako náhradu pravidelného tímového stretnutia). Preference testing sa používa na porovnanie niekoľkých verzií dizajnu alebo konceptu, s cieľom vybrať taký dizajn, ktorý je pre používateľov intuitívnejší, zrozumiteľnejší alebo vizuálne prijateľnejší.

Preference testing prebiehal vo forme dotazníka a Figma prototypu. Participanti dostali niekoľko verzií dizajnu konkrétnej funkcionality, ktoré si mohli vo Figme prezrieť a vyskúšať. Do dotazníku mali zaznačiť, ktorá možnosť sa im páči viac, prípadne i prečo. Testovali sme:
- collapsible sidebar a jeho veľkosť
- auto-suggestions
- počet výsledkov
- header/názov stránky
- pokročilé vyhľadávanie/filter
- celkový dizajn stránky/farby
- ikony v sidebare

Ikony v sidebare sme testovali z dôvodu pridania collapsible sidebaru, hľadali sme také, ktoré by vhodne komunikovali funkcionalitu aj v prípade, keď text nie je viditeľný.

Testovania sa zúčastnilo 12 ľudí. Boli identifikované nedostatky, neintuitívne rozloženie elementov, nevhodne zvolené farby. Preferované možnosti boli s úpravami zapracované do high-fidelity prototypu.



## High-fidelity prototyp

Finálny high-fidelity prototyp môžete nájsť v záložke **[Prototyp](/prototype)**.

Vybrané high-fidelity obrazovky:

export const highfi_path = "/TP2025-T23/ux/search/highfi/"

export const highfi_slides = [
  {
    title: "Domov - collapsible sidebar 1",
    image: highfi_path + "01_home.png",
    text: "V porovnaní s pôvodnou verziou sme zmenili ikonky pre Knižnicu, Skupiny, Jazyk a Výpožičky."
  },
  {
    title: "Domov - collapsible sidebar 2",
    image: highfi_path + "01_home_collapsible.png",
    text: "V porovnaní s pôvodnou verziou sme zmenili ikonky pre Knižnicu, Skupiny, Jazyk a Výpožičky."
  },
  {
    title: "Auto-suggestions",
    image: highfi_path + "02_auto_suggestions.png",
    text: "Priebežné výsledky vyhľadávania zobrazujúce knihy, autorov a feeds/kategórie."
  },
  {
    title: "Pokročilé vyhľadávanie/filter + filter chips",
    image: highfi_path + "03_filter.png",
    text: "Po pripomienkach používateľov sme na stránku pridali počet celkových výsledkov pre hľadaný výraz."
  },
  {
    title: "Výsledky vyhľadávania - author/feed/category",
    image: highfi_path + "04_search_authors_feeds_categories.png",
    text: "Autori, skupiny (feeds) a kategórie ako výsledky vyhľadávania. Tento typ výsledkov by mal obsahovať len relevantné údaje v minimálnom počte a uľahčovať tak používateľom vyhľadávanie konkrétneho autora alebo témy. Väčšie množstvo výsledkov sa v prípade potreby dá rozbaliť."
  },
  {
    title: "Author/feed/category page",
    image: highfi_path + "05_feed_page.png",
    text: "Pri kliknutí na autora/feed/kategóriu je používateľ presmerovaný na samostatnú stránku pre daný výsledok."
  },
];

<ScreensCarousel slides={highfi_slides} />

