import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { blogBySlugQuery } from "@/lib/queries";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug} — Capital Realty` },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `/blog/${params.slug}` },
    ],
    links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
  }),
  loader: async ({ context, params }) => {
    const post = await context.queryClient.ensureQueryData(blogBySlugQuery(params.slug));
    if (!post) throw notFound();
    return post;
  },
  component: BlogPost,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center text-center px-6 pt-20">
      <div>
        <h1 className="font-display text-4xl">Article not found</h1>
        <Link to="/blog" className="mt-6 inline-flex text-accent-green underline">
          ← Back to insights
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center text-center px-6 pt-20">
      <p>{error.message}</p>
    </div>
  ),
});

function BlogPost() {
  const params = Route.useParams();
  const { data: post } = useSuspenseQuery(blogBySlugQuery(params.slug));
  if (!post) return null;

  return (
    <article className="pt-32 pb-24">
      <div className="container-wide max-w-3xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-accent-green mb-10"
        >
          <ArrowLeft className="size-4" /> Insights
        </Link>
        {post.category && <span className="eyebrow mb-4 block">{post.category}</span>}
        <h1 className="font-display text-4xl md:text-6xl leading-[1.05] mb-6">{post.title}</h1>
        {post.author && (
          <p className="text-sm text-muted-foreground mb-10">
            By {post.author}
            {post.published_at &&
              ` • ${new Date(post.published_at).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}`}
          </p>
        )}
      </div>
      {post.cover_image_url && (
        <div className="container-wide max-w-5xl my-12">
          <img
            src={post.cover_image_url}
            alt={post.title}
            className="w-full aspect-[16/9] object-cover"
          />
        </div>
      )}
      <div className="container-wide max-w-3xl">
        <div className="prose prose-lg max-w-none text-lg leading-relaxed text-foreground/85 whitespace-pre-line">
          {post.content}
        </div>
      </div>
    </article>
  );
}
