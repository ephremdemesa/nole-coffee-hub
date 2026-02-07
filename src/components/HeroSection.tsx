import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import heroCoffeeFarm from "@/assets/hero-coffee-farm.jpg";
import heroBlockchain from "@/assets/hero-blockchain.jpg";

const heroSlides = [
  {
    image: heroCoffeeFarm,
    title: "From Ethiopia to America",
    subtitle: "Premium green coffee, 200+ containers annually to US roasters",
  },
  {
    image: heroBlockchain,
    title: "Powered by Technology",
    subtitle: "Blockchain-verified traceability from Ethiopian farms to your roastery",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Ethiopian Green Coffee Specialists
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-in-up">
            <span className="text-gradient-coffee">Nole Coffee</span>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-normal mt-4 text-foreground/80">
              INC
            </span>
          </h1>

          {/* Dynamic Subtitle */}
          <p className="text-xl md:text-2xl text-white mb-4 max-w-2xl mx-auto opacity-0 animate-fade-in drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            {heroSlides[currentSlide].subtitle}
          </p>

          {/* Main Tagline */}
          <p className="text-lg md:text-xl font-medium text-foreground/90 mb-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
            Transparent. Traceable. Trusted.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
            <a
              href="#supply-chain"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-coffee text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Explore Our Process
            </a>
            <a
              href="#blockchain"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-foreground/20 text-foreground font-medium hover:bg-foreground/5 transition-colors"
            >
              Trace Your Coffee
            </a>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-accent"
                  : "bg-foreground/20 hover:bg-foreground/40"
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-float">
          <span className="text-xs font-medium uppercase tracking-wider">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
}
