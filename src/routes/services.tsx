import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { MapPin, Layers, Building2, ShieldCheck, Compass, LineChart, ArrowRight } from "lucide-react";
import { servicesQuery } from "@/lib/queries";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  MapPin, Layers, Building2, ShieldCheck, Compass, LineChart,
};

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Land Services — Capital Realty" },
      { name: "description", content: "Land acquisition, plot development, legal verification and investment advisory for Kochi real estate." },
      { property: "og:title", content: "Land Services — Capital Realty" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(servicesQuery),
  component: ServicesPage,
});

function ServicesPage() {
  const { data: services } = useSuspenseQuery(servicesQuery);
  return (
    <>
      <section className="pt-40 pb-20 bg-navy text-white">
        <div className="container-wide">
          <span className="eyebrow text-gold">Our Disciplines</span>
          <h1 className="mt-5 font-display text-5xl md:text-7xl max-w-3xl leading-[1.05]">
            Land services <span className="italic text-gold">engineered</span> for permanence.
          </h1>
          <p className="mt-8 text-lg text-white/70 max-w-2xl leading-relaxed">
            Six disciplines, delivered to an institutional standard. Each one independently
            available, all of them combined in a Capital Realty engagement.
          </p>
        </div>
      </section>

      <section className="section-padding container-wide">
        <div className="grid lg:grid-cols-2 gap-px bg-border">
          {services.map((s, i) => {
            const Icon = (s.icon && ICONS[s.icon]) || MapPin;
            return (
              <div key={s.id} className="bg-background p-10 lg:p-14 group">
                <div className="flex items-start justify-between mb-8">
                  <Icon className="size-8 text-gold" strokeWidth={1.4} />
                  <span className="font-display text-3xl text-navy/15">0{i + 1}</span>
                </div>
                <h2 className="font-display text-3xl mb-4">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-padding bg-mist text-center">
        <div className="container-wide">
          <h2 className="font-display text-4xl md:text-5xl max-w-2xl mx-auto leading-tight">
            Explore <span className="italic text-gold">construction-ready</span> plots.
          </h2>
          <Link
            to="/properties"
            className="mt-10 inline-flex items-center gap-3 px-10 py-4 bg-navy text-white text-[11px] font-bold uppercase tracking-[0.22em] hover:bg-gold hover:text-navy transition-colors"
          >
            View Portfolio <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
