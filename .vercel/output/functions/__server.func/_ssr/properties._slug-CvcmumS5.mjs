import { j as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as propertyBySlugQuery } from "./queries-C5ESjNyL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/properties._slug-CvcmumS5.js
var $$splitErrorComponentImporter = () => import("./properties._slug-c1SKETX3.mjs");
var $$splitNotFoundComponentImporter = () => import("./properties._slug-C55tF4_m.mjs");
var $$splitComponentImporter = () => import("./properties._slug-GGGMlNYu.mjs");
var Route = createFileRoute("/properties/$slug")({
	head: ({ params }) => ({
		meta: [{ title: `Plot ${params.slug} — Capital Realty` }, {
			property: "og:url",
			content: `/properties/${params.slug}`
		}],
		links: [{
			rel: "canonical",
			href: `/properties/${params.slug}`
		}]
	}),
	loader: async ({ context, params }) => {
		const data = await context.queryClient.ensureQueryData(propertyBySlugQuery(params.slug));
		if (!data) throw notFound();
		return data;
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent")
});
//#endregion
export { Route as t };
