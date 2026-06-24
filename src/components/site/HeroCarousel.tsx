import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { HeroSlide } from "@/lib/types";

export function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const [active, setActive] = useState(0);
  const total = slides.length;

  useEffect(() => {
    if (total < 2) return;
    const t = setInterval(() => setActive((i) => (i + 1) % total), 6500);
    return () => clearInterval(t);
  }, [total]);

  if (total === 0) return null;
  const current = slides[active];

  return (
    <section className="relative h-screen min-h-[720px] overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== active}
          >
            <img
              src={s.image_url}
              alt=""
              className={`h-full w-full object-cover ${i === active ? "animate-slow-zoom" : ""}`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/55 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full container-wide flex flex-col justify-center pt-20">
        <div key={current.id} className="max-w-2xl">
          {current.eyebrow && (
            <div className="animate-fade-up flex items-center gap-4 mb-6">
              <span className="block h-px w-12 bg-gold" />
              <span className="text-gold font-semibold tracking-[0.28em] uppercase text-[11px]">
                {current.eyebrow}
              </span>
            </div>
          )}
          <h1
            className="animate-fade-up font-display text-5xl md:text-7xl lg:text-[5.5rem] text-white leading-[1.05] tracking-tight mb-8"
            style={{ animationDelay: "0.15s" }}
          >
            {current.title}
          </h1>
          {current.subtitle && (
            <p
              className="animate-fade-up text-lg md:text-xl text-white/80 font-light leading-relaxed mb-10 max-w-xl"
              style={{ animationDelay: "0.3s" }}
            >
              {current.subtitle}
            </p>
          )}
          <div
            className="animate-fade-up flex flex-wrap gap-4"
            style={{ animationDelay: "0.45s" }}
          >
            {current.cta_label && current.cta_href && (
              <Link
                to={current.cta_href}
                className="px-8 py-4 bg-gold text-navy font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-white transition-colors"
              >
                {current.cta_label}
              </Link>
            )}
            <Link
              to="/contact"
              className="px-8 py-4 border border-white/30 text-white font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-white hover:text-navy transition-all"
            >
              Speak with an Advisor
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel controls */}
      {total > 1 && (
        <div className="absolute bottom-10 right-6 md:right-10 z-10 flex items-center gap-6">
          <div className="flex gap-2.5">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`h-px transition-all duration-500 ${
                  i === active ? "bg-gold w-12" : "bg-white/40 w-6 hover:bg-white/70"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setActive((i) => (i - 1 + total) % total)}
              className="size-10 border border-white/30 text-white/80 hover:bg-white hover:text-navy transition-colors flex items-center justify-center"
              aria-label="Previous"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              onClick={() => setActive((i) => (i + 1) % total)}
              className="size-10 border border-white/30 text-white/80 hover:bg-white hover:text-navy transition-colors flex items-center justify-center"
              aria-label="Next"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      )}

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-6 md:left-10 z-10 hidden md:flex items-center gap-3 text-white/50 text-[10px] uppercase tracking-[0.28em]">
        <span className="block w-10 h-px bg-white/40" />
        Scroll
      </div>
    </section>
  );
}
