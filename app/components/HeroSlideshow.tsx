"use client";

import { useEffect, useMemo, useState } from "react";

type Slide = {
  image: string;
  heading: string;
  subheading?: string;
};

const SLIDES: Slide[] = [
  {
    image: "/img/first.jpg",
    heading: "MAR-MARINA WET SLIPS AND DRY STORAGE",
    subheading: "Amazing Location - Amazing service",
  },
  {
    image: "/img/second.jpg",
    heading: "BEST HOME FOR YOUR VESSEL LARGE or SMALL",
    subheading: "Easy Access to Open Water and Safety from Storms",
  },
  {
    image: "/img/third.jpg",
    heading: "Slip Into Tarpon spring's Beautiful ANCLOTE RIVER",
    subheading: "MAR-MARINA",
  },
  {
    image: "/img/fourth.jpg",
    heading: "Welcome Aboard!",
    subheading: "MAR-MARINA",
  },
  {
    image: "/img/fifth.jpg",
    heading: "You are here to stay!",
    subheading: "MAR-MARINA",
  },
  {
    image: "/img/seventh.jpg",
    heading: "You are here to stay!",
    subheading: "MAR-MARINA",
  },
  {
    image: "/img/eighth.jpg",
    heading: "You are here to stay!",
  },
];

const AUTO_ADVANCE_MS = 5500;

export function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = SLIDES.length;

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [paused, total]);

  const activeSlide = useMemo(() => SLIDES[active], [active]);

  return (
    <section
      className="hero-section hero-slideshow"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Marina photo slideshow"
    >
      <div className="hero-slide active-slide">
        <img src={activeSlide.image} alt="" />
        <div className="carousel-text">
          <h2>{activeSlide.heading}</h2>
          {activeSlide.subheading ? <p>{activeSlide.subheading}</p> : null}
        </div>
      </div>

      <div className="hero-dots" role="tablist" aria-label="Slide selector">
        {SLIDES.map((slide, index) => (
          <button
            key={`${slide.image}-${index}`}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-label={`Show slide ${index + 1}`}
            className={index === active ? "dot active" : "dot"}
            onClick={() => setActive(index)}
          />
        ))}
      </div>

      {/* Keep all original slide headings and copy in DOM for crawl parity */}
      <div className="sr-slide-copy" aria-hidden="true">
        {SLIDES.map((slide) => (
          <div key={`${slide.image}-copy`}>
            <h2>{slide.heading}</h2>
            {slide.subheading ? <p>{slide.subheading}</p> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
