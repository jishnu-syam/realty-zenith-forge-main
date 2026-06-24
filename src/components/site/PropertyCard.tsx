import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Property } from "@/lib/types";

export function PropertyCard({ property, inverted = false }: { property: Property; inverted?: boolean }) {
  return (
    <Link
      to="/properties/$slug"
      params={{ slug: property.slug }}
      className="group block"
    >
      <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-mist">
        <img
          src={property.image_url}
          alt={property.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {property.badge && (
          <span className="absolute top-4 left-4 bg-gold text-navy px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em]">
            {property.badge}
          </span>
        )}
        <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/15 transition-colors" />
        <div className="absolute bottom-4 right-4 size-10 bg-gold text-navy flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
          <ArrowUpRight className="size-4" />
        </div>
      </div>
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1 min-w-0">
          <h3
            className={`font-display text-xl mb-1 ${
              inverted ? "text-white" : "text-navy"
            } group-hover:text-gold transition-colors`}
          >
            {property.title}
          </h3>
          <p
            className={`text-xs uppercase tracking-[0.18em] ${
              inverted ? "text-white/50" : "text-muted-foreground"
            }`}
          >
            {property.plot_size} • {property.location}
          </p>
        </div>
        {property.price && (
          <div className="text-right">
            <p className="text-gold font-bold italic font-display">{property.price}</p>
            <p
              className={`text-[10px] uppercase tracking-[0.18em] ${
                inverted ? "text-white/40" : "text-muted-foreground"
              }`}
            >
              {property.status}
            </p>
          </div>
        )}
      </div>
    </Link>
  );
}
