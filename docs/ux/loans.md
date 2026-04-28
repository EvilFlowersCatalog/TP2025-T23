---
sidebar_position: 5
---

import ScreensCarousel from '@site/src/components/ScreensCarousel';

# 📅 Výpožičky
Okrem priameho čítania kníh v PDF čítačke v Elvire si používateľ môže niektoré knihy vypožičať digitálne. K požičanej knihe má istú dobu prístup, môže si ju kedykoľvek otvoriť a čítať. Digitálne výpožičky fungujú podobne ako požičiavanie fyzických kníh - kniha má určitý počet kópií, používateľ (čitateľ) si knihu vypožičia na niekoľko týždňov, môže ju predčasne vrátiť alebo predĺžiť. Po potvrdení výpožičky sa vygeneruje link na stiahnutie súboru, ktorý sa dá otvoriť len v špecializovaných čítačkách (Thorium Reader). Na otvorenie súboru je tiež potrebné mať nastavenú prístupovú frázu. Funkcia výpožičiek bola implementovaná na dev serveri Elviry a obsahovala niekoľko nedostatkov a problémov použiteľnosti, celý proces bol neintuitívny a zložitý.

## Heuristická evaluácia
Keďže výpožičky boli implementované len čiastočne a funkcionalita bola nestabilná a nevhodná na testovanie s používateľmi, rozhodli sme sa vykonať heuristickú analýzu podľa [10 heuristík použiteľnosti](https://www.nngroup.com/articles/ten-usability-heuristics/). Spísali sme problémy a porušenia heuristík a ich riešenia. Na hodnotenie závažnosti sme použili škálu 0-4 podľa [Severity Ratings for Usability Problems](https://www.nngroup.com/articles/how-to-rate-the-severity-of-usability-problems/).

| **Rating** | **Description**                                                                    |
|------------|------------------------------------------------------------------------------------|
| **0**      | I don't agree that this is a usability problem at all                              |
| **1**      | Cosmetic problem only: need not be fixed unless extra time is available on project |
| **2**      | Minor usability problem: fixing this should be given low priority                  |
| **3**      | Major usability problem: important to fix, so should be given high priority        |
| **4**      | Usability catastrophe: imperative to fix this before product can be released       |

<br></br>
<br></br>

| Heuristika | Problémy | Odporúčania | Závažnosť |
|---|---|---|:---:|
| **1. Visibility of System Status** | Používateľ nevidí, koľko kópií knihy existuje, koľko je vypožičaných a koľko voľných.<br></br><br></br>Slabo sa komunikuje úspešná výpožička, nie je jasné, čo sa stalo najmä pre nových používateľov.<br></br><br></br>V knižnici nie je nijako indikované, že kniha je vypožičaná a nedá sa čítať, používateľ to zistí až v poslednom kroku.<br></br><br></br>Na vytvorenie výpožičky je nutné mať vytvorenú prístupovú frázu, čo nie je nikde komunikované.<br></br><br></br>Na otvorenie vypožičanej knihy je treba stiahnuť a nainštalovať third-party software (Thorium), čo nikde nie je komunikované.<br></br><br></br>Keď sú vypožičané všetky kópie, nie je možné dostať sa ku kalendáru a vytvoriť rezerváciu. | Zobrazovať počet kópií knihy, voľné a dostupné.<br></br><br></br>Lepšie komunikovať úspešnú výpožičku, v okne po výpožičke nasleduje informácia o úspechu a link na publikáciu.<br></br><br></br>Zobrazovať (ne)dostupnosť knihy, pridať filter na dostupné a nedostupné knihy. <br></br><br></br>Upozorniť používateľa na potrebu nastavenia prístupovej frázy ako modal, notifikácia, v detaile knihy pri výpožičke... <br></br><br></br>Umožniť otvorenie knihy v PDF viewer-i Elviry. Upozorniť používateľa na potrebu stiahnutia reader-u (Thorium) pri prístupovej fráze, v detaile knihy pri výpožičke, na strane s výpožičkami (krajné riešenie). | **4** |
| **2. Match Between System and the Real World** | Ikona výpožičiek (sidebar) jasne nekomunikuje danú funkciu.<br></br><br></br>Po vypožičaní knihy sa ikona výpožičky zmení (stiahnuť), v ešte nevypožičaných zostáva ako kalendár. Nie je jasné, čo sa touto zmenou komunikuje. | Zmeniť pôvodnú ikonu na ikonu kalendára, stiahnutia, ...<br></br><br></br>Zjednotiť ikony. | **1** |
| **3. User Control and Freedom** | Chýba funkcia zrušenia výpožičky.<br></br><br></br>Zmena dní v kalendári je chaotická a používateľ sa môže ľahko pomýliť.<br></br><br></br>Ikona „zavrieť" pri vypožičiavaní v detaile knihy nezavrie okno, ale vráti používateľa na detail knihy. | Pridať možnosť zrušenia výpožičky alebo vrátenia knihy. Na stránku výpožičiek, do detailu knihy, ...<br></br><br></br>Zlepšiť spôsob výberu dní.<br></br><br></br>Pridať šípku späť na návrat do detailu knihy, X na zatvorenie celého detailu. | **3** |
| **4. Consistency and Standards** | Slabé použitie design systému, narušenie vnútornej konzistencie. | Používať farby v design systéme, používať existujúce alebo vizuálne podobné komponenty v design systéme. | **1** |
| **5. Error Prevention** | Chýbajúce informácie o počte kópií a existujúcich výpožičkách a dňoch, kedy je kniha nedostupná.<br></br><br></br>Chýbajúci limit na maximálny počet dní pri výpožičke. | Zobrazovať počet kópií knihy, voľné a dostupné. Priamo v book card. <br></br><br></br>Pridať limit na maximálny počet dní, neumožniť vybrať dni nad tento limit. | **2** |
| **6. Recognition Rather Than Recall** | Chýbajú pripomienky požičaných kníh, dátumu konca výpožičky mimo stranu s výpožičkami.<br></br><br></br>Na prvý pohľad používateľ nevie, ktoré knihy má požičané. | Na homepage zobraziť informácie o požičaných knihách s končiacim dátumom výpožičky.<br></br><br></br>Vizuálne indikovať, že používateľ má prístup ku knihe v book card, v detaile. | **1** |
| **7. Flexibility and Efficiency of Use** | - | - | **0** |
| **8. Aesthetic and Minimalist Design** | Link na stiahnutie knihy nie je prioritou dizajnu.<br></br><br></br>Stav vypožičanej knihy je zbytočný a zároveň je vizuálne najvýraznejší. | Zmeniť dizajn strany s výpožičkami, zvýrazniť link.<br></br><br></br>Zobrazovať len aktuálne vypožičané knihy, výpožičky z minulosti len na vyžiadanie. | **1** |
| **9. Help Users Recognize, Diagnose, and Recover from Errors** | Chybové správy sú generické, nekomunikujú problém a neponúkajú riešenie.<br></br><br></br>Ak používateľ nemá nastavenú prístupovú frázu, nedokáže vytvoriť výpožičku, čo nie je pri chybe komunikované. | V prípade chyby komunikovať čo sa stalo – všetky kópie knihy sú vypožičané, jediný spôsob prístupu ku knihe je výpožička...<br></br><br></br>Vytvoriť frontu na knihu, rezervačný zoznam, do ktorého sa používateľ v prípade záujmu zapíše.<br></br><br></br>V chybovej správe komunikovať nutnosť vytvorenia prístupovej frázy (+ link na profil, prípadne Thorium) | **3** |
| **10. Help and Documentation** | Dokumentácia pre používateľov neexistuje. | Vytvoriť dokumentáciu, FAQ, stránku s opisom najdôležitejších funkcií (najmä výpožičky – prístupová fráza, Thorium...) | **2** |

## User scenarios a user flows
Podľa zistení heuristickej evaluácie sme vytvorili user scenarios a user flows. Prvých 5 (okamžitá výpožička, filtrovanie podľa dostupnosti, rezervácia knihy, vrátenie a predĺženie) sú prípady použitia, na ktorých bola zhoda a ktoré sme ďalej prototypovali. Scenár výpožičky v budúcnosti bol vytvorený podľa aktuálnej implementácie, no neexistuje veľa prípadov, kedy by sa v realite využíval, navyše je pre používateľov ťažšie pochopiteľný. Rozhodli sme sa ho preto nahradiť scenárom 1 - okamžitá výpožička. Posledný scenár otvorenia v PDF čítačke, hoci z hľadiska user experience najlepší, je momentálne technicky nerealizovateľný.

export const research_path = "/TP2025-T23/ux/loans/user_research/"

export const research_slides = [
  {
    title: "1 Okamžitá výpožička",
    image: research_path + "01_loan.png",
  },
  {
    title: "2 Filtrovanie podľa dostupnosti",
    image: research_path + "02_filter.png",
  },
  {
    title: "3 Rezervácia knihy",
    image: research_path + "03_waiting.png",
  },
  {
    title: "4 Vrátenie knihy",
    image: research_path + "04_return.png",
  },
  {
    title: "5 Predĺženie knihy",
    image: research_path + "05_extend.png",
  },
  {
    title: "6 Výpožička v budúcnosti",
    image: research_path + "06_loan_future.png",
  },
  {
    title: "7 Otvorenie požičanej knihy v čítačke",
    image: research_path + "07_loan_viewer.png",
  },
]

<ScreensCarousel slides={research_slides} />


## Low-fidelity prototyp
Súčasťou low-fidelity prototypu je okrem navrhnutých scenárov aj stránka s dokumentáciou pre používateľov a profil, kde je možné nastaviť prístupovú frázu potrebnú na otvorenie požičanej knihy.

export const lowfi_path = "/TP2025-T23/ux/loans/lowfi/"

export const lowfi_slides = [
    {
        title: "1 Dostupnosť kníh",
        image: lowfi_path + "1_book_card.png",
    },
    {
        title: "2.1 Detail knihy - dostupnosť",
        image: lowfi_path + "2.1_book_detail.png",
    },
    {
        title: "2.2 Detail knihy - požičaná",
        image: lowfi_path + "2.2_book_detail.png",
    },
    {
        title: "3 Výpožička",
        image: lowfi_path + "3_loan.png",
    },
    {
        title: "3.1 Výpožička - chýbajúca prístupová fráza",
        image: lowfi_path + "3.1_loan_pass.png",
    },
    {
        title: "3.2 Úspešná výpožička",
        image: lowfi_path + "3.2_loan_success.png",
    },
    {
        title: "4 Rezervácia",
        image: lowfi_path + "4_list.png",
    },
    {
        title: "5 Správa výpožičiek",
        image: lowfi_path + "5_loans_page.png",
    },
    {
        title: "6 Filtrovanie podľa dostupnosti",
        image: lowfi_path + "6_filter.png",
    },
    {
        title: "7 Profil",
        image: lowfi_path + "7_profile.png",
    },
    {
        title: "8.1 Dokumentácia",
        image: lowfi_path + "8.1_help.png",
    },
    {
        title: "8.2 Dokumentácia - téma",
        image: lowfi_path + "8.2_help.png",
    },
]

<ScreensCarousel slides={lowfi_slides} />

## High-fidelity prototyp

Finálny high-fidelity prototyp môžete nájsť v záložke **[Prototyp](/prototype)**.

Vybrané high-fidelity obrazovky:

export const highfi_path = "/TP2025-T23/ux/loans/highfi/"

export const highfi_slides = [
  {
    title: "1 Dostupnosť kníh + 6 Filtrovanie podľa dostupnosti",
    image: highfi_path + "01_06.png",
  },
  {
    title: "2 Detail knihy - nedostupná",
    image: highfi_path + "02.png",
  },
  {
    title: "3 Výpožička",
    image: highfi_path + "03.png",
  },
  {
    title: "5 Správa výpožičiek",
    image: highfi_path + "05.png",
  },
  {
    title: "7 Profil",
    image: highfi_path + "07.png",
  },
  {
    title: "8 Dokumentácia",
    image: highfi_path + "08.png",
  },
]

<ScreensCarousel slides={highfi_slides} />