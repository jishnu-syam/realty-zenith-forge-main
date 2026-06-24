import { supabase } from "@/integrations/supabase/client";
import { queryOptions } from "@tanstack/react-query";
import type {
  Area,
  BlogPost,
  Faq,
  GalleryImage,
  HeroSlide,
  Property,
  Service,
  SiteSettingValue,
  Testimonial,
} from "./types";

async function fetchOrThrow<T>(p: Promise<{ data: T | null; error: { message: string } | null }>) {
  try {
    const { data, error } = await p;
    if (error) {
      console.warn(`[Supabase Fetch Warning] ${error.message}`);
      return [] as unknown as T;
    }
    return (data ?? []) as T;
  } catch (err) {
    console.warn(`[Supabase Connection Warning]`, err);
    return [] as unknown as T;
  }
}

export const heroSlidesQuery = queryOptions({
  queryKey: ["hero_slides"],
  queryFn: () =>
    fetchOrThrow<HeroSlide[]>(
      supabase.from("hero_slides").select("*").eq("published", true).order("position") as never,
    ),
});

export const servicesQuery = queryOptions({
  queryKey: ["services"],
  queryFn: () =>
    fetchOrThrow<Service[]>(
      supabase.from("services").select("*").eq("published", true).order("position") as never,
    ),
});

export const propertiesQuery = queryOptions({
  queryKey: ["properties"],
  queryFn: () =>
    fetchOrThrow<Property[]>(
      supabase.from("properties").select("*").eq("published", true).order("position") as never,
    ),
});

export const featuredPropertiesQuery = queryOptions({
  queryKey: ["properties", "featured"],
  queryFn: () =>
    fetchOrThrow<Property[]>(
      supabase
        .from("properties")
        .select("*")
        .eq("published", true)
        .eq("featured", true)
        .order("position") as never,
    ),
});

export function propertyBySlugQuery(slug: string) {
  return queryOptions({
    queryKey: ["properties", slug],
    queryFn: async () => {
      try {
        const { data, error } = await supabase
          .from("properties")
          .select("*")
          .eq("slug", slug)
          .eq("published", true)
          .maybeSingle();
        if (error) throw new Error(error.message);
        return data as Property | null;
      } catch (err) {
        console.warn(`[Supabase Query Warning] propertyBySlugQuery failed`, err);
        return null;
      }
    },
  });
}

export const testimonialsQuery = queryOptions({
  queryKey: ["testimonials"],
  queryFn: () =>
    fetchOrThrow<Testimonial[]>(
      supabase.from("testimonials").select("*").eq("published", true).order("position") as never,
    ),
});

export const galleryQuery = queryOptions({
  queryKey: ["gallery"],
  queryFn: () =>
    fetchOrThrow<GalleryImage[]>(
      supabase.from("gallery_images").select("*").eq("published", true).order("position") as never,
    ),
});

export const areasQuery = queryOptions({
  queryKey: ["areas"],
  queryFn: () =>
    fetchOrThrow<Area[]>(
      supabase.from("areas").select("*").eq("published", true).order("position") as never,
    ),
});

export const faqsQuery = queryOptions({
  queryKey: ["faqs"],
  queryFn: () =>
    fetchOrThrow<Faq[]>(
      supabase.from("faqs").select("*").eq("published", true).order("position") as never,
    ),
});

export const blogQuery = queryOptions({
  queryKey: ["blog"],
  queryFn: () =>
    fetchOrThrow<BlogPost[]>(
      supabase
        .from("blog_posts")
        .select("*")
        .eq("published", true)
        .order("published_at", { ascending: false }) as never,
    ),
});

export function blogBySlugQuery(slug: string) {
  return queryOptions({
    queryKey: ["blog", slug],
    queryFn: async () => {
      try {
        const { data, error } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("slug", slug)
          .eq("published", true)
          .maybeSingle();
        if (error) throw new Error(error.message);
        return data as BlogPost | null;
      } catch (err) {
        console.warn(`[Supabase Query Warning] blogBySlugQuery failed`, err);
        return null;
      }
    },
  });
}

export const siteSettingsQuery = queryOptions({
  queryKey: ["site_settings"],
  queryFn: async () => {
    try {
      const { data, error } = await supabase.from("site_settings").select("id, value");
      if (error) throw new Error(error.message);
      const out: Record<string, SiteSettingValue> = {};
      (data ?? []).forEach((row: { id: string; value: unknown }) => {
        out[row.id] = (row.value as SiteSettingValue) ?? {};
      });
      return out;
    } catch (err) {
      console.warn(`[Supabase Query Warning] siteSettingsQuery failed`, err);
      return {};
    }
  },
});
