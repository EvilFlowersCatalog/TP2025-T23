---
sidebar_position: 3
---

import ScreensCarousel from '@site/src/components/ScreensCarousel';

# ✨ Inteligentné funkcie
Inteligentné funkcie predstavujú súbor funkcionalít, ktoré rozširujú Elviru nad rámec tradičného vyhľadávania a čítania kníh. Návrh vychádzal z predchádzajúceho používateľského testovania Elviry, testovania vyhľadávania a následne aj používateľských rozhovorov. Návrh bol tiež ovplyvnený technickým smerovaním tímového projektu, najmä integráciou sémantického vyhľadávania. Úlohou dizajnu bolo vyvíjané technické riešenie zmysluplne pretaviť do používateľského rozhrania. Časť navrhnutých riešení predstavuje frontendové vylepšenia. Celkovo by tieto funkcionality mali podporiť používateľov pri vyhľadávaní relevantnej literatúry, pochopení komplexných textov a orientácii vo veľkom množstve informácií.

Niektoré funkcionality boli navrhnuté a prototypované úplne, iné boli upravené, odložené alebo vyradené na základe časových a technických obmedzení tímového projektu. Celkovo bolo navrhnutých 15 funkcií, vrátane rôznych možností dizajnu a mierne odlišnej funkcionality.

| **Číslo** |                    **Názov**                    |   **Miesto**   |   **Stav**  |
|:---------:|:----------------------------------------------- |:--------------:|:-----------:|
| **1**     | Recommended books                               | Homepage       |  ✅ Backend  |
| **2**     | Related books                                   | Book detail    |  ✅ Backend  |
| **3**     | Themed collections                              | Homepage       |  ✅ Backend  |
| **4**     | Study plan                                      | Homepage       |  ❌ scrapped |
| **5**     | Better keyword search/multilingual search       | Search         |  ✅ Backend  |
| **6**     | No results - related terms                      | Search         |  ✅ Backend  |
| **7**     | Semantic/natural language search                | Search         |  ✅ Backend  |
| **8.1**   | Intelligent search results - paragraphs         | Search         |  🔄 refined  |
| **8.2**   | Intelligent search results - definition         | Search         |  🔄 refined  |
| **8.3**   | Intelligent search results - definition + image | Search         | ⏳ postponed |
| **8.4**   | Intelligent search results - study plan         | Search         |  ❌ scrapped |
| **9.1**   | Recommendations                                 | Viewer         |  ✅ Backend  |
| **9.2**   | Recommendations - end of the book               | Viewer         |  ❌ scrapped |
| **10.1**  | Semantic search in book - raw chunk             | Viewer         |  ✅ Backend  |
| **10.2**  | Semantic search in book - intelligent label     | Viewer         |  ✅ Backend  |
| **11.1**  | Selected text - similar books                   | Viewer         |  ✅ Backend  |
| **11.2**  | Selected text - LLM generated explanation       | Viewer         |  ✅ Backend  |
| **11.3**  | Selected text - different books explanation     | Viewer         | ⏳ postponed |
| **12.1**  | Normal bookmark                                 | Viewer         |  ✅ Frontend |
| **12.2**  | Sticky notes                                    | Viewer + Saved |  ✅ Frontend |
| **13**    | Chat with the book                              | Viewer         | ⏳ postponed |
| **14**    | Alternative sources                             | Search         |  ✅ Frontend |
| **15.1**  | Exam mode - questions & answers                 | Viewer         | ⏳ postponed |
| **15.2**  | Exam mode - submittable test                    | Viewer         | ⏳ postponed |

## User scenarios a user flows
Vytvorili sme user scenarios a user flows pre vybrané inteligentné funkcionality. Časť funkcií, ktorá nie je navrhnutá týmto spôsobom, je špecifikovaná ako low-fidelity prototyp. Jedná sa najmä o riešenia, ktoré sú už čiastočne implementované alebo o čisto technické záležitosti.

