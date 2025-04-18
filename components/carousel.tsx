"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=800",
];

const CarouselSection = () => {
  const topCarouselRef = useRef<HTMLDivElement>(null);
  const bottomCarouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const topCarousel = topCarouselRef.current;
    const bottomCarousel = bottomCarouselRef.current;

    if (!topCarousel || !bottomCarousel) return;

    let scrollAmount = 0;
    let isScrolling = true;

    const scroll = () => {
      if (!isScrolling) return;

      scrollAmount += 0.5;
      if (topCarousel) {
        topCarousel.scrollLeft = scrollAmount % (topCarousel.scrollWidth / 2);
      }

      if (bottomCarousel) {
        // Scroll in opposite direction
        bottomCarousel.scrollLeft =
          bottomCarousel.scrollWidth / 2 -
          (scrollAmount % (bottomCarousel.scrollWidth / 2));
      }

      requestAnimationFrame(scroll);
    };

    scroll();

    const handlePause = () => {
      isScrolling = false;
    };

    const handleResume = () => {
      isScrolling = true;
      scroll();
    };

    topCarousel.addEventListener("mouseenter", handlePause);
    topCarousel.addEventListener("mouseleave", handleResume);
    bottomCarousel.addEventListener("mouseenter", handlePause);
    bottomCarousel.addEventListener("mouseleave", handleResume);

    return () => {
      topCarousel.removeEventListener("mouseenter", handlePause);
      topCarousel.removeEventListener("mouseleave", handleResume);
      bottomCarousel.removeEventListener("mouseenter", handlePause);
      bottomCarousel.removeEventListener("mouseleave", handleResume);
      isScrolling = false;
    };
  }, []);

  return (
    <section className="carousel-section relative w-full overflow-hidden py-6">
      <div
        ref={topCarouselRef}
        className="flex overflow-x-hidden gap-4 mb-4 pb-2 carousel-scroll"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex gap-4 min-w-max">
          {images.map((img, i) => (
            <div
              key={`top-${i}`}
              className="h-64 w-80 rounded-xl overflow-hidden flex-shrink-0"
            >
              <Image
                src={img}
                alt={`Event ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex gap-4 min-w-max">
          {images.map((img, i) => (
            <div
              key={`top-dup-${i}`}
              className="h-64 w-80 rounded-xl overflow-hidden flex-shrink-0"
            >
              <Image
                src={img}
                alt={`Event ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div
        ref={bottomCarouselRef}
        className="flex overflow-x-hidden gap-4 pb-2 carousel-scroll"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex gap-4 min-w-max">
          {images.map((img, i) => (
            <div
              key={`bottom-${i}`}
              className="h-64 w-80 rounded-xl overflow-hidden flex-shrink-0"
            >
              <Image
                src={img}
                alt={`Event ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex gap-4 min-w-max">
          {images.map((img, i) => (
            <div
              key={`bottom-dup-${i}`}
              className="h-64 w-80 rounded-xl overflow-hidden flex-shrink-0"
            >
              <Image
                src={img}
                alt={`Event ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
