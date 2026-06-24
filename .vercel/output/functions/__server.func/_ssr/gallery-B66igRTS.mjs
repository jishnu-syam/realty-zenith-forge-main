import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { o as galleryQuery } from "./queries-C5ESjNyL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-B66igRTS.js
var import_jsx_runtime = require_jsx_runtime();
function GalleryPage() {
	const { data: images } = useSuspenseQuery(galleryQuery);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pt-40 pb-16 bg-navy text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-wide",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow text-gold",
				children: "Visual Portfolio"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "mt-5 font-display text-5xl md:text-7xl leading-[1.05]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "italic text-gold",
					children: "Land"
				}), ", in detail."]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding container-wide",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4",
			children: images.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: `relative overflow-hidden group ${i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-[4/3]"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: img.image_url,
					alt: img.caption ?? "Capital Realty",
					loading: "lazy",
					className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
				}), img.caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent p-5 text-xs uppercase tracking-[0.18em] text-white opacity-0 group-hover:opacity-100 transition-opacity",
					children: img.caption
				})]
			}, img.id))
		})
	})] });
}
//#endregion
export { GalleryPage as component };