export const research_path = "/TP2025-T23/ux/intelligent/user_research/"

export const research_slides = [
  {
    title: "4 + 8.4 Study plan",
    image: research_path + "01_study_plan.png",
  },
  {
    title: "7 Semantic/natural language search",
    image: research_path + "02_semantic.png",
  },
  {
    title: "8.1 Intelligent search results - paragraphs",
    image: research_path + "03_paragraphs.png",
  },
  {
    title: "9.1 Recommendations (Viewer)",
    image: research_path + "05_recommendations.png",
  },
  {
    title: "10.1 Semantic search in book - raw chunk",
    image: research_path + "06_semantic_book.png",
  },
  {
    title: "11.1 Selected text - similar book",
    image: research_path + "07_text_similar.png",
  },
  {
    title: "11.2 + 11.3 Selected text - LLM generated explanation + different books explanation",
    image: research_path + "08_explanations.png",
  },
  {
    title: "12.2 Sticky notes (create)",
    image: research_path + "09_sticky_note_1.png",
  },
  {
    title: "12.2 Sticky notes (modify)",
    image: research_path + "09_sticky_note_2.png",
  },
  {
    title: "15.1 Exam mode - questions & answers",
    image: research_path + "10_exam.png",
  },
]

<ScreensCarousel slides={research_slides} />

## Low-fidelity prototyp
Následne sme vytvorili low-fidelity prototyp, celkovo 34 obrazoviek, pričom pri viacerých funkciách sme navrhli niekoľko verzií rozloženia elementov a dizajnu. Prototypy boli odprezentované na stretnutí tímu, kde boli upravené. Následne boli upravené aj po používateľských rozhovoroch, kde sme tiež niektoré funkcie zamietli.

Vybrané low-fidelity návrhy:

export const lowfi_path = "/TP2025-T23/ux/intelligent/lowfi/"

export const lowfi_slides = [
  {
    title: "1 Recommended books + 3 Themed collections",
    image: lowfi_path + "3_themed_collections.png",
  },
  {
    title: "2 Related books",
    image: lowfi_path + "2_related_books.png",
  },
  {
    title: "4 Study plan",
    image: lowfi_path + "4_study_plan.png",
  },
  {
    title: "6 No results - related terms",
    image: lowfi_path + "6_related_terms.png",
  },
  {
    title: "7 Semantic/natural language search",
    image: lowfi_path + "7_semantic.png",
  },
  {
    title: "7 Semantic/natural language search - results",
    image: lowfi_path + "7_semantic_results.png",
  },
  {
    title: "8.1 Intelligent search results - paragraphs",
    image: lowfi_path + "8.1_paragraphs.png",
  },
  {
    title: "8.2 Intelligent search results - definition",
    image: lowfi_path + "8.2_definition.png",
  },
  {
    title: "8.4 Intelligent search results - study plan",
    image: lowfi_path + "8.4_study_plan.png",
  },
  {
    title: "9.1 Recommendations",
    image: lowfi_path + "9.1_recommendations.png",
  },
  {
    title: "9.2 Recommendations - end of the book",
    image: lowfi_path + "9.2_recommendations_end.png",
  },
  {
    title: "10.1 Semantic search in book - raw chunk",
    image: lowfi_path + "10.1_semantic_book.png",
  },
  {
    title: "11.1 Selected text - similar books",
    image: lowfi_path + "11.1_selected_similar.png",
  },
  {
    title: "11.2 Selected text - LLM generated explanation",
    image: lowfi_path + "11.2_selected_LLM.png",
  },
  {
    title: "11.3 Selected text - different books explanation",
    image: lowfi_path + "11.3_selected_different.png",
  },
  {
    title: "12.1 Normal bookmark",
    image: lowfi_path + "12_normal.png",
  },
  {
    title: "12.2 Sticky notes - viewer",
    image: lowfi_path + "12_sticky.png",
  },
  {
    title: "12.2 Sticky notes - saved page",
    image: lowfi_path + "12_sticky_page.png",
  },
  {
    title: "14 Alternative sources",
    image: lowfi_path + "14_alt.png",
  },
  {
    title: "15.1 Exam mode - questions & answers",
    image: lowfi_path + "15.1.png",
  },
]

