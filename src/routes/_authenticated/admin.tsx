import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AdminCrud, type FieldDef } from "@/components/admin/AdminCrud";
import { LogOut, ShieldAlert } from "lucide-react";
import { toast } from "sonner";

type Section =
  | "hero_slides" | "services" | "properties" | "testimonials"
  | "blog_posts" | "gallery_images" | "areas" | "faqs"
  | "site_settings" | "contact_messages";

const SECTIONS: { id: Section; label: string }[] = [
  { id: "hero_slides", label: "Hero Slides" },
  { id: "properties", label: "Properties" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Testimonials" },
  { id: "blog_posts", label: "Blog Posts" },
  { id: "gallery_images", label: "Gallery" },
  { id: "areas", label: "Areas" },
  { id: "faqs", label: "FAQs" },
  { id: "site_settings", label: "Site Settings" },
  { id: "contact_messages", label: "Contact Messages" },
];

const FIELDS: Record<Section, { title: string; fields: FieldDef[]; orderBy?: { column: string; ascending?: boolean }; primaryKey?: string }> = {
  hero_slides: {
    title: "Hero Slides",
    orderBy: { column: "position" },
    fields: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "title", label: "Title", type: "text", required: true },
      { key: "subtitle", label: "Subtitle", type: "textarea" },
      { key: "image_url", label: "Image URL", type: "url", required: true, placeholder: "/assets/hero-1.jpg", hideInTable: true },
      { key: "cta_label", label: "Button Label", type: "text" },
      { key: "cta_href", label: "Button Link", type: "text", placeholder: "/properties" },
      { key: "position", label: "Order", type: "number" },
      { key: "published", label: "Published", type: "boolean" },
    ],
  },
  properties: {
    title: "Properties / Plots",
    orderBy: { column: "position" },
    fields: [
      { key: "title", label: "Title", type: "text", required: true },
      { key: "slug", label: "Slug (unique)", type: "text", required: true, placeholder: "kakkanad-enclave" },
      { key: "location", label: "Location", type: "text", required: true },
      { key: "area", label: "Area", type: "text" },
      { key: "plot_size", label: "Plot Size", type: "text", required: true },
      { key: "price", label: "Price", type: "text" },
      { key: "badge", label: "Badge", type: "text", placeholder: "New Listing" },
      { key: "description", label: "Short Description", type: "textarea", required: true, hideInTable: true },
      { key: "long_description", label: "Long Description", type: "textarea", hideInTable: true },
      { key: "image_url", label: "Main Image URL", type: "url", required: true, hideInTable: true },
      { key: "features", label: "Features", type: "tags", hideInTable: true },
      { key: "status", label: "Status", type: "text", placeholder: "available" },
      { key: "featured", label: "Featured on Home", type: "boolean" },
      { key: "published", label: "Published", type: "boolean" },
      { key: "position", label: "Order", type: "number", hideInTable: true },
    ],
  },
  services: {
    title: "Services",
    orderBy: { column: "position" },
    fields: [
      { key: "title", label: "Title", type: "text", required: true },
      { key: "description", label: "Description", type: "textarea", required: true, hideInTable: true },
      { key: "icon", label: "Icon", type: "text", placeholder: "MapPin | Layers | Building2 | ShieldCheck | Compass | LineChart" },
      { key: "position", label: "Order", type: "number" },
      { key: "published", label: "Published", type: "boolean" },
    ],
  },
  testimonials: {
    title: "Testimonials",
    orderBy: { column: "position" },
    fields: [
      { key: "author_name", label: "Author", type: "text", required: true },
      { key: "author_role", label: "Role", type: "text" },
      { key: "quote", label: "Quote", type: "textarea", required: true, hideInTable: true },
      { key: "avatar_url", label: "Avatar URL", type: "url", hideInTable: true },
      { key: "position", label: "Order", type: "number" },
      { key: "published", label: "Published", type: "boolean" },
    ],
  },
  blog_posts: {
    title: "Blog Posts",
    orderBy: { column: "published_at", ascending: false },
    fields: [
      { key: "title", label: "Title", type: "text", required: true },
      { key: "slug", label: "Slug", type: "text", required: true },
      { key: "category", label: "Category", type: "text" },
      { key: "author", label: "Author", type: "text" },
      { key: "excerpt", label: "Excerpt", type: "textarea", hideInTable: true },
      { key: "content", label: "Content", type: "textarea", required: true, hideInTable: true },
      { key: "cover_image_url", label: "Cover Image", type: "url", hideInTable: true },
      { key: "published", label: "Published", type: "boolean" },
      { key: "published_at", label: "Published At", type: "text", placeholder: "2026-06-24T00:00:00Z", hideInTable: true },
    ],
  },
  gallery_images: {
    title: "Gallery Images",
    orderBy: { column: "position" },
    fields: [
      { key: "image_url", label: "Image URL", type: "url", required: true },
      { key: "caption", label: "Caption", type: "text" },
      { key: "position", label: "Order", type: "number" },
      { key: "published", label: "Published", type: "boolean" },
    ],
  },
  areas: {
    title: "Areas We Serve",
    orderBy: { column: "position" },
    fields: [
      { key: "name", label: "Name", type: "text", required: true },
      { key: "description", label: "Description", type: "textarea", hideInTable: true },
      { key: "image_url", label: "Image URL", type: "url", hideInTable: true },
      { key: "highlights", label: "Highlights", type: "tags", hideInTable: true },
      { key: "position", label: "Order", type: "number" },
      { key: "published", label: "Published", type: "boolean" },
    ],
  },
  faqs: {
    title: "FAQs",
    orderBy: { column: "position" },
    fields: [
      { key: "question", label: "Question", type: "text", required: true },
      { key: "answer", label: "Answer", type: "textarea", required: true, hideInTable: true },
      { key: "position", label: "Order", type: "number" },
      { key: "published", label: "Published", type: "boolean" },
    ],
  },
  site_settings: {
    title: "Site Settings",
    primaryKey: "id",
    fields: [
      { key: "id", label: "Key", type: "text", required: true, placeholder: "contact | company | seo" },
      { key: "value", label: "Value (JSON)", type: "json", required: true, hideInTable: true },
    ],
  },
  contact_messages: {
    title: "Contact Messages",
    orderBy: { column: "created_at", ascending: false },
    fields: [
      { key: "name", label: "Name", type: "text", required: true },
      { key: "email", label: "Email", type: "text", required: true },
      { key: "phone", label: "Phone", type: "text" },
      { key: "subject", label: "Subject", type: "text" },
      { key: "message", label: "Message", type: "textarea", required: true, hideInTable: true },
      { key: "handled", label: "Handled", type: "boolean" },
    ],
  },
};

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Capital Realty" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const navigate = useNavigate();
  const [section, setSection] = useState<Section>("properties");

  const roles = useQuery({
    queryKey: ["my-roles"],
    queryFn: async () => {
      const { data: u } = await supabase.auth.getUser();
      if (!u.user) return [];
      const { data } = await supabase.from("user_roles").select("role").eq("user_id", u.user.id);
      return (data ?? []).map((r) => r.role as string);
    },
  });

  const cfg = FIELDS[section];

  const signOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out");
    navigate({ to: "/" });
  };

  const hasRole = roles.data?.includes("admin") || roles.data?.includes("editor");

  return (
    <div className="min-h-screen bg-mist flex">
      {/* Sidebar */}
      <aside className="w-72 bg-navy text-white p-8 sticky top-0 self-start h-screen overflow-y-auto">
        <Link to="/" className="flex items-center gap-2 mb-12">
          <span className="flex h-9 w-9 items-center justify-center bg-gold text-navy font-display text-lg font-bold">
            C
          </span>
          <span className="font-display text-lg font-bold">Capital Realty</span>
        </Link>
        <p className="eyebrow text-gold mb-6">Content</p>
        <nav className="space-y-1">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => setSection(s.id)}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                section === s.id
                  ? "bg-white/10 text-gold"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {s.label}
            </button>
          ))}
        </nav>
        <div className="mt-12 pt-8 border-t border-white/10 space-y-3">
          <Link
            to="/"
            className="block text-xs uppercase tracking-[0.18em] text-white/60 hover:text-gold"
          >
            View Site →
          </Link>
          <button
            onClick={signOut}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/60 hover:text-gold"
          >
            <LogOut className="size-3.5" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Content */}
      <div className="flex-1 p-10">
        {!hasRole && !roles.isLoading && (
          <div className="mb-8 p-5 bg-gold/10 border border-gold/30 flex gap-3 items-start">
            <ShieldAlert className="size-5 text-gold shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-bold text-navy mb-1">No editor role assigned</p>
              <p className="text-muted-foreground">
                You're signed in but haven't been granted editor or admin permissions. Saves
                will fail until a workspace admin grants you a role in the{" "}
                <code className="bg-mist px-1.5 py-0.5">user_roles</code> table.
              </p>
            </div>
          </div>
        )}
        <AdminCrud
          key={section}
          table={section}
          title={cfg.title}
          fields={cfg.fields}
          orderBy={cfg.orderBy}
          primaryKey={cfg.primaryKey}
        />
      </div>
    </div>
  );
}
