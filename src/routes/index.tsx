import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ArrowRight, MapPin, Layers, Building2, ShieldCheck, Compass, LineChart } from "lucide-react";

import {
  heroSlidesQuery,
  servicesQuery,
  featuredPropertiesQuery,
  testimonialsQuery,
  faqsQuery,
  areasQuery,
  blogQuery,
} from "@/lib/queries";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { PropertyCard } from "@/components/site/PropertyCard";
import { TestimonialSlider } from "@/components/site/TestimonialSlider";
import { SectionHeading } from "@/components/site/SectionHeading";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  MapPin, Layers, Building2, ShieldCheck, Compass, LineChart,
};

const PROCESS_STEPS = [
  { num: "01", title: "Strategic Sourcing", body: "Identifying high-potential land in prime corridors of Kakkanad, Edappally, Aluva, and Marine Drive." },
  { num: "02", title: "Legal Verification", body: "Rigorous 21-point title audit, encumbrance certificate review, and senior advocate opinion." },
  { num: "03", title: "Site Development", body: "Professional grading, drainage, internal road creation, boundary works, and utility readiness." },
  { num: "04", title: "Project Transfer", body: "Seamless registration, transparent documentation, and handover of construction-ready land." },
];

const WHY_CHOOSE = [
  { stat: "21-Pt", label: "Legal Title Audit" },
  { stat: "100%", label: "Construction-Ready Plots" },
  { stat: "12+", label: "Prime Kochi Corridors" },
  { stat: "500+", label: "Investors Advised" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Capital Realty — Premier Land Developers in Kochi, Kerala" },
      { name: "description", content: "Construction-ready plots in Kakkanad, Marine Drive, Aluva, Edappally and Thrippunithura. Institutional-grade land development by Capital Realty." },
      { property: "og:title", content: "Capital Realty — Premier Land Developers in Kochi" },
      { property: "og:description", content: "Construction-ready plots and institutional-grade land development in Kochi, Kerala." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  loader: ({ context }) =>
    Promise.all([
      context.queryClient.ensureQueryData(heroSlidesQuery),
      context.queryClient.ensureQueryData(servicesQuery),
      context.queryClient.ensureQueryData(featuredPropertiesQuery),
      context.queryClient.ensureQueryData(testimonialsQuery),
      context.queryClient.ensureQueryData(faqsQuery),
      context.queryClient.ensureQueryData(areasQuery),
      context.queryClient.ensureQueryData(blogQuery),
    ]),
  component: HomePage,
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center text-center px-6">
      <div>
        <h1 className="font-display text-3xl mb-3">We couldn't load the page</h1>
        <p className="text-muted-foreground">{error.message}</p>
      </div>
    </div>
  ),
});