<ScreensCarousel slides={lowfi_slides} />

## User interviews a Concept testing
Hoci návrh inteligentných funkcií vychádzal z existujúceho používateľského výskumu, rozhodli sme sa dizajn proces podporiť ďalšou metódou. Realizovali sme používateľské rozhovory s cieľom zistiť ako ľudia pristupujú k organizácii kníh a učebných materiálov, digitálnym knižniciam a čítačkám kníh. Chceli sme identifikovať ich potreby a frustrácie. Pomocou concept testingu sme zisťovali ich názor na nami navrhované funkcie. Concept testing je metóda používateľského výskumu, ktorá sa zameriava na testovanie a získavanie spätnej väzby ku konceptom produktu v počiatočných fázach návrhu a prototypovania.

Rozhovory prebehli s 3 účastníkmi a boli spojené s [testovaním PDF čítačky](./pdf_viewer). Rozhovor bol semi-štruktúrovaný. 

**[Nevyplnený protokol](../../static/pdf/protocol_if_01.pdf)**.

### Výsledky

|    **Číslo**    |                 **Funkcia**                 | **P1** | **P2** | **P3** |
|:--------------- | ------------------------------------------- |:------:|:------:|:------:|
| **1**           | Recommended books                           | 🟠      | 🟠      | 🟢      |
| **2**           | Related books                               | 🟠      | 🟢      | 🟢      |
| **3**           | Themed collections                          | 🟢      | 🟢      | 🟢      |
| **4**           | Study plan                                  | 🟢      | 🔴      | 🟠      |
| **5**           | Better keyword search/multilingual search   | 🟢      | 🟢      | 🟢      |
| **6**           | No results - related terms                  | 🟠      | 🟢      | 🟠      |
| **7**           | Semantic/natural language search            | 🟢      | 🟢      | 🟢      |
| **8.1 a 8.2**   | Intelligent search results                  | 🟠      | 🟢      | 🟢      |
| **8.4**         | Intelligent search results - study plan     | 🟢      | 🔴      | 🟠      | 
| **9.1**         | Recommendations - viewer                    | 🔴      | 🟠      | 🔴      |
| **9.2**         | Recommendations - end of the book           | 🔴      | 🔴      | 🟠      |
| **10.1 a 10.2** | Semantic search in book                     | 🟢      | 🟢      | 🟢      |
| **11.1**        | Selected text - similar books               | 🔴      | 🟠      | 🔴      |
| **11.2**        | Selected text - LLM generated explanation   | 🟢      | 🟢      | 🟢      |
| **11.3**        | Selected text - different books explanation | 🔴      | 🟢      | 🟠      |
| **12.1**        | Normal bookmark                             | 🟢      | 🟢      | 🟢      |
| **12.2**        | Sticky notes                                | 🟢      | 🟢      | 🟢      |
| **13**          | Chat with the book                          | 🔴      | 🟢      | 🟠      |
| **14**          | Alternative sources                         | 🟠      | 🟢      | 🟠      |
| **15.1 a 15.2** | Exam mode                                   | 🟢      | 🟢      | 🟢      |


🟢 Funkcia je pre mňa užitočná/dôležitá
🟠 Možno by som použil/a
🔴 Nepoužíval/a by som


