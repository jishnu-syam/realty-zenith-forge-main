import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { c as propertiesQuery } from "./queries-C5ESjNyL.mjs";
import { t as PropertyCard } from "./PropertyCard-B1pWci9y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/properties.index-JtKvTa0S.js
var import_jsx_runtime = require_jsx_runtime();
function PropertiesPage() {
	const { data: properties } = useSuspenseQuery(propertiesQuery);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pt-40 pb-16 bg-navy text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-wide",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow text-gold",
					children: "Portfolio"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-5 font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl",
					children: [
						"Available ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-gold",
							children: "plots"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-lg text-white/70 max-w-2xl leading-relaxed",
					children: "Every parcel in our portfolio is independently verified, site-prepared, and ready for immediate construction."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "section-padding container-wide",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid md:grid-cols-2 lg:grid-cols-3 gap-10",
			children: properties.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PropertyCard, { property: p }, p.id))
		}), properties.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-center text-muted-foreground py-20",
			children: "No plots currently published. Please check back soon."
		})]
	})] });
}
//#endregion
export { PropertiesPage as component };
