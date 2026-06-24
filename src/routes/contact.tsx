import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { z } from "zod";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { siteSettingsQuery } from "@/lib/queries";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Capital Realty — Kochi, Kerala" },
      { name: "description", content: "Speak with a Capital Realty property advisor about construction-ready plots in Kochi." },
      { property: "og:title", content: "Contact — Capital Realty" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(siteSettingsQuery),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(254),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  subject: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Tell us a bit more").max(2000),
});

function ContactPage() {
  const { data: settings } = useQuery(siteSettingsQuery);
  const contact = settings?.contact ?? {};
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const mutation = useMutation({
    mutationFn: async (values: typeof form) => {
      const parsed = schema.parse(values);
      const { error } = await supabase.from("contact_messages").insert({
        name: parsed.name,
        email: parsed.email,
        phone: parsed.phone || null,
        subject: parsed.subject || null,
        message: parsed.message,
      });
      if (error) throw new Error(error.message);
    },
    onSuccess: () => {
      toast.success("Message received. An advisor will be in touch shortly.");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    },
    onError: (e: Error) => toast.error(e.message || "Could not send. Please try again."),
  });

  return (
    <>
      <section className="pt-40 pb-16 bg-navy text-white">
        <div className="container-wide">
          <span className="eyebrow text-gold">Start a Conversation</span>
          <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl">
            Speak with an <span className="italic text-gold">advisor</span>.
          </h1>
        </div>
      </section>

      <section className="section-padding container-wide grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 space-y-10">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Whether you're exploring a single investment plot or a strategic portfolio
            position, our team will respond personally within one working day.
          </p>
          <div className="space-y-6">
            {contact.phone && (
              <InfoRow icon={<Phone className="size-5" />} label="Telephone" value={contact.phone} />
            )}
            {contact.email && (
              <InfoRow icon={<Mail className="size-5" />} label="Email" value={contact.email} />
            )}
            {contact.address && (
              <InfoRow icon={<MapPin className="size-5" />} label="Office" value={contact.address} />
            )}
            {contact.hours && (
              <InfoRow icon={<Clock className="size-5" />} label="Hours" value={contact.hours} />
            )}
          </div>
        </div>

        <form
          className="lg:col-span-7 bg-mist p-8 md:p-12 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            mutation.mutate(form);
          }}
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Name" required>
              <input
                required maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-background border border-border px-4 py-3.5 focus:outline-none focus:border-gold"
              />
            </Field>
            <Field label="Email" required>
              <input
                required type="email" maxLength={254}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-background border border-border px-4 py-3.5 focus:outline-none focus:border-gold"
              />
            </Field>
            <Field label="Phone">
              <input
                maxLength={30}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-background border border-border px-4 py-3.5 focus:outline-none focus:border-gold"
              />
            </Field>
            <Field label="Subject">
              <input
                maxLength={200}
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full bg-background border border-border px-4 py-3.5 focus:outline-none focus:border-gold"
              />
            </Field>
          </div>
          <Field label="Message" required>
            <textarea
              required maxLength={2000} rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-background border border-border px-4 py-3.5 focus:outline-none focus:border-gold resize-none"
            />
          </Field>
          <button
            type="submit"
            disabled={mutation.isPending}
            className="w-full md:w-auto px-10 py-4 bg-navy text-white font-bold uppercase text-[11px] tracking-[0.22em] hover:bg-gold hover:text-navy transition-colors disabled:opacity-60"
          >
            {mutation.isPending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>

      <section>
        <iframe
          title="Kochi Map"
          src="https://www.google.com/maps?q=Marine%20Drive%20Kochi&output=embed"
          className="w-full h-[420px] border-0"
          loading="lazy"
        />
      </section>
    </>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="size-11 shrink-0 bg-navy text-gold flex items-center justify-center">{icon}</div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{label}</p>
        <p className="font-display text-lg mt-1">{value}</p>
      </div>
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-navy mb-2">
        {label} {required && <span className="text-gold">*</span>}
      </span>
      {children}
    </label>
  );
}
