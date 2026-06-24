import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { S as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as blogBySlugQuery } from "./queries-FsIT87cM.mjs";
import { t as Route } from "./blog._slug-Dtxeb1PJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-DAhjKZVt.js
var import_jsx_runtime = require_jsx_runtime();
function BlogPost() {
	const { data: post } = useSuspenseQuery(blogBySlugQuery(Route.useParams().slug));
	if (!post) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "pt-32 pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-wide max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog",
						className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-gold mb-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " Insights"]
					}),
					post.category && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow mb-4 block",
						children: post.category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl md:text-6xl leading-[1.05] mb-6",
						children: post.title
					}),
					post.author && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground mb-10",
						children: [
							"By ",
							post.author,
							post.published_at && ` • ${new Date(post.published_at).toLocaleDateString("en-IN", {
								year: "numeric",
								month: "long",
								day: "numeric"
							})}`
						]
					})
				]
			}),
			post.cover_image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-wide max-w-5xl my-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: post.cover_image_url,
					alt: post.title,
					className: "w-full aspect-[16/9] object-cover"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-wide max-w-3xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "prose prose-lg max-w-none text-lg leading-relaxed text-foreground/85 whitespace-pre-line",
					children: post.content
				})
			})
		]
	});
}
//#endregion
export { BlogPost as component };
