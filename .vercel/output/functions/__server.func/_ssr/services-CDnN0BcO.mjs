import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { T as ChartLine, p as Compass, r as ShieldCheck, u as MapPin, w as Layers, x as ArrowRight, y as Building2 } from "../_libs/lucide-react.mjs";
import { u as servicesQuery } from "./queries-DCUD9o6-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-CDnN0BcO.js
var import_jsx_runtime = require_jsx_runtime();
var ICONS = {
	MapPin,
	Layers,
	Building2,
	ShieldCheck,
	Compass,
	LineChart: ChartLine
};
function ServicesPage() {
	const { data: services } = useSuspenseQuery(servicesQuery);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pt-40 pb-20 bg-navy text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-wide",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow text-gold",
						children: "Our Disciplines"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-5 font-display text-5xl md:text-7xl max-w-3xl leading-[1.05]",
						children: [
							"Land services ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-gold",
								children: "engineered"
							}),
							" for permanence."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-lg text-white/70 max-w-2xl leading-relaxed",
						children: "Six disciplines, delivered to an institutional standard. Each one independently available, all of them combined in a Capital Realty engagement."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-padding container-wide",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid lg:grid-cols-2 gap-px bg-border",
				children: services.map((s, i) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-background p-10 lg:p-14 group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between mb-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon && ICONS[s.icon] || MapPin, {
									className: "size-8 text-gold",
									strokeWidth: 1.4
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-3xl text-navy/15",
									children: ["0", i + 1]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl mb-4",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground leading-relaxed",
								children: s.description
							})
						]
					}, s.id);
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-padding bg-mist text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-wide",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-4xl md:text-5xl max-w-2xl mx-auto leading-tight",
					children: [
						"Explore ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-gold",
							children: "construction-ready"
						}),
						" plots."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/properties",
					className: "mt-10 inline-flex items-center gap-3 px-10 py-4 bg-navy text-white text-[11px] font-bold uppercase tracking-[0.22em] hover:bg-gold hover:text-navy transition-colors",
					children: ["View Portfolio ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})]
			})
		})
	] });
}
//#endregion
export { ServicesPage as component };
