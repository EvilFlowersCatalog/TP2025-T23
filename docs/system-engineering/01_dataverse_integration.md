---
sidebar_position: 1
---

# Dataverse Integration

Po publikovaní datasetu v Dataverse zapne hook do Evil Flowers API. Ten musí vedieť savenut do Elviry, metadata o akvizícií, odkaz na PDF v Dataverse a jednak informáciu, odkiaľ ten súbor reálne je (Dataverse, S3, …), a tieto údaje potom v API normálne returnovať.

## TODO

1. Pridať URL súboru do tabuľky `acquisitions`
    - Nový voliteľný stĺpec, napr. `file_url` (nullable).
    - Sem sa uloží link na PDF v Dataverse, ktorý príde v hooku.
2. Pridať typ zdroja súboru (Dataverse / S3 / …)
    - Nové pole, napr. `file_source` (string alebo enum).
    - Hodnoty typu: `dataverse`, `s3`, prípadne `local`, `external` podľa potreby.
    - Nastaviť rozumný default pre existujúce záznamy.
3. Upraviť endpoint pre Dataverse hook
    - V handleri POST z Dataverse načítať:
        - `file_url` (link na PDF na Dataverse),
        - `file_source` (napr. `dataverse`).
    - Uložiť tieto údaje do `acquisitions`.
4. Upraviť API serializáciu v Elvire
    - Rozšíriť serializery/odpovede o polia `file_url` a `file_source`.
    - Klienti Elviry tak uvidia, kde súbor leží (Dataverse/S3/…) a majú priamy link.

![Dataverse integration sequence diagram](/system_engineering/dataverse_sequence.png)