import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { S as ArrowLeft, u as MapPin, v as Check } from "../_libs/lucide-react.mjs";
import { l as propertyBySlugQuery } from "./queries-DCUD9o6-.mjs";
import { t as Route } from "./properties._slug-CIA7FLDd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/properties._slug-Cv8Y9JbK.js
var import_jsx_runtime = require_jsx_runtime();
function PropertyDetail() {
	const { data: property } = useSuspenseQuery(propertyBySlugQuery(Route.useParams().slug));
	if (!property) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "pt-32 pb-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-wide",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/properties",
				className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-gold mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " All Plots"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-wide grid lg:grid-cols-12 gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-[4/3] overflow-hidden bg-mist",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: property.image_url,
						alt: property.title,
						className: "w-full h-full object-cover"
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "lg:col-span-4 lg:sticky lg:top-32 self-start",
				children: [
					property.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block bg-gold text-navy px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] mb-5",
						children: property.badge
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl md:text-5xl mb-4 leading-tight",
						children: property.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 text-muted-foreground mb-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" }),
							" ",
							property.location
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-4 mb-10 pb-10 border-b border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
								label: "Plot Size",
								value: property.plot_size
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
								label: "Status",
								value: property.status
							}),
							property.price && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
								label: "Price",
								value: property.price
							}),
							property.area && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
								label: "Area",
								value: property.area
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "block text-center px-8 py-4 bg-navy text-white font-bold uppercase text-[11px] tracking-[0.22em] hover:bg-gold hover:text-navy transition-colors",
						children: "Enquire About This Plot"
					})
				]
			})]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "section-padding container-wide grid lg:grid-cols-12 gap-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:col-span-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "About this plot"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-3xl mb-6",
					children: property.description
				}),
				property.long_description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-lg leading-relaxed text-muted-foreground whitespace-pre-line",
					children: property.long_description
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:col-span-5",
			children: property.features && property.features.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-mist p-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "Features"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-4",
					children: property.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-gold mt-1.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f })]
					}, f))
				})]
			})
		})]
	})] });
}
function Detail({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-1",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "font-display text-xl capitalize",
		children: value
	})] });
}
//#endregion
export { PropertyDetail as component };
