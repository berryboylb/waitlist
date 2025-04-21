"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

interface CardData {
  id: number;
  title: string;
  description: string;
  image: string;
  label?: string;
}

const cardsData: CardData[] = [
  // {
  //   id: 1,
  //   title: "Your Ultimate Event Companion",
  //   description:
  //     "Ticketeur streamlines the entire event experience—from effortlessly buying tickets and smoothly organizing events, to discovering exciting local happenings.",
  //   image:
  //     "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800",
  //   label: "Featured",
  // },
  {
    id: 2,
    title: "Buy Tickets with Ease",
    description:
      "Forget the stress of complicated bookings—get your tickets securely and instantly from anywhere, at any time. Ticketeur makes your ticket-buying experience smooth and worry-free.",
    image:
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=800",
    label: "New",
  },
  {
    id: 3,
    title: "Organize Events Seamlessly",
    description:
      "Whether you’re planning a small gathering or a major event, Ticketeur helps you set everything up effortlessly. Manage your event details, attendees, and ticket sales smoothly—all in one place",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800",
    label: "Popular",
  },
  {
    id: 4,
    title: "Explore Local Events",
    description:
      "Never miss out on what's happening near you. Ticketeur shows you the most exciting local events, curated specifically based on your interests, location, and preferences.",
    image:
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=800",
    label: "Trending",
  },
  {
    id: 5,
    title: "Personalized Recommendations",
    description:
      "We understand everyone’s tastes are unique. That’s why Ticketeur recommends events tailored specifically for you, ensuring you always find something you'll love.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800",
    label: "Popular",
  },
  {
    id: 6,
    title: "Secure Payments & Easy Check-ins",
    description:
      "Your security and convenience matter. Ticketeur provides safe and trusted payment options, and helps you easily check into events without any hassle.",
    image:
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=800",
    label: "Premium",
  },
];

const ParallaxCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize GSAP
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Clean up any existing ScrollTriggers
    ScrollTrigger.getAll().forEach((t) => t.kill());

    // Create a timeline
    // const tl = gsap.timeline()

    // Set up scroll sections
    const sections = sectionRefs.current.filter(Boolean);

    // Create scroll triggers for each section
    sections.forEach((section, i) => {
      if (!section) return;

      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveIndex(i),
        onEnterBack: () => setActiveIndex(i),
        // markers: true, // Enable markers for debugging
        id: `section-${i}`,
      });
    });

    // Fallback: Use direct scroll listener if ScrollTrigger fails
    const handleScroll = () => {
      if (ScrollTrigger.getAll().length === 0) {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const totalHeight = document.body.scrollHeight - windowHeight;
        const scrollPercentage = scrollPosition / totalHeight;
        const newIndex = Math.min(
          Math.floor(scrollPercentage * cardsData.length),
          cardsData.length - 1
        );
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative bg-gray-50 pb-20 lg:pb-0 ">
      {/* Cards display section */}
      <div className="sticky top-0 min-h-screen flex items-center justify-center py-12 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="grid lg:grid-cols-2 lg:gap-10 relative z-10">
            {/* Text content */}
            <div className="relative h-[300px] md:h-[400px]">
              {/* {cardsData.map((item, index) => (
                <div
                  key={`text-${item.id}`}
                  className={cn(
                    "absolute top-0 left-0 w-full transition-all duration-500",
                    activeIndex === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8 pointer-events-none"
                  )}
                >
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 font-[family-name:var(--font-trap)]">
                    {item.title}
                  </h1>
                  <p className="text-base lg:text-lg text-black font-[family-name:var(--font-transforma-sans)]">
                    {item.description}
                  </p>
                </div>
              ))} */}

              <div
                key={`text-`}
                className={cn(
                  "absolute top-0 left-0 w-full transition-all duration-500",
                  // activeIndex === index
                  "opacity-100 translate-y-0"
                )}
              >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 font-[family-name:var(--font-trap)]">
                  Your Ultimate Event Companion
                </h1>
                <p className="text-base lg:text-lg text-black font-[family-name:var(--font-transforma-sans)]">
                  Ticketeur streamlines the entire event experience—from
                  effortlessly buying tickets and smoothly organizing events, to
                  discovering exciting local happenings.
                </p>
              </div>
            </div>

            {/* Stacked cards */}
            <div className="relative h-[400px] md:h-[500px]">
              {cardsData.map((item, index) => {
                // Calculate stacking effect based on position relative to active card
                // const isActive = index === activeIndex
                const isBehindActive = index > activeIndex;
                const isBeforeActive = index < activeIndex;

                // Calculate transform values
                const yOffset = isBehindActive
                  ? (index - activeIndex) * 7
                  : isBeforeActive
                  ? -100
                  : 0;
                const xOffset = isBehindActive ? (index - activeIndex) * 2 : 0;
                const rotation = isBehindActive
                  ? (index - activeIndex) * 3
                  : isBeforeActive
                  ? -8
                  : 0;
                const scale = isBehindActive
                  ? Math.max(0.95 - (index - activeIndex) * 0.05, 0.8)
                  : isBeforeActive
                  ? 0.95
                  : 1;
                const opacity = isBehindActive
                  ? Math.max(0.8 - (index - activeIndex) * 0.2, 0)
                  : isBeforeActive
                  ? 0
                  : 1;

                return (
                  <div
                    key={`card-${item.id}`}
                    className="absolute top-0 left-0 w-full transition-all duration-500 transform-gpu"
                    style={{
                      zIndex: cardsData.length - Math.abs(index - activeIndex),
                      opacity,
                      transform: `translateY(${yOffset}%) translateX(${xOffset}%) rotate(${rotation}deg) scale(${scale})`,
                      transformOrigin: "center bottom",
                    }}
                  >
                    <Card className="overflow-hidden shadow-xl pt-0 h-full">
                      <div className="relative">
                        <Image
                          height={100}
                          width={100}
                          unoptimized
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full aspect-video object-cover"
                        />
                      </div>
                      <CardHeader className="p-0"></CardHeader>
                      <CardContent className="p-6 pt-0">
                        <span className="font-[family-name:var(--font-trap)] w-auto inline px-3 py-1.5 bg-[#fee6fe] text-secondary capitalize text-sm font-medium rounded-sm">
                          {item.label}
                        </span>
                        <CardTitle className="mt-5 font-[family-name:var(--font-trap)] text-lg lg:text-3xl font-bold">
                          {item.title}
                        </CardTitle>
                        <p className="text-black mt-3 text-sm font-[family-name:var(--font-transforma-sans)]">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll sections */}
      <div className="relative z-0">
        {cardsData.map((item, index) => (
          <div
            key={`section-${item.id}`}
            /* eslint-disable @typescript-eslint/no-explicit-any */
            ref={(el) => (sectionRefs.current[index] = el) as any}
            className="min-h-[50vh]" // Each section is half viewport height
            id={`section-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ParallaxCards;
