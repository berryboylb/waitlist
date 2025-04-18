const HeroSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 font-[family-name:var(--font-trap)]">
          One App, Endless Events
        </h1>
        <p className="text-base lg:text-lg text-black mb-8 max-w-xl mx-auto font-[family-name:var(--font-transforma-sans)]">
          From booking tickets to managing events, Ticketeur is your
          comprehensive, easy-to-use platform for all event experiences.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
