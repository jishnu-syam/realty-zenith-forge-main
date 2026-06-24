import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { blogQuery } from "@/lib/queries";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Insights & Research — Capital Realty" },
      { name: "description", content: "Capital Realty's research on the Kochi land market, investment outlook and buyer guides." },
      { property: "og:title", content: "Insights — Capital Realty" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(blogQuery),
  component: BlogIndex,
});

function BlogIndex() {
  const { data: posts } = useSuspenseQuery(blogQuery);
  return (
    <>
      <section className="pt-40 pb-16 bg-navy text-white">
        <div className="container-wide">
          <span className="eyebrow text-gold">Insights & Research</span>
          <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl">
            The long view on <span className="italic text-gold">Kerala land</span>.
          </h1>
        </div>
      </section>

      <section className="section-padding container-wide">
        {posts.length === 0 ? (
          <p className="text-center text-muted-foreground py-20">
            New articles are coming soon.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((p) => (
              <Link
                key={p.id}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group block"
              >
                {p.cover_image_url && (
                  <div className="aspect-[16/10] overflow-hidden mb-6">
                    <img
                      src={p.cover_image_url}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
                {p.category && <span className="eyebrow mb-2 block">{p.category}</span>}
                <h2 className="font-display text-2xl text-navy group-hover:text-gold transition-colors mb-2">
                  {p.title}
                </h2>
                {p.excerpt && <p className="text-muted-foreground leading-relaxed">{p.excerpt}</p>}
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
