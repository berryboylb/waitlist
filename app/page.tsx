"use client";
// import { useEffect } from "react";
import CarouselSection from "@/components/carousel";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import NewsletterSection from "@/components/news-letter";
import StaticNav from "@/components/static-nav";
import ParallaxCards from "@/components/parrallax-cards";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

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
      <TawkMessengerReact
        propertyId="682a53056392a3190c780190"
        widgetId="1iril8jq9"
      />
    </main>
  );
}