function HomePage() {
  const { data: slides } = useSuspenseQuery(heroSlidesQuery);
  const { data: services } = useSuspenseQuery(servicesQuery);
  const { data: featured } = useSuspenseQuery(featuredPropertiesQuery);
  const { data: testimonials } = useSuspenseQuery(testimonialsQuery);
  const { data: areas } = useSuspenseQuery(areasQuery);
  const { data: blog } = useSuspenseQuery(blogQuery);

  return (
    <>
      <HeroCarousel slides={slides} />

      {/* About teaser */}
      <section className="section-padding bg-background">
        <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow">About Capital Realty</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-5 leading-[1.05] tracking-tight">
              A measured approach to <span className="italic text-accent-green">Kerala land</span>.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Capital Realty is a Kochi-headquartered land developer specialising in
              sourcing, preparing, and transferring construction-ready plots to discerning
              private and institutional investors.
            </p>
            <p>
              Our discipline is uncomplicated: identify the right land, verify it
              exhaustively, prepare it to a build-ready standard, and transfer it with
              complete transparency. Every parcel is engineered for the day you decide to
              break ground.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 text-primary-green font-bold uppercase text-[11px] tracking-[0.22em] pb-2 border-b border-primary-green/20 hover:text-accent-green hover:border-accent-green transition-colors"
            >
              Our Philosophy <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-padding bg-beige-bg">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Our Disciplines"
            title={<>Land services <span className="italic">engineered</span> for permanence.</>}
            description="From acquisition to handover, every step is delivered to an institutional standard."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px mt-16 bg-border">
            {services.map((s) => {
              const Icon = (s.icon && ICONS[s.icon]) || MapPin;
              return (
                <div
                  key={s.id}
                  className="bg-background p-10 group hover:bg-primary-green hover:text-white transition-colors duration-300"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <Icon className="size-7 text-accent-green" strokeWidth={1.5} />
                    <span className="font-display text-2xl text-primary-green/15 group-hover:text-white/20 transition-colors">
                      0{services.indexOf(s) + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-white/70 transition-colors">
                    {s.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            eyebrow="The Capital Realty Process"
            title={<>Precision <span className="italic">at every stage</span>.</>}
            description="A meticulous four-step approach to delivering Kochi's finest construction-ready land."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {PROCESS_STEPS.map((s, i) => (
              <div
                key={s.num}
                className={`relative p-8 lg:p-10 bg-beige-bg border-b-4 ${
                  i === 0 ? "border-accent-green" : "border-primary-green"
                } group hover:-translate-y-1 transition-transform duration-300`}
              >
                <span className="font-display text-5xl text-primary-green/15 mb-6 block">{s.num}</span>
                <h4 className="font-bold uppercase tracking-[0.18em] text-xs mb-4">
                  {s.title}
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured properties */}
      <section className="section-padding bg-primary-green text-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="eyebrow text-accent-green">Exclusive Opportunities</span>
            <h2 className="font-display text-4xl md:text-6xl mt-5 leading-[1.05] tracking-tight">
              Curated <span className="italic text-accent-green">investment</span> plots.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featured.map((p) => (
              <PropertyCard key={p.id} property={p} inverted />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              to="/properties"
              className="inline-flex items-center gap-3 px-10 py-4 border border-accent-green/40 text-accent-green font-bold uppercase text-[11px] tracking-[0.22em] hover:bg-accent-green hover:text-white transition-colors"
            >
              Explore Full Inventory <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us — stats band */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container-wide grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {WHY_CHOOSE.map((w) => (
            <div key={w.label}>
              <p className="font-display text-5xl md:text-6xl text-primary-green mb-2">
                {w.stat}
              </p>
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {w.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary-green text-white">
        <div className="container-wide">
          <div className="flex flex-wrap justify-between items-end gap-8 mb-12">
            <SectionHeading
              eyebrow="Investor Perspectives"
              title={<>Voices of <span className="italic text-accent-green">confidence</span>.</>}
              inverted
            />
          </div>
          <TestimonialSlider items={testimonials} />
        </div>
      </section>

      {/* Areas */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="flex flex-wrap justify-between items-end gap-6 mb-16">
            <SectionHeading
              eyebrow="Areas We Serve"
              title={<>Anchored in <span className="italic">Kochi</span>.</>}
              description="A concentrated focus on the metropolitan region's most enduring corridors."
            />
            <Link
              to="/areas"
              className="text-primary-green font-bold uppercase text-[11px] tracking-[0.22em] pb-1 border-b border-primary-green/20 hover:text-accent-green hover:border-accent-green transition-colors"
            >
              All Areas →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.slice(0, 6).map((a) => (
              <article key={a.id} className="group cursor-pointer">
                <div className="relative aspect-[5/4] overflow-hidden mb-5">
                  {a.image_url && (
                    <img
                      src={a.image_url}
                      alt={a.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-green/70 via-primary-green/10 to-transparent" />
                  <h3 className="absolute bottom-5 left-5 font-display text-2xl text-white">
                    {a.name}
                  </h3>
                </div>
                {a.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {a.description}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog teaser */}
      {blog.length > 0 && (
        <section className="section-padding bg-beige-bg">
          <div className="container-wide">
            <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
              <SectionHeading
                eyebrow="Insights & Research"
                title={<>The <span className="italic">long view</span> on Kerala land.</>}
              />
              <Link
                to="/blog"
                className="text-primary-green font-bold uppercase text-[11px] tracking-[0.22em] pb-1 border-b border-primary-green/20 hover:text-accent-green hover:border-accent-green transition-colors"
              >
                All Insights →
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              {blog.slice(0, 2).map((post) => (
                <Link
                  key={post.id}
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="group block"
                >
                  {post.cover_image_url && (
                    <div className="aspect-[16/10] overflow-hidden mb-6">
                      <img
                        src={post.cover_image_url}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  )}
                  {post.category && (
                    <span className="eyebrow mb-3 block">{post.category}</span>
                  )}
                  <h3 className="font-display text-2xl md:text-3xl text-primary-heading-text group-hover:text-accent-green transition-colors mb-3">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
