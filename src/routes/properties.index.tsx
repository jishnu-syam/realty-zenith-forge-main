import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { propertiesQuery } from "@/lib/queries";
import { PropertyCard } from "@/components/site/PropertyCard";

export const Route = createFileRoute("/properties/")({
  head: () => ({
    meta: [
      { title: "Available Plots — Capital Realty" },
      { name: "description", content: "Browse construction-ready plots across Kakkanad, Edappally, Aluva, Thrippunithura and Marine Drive." },
      { property: "og:title", content: "Available Plots — Capital Realty" },
      { property: "og:url", content: "/properties" },
    ],
    links: [{ rel: "canonical", href: "/properties" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(propertiesQuery),
  component: PropertiesPage,
});

function PropertiesPage() {
  const { data: properties } = useSuspenseQuery(propertiesQuery);
  return (
    <>
      <section className="pt-40 pb-16 bg-navy text-white">
        <div className="container-wide">
          <span className="eyebrow text-gold">Portfolio</span>
          <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl">
            Available <span className="italic text-gold">plots</span>.
          </h1>
          <p className="mt-8 text-lg text-white/70 max-w-2xl leading-relaxed">
            Every parcel in our portfolio is independently verified, site-prepared, and ready
            for immediate construction.
          </p>
        </div>
      </section>

      <section className="section-padding container-wide">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {properties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
        {properties.length === 0 && (
          <p className="text-center text-muted-foreground py-20">
            No plots currently published. Please check back soon.
          </p>
        )}
      </section>
    </>
  );
}
