import { r as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { T as ChartLine, g as ChevronLeft, h as ChevronRight, o as Quote, p as Compass, r as ShieldCheck, u as MapPin, w as Layers, x as ArrowRight, y as Building2 } from "../_libs/lucide-react.mjs";
import { a as featuredPropertiesQuery, f as testimonialsQuery, r as blogQuery, s as heroSlidesQuery, t as areasQuery, u as servicesQuery } from "./queries-C5ESjNyL.mjs";
import { t as PropertyCard } from "./PropertyCard-B1pWci9y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B8xrkdH8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HeroCarousel({ slides }) {
	const [active, setActive] = (0, import_react.useState)(0);
	const total = slides.length;
	(0, import_react.useEffect)(() => {
		if (total < 2) return;
		const t = setInterval(() => setActive((i) => (i + 1) % total), 6500);
		return () => clearInterval(t);
	}, [total]);
	if (total === 0) return null;
	const current = slides[active];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-screen min-h-[720px] overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				children: slides.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `absolute inset-0 transition-opacity duration-1000 ${i === active ? "opacity-100" : "opacity-0"}`,
					"aria-hidden": i !== active,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: s.image_url,
							alt: "",
							className: `h-full w-full object-cover ${i === active ? "animate-slow-zoom" : ""}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/55 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" })
					]
				}, s.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative h-full container-wide flex flex-col justify-center pt-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						current.eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "animate-fade-up flex items-center gap-4 mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-px w-12 bg-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold font-semibold tracking-[0.28em] uppercase text-[11px]",
								children: current.eyebrow
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "animate-fade-up font-display text-5xl md:text-7xl lg:text-[5.5rem] text-white leading-[1.05] tracking-tight mb-8",
							style: { animationDelay: "0.15s" },
							children: current.title
						}),
						current.subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "animate-fade-up text-lg md:text-xl text-white/80 font-light leading-relaxed mb-10 max-w-xl",
							style: { animationDelay: "0.3s" },
							children: current.subtitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "animate-fade-up flex flex-wrap gap-4",
							style: { animationDelay: "0.45s" },
							children: [current.cta_label && current.cta_href && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: current.cta_href,
								className: "px-8 py-4 bg-gold text-navy font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-white transition-colors",
								children: current.cta_label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "px-8 py-4 border border-white/30 text-white font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-white hover:text-navy transition-all",
								children: "Speak with an Advisor"
							})]
						})
					]
				}, current.id)
			}),
			total > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-10 right-6 md:right-10 z-10 flex items-center gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-2.5",
					children: slides.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActive(i),
						className: `h-px transition-all duration-500 ${i === active ? "bg-gold w-12" : "bg-white/40 w-6 hover:bg-white/70"}`,
						"aria-label": `Slide ${i + 1}`
					}, s.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActive((i) => (i - 1 + total) % total),
						className: "size-10 border border-white/30 text-white/80 hover:bg-white hover:text-navy transition-colors flex items-center justify-center",
						"aria-label": "Previous",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActive((i) => (i + 1) % total),
						className: "size-10 border border-white/30 text-white/80 hover:bg-white hover:text-navy transition-colors flex items-center justify-center",
						"aria-label": "Next",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-10 left-6 md:left-10 z-10 hidden md:flex items-center gap-3 text-white/50 text-[10px] uppercase tracking-[0.28em]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block w-10 h-px bg-white/40" }), "Scroll"]
			})
		]
	});
}
function TestimonialSlider({ items }) {
	const scroller = (0, import_react.useRef)(null);
	const [canPrev, setCanPrev] = (0, import_react.useState)(false);
	const [canNext, setCanNext] = (0, import_react.useState)(false);
	const update = (0, import_react.useCallback)(() => {
		const el = scroller.current;
		if (!el) return;
		setCanPrev(el.scrollLeft > 8);
		setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
	}, []);
	(0, import_react.useEffect)(() => {
		update();
		const el = scroller.current;
		if (!el) return;
		el.addEventListener("scroll", update, { passive: true });
		window.addEventListener("resize", update);
		return () => {
			el.removeEventListener("scroll", update);
			window.removeEventListener("resize", update);
		};
	}, [update, items.length]);
	const scrollBy = (dir) => {
		const el = scroller.current;
		if (!el) return;
		el.scrollBy({
			left: dir * (el.clientWidth * .85),
			behavior: "smooth"
		});
	};
	if (items.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: scroller,
			className: "flex gap-6 md:gap-8 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4",
			children: items.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "snap-start shrink-0 w-[88%] sm:w-[420px] bg-white/5 border border-white/10 p-8 md:p-10 backdrop-blur-sm flex flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
						className: "size-8 text-gold/70 mb-6",
						strokeWidth: 1.5
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display italic text-lg md:text-xl text-white leading-relaxed mb-8 flex-1",
						children: [
							"\"",
							t.quote,
							"\""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 pt-6 border-t border-white/10",
						children: [t.avatar_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: t.avatar_url,
							alt: t.author_name,
							loading: "lazy",
							className: "size-12 rounded-full object-cover grayscale"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-bold text-white text-sm",
							children: t.author_name
						}), t.author_role && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] uppercase tracking-[0.2em] text-gold/80 mt-0.5",
							children: t.author_role
						})] })]
					})
				]
			}, t.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-end gap-2 mt-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => scrollBy(-1),
				disabled: !canPrev,
				"aria-label": "Previous testimonial",
				className: "size-12 rounded-full border border-white/20 text-white/80 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white hover:text-navy transition-colors",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => scrollBy(1),
				disabled: !canNext,
				"aria-label": "Next testimonial",
				className: "size-12 rounded-full border border-gold bg-gold/0 text-gold flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gold hover:text-navy transition-colors",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
			})]
		})]
	});
}
function SectionEyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "eyebrow",
		children
	});
}
function SectionHeading({ eyebrow, title, description, align = "left", inverted = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} ${inverted ? "text-white" : ""}`,
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: align === "center" ? "flex justify-center mb-5" : "mb-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: eyebrow })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-4xl md:text-5xl leading-[1.1] tracking-tight",
				children: title
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-6 text-base md:text-lg leading-relaxed ${inverted ? "text-white/65" : "text-muted-foreground"}`,
				children: description
			})
		]
	});
}
var ICONS = {
	MapPin,
	Layers,
	Building2,
	ShieldCheck,
	Compass,
	LineChart: ChartLine
};
var PROCESS_STEPS = [
	{
		num: "01",
		title: "Strategic Sourcing",
		body: "Identifying high-potential land in prime corridors of Kakkanad, Edappally, Aluva, and Marine Drive."
	},
	{
		num: "02",
		title: "Legal Verification",
		body: "Rigorous 21-point title audit, encumbrance certificate review, and senior advocate opinion."
	},
	{
		num: "03",
		title: "Site Development",
		body: "Professional grading, drainage, internal road creation, boundary works, and utility readiness."
	},
	{
		num: "04",
		title: "Project Transfer",
		body: "Seamless registration, transparent documentation, and handover of construction-ready land."
	}
];
var WHY_CHOOSE = [
	{
		stat: "21-Pt",
		label: "Legal Title Audit"
	},
	{
		stat: "100%",
		label: "Construction-Ready Plots"
	},
	{
		stat: "12+",
		label: "Prime Kochi Corridors"
	},
	{
		stat: "500+",
		label: "Investors Advised"
	}
];
function HomePage() {
	const { data: slides } = useSuspenseQuery(heroSlidesQuery);
	const { data: services } = useSuspenseQuery(servicesQuery);
	const { data: featured } = useSuspenseQuery(featuredPropertiesQuery);
	const { data: testimonials } = useSuspenseQuery(testimonialsQuery);
	const { data: areas } = useSuspenseQuery(areasQuery);
	const { data: blog } = useSuspenseQuery(blogQuery);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroCarousel, { slides }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-padding bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-wide grid lg:grid-cols-12 gap-12 lg:gap-20 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "About Capital Realty"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-4xl md:text-5xl lg:text-6xl mt-5 leading-[1.05] tracking-tight",
						children: [
							"A measured approach to ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-gold",
								children: "Kerala land"
							}),
							"."
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7 space-y-6 text-lg leading-relaxed text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Capital Realty is a Kochi-headquartered land developer specialising in sourcing, preparing, and transferring construction-ready plots to discerning private and institutional investors." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Our discipline is uncomplicated: identify the right land, verify it exhaustively, prepare it to a build-ready standard, and transfer it with complete transparency. Every parcel is engineered for the day you decide to break ground." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/about",
							className: "inline-flex items-center gap-3 text-navy font-bold uppercase text-[11px] tracking-[0.22em] pb-2 border-b border-navy/20 hover:text-gold hover:border-gold transition-colors",
							children: ["Our Philosophy ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "services",
			className: "section-padding bg-mist",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-wide",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Our Disciplines",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Land services ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic",
							children: "engineered"
						}),
						" for permanence."
					] }),
					description: "From acquisition to handover, every step is delivered to an institutional standard."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-px mt-16 bg-border",
					children: services.map((s) => {
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-background p-10 group hover:bg-navy hover:text-white transition-colors duration-300",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-8 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon && ICONS[s.icon] || MapPin, {
										className: "size-7 text-gold",
										strokeWidth: 1.5
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display text-2xl text-navy/15 group-hover:text-white/20 transition-colors",
										children: ["0", services.indexOf(s) + 1]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl mb-3",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-relaxed text-muted-foreground group-hover:text-white/70 transition-colors",
									children: s.description
								})
							]
						}, s.id);
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-padding bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-wide",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "The Capital Realty Process",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Precision ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic",
							children: "at every stage"
						}),
						"."
					] }),
					description: "A meticulous four-step approach to delivering Kochi's finest construction-ready land."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16",
					children: PROCESS_STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `relative p-8 lg:p-10 bg-mist border-b-4 ${i === 0 ? "border-gold" : "border-navy"} group hover:-translate-y-1 transition-transform duration-300`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-5xl text-navy/15 mb-6 block",
								children: s.num
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-bold uppercase tracking-[0.18em] text-xs mb-4",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-muted-foreground",
								children: s.body
							})
						]
					}, s.num))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-padding bg-navy text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-wide",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center mb-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-gold",
							children: "Exclusive Opportunities"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-4xl md:text-6xl mt-5 leading-[1.05] tracking-tight",
							children: [
								"Curated ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-gold",
									children: "investment"
								}),
								" plots."
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid md:grid-cols-2 lg:grid-cols-3 gap-10",
						children: featured.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropertyCard, {
							property: p,
							inverted: true
						}, p.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/properties",
							className: "inline-flex items-center gap-3 px-10 py-4 border border-gold/40 text-gold font-bold uppercase text-[11px] tracking-[0.22em] hover:bg-gold hover:text-navy transition-colors",
							children: ["Explore Full Inventory ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 bg-background border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-wide grid sm:grid-cols-2 lg:grid-cols-4 gap-12",
				children: WHY_CHOOSE.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-5xl md:text-6xl text-navy mb-2",
					children: w.stat
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.22em] text-muted-foreground",
					children: w.label
				})] }, w.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-padding bg-navy text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-wide",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap justify-between items-end gap-8 mb-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Investor Perspectives",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"Voices of ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-gold",
								children: "confidence"
							}),
							"."
						] }),
						inverted: true
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialSlider, { items: testimonials })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-padding bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-wide",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap justify-between items-end gap-6 mb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Areas We Serve",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"Anchored in ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic",
								children: "Kochi"
							}),
							"."
						] }),
						description: "A concentrated focus on the metropolitan region's most enduring corridors."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/areas",
						className: "text-navy font-bold uppercase text-[11px] tracking-[0.22em] pb-1 border-b border-navy/20 hover:text-gold hover:border-gold transition-colors",
						children: "All Areas →"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
					children: areas.slice(0, 6).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[5/4] overflow-hidden mb-5",
							children: [
								a.image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: a.image_url,
									alt: a.name,
									loading: "lazy",
									className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "absolute bottom-5 left-5 font-display text-2xl text-white",
									children: a.name
								})
							]
						}), a.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground leading-relaxed",
							children: a.description
						})]
					}, a.id))
				})]
			})
		}),
		blog.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-padding bg-mist",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-wide",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap justify-between items-end gap-6 mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Insights & Research",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"The ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic",
								children: "long view"
							}),
							" on Kerala land."
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/blog",
						className: "text-navy font-bold uppercase text-[11px] tracking-[0.22em] pb-1 border-b border-navy/20 hover:text-gold hover:border-gold transition-colors",
						children: "All Insights →"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 gap-10",
					children: blog.slice(0, 2).map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog/$slug",
						params: { slug: post.slug },
						className: "group block",
						children: [
							post.cover_image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-[16/10] overflow-hidden mb-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: post.cover_image_url,
									alt: post.title,
									loading: "lazy",
									className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
								})
							}),
							post.category && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow mb-3 block",
								children: post.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl md:text-3xl text-navy group-hover:text-gold transition-colors mb-3",
								children: post.title
							}),
							post.excerpt && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground leading-relaxed",
								children: post.excerpt
							})
						]
					}, post.id))
				})]
			})
		})
	] });
}
//#endregion
export { HomePage as component };
