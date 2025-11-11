---
sidebar_position: 1
---

import { useColorMode } from '@docusaurus/theme-common';

# Dokumentácia

## Mind map
![Mind Map](../static/img/mindmap.png)

## Roadmap
{
  (() => {
    const { colorMode } = useColorMode();
    const imageSrc = colorMode === 'dark' ? '../img/roadmap_dark.png' : '../img/roadmap_light.png';

    return <img src={imageSrc} alt="Roadmap"/>;
  })()
}