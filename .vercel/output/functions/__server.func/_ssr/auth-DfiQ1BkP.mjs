import { r as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { F as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as supabase } from "./client-By7Wti3p.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-DfiQ1BkP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AuthPage() {
	const navigate = useNavigate();
	const [mode, setMode] = (0, import_react.useState)("signin");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const { data } = supabase.auth.onAuthStateChange((_, session) => {
			if (session) navigate({ to: "/admin" });
		});
		return () => data.subscription.unsubscribe();
	}, [navigate]);
	const submit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			if (mode === "signin") {
				const { error } = await supabase.auth.signInWithPassword({
					email,
					password
				});
				if (error) throw error;
				toast.success("Signed in");
			} else {
				const { error } = await supabase.auth.signUp({
					email,
					password,
					options: { emailRedirectTo: window.location.origin + "/admin" }
				});
				if (error) throw error;
				toast.success("Account created. You can sign in now.");
				setMode("signin");
			}
		} catch (e) {
			toast.error(e.message);
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen flex items-center justify-center bg-navy px-6 py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md bg-background p-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-center mb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-12 w-12 items-center justify-center bg-navy text-gold font-display text-xl font-bold",
								children: "C"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-3xl text-navy",
							children: "Capital Realty"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.22em] text-muted-foreground mt-2",
							children: "Staff Portal"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-bold uppercase tracking-[0.22em] mb-2 block",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								required: true,
								value: email,
								onChange: (e) => setEmail(e.target.value),
								className: "w-full border border-border px-4 py-3 focus:outline-none focus:border-gold"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-bold uppercase tracking-[0.22em] mb-2 block",
								children: "Password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "password",
								required: true,
								minLength: 6,
								value: password,
								onChange: (e) => setPassword(e.target.value),
								className: "w-full border border-border px-4 py-3 focus:outline-none focus:border-gold"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: loading,
							className: "w-full px-6 py-3.5 bg-navy text-white text-[11px] font-bold uppercase tracking-[0.22em] hover:bg-gold hover:text-navy transition-colors disabled:opacity-60",
							children: loading ? "Please wait..." : mode === "signin" ? "Sign In" : "Create Account"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-center text-sm text-muted-foreground mt-6",
					children: [
						mode === "signin" ? "Need an account?" : "Already have an account?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setMode(mode === "signin" ? "signup" : "signin"),
							className: "text-gold underline",
							children: mode === "signin" ? "Create one" : "Sign in"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-8",
					children: "Site admins must be granted a role to edit content"
				})
			]
		})
	});
}
//#endregion
export { AuthPage as component };
