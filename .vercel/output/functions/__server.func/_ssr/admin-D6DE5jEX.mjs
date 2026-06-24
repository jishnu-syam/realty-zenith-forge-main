import { r as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { F as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase$1 } from "./client-uDyzgJZQ.mjs";
import { i as useQuery, o as useQueryClient, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { C as Pen, a as Save, f as LogOut, i as ShieldAlert, n as Trash2, s as Plus, t as X } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-D6DE5jEX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var supabase = supabase$1;
function AdminCrud({ table, title, fields, orderBy, primaryKey = "id" }) {
	const qc = useQueryClient();
	const [editing, setEditing] = (0, import_react.useState)(null);
	const list = useQuery({
		queryKey: ["admin", table],
		queryFn: async () => {
			let q = supabase.from(table).select("*");
			if (orderBy) q = q.order(orderBy.column, { ascending: orderBy.ascending ?? true });
			const { data, error } = await q;
			if (error) throw new Error(error.message);
			return data ?? [];
		}
	});
	const save = useMutation({
		mutationFn: async (row) => {
			const payload = { ...row };
			for (const f of fields) {
				if (f.type === "tags" && typeof payload[f.key] === "string") payload[f.key] = payload[f.key].split(",").map((s) => s.trim()).filter(Boolean);
				if (f.type === "json" && typeof payload[f.key] === "string") try {
					payload[f.key] = JSON.parse(payload[f.key] || "{}");
				} catch {
					throw new Error(`Invalid JSON for ${f.label}`);
				}
				if (f.type === "number" && typeof payload[f.key] === "string") payload[f.key] = payload[f.key] === "" ? null : Number(payload[f.key]);
			}
			if (row[primaryKey]) {
				const id = row[primaryKey];
				const { [primaryKey]: _omit, ...rest } = payload;
				const { error } = await supabase.from(table).update(rest).eq(primaryKey, id);
				if (error) throw new Error(error.message);
			} else {
				const { error } = await supabase.from(table).insert(payload);
				if (error) throw new Error(error.message);
			}
		},
		onSuccess: () => {
			toast.success("Saved");
			setEditing(null);
			qc.invalidateQueries({ queryKey: ["admin", table] });
		},
		onError: (e) => toast.error(e.message)
	});
	const remove = useMutation({
		mutationFn: async (id) => {
			const { error } = await supabase.from(table).delete().eq(primaryKey, id);
			if (error) throw new Error(error.message);
		},
		onSuccess: () => {
			toast.success("Deleted");
			qc.invalidateQueries({ queryKey: ["admin", table] });
		},
		onError: (e) => toast.error(e.message)
	});
	const visibleFields = fields.filter((f) => !f.hideInTable);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between mb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl text-navy",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setEditing({}),
				className: "inline-flex items-center gap-2 bg-navy text-white px-4 py-2.5 text-xs font-bold uppercase tracking-[0.18em] hover:bg-gold hover:text-navy transition-colors",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " Add"]
			})]
		}),
		list.isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: "Loading..."
		}),
		list.error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-destructive",
			children: list.error.message
		}),
		list.data && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border border-border overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "bg-mist",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [visibleFields.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "text-left px-4 py-3 text-[10px] font-bold uppercase tracking-[0.18em]",
						children: f.label
					}, f.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "px-4 py-3 w-32" })] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [list.data.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-border",
					children: [visibleFields.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-4 py-3 max-w-[260px] truncate",
						children: formatCell(row[f.key], f.type)
					}, f.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
						className: "px-4 py-3 text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setEditing(row),
							className: "inline-flex items-center gap-1 text-navy hover:text-gold mr-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, { className: "size-3.5" }), " Edit"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								if (confirm("Delete this entry?")) remove.mutate(String(row[primaryKey]));
							},
							className: "text-destructive hover:text-destructive/80",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
						})]
					})]
				}, String(row[primaryKey]))), list.data.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					colSpan: visibleFields.length + 1,
					className: "text-center py-10 text-muted-foreground",
					children: "No entries yet."
				}) })] })]
			})
		}),
		editing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditorDrawer, {
			row: editing,
			fields,
			onClose: () => setEditing(null),
			onSave: (r) => save.mutate(r),
			saving: save.isPending
		})
	] });
}
function formatCell(v, t) {
	if (v === null || v === void 0) return "—";
	if (t === "boolean") return v ? "Yes" : "No";
	if (t === "tags" && Array.isArray(v)) return v.join(", ");
	if (t === "json") return JSON.stringify(v);
	return String(v);
}
function EditorDrawer({ row, fields, onClose, onSave, saving }) {
	const [state, setState] = (0, import_react.useState)(() => {
		const init = { ...row };
		for (const f of fields) {
			if (f.type === "tags" && Array.isArray(init[f.key])) init[f.key] = init[f.key].join(", ");
			if (f.type === "json" && typeof init[f.key] === "object" && init[f.key] !== null) init[f.key] = JSON.stringify(init[f.key], null, 2);
		}
		return init;
	});
	const setField = (k, v) => setState((s) => ({
		...s,
		[k]: v
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex justify-end",
		role: "dialog",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 bg-navy/40",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-2xl bg-background h-full overflow-y-auto shadow-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sticky top-0 bg-background border-b border-border px-8 py-5 flex items-center justify-between z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl",
					children: row.id ? "Edit Entry" : "New Entry"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					onSave(state);
				},
				className: "p-8 space-y-5",
				children: [fields.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[10px] font-bold uppercase tracking-[0.22em] mb-2 block",
							children: [
								f.label,
								" ",
								f.required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold",
									children: "*"
								})
							]
						}),
						f.type === "textarea" || f.type === "json" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: f.type === "json" ? 6 : 5,
							required: f.required,
							placeholder: f.placeholder,
							value: state[f.key] ?? "",
							onChange: (e) => setField(f.key, e.target.value),
							className: "w-full border border-border px-4 py-3 focus:outline-none focus:border-gold font-mono text-sm"
						}) : f.type === "boolean" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: state[f.key] ? "true" : "false",
							onChange: (e) => setField(f.key, e.target.value === "true"),
							className: "w-full border border-border px-4 py-3 focus:outline-none focus:border-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "true",
								children: "Yes"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "false",
								children: "No"
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: f.type === "number" ? "number" : "text",
							required: f.required,
							placeholder: f.placeholder,
							value: state[f.key] ?? "",
							onChange: (e) => setField(f.key, e.target.value),
							className: "w-full border border-border px-4 py-3 focus:outline-none focus:border-gold"
						}),
						f.type === "tags" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[10px] text-muted-foreground",
							children: "Comma-separated"
						})
					]
				}, f.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "submit",
					disabled: saving,
					className: "inline-flex items-center gap-2 bg-navy text-white px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] hover:bg-gold hover:text-navy transition-colors disabled:opacity-60",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-4" }),
						" ",
						saving ? "Saving..." : "Save"
					]
				})]
			})]
		})]
	});
}
var SECTIONS = [
	{
		id: "hero_slides",
		label: "Hero Slides"
	},
	{
		id: "properties",
		label: "Properties"
	},
	{
		id: "services",
		label: "Services"
	},
	{
		id: "testimonials",
		label: "Testimonials"
	},
	{
		id: "blog_posts",
		label: "Blog Posts"
	},
	{
		id: "gallery_images",
		label: "Gallery"
	},
	{
		id: "areas",
		label: "Areas"
	},
	{
		id: "faqs",
		label: "FAQs"
	},
	{
		id: "site_settings",
		label: "Site Settings"
	},
	{
		id: "contact_messages",
		label: "Contact Messages"
	}
];
var FIELDS = {
	hero_slides: {
		title: "Hero Slides",
		orderBy: { column: "position" },
		fields: [
			{
				key: "eyebrow",
				label: "Eyebrow",
				type: "text"
			},
			{
				key: "title",
				label: "Title",
				type: "text",
				required: true
			},
			{
				key: "subtitle",
				label: "Subtitle",
				type: "textarea"
			},
			{
				key: "image_url",
				label: "Image URL",
				type: "url",
				required: true,
				placeholder: "/assets/hero-1.jpg",
				hideInTable: true
			},
			{
				key: "cta_label",
				label: "Button Label",
				type: "text"
			},
			{
				key: "cta_href",
				label: "Button Link",
				type: "text",
				placeholder: "/properties"
			},
			{
				key: "position",
				label: "Order",
				type: "number"
			},
			{
				key: "published",
				label: "Published",
				type: "boolean"
			}
		]
	},
	properties: {
		title: "Properties / Plots",
		orderBy: { column: "position" },
		fields: [
			{
				key: "title",
				label: "Title",
				type: "text",
				required: true
			},
			{
				key: "slug",
				label: "Slug (unique)",
				type: "text",
				required: true,
				placeholder: "kakkanad-enclave"
			},
			{
				key: "location",
				label: "Location",
				type: "text",
				required: true
			},
			{
				key: "area",
				label: "Area",
				type: "text"
			},
			{
				key: "plot_size",
				label: "Plot Size",
				type: "text",
				required: true
			},
			{
				key: "price",
				label: "Price",
				type: "text"
			},
			{
				key: "badge",
				label: "Badge",
				type: "text",
				placeholder: "New Listing"
			},
			{
				key: "description",
				label: "Short Description",
				type: "textarea",
				required: true,
				hideInTable: true
			},
			{
				key: "long_description",
				label: "Long Description",
				type: "textarea",
				hideInTable: true
			},
			{
				key: "image_url",
				label: "Main Image URL",
				type: "url",
				required: true,
				hideInTable: true
			},
			{
				key: "features",
				label: "Features",
				type: "tags",
				hideInTable: true
			},
			{
				key: "status",
				label: "Status",
				type: "text",
				placeholder: "available"
			},
			{
				key: "featured",
				label: "Featured on Home",
				type: "boolean"
			},
			{
				key: "published",
				label: "Published",
				type: "boolean"
			},
			{
				key: "position",
				label: "Order",
				type: "number",
				hideInTable: true
			}
		]
	},
	services: {
		title: "Services",
		orderBy: { column: "position" },
		fields: [
			{
				key: "title",
				label: "Title",
				type: "text",
				required: true
			},
			{
				key: "description",
				label: "Description",
				type: "textarea",
				required: true,
				hideInTable: true
			},
			{
				key: "icon",
				label: "Icon",
				type: "text",
				placeholder: "MapPin | Layers | Building2 | ShieldCheck | Compass | LineChart"
			},
			{
				key: "position",
				label: "Order",
				type: "number"
			},
			{
				key: "published",
				label: "Published",
				type: "boolean"
			}
		]
	},
	testimonials: {
		title: "Testimonials",
		orderBy: { column: "position" },
		fields: [
			{
				key: "author_name",
				label: "Author",
				type: "text",
				required: true
			},
			{
				key: "author_role",
				label: "Role",
				type: "text"
			},
			{
				key: "quote",
				label: "Quote",
				type: "textarea",
				required: true,
				hideInTable: true
			},
			{
				key: "avatar_url",
				label: "Avatar URL",
				type: "url",
				hideInTable: true
			},
			{
				key: "position",
				label: "Order",
				type: "number"
			},
			{
				key: "published",
				label: "Published",
				type: "boolean"
			}
		]
	},
	blog_posts: {
		title: "Blog Posts",
		orderBy: {
			column: "published_at",
			ascending: false
		},
		fields: [
			{
				key: "title",
				label: "Title",
				type: "text",
				required: true
			},
			{
				key: "slug",
				label: "Slug",
				type: "text",
				required: true
			},
			{
				key: "category",
				label: "Category",
				type: "text"
			},
			{
				key: "author",
				label: "Author",
				type: "text"
			},
			{
				key: "excerpt",
				label: "Excerpt",
				type: "textarea",
				hideInTable: true
			},
			{
				key: "content",
				label: "Content",
				type: "textarea",
				required: true,
				hideInTable: true
			},
			{
				key: "cover_image_url",
				label: "Cover Image",
				type: "url",
				hideInTable: true
			},
			{
				key: "published",
				label: "Published",
				type: "boolean"
			},
			{
				key: "published_at",
				label: "Published At",
				type: "text",
				placeholder: "2026-06-24T00:00:00Z",
				hideInTable: true
			}
		]
	},
	gallery_images: {
		title: "Gallery Images",
		orderBy: { column: "position" },
		fields: [
			{
				key: "image_url",
				label: "Image URL",
				type: "url",
				required: true
			},
			{
				key: "caption",
				label: "Caption",
				type: "text"
			},
			{
				key: "position",
				label: "Order",
				type: "number"
			},
			{
				key: "published",
				label: "Published",
				type: "boolean"
			}
		]
	},
	areas: {
		title: "Areas We Serve",
		orderBy: { column: "position" },
		fields: [
			{
				key: "name",
				label: "Name",
				type: "text",
				required: true
			},
			{
				key: "description",
				label: "Description",
				type: "textarea",
				hideInTable: true
			},
			{
				key: "image_url",
				label: "Image URL",
				type: "url",
				hideInTable: true
			},
			{
				key: "highlights",
				label: "Highlights",
				type: "tags",
				hideInTable: true
			},
			{
				key: "position",
				label: "Order",
				type: "number"
			},
			{
				key: "published",
				label: "Published",
				type: "boolean"
			}
		]
	},
	faqs: {
		title: "FAQs",
		orderBy: { column: "position" },
		fields: [
			{
				key: "question",
				label: "Question",
				type: "text",
				required: true
			},
			{
				key: "answer",
				label: "Answer",
				type: "textarea",
				required: true,
				hideInTable: true
			},
			{
				key: "position",
				label: "Order",
				type: "number"
			},
			{
				key: "published",
				label: "Published",
				type: "boolean"
			}
		]
	},
	site_settings: {
		title: "Site Settings",
		primaryKey: "id",
		fields: [{
			key: "id",
			label: "Key",
			type: "text",
			required: true,
			placeholder: "contact | company | seo"
		}, {
			key: "value",
			label: "Value (JSON)",
			type: "json",
			required: true,
			hideInTable: true
		}]
	},
	contact_messages: {
		title: "Contact Messages",
		orderBy: {
			column: "created_at",
			ascending: false
		},
		fields: [
			{
				key: "name",
				label: "Name",
				type: "text",
				required: true
			},
			{
				key: "email",
				label: "Email",
				type: "text",
				required: true
			},
			{
				key: "phone",
				label: "Phone",
				type: "text"
			},
			{
				key: "subject",
				label: "Subject",
				type: "text"
			},
			{
				key: "message",
				label: "Message",
				type: "textarea",
				required: true,
				hideInTable: true
			},
			{
				key: "handled",
				label: "Handled",
				type: "boolean"
			}
		]
	}
};
function AdminPage() {
	const navigate = useNavigate();
	const [section, setSection] = (0, import_react.useState)("properties");
	const roles = useQuery({
		queryKey: ["my-roles"],
		queryFn: async () => {
			const { data: u } = await supabase$1.auth.getUser();
			if (!u.user) return [];
			const { data } = await supabase$1.from("user_roles").select("role").eq("user_id", u.user.id);
			return (data ?? []).map((r) => r.role);
		}
	});
	const cfg = FIELDS[section];
	const signOut = async () => {
		await supabase$1.auth.signOut();
		toast.success("Signed out");
		navigate({ to: "/" });
	};
	const hasRole = roles.data?.includes("admin") || roles.data?.includes("editor");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-mist flex",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "w-72 bg-navy text-white p-8 sticky top-0 self-start h-screen overflow-y-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2 mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex h-9 w-9 items-center justify-center bg-gold text-navy font-display text-lg font-bold",
						children: "C"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg font-bold",
						children: "Capital Realty"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-gold mb-6",
					children: "Content"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "space-y-1",
					children: SECTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setSection(s.id),
						className: `w-full text-left px-4 py-2.5 text-sm transition-colors ${section === s.id ? "bg-white/10 text-gold" : "text-white/70 hover:text-white hover:bg-white/5"}`,
						children: s.label
					}, s.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 pt-8 border-t border-white/10 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "block text-xs uppercase tracking-[0.18em] text-white/60 hover:text-gold",
						children: "View Site →"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: signOut,
						className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/60 hover:text-gold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-3.5" }), " Sign Out"]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 p-10",
			children: [!hasRole && !roles.isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 p-5 bg-gold/10 border border-gold/30 flex gap-3 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "size-5 text-gold shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-bold text-navy mb-1",
						children: "No editor role assigned"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground",
						children: [
							"You're signed in but haven't been granted editor or admin permissions. Saves will fail until a workspace admin grants you a role in the",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "bg-mist px-1.5 py-0.5",
								children: "user_roles"
							}),
							" table."
						]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminCrud, {
				table: section,
				title: cfg.title,
				fields: cfg.fields,
				orderBy: cfg.orderBy,
				primaryKey: cfg.primaryKey
			}, section)]
		})]
	});
}
//#endregion
export { AdminPage as component };
