import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { areasQuery } from "@/lib/queries";
import { Check } from "lucide-react";

export const Route = createFileRoute("/areas")({
  head: () => ({
    meta: [
      { title: "Areas We Serve — Capital Realty" },
      { name: "description", content: "Capital Realty operates across Kochi's most coveted corridors: Kakkanad, Edappally, Aluva, Kalamassery, Thrippunithura, Marine Drive." },
      { property: "og:title", content: "Areas We Serve — Capital Realty" },
      { property: "og:url", content: "/areas" },
    ],
    links: [{ rel: "canonical", href: "/areas" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(areasQuery),
  component: AreasPage,
});

function AreasPage() {
  const { data: areas } = useSuspenseQuery(areasQuery);
  return (
    <>
      <section className="pt-40 pb-16 bg-primary-green text-white">
        <div className="container-wide">
          <span className="eyebrow text-accent-green">Areas We Serve</span>
          <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl">
            Anchored in <span className="italic text-accent-green">Kochi</span>.
          </h1>
        </div>
      </section>

      <section className="section-padding container-wide space-y-24">
        {areas.map((a, i) => (
          <div key={a.id} className="grid lg:grid-cols-12 gap-10 items-center">
            <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              {a.image_url && (
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={a.image_url} alt={a.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
            <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <span className="eyebrow">Area {String(i + 1).padStart(2, "0")}</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl mb-5">{a.name}</h2>
              {a.description && (
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  {a.description}
                </p>
              )}
              {a.highlights && a.highlights.length > 0 && (
                <ul className="space-y-3">
                  {a.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <Check className="size-4 text-accent-green mt-1.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
