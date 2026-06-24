import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { r as blogQuery } from "./queries-FsIT87cM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog.index-DBjOdpd5.js
var import_jsx_runtime = require_jsx_runtime();
function BlogIndex() {
	const { data: posts } = useSuspenseQuery(blogQuery);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pt-40 pb-16 bg-navy text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-wide",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow text-gold",
				children: "Insights & Research"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "mt-5 font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl",
				children: [
					"The long view on ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic text-gold",
						children: "Kerala land"
					}),
					"."
				]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding container-wide",
		children: posts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-center text-muted-foreground py-20",
			children: "New articles are coming soon."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid md:grid-cols-2 lg:grid-cols-3 gap-10",
			children: posts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/blog/$slug",
				params: { slug: p.slug },
				className: "group block",
				children: [
					p.cover_image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[16/10] overflow-hidden mb-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.cover_image_url,
							alt: p.title,
							loading: "lazy",
							className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
						})
					}),
					p.category && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow mb-2 block",
						children: p.category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl text-navy group-hover:text-gold transition-colors mb-2",
						children: p.title
					}),
					p.excerpt && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground leading-relaxed",
						children: p.excerpt
					})
				]
			}, p.id))
		})
	})] });
}
//#endregion
export { BlogIndex as component };
