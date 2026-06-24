import { j as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as blogBySlugQuery } from "./queries-C5ESjNyL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-h7vrlIS4.js
var $$splitErrorComponentImporter = () => import("./blog._slug-MRJR02wb.mjs");
var $$splitNotFoundComponentImporter = () => import("./blog._slug-CQBG9sUY.mjs");
var $$splitComponentImporter = () => import("./blog._slug-BzM73gcJ.mjs");
var Route = createFileRoute("/blog/$slug")({
	head: ({ params }) => ({
		meta: [
			{ title: `${params.slug} — Capital Realty` },
			{
				property: "og:type",
				content: "article"
			},
			{
				property: "og:url",
				content: `/blog/${params.slug}`
			}
		],
		links: [{
			rel: "canonical",
			href: `/blog/${params.slug}`
		}]
	}),
	loader: async ({ context, params }) => {
		const post = await context.queryClient.ensureQueryData(blogBySlugQuery(params.slug));
		if (!post) throw notFound();
		return post;
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent")
});
//#endregion
export { Route as t };
