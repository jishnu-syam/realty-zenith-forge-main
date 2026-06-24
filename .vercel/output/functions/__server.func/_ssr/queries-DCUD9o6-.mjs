import { t as supabase } from "./client-uDyzgJZQ.mjs";
import { n as queryOptions } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/queries-DCUD9o6-.js
async function fetchOrThrow(p) {
	const { data, error } = await p;
	if (error) throw new Error(error.message);
	return data ?? [];
}
var heroSlidesQuery = queryOptions({
	queryKey: ["hero_slides"],
	queryFn: () => fetchOrThrow(supabase.from("hero_slides").select("*").eq("published", true).order("position"))
});
var servicesQuery = queryOptions({
	queryKey: ["services"],
	queryFn: () => fetchOrThrow(supabase.from("services").select("*").eq("published", true).order("position"))
});
var propertiesQuery = queryOptions({
	queryKey: ["properties"],
	queryFn: () => fetchOrThrow(supabase.from("properties").select("*").eq("published", true).order("position"))
});
var featuredPropertiesQuery = queryOptions({
	queryKey: ["properties", "featured"],
	queryFn: () => fetchOrThrow(supabase.from("properties").select("*").eq("published", true).eq("featured", true).order("position"))
});
function propertyBySlugQuery(slug) {
	return queryOptions({
		queryKey: ["properties", slug],
		queryFn: async () => {
			const { data, error } = await supabase.from("properties").select("*").eq("slug", slug).eq("published", true).maybeSingle();
			if (error) throw new Error(error.message);
			return data;
		}
	});
}
var testimonialsQuery = queryOptions({
	queryKey: ["testimonials"],
	queryFn: () => fetchOrThrow(supabase.from("testimonials").select("*").eq("published", true).order("position"))
});
var galleryQuery = queryOptions({
	queryKey: ["gallery"],
	queryFn: () => fetchOrThrow(supabase.from("gallery_images").select("*").eq("published", true).order("position"))
});
var areasQuery = queryOptions({
	queryKey: ["areas"],
	queryFn: () => fetchOrThrow(supabase.from("areas").select("*").eq("published", true).order("position"))
});
var faqsQuery = queryOptions({
	queryKey: ["faqs"],
	queryFn: () => fetchOrThrow(supabase.from("faqs").select("*").eq("published", true).order("position"))
});
var blogQuery = queryOptions({
	queryKey: ["blog"],
	queryFn: () => fetchOrThrow(supabase.from("blog_posts").select("*").eq("published", true).order("published_at", { ascending: false }))
});
function blogBySlugQuery(slug) {
	return queryOptions({
		queryKey: ["blog", slug],
		queryFn: async () => {
			const { data, error } = await supabase.from("blog_posts").select("*").eq("slug", slug).eq("published", true).maybeSingle();
			if (error) throw new Error(error.message);
			return data;
		}
	});
}
var siteSettingsQuery = queryOptions({
	queryKey: ["site_settings"],
	queryFn: async () => {
		const { data, error } = await supabase.from("site_settings").select("id, value");
		if (error) throw new Error(error.message);
		const out = {};
		(data ?? []).forEach((row) => {
			out[row.id] = row.value ?? {};
		});
		return out;
	}
});
//#endregion
export { featuredPropertiesQuery as a, propertiesQuery as c, siteSettingsQuery as d, testimonialsQuery as f, faqsQuery as i, propertyBySlugQuery as l, blogBySlugQuery as n, galleryQuery as o, blogQuery as r, heroSlidesQuery as s, areasQuery as t, servicesQuery as u };
