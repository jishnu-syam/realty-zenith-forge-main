import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Staff Sign In — Capital Realty" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  beforeLoad: async () => {
    if (typeof window === "undefined") return;
    const { data } = await supabase.auth.getSession();
    if (data.session) throw redirect({ to: "/admin" });
  },
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((_, session) => {
      if (session) navigate({ to: "/admin" });
    });
    return () => data.subscription.unsubscribe();
  }, [navigate]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Signed in");
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin + "/admin" },
        });
        if (error) throw error;
        toast.success("Account created. You can sign in now.");
        setMode("signin");
      }
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-green px-6 py-20">
      <div className="w-full max-w-md bg-background p-10">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <span className="flex h-12 w-12 items-center justify-center bg-primary-green text-accent-green font-display text-xl font-bold">
              C
            </span>
          </div>
          <h1 className="font-display text-3xl text-primary-heading-text">Capital Realty</h1>
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mt-2">
            Staff Portal
          </p>
        </div>

        <form onSubmit={submit} className="space-y-4">
          <label className="block">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] mb-2 block">
              Email
            </span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-border px-4 py-3 focus:outline-none focus:border-accent-green"
            />
          </label>
          <label className="block">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] mb-2 block">
              Password
            </span>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-border px-4 py-3 focus:outline-none focus:border-accent-green"
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3.5 bg-primary-green text-white text-[11px] font-bold uppercase tracking-[0.22em] hover:bg-dark-hover-green hover:text-white transition-colors disabled:opacity-60"
          >
            {loading ? "Please wait..." : mode === "signin" ? "Sign In" : "Create Account"}
          </button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-6">
          {mode === "signin" ? "Need an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            className="text-accent-green underline"
          >
            {mode === "signin" ? "Create one" : "Sign in"}
          </button>
        </p>
        <p className="text-center text-[10px] uppercase tracking-[0.22em] text-muted-foreground mt-8">
          Site admins must be granted a role to edit content
        </p>
      </div>
    </div>
  );
}
