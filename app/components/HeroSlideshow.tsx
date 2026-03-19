"use client";

import { useEffect, useMemo, useState } from "react";

type Slide = {
  image: string;
  alt: string;
  heading: string;
  subheading?: string;
};

const SLIDES: Slide[] = [
  {
    image: "/img/first.jpg",
    alt: "Wet slips and docks at Mar Marina in Tarpon Springs.",
    heading: "Mar Marina Wet Slips and Dry Storage",
    subheading: "Protected location with trusted marine service",
  },
  {
    image: "/img/second.jpg",
    alt: "Marina basin and dock access near the Anclote River.",
    heading: "A Reliable Home for Your Vessel",
    subheading: "Easy access to open water and protected marina positioning",
  },
  {
    image: "/img/third.jpg",
    alt: "Boats and slips at Mar Marina on the Anclote River.",
    heading: "Slip Into Tarpon Springs on the Anclote River",
    subheading: "Mar Marina",
  },
  {
    image: "/img/fourth.jpg",
    alt: "Boatyard and marina service area at Mar Marina.",
    heading: "Welcome Aboard",
    subheading: "Mar Marina",
  },
  {
    image: "/img/fifth.jpg",
    alt: "Dry storage and service support area at Mar Marina.",
    heading: "Service, Storage, and Support in One Location",
    subheading: "Mar Marina",
  },
  {
    image: "/img/seventh.jpg",
    alt: "Marine service workflow and storage operations at Mar Marina.",
    heading: "Built for Repeat Marine Service",
    subheading: "Mar Marina",
  },
  {
    image: "/img/eighth.jpg",
    alt: "Tarpon Springs marina setting with vessels at dock.",
    heading: "You are here to stay!",
  },
];

const AUTO_ADVANCE_MS = 5500;

type HeroSlideshowProps = {
  /** When true, hide on-slide captions so a custom hero overlay can show the primary message (SEO copy stays in sr-only block). */
  suppressCaptions?: boolean;
};

export function HeroSlideshow({ suppressCaptions = false }: HeroSlideshowProps) {
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
      <div className={`hero-slide active-slide${suppressCaptions ? " hero-slide--no-caption" : ""}`}>
        <img src={activeSlide.image} alt={activeSlide.alt} />
        {!suppressCaptions ? (
          <div className="carousel-text">
            <h2>{activeSlide.heading}</h2>
            {activeSlide.subheading ? <p>{activeSlide.subheading}</p> : null}
          </div>
        ) : null}
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
