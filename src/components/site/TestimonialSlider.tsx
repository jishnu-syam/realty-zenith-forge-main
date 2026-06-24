import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronRight, ChevronLeft, Quote } from "lucide-react";
import type { Testimonial } from "@/lib/types";

export function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const scroller = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    update();
    const el = scroller.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update, items.length]);

  const scrollBy = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };

  if (items.length === 0) return null;

  return (
    <div className="relative">
      <div
        ref={scroller}
        className="flex gap-6 md:gap-8 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4"
      >
        {items.map((t) => (
          <article
            key={t.id}
            className="snap-start shrink-0 w-[88%] sm:w-[420px] bg-white/5 border border-white/10 p-8 md:p-10 backdrop-blur-sm flex flex-col"
          >
            <Quote className="size-8 text-accent-green/70 mb-6" strokeWidth={1.5} />
            <p className="font-display italic text-lg md:text-xl text-white leading-relaxed mb-8 flex-1">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
              {t.avatar_url && (
                <img
                  src={t.avatar_url}
                  alt={t.author_name}
                  loading="lazy"
                  className="size-12 rounded-full object-cover grayscale"
                />
              )}
              <div>
                <p className="font-bold text-white text-sm">{t.author_name}</p>
                {t.author_role && (
                  <p className="text-[10px] uppercase tracking-[0.2em] text-accent-green/80 mt-0.5">
                    {t.author_role}
                  </p>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-end gap-2 mt-8">
        <button
          onClick={() => scrollBy(-1)}
          disabled={!canPrev}
          aria-label="Previous testimonial"
          className="size-12 rounded-full border border-white/20 text-white/80 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white hover:text-primary-green transition-colors"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          onClick={() => scrollBy(1)}
          disabled={!canNext}
          aria-label="Next testimonial"
          className="size-12 rounded-full border border-accent-green bg-accent-green/0 text-accent-green flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent-green hover:text-white transition-colors"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
