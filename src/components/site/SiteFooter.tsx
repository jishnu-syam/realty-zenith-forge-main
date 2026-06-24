import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { siteSettingsQuery } from "@/lib/queries";

export function SiteFooter() {
  const { data: settings } = useQuery(siteSettingsQuery);
  const contact = settings?.contact ?? {};
  const company = settings?.company ?? {};

  return (
    <footer className="bg-primary-green text-white">
      <div className="container-wide pt-20 pb-10">
        <div className="grid md:grid-cols-2 gap-12 items-center border-b border-white/10 pb-16 mb-16">
          <h2 className="font-display text-4xl md:text-5xl leading-[1.1]">
            Ready to secure your<br />
            future in <span className="italic text-accent-green">Kochi?</span>
          </h2>
          <div className="space-y-5">
            <p className="text-white/60 leading-relaxed">
              Speak with a property advisor for a private review of available plots and
              investment opportunities across the Kochi metropolitan region.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="px-7 py-4 bg-accent-green text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-primary-green transition-colors"
              >
                Start a Conversation
              </Link>
              <Link
                to="/properties"
                className="px-7 py-4 border border-white/20 text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-colors"
              >
                View Plots
              </Link>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 text-sm text-white/55">
          <div>
            <div className="flex items-center gap-2 text-white mb-5">
              <span className="flex h-7 w-7 items-center justify-center bg-accent-green text-white font-display font-bold">
                C
              </span>
              <span className="font-display font-bold text-lg">Capital Realty</span>
            </div>
            <p className="leading-relaxed">
              {company.description ??
                "Premium land development and strategic property investment across Kochi, Kerala."}
            </p>
          </div>

          <div>
            <h5 className="text-white font-bold uppercase text-[10px] tracking-[0.22em] mb-5">
              Portfolio
            </h5>
            <ul className="space-y-3.5">
              <li><Link to="/properties" className="hover:text-accent-green transition-colors">Available Plots</Link></li>
              <li><Link to="/areas" className="hover:text-accent-green transition-colors">Areas We Serve</Link></li>
              <li><Link to="/gallery" className="hover:text-accent-green transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold uppercase text-[10px] tracking-[0.22em] mb-5">
              Company
            </h5>
            <ul className="space-y-3.5">
              <li><Link to="/about" className="hover:text-accent-green transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-accent-green transition-colors">Services</Link></li>
              <li><Link to="/blog" className="hover:text-accent-green transition-colors">Insights</Link></li>
              <li><Link to="/faq" className="hover:text-accent-green transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold uppercase text-[10px] tracking-[0.22em] mb-5">
              Contact
            </h5>
            <ul className="space-y-3.5">
              {contact.email && <li>{contact.email}</li>}
              {contact.phone && <li>{contact.phone}</li>}
              {contact.address && <li className="leading-relaxed">{contact.address}</li>}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-[10px] uppercase tracking-[0.22em] text-white/40">
          <span>© {new Date().getFullYear()} Capital Realty. All rights reserved.</span>
          <div className="flex gap-6">
            <span>Kochi, Kerala</span>
            <Link to="/auth" className="hover:text-accent-green transition-colors">
              Staff Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
