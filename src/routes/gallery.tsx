import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { galleryQuery } from "@/lib/queries";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Capital Realty" },
      { name: "description", content: "Visual portfolio of Capital Realty's land assets and site development work in Kochi." },
      { property: "og:title", content: "Gallery — Capital Realty" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(galleryQuery),
  component: GalleryPage,
});

function GalleryPage() {
  const { data: images } = useSuspenseQuery(galleryQuery);
  return (
    <>
      <section className="pt-40 pb-16 bg-navy text-white">
        <div className="container-wide">
          <span className="eyebrow text-gold">Visual Portfolio</span>
          <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.05]">
            <span className="italic text-gold">Land</span>, in detail.
          </h1>
        </div>
      </section>

      <section className="section-padding container-wide">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {images.map((img, i) => (
            <figure
              key={img.id}
              className={`relative overflow-hidden group ${
                i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={img.image_url}
                alt={img.caption ?? "Capital Realty"}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {img.caption && (
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent p-5 text-xs uppercase tracking-[0.18em] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
