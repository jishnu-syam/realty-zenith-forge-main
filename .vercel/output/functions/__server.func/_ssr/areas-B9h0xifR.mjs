import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { v as Check } from "../_libs/lucide-react.mjs";
import { t as areasQuery } from "./queries-C5ESjNyL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/areas-B9h0xifR.js
var import_jsx_runtime = require_jsx_runtime();
function AreasPage() {
	const { data: areas } = useSuspenseQuery(areasQuery);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pt-40 pb-16 bg-primary-green text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-wide",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow text-accent-green",
				children: "Areas We Serve"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "mt-5 font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl",
				children: [
					"Anchored in ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic text-accent-green",
						children: "Kochi"
					}),
					"."
				]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding container-wide space-y-24",
		children: areas.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid lg:grid-cols-12 gap-10 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`,
				children: a.image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-[4/3] overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: a.image_url,
						alt: a.name,
						loading: "lazy",
						className: "w-full h-full object-cover"
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "eyebrow",
						children: ["Area ", String(i + 1).padStart(2, "0")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-4xl md:text-5xl mb-5",
						children: a.name
					}),
					a.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg leading-relaxed text-muted-foreground mb-6",
						children: a.description
					}),
					a.highlights && a.highlights.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: a.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-accent-green mt-1.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: h })]
						}, h))
					})
				]
			})]
		}, a.id))
	})] });
}
//#endregion
export { AreasPage as component };
