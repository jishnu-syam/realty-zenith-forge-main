import { r as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as supabase } from "./client-By7Wti3p.mjs";
import { i as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { c as Phone, d as Mail, m as Clock, u as MapPin } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { d as siteSettingsQuery } from "./queries-C5ESjNyL.mjs";
import { n as objectType, r as stringType, t as literalType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-C3XyEg3K.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = objectType({
	name: stringType().trim().min(1, "Name required").max(100),
	email: stringType().trim().email("Valid email required").max(254),
	phone: stringType().trim().max(30).optional().or(literalType("")),
	subject: stringType().trim().max(200).optional().or(literalType("")),
	message: stringType().trim().min(5, "Tell us a bit more").max(2e3)
});
function ContactPage() {
	const { data: settings } = useQuery(siteSettingsQuery);
	const contact = settings?.contact ?? {};
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: ""
	});
	const mutation = useMutation({
		mutationFn: async (values) => {
			const parsed = schema.parse(values);
			const { error } = await supabase.from("contact_messages").insert({
				name: parsed.name,
				email: parsed.email,
				phone: parsed.phone || null,
				subject: parsed.subject || null,
				message: parsed.message
			});
			if (error) throw new Error(error.message);
		},
		onSuccess: () => {
			toast.success("Message received. An advisor will be in touch shortly.");
			setForm({
				name: "",
				email: "",
				phone: "",
				subject: "",
				message: ""
			});
		},
		onError: (e) => toast.error(e.message || "Could not send. Please try again.")
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pt-40 pb-16 bg-primary-green text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-wide",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow text-accent-green",
					children: "Start a Conversation"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-5 font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl",
					children: [
						"Speak with an ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-accent-green",
							children: "advisor"
						}),
						"."
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section-padding container-wide grid lg:grid-cols-12 gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5 space-y-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg leading-relaxed text-muted-foreground",
					children: "Whether you're exploring a single investment plot or a strategic portfolio position, our team will respond personally within one working day."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [
						contact.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5" }),
							label: "Telephone",
							value: contact.phone
						}),
						contact.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-5" }),
							label: "Email",
							value: contact.email
						}),
						contact.address && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5" }),
							label: "Office",
							value: contact.address
						}),
						contact.hours && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoRow, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-5" }),
							label: "Hours",
							value: contact.hours
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "lg:col-span-7 bg-beige-bg p-8 md:p-12 space-y-5",
				onSubmit: (e) => {
					e.preventDefault();
					mutation.mutate(form);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid md:grid-cols-2 gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Name",
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									maxLength: 100,
									value: form.name,
									onChange: (e) => setForm({
										...form,
										name: e.target.value
									}),
									className: "w-full bg-background border border-border px-4 py-3.5 focus:outline-none focus:border-accent-green"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email",
								required: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									type: "email",
									maxLength: 254,
									value: form.email,
									onChange: (e) => setForm({
										...form,
										email: e.target.value
									}),
									className: "w-full bg-background border border-border px-4 py-3.5 focus:outline-none focus:border-accent-green"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Phone",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									maxLength: 30,
									value: form.phone,
									onChange: (e) => setForm({
										...form,
										phone: e.target.value
									}),
									className: "w-full bg-background border border-border px-4 py-3.5 focus:outline-none focus:border-accent-green"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Subject",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									maxLength: 200,
									value: form.subject,
									onChange: (e) => setForm({
										...form,
										subject: e.target.value
									}),
									className: "w-full bg-background border border-border px-4 py-3.5 focus:outline-none focus:border-accent-green"
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Message",
						required: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							required: true,
							maxLength: 2e3,
							rows: 6,
							value: form.message,
							onChange: (e) => setForm({
								...form,
								message: e.target.value
							}),
							className: "w-full bg-background border border-border px-4 py-3.5 focus:outline-none focus:border-accent-green resize-none"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: mutation.isPending,
						className: "w-full md:w-auto px-10 py-4 bg-primary-green text-white font-bold uppercase text-[11px] tracking-[0.22em] hover:bg-dark-hover-green hover:text-white transition-colors disabled:opacity-60",
						children: mutation.isPending ? "Sending..." : "Send Message"
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
			title: "Kochi Map",
			src: "https://www.google.com/maps?q=Marine%20Drive%20Kochi&output=embed",
			className: "w-full h-[420px] border-0",
			loading: "lazy"
		}) })
	] });
}
function InfoRow({ icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-4 items-start",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "size-11 shrink-0 bg-primary-green text-accent-green flex items-center justify-center",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-lg mt-1",
			children: value
		})] })]
	});
}
function Field({ label, required, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "block text-[10px] font-bold uppercase tracking-[0.22em] text-primary-heading-text mb-2",
			children: [
				label,
				" ",
				required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-accent-green",
					children: "*"
				})
			]
		}), children]
	});
}
//#endregion
export { ContactPage as component };
