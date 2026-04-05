import React, { useState } from 'react';
import styles from './styles.module.css';

interface Slide {
  title: string;
  image: string;
  text?: string;
}

export default function ScreensCarousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((index - 1 + slides.length) % slides.length);

  const next = () =>
    setIndex((index + 1) % slides.length);

  const slide = slides[index];

  return (
    <div className={styles.carousel}>
      <h3 className={styles.title}>{slide.title}</h3>

      <div className={styles.imageWrapper}>
        <img
          src={slide.image}
          alt={slide.title}
          className={styles.image}
        />
      </div>

      <div className={styles.controls}>
        <button onClick={prev} className={styles.button}>
          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" stroke-width="1.1"><path d="M13.5 8.00023H3.70701L7.85301 3.85423C8.04801 3.65923 8.04801 3.34223 7.85301 3.14723C7.65801 2.95223 7.34101 2.95223 7.14601 3.14723L2.14601 8.14723C1.95101 8.34223 1.95101 8.65923 2.14601 8.85423L7.14601 13.8542C7.24401 13.9522 7.37201 14.0002 7.50001 14.0002C7.62801 14.0002 7.75601 13.9512 7.85401 13.8542C8.04901 13.6592 8.04901 13.3422 7.85401 13.1472L3.70801 9.00123H13.501C13.777 9.00123 14.001 8.77723 14.001 8.50123C14.001 8.22523 13.777 8.00123 13.501 8.00123L13.5 8.00023Z"/></svg>
        </button>

        <span className={styles.counter}>
          {index + 1} / {slides.length}
        </span>

        <button onClick={next} className={styles.button}>
          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" stroke-width="1.1"><path d="M13.854 8.14576L8.854 3.14576C8.659 2.95076 8.342 2.95076 8.147 3.14576C7.952 3.34076 7.952 3.65776 8.147 3.85276L12.293 7.99876H2.5C2.224 7.99876 2 8.22276 2 8.49876C2 8.77476 2.224 8.99876 2.5 8.99876H12.293L8.147 13.1448C7.952 13.3398 7.952 13.6568 8.147 13.8518C8.245 13.9498 8.373 13.9978 8.501 13.9978C8.629 13.9978 8.757 13.9488 8.855 13.8518L13.855 8.85176C14.05 8.65676 14.05 8.33976 13.855 8.14476L13.854 8.14576Z"/></svg>
        </button>
      </div>

      {slide.text && (
        <p className={styles.text}>{slide.text}</p>
      )}
    </div>
  );
}