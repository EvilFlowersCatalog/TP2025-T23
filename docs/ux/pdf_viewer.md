---
sidebar_position: 4
---

import ScreensCarousel from '@site/src/components/ScreensCarousel';

# 📄 PDF Viewer

## User testing


## Low-fidelity prototyp

Keďže jedným z hlavných problémov dizajnu bolo umiestnenie a veľkosť spodného baru (obsahu so stranami), rozhodli sme sa navrhnúť dve riešenia. Prvé riešenie spočívalo v presune obsahu so stranami do existujúceho sidebaru, druhé riešenie bolo tiež presunúť obsah so stranami do sidebaru, ale zároveň presunúť celý sidebar do hornej časti obrazovky. Takéto riešenie kopíruje rozloženie využívané v PDF čítačkách v prehliadačoch (Chrome, Edge, ...). Tretím riešením, ktoré bolo prototypované až v high-fidelity, bolo zmenšenie spodného baru.

export const lowfi_path = "/TP2025-T23/ux/pdf/lowfi/"

export const lowfi_slides = [
  {
    title: "Redizajn 2 - obsah do sidebaru",
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
    title: "Redizajn 3 - sidebar hore",
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
    title: "Hlavný redizajn",
    image: highfi_path + "01.png",
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

