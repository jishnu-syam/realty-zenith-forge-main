import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Capital Realty" },
      { name: "description", content: "Capital Realty is a Kochi-based land developer specialising in construction-ready plots and strategic land investment in Kerala." },
      { property: "og:title", content: "About — Capital Realty" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[480px] flex items-end pb-16 pt-32 overflow-hidden">
        <img src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary-green/65" />
        <div className="container-wide relative">
          <span className="eyebrow text-accent-green">About Capital Realty</span>
          <h1 className="mt-5 font-display text-5xl md:text-7xl text-white leading-[1.05] max-w-3xl">
            Land, considered <span className="italic text-accent-green">carefully</span>.
          </h1>
        </div>
      </section>

      <section className="section-padding container-wide">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <span className="eyebrow">Our Philosophy</span>
            <h2 className="mt-5 font-display text-4xl">A discipline, not a transaction.</h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Capital Realty was founded on a simple conviction: land is the most enduring
              asset in any portfolio, and it deserves the same diligence as any other
              institutional investment.
            </p>
            <p>
              We operate exclusively across the Kochi metropolitan region — Kakkanad,
              Edappally, Aluva, Kalamassery, Thrippunithura, and the Marine Drive belt —
              and we curate land that meets a precise set of legal, structural, and
              locational standards before it reaches our portfolio.
            </p>
            <p>
              Our clients are private buyers building family homes, NRI investors securing
              Kerala holdings, and institutions seeking land for considered development.
              What unites them is a preference for transparency, discipline, and quiet
              competence over noise.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-beige-bg">
        <div className="container-wide grid md:grid-cols-3 gap-10">
          {[
            { t: "Vision", b: "To be the most trusted name in Kerala land — the firm clients turn to first when permanence matters." },
            { t: "Mission", b: "To source, prepare, and transfer construction-ready land assets with institutional rigour and complete transparency." },
            { t: "Values", b: "Discretion. Diligence. Long-term thinking. A bias for substance over presentation in everything we deliver." },
          ].map((v) => (
            <div key={v.t} className="bg-background p-10">
              <span className="green-rule mb-6" />
              <h3 className="font-display text-2xl mb-4">{v.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding container-wide text-center">
        <h2 className="font-display text-4xl md:text-5xl max-w-2xl mx-auto leading-tight">
          Ready to explore a <span className="italic text-accent-green">Capital Realty</span> plot?
        </h2>
        <Link
          to="/contact"
          className="mt-10 inline-flex px-10 py-4 bg-primary-green text-white text-[11px] font-bold uppercase tracking-[0.22em] hover:bg-dark-hover-green hover:text-white transition-colors"
        >
          Speak with an Advisor
        </Link>
      </section>
    </>
  );
}
