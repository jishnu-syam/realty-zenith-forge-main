import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const supabase = createClient(
          process.env.SUPABASE_URL!,
          process.env.SUPABASE_PUBLISHABLE_KEY!,
          { auth: { storage: undefined, persistSession: false, autoRefreshToken: false } },
        );

        const [{ data: props }, { data: posts }] = await Promise.all([
          supabase.from("properties").select("slug, updated_at").eq("published", true),
          supabase.from("blog_posts").select("slug, updated_at").eq("published", true),
        ]);

        const statics = ["/", "/about", "/services", "/properties", "/areas", "/gallery", "/faq", "/blog", "/contact"];
        const urls: { loc: string; lastmod?: string }[] = statics.map((p) => ({ loc: p }));
        (props ?? []).forEach((p) =>
          urls.push({ loc: `/properties/${p.slug}`, lastmod: p.updated_at as string }),
        );
        (posts ?? []).forEach((p) =>
          urls.push({ loc: `/blog/${p.slug}`, lastmod: p.updated_at as string }),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls.map((u) =>
            [
              `  <url>`,
              `    <loc>${BASE_URL}${u.loc}</loc>`,
              u.lastmod ? `    <lastmod>${u.lastmod}</lastmod>` : null,
              `  </url>`,
            ].filter(Boolean).join("\n"),
          ),
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
