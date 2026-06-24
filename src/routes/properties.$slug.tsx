import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ArrowLeft, Check, MapPin } from "lucide-react";
import { propertyBySlugQuery } from "@/lib/queries";

export const Route = createFileRoute("/properties/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `Plot ${params.slug} — Capital Realty` },
      { property: "og:url", content: `/properties/${params.slug}` },
    ],
    links: [{ rel: "canonical", href: `/properties/${params.slug}` }],
  }),
  loader: async ({ context, params }) => {
    const data = await context.queryClient.ensureQueryData(propertyBySlugQuery(params.slug));
    if (!data) throw notFound();
    return data;
  },
  component: PropertyDetail,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center text-center px-6 pt-20">
      <div>
        <h1 className="font-display text-4xl">Plot not found</h1>
        <Link to="/properties" className="mt-6 inline-flex items-center gap-2 text-gold underline">
          ← Back to portfolio
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center text-center px-6 pt-20">
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
});

function PropertyDetail() {
  const params = Route.useParams();
  const { data: property } = useSuspenseQuery(propertyBySlugQuery(params.slug));
  if (!property) return null;

  return (
    <>
      <section className="pt-32 pb-0">
        <div className="container-wide">
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-gold mb-8"
          >
            <ArrowLeft className="size-4" /> All Plots
          </Link>
        </div>
        <div className="container-wide grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="aspect-[4/3] overflow-hidden bg-mist">
              <img
                src={property.image_url}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <aside className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            {property.badge && (
              <span className="inline-block bg-gold text-navy px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] mb-5">
                {property.badge}
              </span>
            )}
            <h1 className="font-display text-4xl md:text-5xl mb-4 leading-tight">
              {property.title}
            </h1>
            <p className="flex items-center gap-2 text-muted-foreground mb-8">
              <MapPin className="size-4" /> {property.location}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-10 pb-10 border-b border-border">
              <Detail label="Plot Size" value={property.plot_size} />
              <Detail label="Status" value={property.status} />
              {property.price && <Detail label="Price" value={property.price} />}
              {property.area && <Detail label="Area" value={property.area} />}
            </div>
            <Link
              to="/contact"
              className="block text-center px-8 py-4 bg-navy text-white font-bold uppercase text-[11px] tracking-[0.22em] hover:bg-gold hover:text-navy transition-colors"
            >
              Enquire About This Plot
            </Link>
          </aside>
        </div>
      </section>

      <section className="section-padding container-wide grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <span className="eyebrow">About this plot</span>
          <h2 className="mt-4 font-display text-3xl mb-6">{property.description}</h2>
          {property.long_description && (
            <div className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
              {property.long_description}
            </div>
          )}
        </div>
        <div className="lg:col-span-5">
          {property.features && property.features.length > 0 && (
            <div className="bg-mist p-10">
              <span className="eyebrow">Features</span>
              <ul className="mt-6 space-y-4">
                {property.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="size-4 text-gold mt-1.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-1">
        {label}
      </p>
      <p className="font-display text-xl capitalize">{value}</p>
    </div>
  );
}
