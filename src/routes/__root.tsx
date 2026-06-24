import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Toaster } from "@/components/ui/sonner";
import { supabase } from "@/integrations/supabase/client";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow mb-4">404</p>
        <h1 className="font-display text-5xl text-navy mb-3">Page not found</h1>
        <p className="text-muted-foreground mb-8">
          The page you're looking for has moved or doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center bg-navy text-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-navy transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow mb-4">Error</p>
        <h1 className="font-display text-4xl text-navy mb-3">This page didn't load</h1>
        <p className="text-muted-foreground mb-8">
          Something went wrong. Try refreshing or return home.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex bg-navy text-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-navy transition-colors"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex border border-navy/20 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-navy hover:text-white transition-colors"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Capital Realty — Premier Land Developers in Kochi" },
      {
        name: "description",
        content:
          "Capital Realty curates and develops construction-ready land assets across Kerala's most coveted corridors — Kakkanad, Marine Drive, Aluva, and beyond.",
      },
      { name: "author", content: "Capital Realty" },
      { property: "og:title", content: "Capital Realty — Premier Land Developers in Kochi" },
      {
        property: "og:description",
        content:
          "Construction-ready plots, institutional-grade land development, and strategic property investment in Kochi.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Capital Realty" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0F172A" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Inter:wght@300;400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.ico" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: "Capital Realty",
          areaServed: "Kochi, Kerala, India",
          description:
            "Premier land developers offering construction-ready plots in Kochi, Kerala.",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isAdmin = pathname.startsWith("/admin") || pathname.startsWith("/auth");

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN" || event === "SIGNED_OUT" || event === "USER_UPDATED") {
        router.invalidate();
        if (event !== "SIGNED_OUT") queryClient.invalidateQueries();
      }
    });
    return () => data.subscription.unsubscribe();
  }, [router, queryClient]);

  return (
    <QueryClientProvider client={queryClient}>
      {!isAdmin && <SiteHeader />}
      <main className={isAdmin ? "" : "min-h-screen"}>
        <Outlet />
      </main>
      {!isAdmin && <SiteFooter />}
      <Toaster />
    </QueryClientProvider>
  );
}
