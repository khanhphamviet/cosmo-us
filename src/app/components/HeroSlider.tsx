"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const SLIDES = [
  {
    src: "/images/hidamari.jpg",
    alt: "hidamari — COSMO sashiko thread",
    title: "COSMO Embroidery",
    sub: "by LECIEN Corporation — crafted in Japan since 1933",
  },
  {
    src: "/images/nishikiito.jpg",
    alt: "nishikiito — Japanese gold thread",
    title: "nishikiito",
    sub: "Made in Japan thread with Kyoto gold thread technique",
  },
  {
    src: "/images/kits.jpg",
    alt: "Embroidery Kits",
    title: "Embroidery Kits",
    sub: "Complete kits for all skill levels",
  },
  {
    src: "/images/100-ladies.jpg",
    alt: "100 Ladies Embroidery Series",
    title: "100 Ladies",
    sub: "The beloved embroidery series",
  },
];

const INTERVAL = 5000; // ms per slide

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const goTo = useCallback((i: number) => {
    setCurrent(i);
  }, []);

  useEffect(() => {
    console.log("Current slide:", current);
    if (paused) return;
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <div
      className="hero-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className={`hero-slide${i === current ? " hero-slide--active" : ""}`}
          aria-hidden={i !== current}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <h1>{slide.title}</h1>
            <p>{slide.sub}</p>
          </div>
        </div>
      ))}

      {/* Prev / Next arrows */}
      <button
        className="hero-arrow hero-arrow--prev"
        onClick={prev}
        aria-label="Previous slide"
      >
        &#8249;
      </button>
      <button
        className="hero-arrow hero-arrow--next"
        onClick={next}
        aria-label="Next slide"
      >
        &#8250;
      </button>

      {/* Dot indicators */}
      <div className="hero-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`hero-dot${i === current ? " hero-dot--active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
