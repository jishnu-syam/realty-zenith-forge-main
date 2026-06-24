import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PropertyCard-Co3RKlI9.js
var import_jsx_runtime = require_jsx_runtime();
function PropertyCard({ property, inverted = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/properties/$slug",
		params: { slug: property.slug },
		className: "group block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/3] overflow-hidden mb-6 bg-beige-bg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: property.image_url,
					alt: property.title,
					loading: "lazy",
					className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
				}),
				property.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute top-4 left-4 bg-accent-green text-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em]",
					children: property.badge
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-primary-green/0 group-hover:bg-primary-green/15 transition-colors" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bottom-4 right-4 size-10 bg-accent-green text-white flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex justify-between items-start gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: `font-display text-xl mb-1 ${inverted ? "text-white" : "text-primary-heading-text"} group-hover:text-accent-green transition-colors`,
					children: property.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: `text-xs uppercase tracking-[0.18em] ${inverted ? "text-white/50" : "text-muted-foreground"}`,
					children: [
						property.plot_size,
						" • ",
						property.location
					]
				})]
			}), property.price && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-right",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-accent-green font-bold italic font-display",
					children: property.price
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `text-[10px] uppercase tracking-[0.18em] ${inverted ? "text-white/40" : "text-muted-foreground"}`,
					children: property.status
				})]
			})]
		})]
	});
}
//#endregion
export { PropertyCard as t };
