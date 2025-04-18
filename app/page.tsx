"use client";
// import { useEffect } from "react";
import CarouselSection from "@/components/carousel";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import NewsletterSection from "@/components/news-letter";
import StaticNav from "@/components/static-nav";
import ParallaxCards from "@/components/parrallax-cards";

export default function Home() {
 
  return (
    <main className="min-h-screen">
      <header>
        <StaticNav />
      </header>
      <HeroSection />
      <CarouselSection />
      <ParallaxCards />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