<br></br>
***Ktorá funkcia je pre teba najlepšia a prečo?***
- **P1:** Vyhľadávanie v knihe (10), lebo to by mi ušetrilo dosť čas. A vysvetlenie textu (11.2), lebo proste niekedy potrebujem veci jednoduchšie vysvetliť. Aj tie záložky (12.2) sú nice, ja si zvýrazňujem poznámky aj normálne, to by mi pomohlo.
- **P2:** Semantic search (7) aj v knihe (10), tie časti kníh vo vyhľadávaní (8.2), to by mi veľmi pomohlo teraz pri diplomovke, keď si googlim vety a hľadám štúdie, ktoré by som odcitoval. Aj tie otázky, ten test (15) sú mega dobré. Najlepšie sú pre mňa tie lepítka ale, to by bolo fantastické, keby si čítam štúdiu a môžem si zvýrazniť text, ktorý si chcem pridať do práce ale nemám na to čas práve. A dať si k tomu nejakú poznámku.
- **P3:** Semantic search (7) a sticky notes (12.2). Kebyže sme teda v nejakej veľkej knižnici, s kopou článkov, tak by som určite chcela vyhľadávať sémanticky. To mi chýba dosť, aj teraz keď píšem diplomovku, pýtam sa Clauda hlavne. A teda mám toho veľa, veľa zdrojov, poznámok, všetko mám vo Worde a Notion, ale je to neprehľadné a neviem, kde čo mám, na to tie sticky notes.

**[Vyplnený protokol](../../static/pdf/protocol_if_02.pdf)**.
<br></br>

Na základe spätnej väzby participantov sme upravili návrhy, z hľadiska funkcionality i dizajnu. Časť návrhov sme zavrhli alebo odložili, buď z dôvodu výhrad používateľov alebo technickej náročnosti. Väčšina pozitívne vnímaných funkcií bola ďalej prototypovaná. Odporúčania v knihe (9.1 a 11.1), ktoré neboli hodnotené úplne pozitívne, si používatelia vedeli predstaviť najmä v inom kontexte, mimo akademickej knižnice, preto sme sa ich rozhodli taktiež realizovať.

Najvýznamnejšie zmeny v návrhu prebehli v inteligentných výsledkoch vyhľadávania - funkcie 8.1 a 8.2:

export const lowfi2_slides = [
  {
    title: "8.1.1 Intelligent search results - paragraphs carousel",
    image: lowfi_path + "8.1.1.png",
    text: "Odseky z kníh relevantné k hľadanému výrazu, zobrazené ako carousel."
  },
  {
    title: "8.2.1 Intelligent search results - AI overview",
    image: lowfi_path + "8.2.1.png",
    text: "Zhrnutie výsledkov pomocou LLM, vrátane zdrojov/kníh, z ktorých sa čerpalo."
  },
]

<ScreensCarousel slides={lowfi2_slides} />

## High-fidelity prototyp
Finálny high-fidelity prototyp môžete nájsť v záložke **[Prototyp](/prototype)**.

Vybrané high-fidelity obrazovky:

export const highfi_path = "/TP2025-T23/ux/intelligent/highfi/"

export const highfi_slides = [
  {
    title: "7 Search switch - semantic + results",
    image: highfi_path + "7_results.png",
  },
  {
    title: "8.1.1 Intelligent search results - paragraphs carousel",
    image: highfi_path + "8.1.1.png",
  },
  {
    title: "8.2.1 Intelligent search results - AI overview",
    image: highfi_path + "8.2.1.png",
  },
  {
    title: "9.1 Recommendations",
    image: highfi_path + "9.1.png",
  },
  {
    title: "10.1 Semantic search in book - raw chunk",
    image: highfi_path + "10.1.png",
  },
  {
    title: "11.1 Selected text - similar books",
    image: highfi_path + "11.1.png",
  },
  {
    title: "11.2 Selected text - LLM generated explanation",
    image: highfi_path + "11.2.png",
  },
  {
    title: "12.2 Sticky notes - viewer",
    image: highfi_path + "12_viewer.png",
  },
  {
    title: "12.2 Sticky notes - saved page",
    image: highfi_path + "12_page.png",
  },
]

<ScreensCarousel slides={highfi_slides} />