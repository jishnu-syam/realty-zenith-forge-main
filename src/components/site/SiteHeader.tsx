import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/properties", label: "Plots" },
  { to: "/areas", label: "Areas" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span
            className={`flex h-9 w-9 items-center justify-center font-display text-lg font-bold transition-colors ${
              scrolled ? "bg-primary-green text-accent-green" : "bg-white/95 text-primary-green"
            }`}
          >
            C
          </span>
          <span
            className={`font-display text-xl font-bold tracking-tight transition-colors ${
              scrolled ? "text-primary-heading-text" : "text-white"
            }`}
          >
            Capital <span className="text-accent-green">Realty</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                scrolled ? "text-primary-heading-text/70 hover:text-primary-heading-text" : "text-white/80 hover:text-white"
              }`}
              activeProps={{
                className: `text-[11px] font-semibold uppercase tracking-[0.18em] ${
                  scrolled ? "text-primary-heading-text" : "text-white"
                }`,
              }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className={`hidden lg:inline-flex px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] transition-all ${
              scrolled
                ? "bg-primary-green text-white hover:bg-dark-hover-green hover:text-white"
                : "bg-accent-green text-white hover:bg-white hover:text-primary-green"
            }`}
          >
            Enquire Now
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden p-2 -mr-2 ${scrolled ? "text-primary-heading-text" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <nav className="container-wide py-6 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-heading-text/80 hover:text-primary-heading-text py-2"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center px-6 py-3 bg-primary-green text-white text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-dark-hover-green"
            >
              Enquire Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
