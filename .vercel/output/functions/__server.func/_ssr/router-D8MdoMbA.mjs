import { r as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { I as useRouter, O as redirect, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as supabase, t as createClient } from "./client-CLMpBxHv.mjs";
import { n as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { a as QueryClientProvider, i as useQuery } from "../_libs/tanstack__react-query.mjs";
import { l as Menu, t as X } from "../_libs/lucide-react.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { a as featuredPropertiesQuery, c as propertiesQuery, d as siteSettingsQuery, f as testimonialsQuery, i as faqsQuery, o as galleryQuery, r as blogQuery, s as heroSlidesQuery, t as areasQuery, u as servicesQuery } from "./queries-De83JLO2.mjs";
import { t as Route$16 } from "./blog._slug-Co8uf_ST.mjs";
import { t as Route$17 } from "./properties._slug-CV_V3KW7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D8MdoMbA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-C-owL_q3.css";
var NAV_LINKS = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/properties",
		label: "Plots"
	},
	{
		to: "/areas",
		label: "Areas"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/blog",
		label: "Insights"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteHeader() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-wide flex h-20 items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2.5 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `flex h-9 w-9 items-center justify-center font-display text-lg font-bold transition-colors ${scrolled ? "bg-navy text-gold" : "bg-white/95 text-navy"}`,
						children: "C"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: `font-display text-xl font-bold tracking-tight transition-colors ${scrolled ? "text-navy" : "text-white"}`,
						children: ["Capital ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold",
							children: "Realty"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-8",
					children: NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: `text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors ${scrolled ? "text-navy/70 hover:text-navy" : "text-white/80 hover:text-white"}`,
						activeProps: { className: `text-[11px] font-semibold uppercase tracking-[0.18em] ${scrolled ? "text-navy" : "text-white"}` },
						activeOptions: { exact: true },
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: `hidden lg:inline-flex px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] transition-all ${scrolled ? "bg-navy text-white hover:bg-gold hover:text-navy" : "bg-gold text-navy hover:bg-white"}`,
						children: "Enquire Now"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen((v) => !v),
						className: `lg:hidden p-2 -mr-2 ${scrolled ? "text-navy" : "text-white"}`,
						"aria-label": "Toggle menu",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-6" })
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:hidden bg-background border-t border-border animate-fade-in",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "container-wide py-6 flex flex-col gap-4",
				children: [NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					onClick: () => setOpen(false),
					className: "text-sm font-semibold uppercase tracking-[0.18em] text-navy/80 hover:text-navy py-2",
					children: l.label
				}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					onClick: () => setOpen(false),
					className: "mt-2 inline-flex justify-center px-6 py-3 bg-navy text-white text-[11px] font-bold uppercase tracking-[0.18em]",
					children: "Enquire Now"
				})]
			})
		})]
	});
}
function SiteFooter() {
	const { data: settings } = useQuery(siteSettingsQuery);
	const contact = settings?.contact ?? {};
	const company = settings?.company ?? {};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-navy text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-wide pt-20 pb-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid md:grid-cols-2 gap-12 items-center border-b border-white/10 pb-16 mb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-4xl md:text-5xl leading-[1.1]",
						children: [
							"Ready to secure your",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"future in ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-gold",
								children: "Kochi?"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-white/60 leading-relaxed",
							children: "Speak with a property advisor for a private review of available plots and investment opportunities across the Kochi metropolitan region."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "px-7 py-4 bg-gold text-navy text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors",
								children: "Start a Conversation"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/properties",
								className: "px-7 py-4 border border-white/20 text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-colors",
								children: "View Plots"
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid md:grid-cols-4 gap-12 text-sm text-white/55",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-white mb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-7 w-7 items-center justify-center bg-gold text-navy font-display font-bold",
								children: "C"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display font-bold text-lg",
								children: "Capital Realty"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "leading-relaxed",
							children: company.description ?? "Premium land development and strategic property investment across Kochi, Kerala."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
							className: "text-white font-bold uppercase text-[10px] tracking-[0.22em] mb-5",
							children: "Portfolio"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/properties",
									className: "hover:text-gold transition-colors",
									children: "Available Plots"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/areas",
									className: "hover:text-gold transition-colors",
									children: "Areas We Serve"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/gallery",
									className: "hover:text-gold transition-colors",
									children: "Gallery"
								}) })
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
							className: "text-white font-bold uppercase text-[10px] tracking-[0.22em] mb-5",
							children: "Company"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/about",
									className: "hover:text-gold transition-colors",
									children: "About"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/services",
									className: "hover:text-gold transition-colors",
									children: "Services"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/blog",
									className: "hover:text-gold transition-colors",
									children: "Insights"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/faq",
									className: "hover:text-gold transition-colors",
									children: "FAQ"
								}) })
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
							className: "text-white font-bold uppercase text-[10px] tracking-[0.22em] mb-5",
							children: "Contact"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3.5",
							children: [
								contact.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: contact.email }),
								contact.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: contact.phone }),
								contact.address && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "leading-relaxed",
									children: contact.address
								})
							]
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-[10px] uppercase tracking-[0.22em] text-white/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Capital Realty. All rights reserved."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Kochi, Kerala" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/auth",
							className: "hover:text-gold transition-colors",
							children: "Staff Login"
						})]
					})]
				})
			]
		})
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-4",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-5xl text-navy mb-3",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground mb-8",
					children: "The page you're looking for has moved or doesn't exist."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "inline-flex items-center justify-center bg-navy text-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-navy transition-colors",
					children: "Return Home"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-4",
					children: "Error"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl text-navy mb-3",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground mb-8",
					children: "Something went wrong. Try refreshing or return home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex bg-navy text-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-navy transition-colors",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex border border-navy/20 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-navy hover:text-white transition-colors",
						children: "Home"
					})]
				})
			]
		})
	});
}
var Route$15 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Capital Realty — Premier Land Developers in Kochi" },
			{
				name: "description",
				content: "Capital Realty curates and develops construction-ready land assets across Kerala's most coveted corridors — Kakkanad, Marine Drive, Aluva, and beyond."
			},
			{
				name: "author",
				content: "Capital Realty"
			},
			{
				property: "og:title",
				content: "Capital Realty — Premier Land Developers in Kochi"
			},
			{
				property: "og:description",
				content: "Construction-ready plots, institutional-grade land development, and strategic property investment in Kochi."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "Capital Realty"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#0F172A"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "RealEstateAgent",
				name: "Capital Realty",
				areaServed: "Kochi, Kerala, India",
				description: "Premier land developers offering construction-ready plots in Kochi, Kerala."
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$15.useRouteContext();
	const router = useRouter();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const isAdmin = pathname.startsWith("/admin") || pathname.startsWith("/auth");
	(0, import_react.useEffect)(() => {
		const { data } = supabase.auth.onAuthStateChange((event) => {
			if (event === "SIGNED_IN" || event === "SIGNED_OUT" || event === "USER_UPDATED") {
				router.invalidate();
				if (event !== "SIGNED_OUT") queryClient.invalidateQueries();
			}
		});
		return () => data.subscription.unsubscribe();
	}, [router, queryClient]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			!isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: isAdmin ? "" : "min-h-screen",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			!isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})
		]
	});
}
var BASE_URL = "";
var Route$14 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	let props = [];
	let posts = [];
	const url = process.env.SUPABASE_URL;
	const key = process.env.SUPABASE_PUBLISHABLE_KEY;
	if (url && key) try {
		const supabase = createClient(url, key, { auth: {
			storage: void 0,
			persistSession: false,
			autoRefreshToken: false
		} });
		const [{ data: propsData }, { data: postsData }] = await Promise.all([supabase.from("properties").select("slug, updated_at").eq("published", true), supabase.from("blog_posts").select("slug, updated_at").eq("published", true)]);
		props = propsData ?? [];
		posts = postsData ?? [];
	} catch (e) {
		console.warn("Failed to fetch sitemap entries from database:", e);
	}
	const urls = [
		"/",
		"/about",
		"/services",
		"/properties",
		"/areas",
		"/gallery",
		"/faq",
		"/blog",
		"/contact"
	].map((p) => ({ loc: p }));
	(props ?? []).forEach((p) => urls.push({
		loc: `/properties/${p.slug}`,
		lastmod: p.updated_at
	}));
	(posts ?? []).forEach((p) => urls.push({
		loc: `/blog/${p.slug}`,
		lastmod: p.updated_at
	}));
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...urls.map((u) => [
			`  <url>`,
			`    <loc>${BASE_URL}${u.loc}</loc>`,
			u.lastmod ? `    <lastmod>${u.lastmod}</lastmod>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$13 = () => import("./services-D_e7M0mo.mjs");
var Route$13 = createFileRoute("/services")({
	head: () => ({
		meta: [
			{ title: "Land Services — Capital Realty" },
			{
				name: "description",
				content: "Land acquisition, plot development, legal verification and investment advisory for Kochi real estate."
			},
			{
				property: "og:title",
				content: "Land Services — Capital Realty"
			},
			{
				property: "og:url",
				content: "/services"
			}
		],
		links: [{
			rel: "canonical",
			href: "/services"
		}]
	}),
	loader: ({ context }) => context.queryClient.ensureQueryData(servicesQuery),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./properties-Cv1DRjK4.mjs");
var Route$12 = createFileRoute("/properties")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./gallery-DJisb3zZ.mjs");
var Route$11 = createFileRoute("/gallery")({
	head: () => ({
		meta: [
			{ title: "Gallery — Capital Realty" },
			{
				name: "description",
				content: "Visual portfolio of Capital Realty's land assets and site development work in Kochi."
			},
			{
				property: "og:title",
				content: "Gallery — Capital Realty"
			},
			{
				property: "og:url",
				content: "/gallery"
			}
		],
		links: [{
			rel: "canonical",
			href: "/gallery"
		}]
	}),
	loader: ({ context }) => context.queryClient.ensureQueryData(galleryQuery),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./faq-DRjihrjQ.mjs");
var Route$10 = createFileRoute("/faq")({
	head: () => ({
		meta: [
			{ title: "Frequently Asked Questions — Capital Realty" },
			{
				name: "description",
				content: "Common questions about buying construction-ready plots in Kochi, NRI investment, legal verification and registration."
			},
			{
				property: "og:title",
				content: "FAQ — Capital Realty"
			},
			{
				property: "og:url",
				content: "/faq"
			}
		],
		links: [{
			rel: "canonical",
			href: "/faq"
		}]
	}),
	loader: ({ context }) => context.queryClient.ensureQueryData(faqsQuery),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./contact-CWRS_inZ.mjs");
var Route$9 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact Capital Realty — Kochi, Kerala" },
			{
				name: "description",
				content: "Speak with a Capital Realty property advisor about construction-ready plots in Kochi."
			},
			{
				property: "og:title",
				content: "Contact — Capital Realty"
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	loader: ({ context }) => context.queryClient.ensureQueryData(siteSettingsQuery),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./blog-GHsbigBI.mjs");
var Route$8 = createFileRoute("/blog")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./auth-C5v9-F0C.mjs");
var Route$7 = createFileRoute("/auth")({
	head: () => ({ meta: [{ title: "Staff Sign In — Capital Realty" }, {
		name: "robots",
		content: "noindex,nofollow"
	}] }),
	beforeLoad: async () => {
		if (typeof window === "undefined") return;
		const { data } = await supabase.auth.getSession();
		if (data.session) throw redirect({ to: "/admin" });
	},
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./areas-BvhtOQ7l.mjs");
var Route$6 = createFileRoute("/areas")({
	head: () => ({
		meta: [
			{ title: "Areas We Serve — Capital Realty" },
			{
				name: "description",
				content: "Capital Realty operates across Kochi's most coveted corridors: Kakkanad, Edappally, Aluva, Kalamassery, Thrippunithura, Marine Drive."
			},
			{
				property: "og:title",
				content: "Areas We Serve — Capital Realty"
			},
			{
				property: "og:url",
				content: "/areas"
			}
		],
		links: [{
			rel: "canonical",
			href: "/areas"
		}]
	}),
	loader: ({ context }) => context.queryClient.ensureQueryData(areasQuery),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./about-ByfEHekT.mjs");
var Route$5 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About — Capital Realty" },
			{
				name: "description",
				content: "Capital Realty is a Kochi-based land developer specialising in construction-ready plots and strategic land investment in Kerala."
			},
			{
				property: "og:title",
				content: "About — Capital Realty"
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./route-Di7iQBCH.mjs");
var Route$4 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		const { data, error } = await supabase.auth.getUser();
		if (error || !data.user) throw redirect({ to: "/auth" });
		return { user: data.user };
	},
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitErrorComponentImporter = () => import("./routes-aL1W3kml.mjs");
var $$splitComponentImporter$3 = () => import("./routes-DisVfzfP.mjs");
var Route$3 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Capital Realty — Premier Land Developers in Kochi, Kerala" },
			{
				name: "description",
				content: "Construction-ready plots in Kakkanad, Marine Drive, Aluva, Edappally and Thrippunithura. Institutional-grade land development by Capital Realty."
			},
			{
				property: "og:title",
				content: "Capital Realty — Premier Land Developers in Kochi"
			},
			{
				property: "og:description",
				content: "Construction-ready plots and institutional-grade land development in Kochi, Kerala."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	loader: ({ context }) => Promise.all([
		context.queryClient.ensureQueryData(heroSlidesQuery),
		context.queryClient.ensureQueryData(servicesQuery),
		context.queryClient.ensureQueryData(featuredPropertiesQuery),
		context.queryClient.ensureQueryData(testimonialsQuery),
		context.queryClient.ensureQueryData(faqsQuery),
		context.queryClient.ensureQueryData(areasQuery),
		context.queryClient.ensureQueryData(blogQuery)
	]),
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent")
});
var $$splitComponentImporter$2 = () => import("./properties.index-Dsf4BTbj.mjs");
var Route$2 = createFileRoute("/properties/")({
	head: () => ({
		meta: [
			{ title: "Available Plots — Capital Realty" },
			{
				name: "description",
				content: "Browse construction-ready plots across Kakkanad, Edappally, Aluva, Thrippunithura and Marine Drive."
			},
			{
				property: "og:title",
				content: "Available Plots — Capital Realty"
			},
			{
				property: "og:url",
				content: "/properties"
			}
		],
		links: [{
			rel: "canonical",
			href: "/properties"
		}]
	}),
	loader: ({ context }) => context.queryClient.ensureQueryData(propertiesQuery),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./blog.index-D7XmdzNT.mjs");
var Route$1 = createFileRoute("/blog/")({
	head: () => ({
		meta: [
			{ title: "Insights & Research — Capital Realty" },
			{
				name: "description",
				content: "Capital Realty's research on the Kochi land market, investment outlook and buyer guides."
			},
			{
				property: "og:title",
				content: "Insights — Capital Realty"
			},
			{
				property: "og:url",
				content: "/blog"
			}
		],
		links: [{
			rel: "canonical",
			href: "/blog"
		}]
	}),
	loader: ({ context }) => context.queryClient.ensureQueryData(blogQuery),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./admin-r9Pzzpsf.mjs");
var Route = createFileRoute("/_authenticated/admin")({
	head: () => ({ meta: [{ title: "Admin — Capital Realty" }, {
		name: "robots",
		content: "noindex,nofollow"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SitemapDotxmlRoute = Route$14.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$15
});
var ServicesRoute = Route$13.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$15
});
var PropertiesRoute = Route$12.update({
	id: "/properties",
	path: "/properties",
	getParentRoute: () => Route$15
});
var GalleryRoute = Route$11.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$15
});
var FaqRoute = Route$10.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$15
});
var ContactRoute = Route$9.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$15
});
var BlogRoute = Route$8.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$15
});
var AuthRoute = Route$7.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$15
});
var AreasRoute = Route$6.update({
	id: "/areas",
	path: "/areas",
	getParentRoute: () => Route$15
});
var AboutRoute = Route$5.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$15
});
var AuthenticatedRouteRoute = Route$4.update({
	id: "/_authenticated",
	getParentRoute: () => Route$15
});
var IndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$15
});
var PropertiesIndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => PropertiesRoute
});
var BlogIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => BlogRoute
});
var PropertiesSlugRoute = Route$17.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => PropertiesRoute
});
var BlogSlugRoute = Route$16.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => BlogRoute
});
var AuthenticatedRouteRouteChildren = { AuthenticatedAdminRoute: Route.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => AuthenticatedRouteRoute
}) };
var AuthenticatedRouteRouteWithChildren = AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren);
var BlogRouteChildren = {
	BlogSlugRoute,
	BlogIndexRoute
};
var BlogRouteWithChildren = BlogRoute._addFileChildren(BlogRouteChildren);
var PropertiesRouteChildren = {
	PropertiesSlugRoute,
	PropertiesIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRouteWithChildren,
	AboutRoute,
	AreasRoute,
	AuthRoute,
	BlogRoute: BlogRouteWithChildren,
	ContactRoute,
	FaqRoute,
	GalleryRoute,
	PropertiesRoute: PropertiesRoute._addFileChildren(PropertiesRouteChildren),
	ServicesRoute,
	SitemapDotxmlRoute
};
var routeTree = Route$15._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
