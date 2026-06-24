import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-m4rN0O1j.js
var import_jsx_runtime = require_jsx_runtime();
var hero_3_default = "/assets/hero-3-CCnJ1igs.jpg";
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative h-[60vh] min-h-[480px] flex items-end pb-16 pt-32 overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_3_default,
					alt: "",
					className: "absolute inset-0 w-full h-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-primary-green/65" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-wide relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow text-accent-green",
						children: "About Capital Realty"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-5 font-display text-5xl md:text-7xl text-white leading-[1.05] max-w-3xl",
						children: [
							"Land, considered ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-accent-green",
								children: "carefully"
							}),
							"."
						]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-padding container-wide",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-12 gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "Our Philosophy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 font-display text-4xl",
						children: "A discipline, not a transaction."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7 space-y-6 text-lg leading-relaxed text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Capital Realty was founded on a simple conviction: land is the most enduring asset in any portfolio, and it deserves the same diligence as any other institutional investment." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We operate exclusively across the Kochi metropolitan region — Kakkanad, Edappally, Aluva, Kalamassery, Thrippunithura, and the Marine Drive belt — and we curate land that meets a precise set of legal, structural, and locational standards before it reaches our portfolio." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Our clients are private buyers building family homes, NRI investors securing Kerala holdings, and institutions seeking land for considered development. What unites them is a preference for transparency, discipline, and quiet competence over noise." })
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-padding bg-beige-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-wide grid md:grid-cols-3 gap-10",
				children: [
					{
						t: "Vision",
						b: "To be the most trusted name in Kerala land — the firm clients turn to first when permanence matters."
					},
					{
						t: "Mission",
						b: "To source, prepare, and transfer construction-ready land assets with institutional rigour and complete transparency."
					},
					{
						t: "Values",
						b: "Discretion. Diligence. Long-term thinking. A bias for substance over presentation in everything we deliver."
					}
				].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-background p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "green-rule mb-6" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl mb-4",
							children: v.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground leading-relaxed",
							children: v.b
						})
					]
				}, v.t))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "section-padding container-wide text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "font-display text-4xl md:text-5xl max-w-2xl mx-auto leading-tight",
				children: [
					"Ready to explore a ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic text-accent-green",
						children: "Capital Realty"
					}),
					" plot?"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/contact",
				className: "mt-10 inline-flex px-10 py-4 bg-primary-green text-white text-[11px] font-bold uppercase tracking-[0.22em] hover:bg-dark-hover-green hover:text-white transition-colors",
				children: "Speak with an Advisor"
			})]
		})
	] });
}
//#endregion
export { AboutPage as component };
