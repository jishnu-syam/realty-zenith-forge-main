import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  css: {
    transformer: "lightningcss",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-dom/client",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
    ],
    ignoreOutdatedRequests: true,
  },
  server: {
    host: "::",
    port: 8080,
    watch: {
      awaitWriteFinish: {
        stabilityThreshold: 1000,
        pollInterval: 100,
      },
    },
  },
  ssr: {
    noExternal: [
      "tslib",
      "@supabase/supabase-js",
      "@supabase/auth-js",
      "@supabase/functions-js",
      "@supabase/postgrest-js",
      "@supabase/storage-js",
      "@supabase/realtime-js",
      "@supabase/phoenix"
    ],
  },
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
      server: { entry: "src/server.ts" },
    }),
    nitro({
      preset: "vercel",
      externals: {
        inline: [
          "tslib",
          "@supabase/supabase-js",
          "@supabase/auth-js",
          "@supabase/functions-js",
          "@supabase/postgrest-js",
          "@supabase/storage-js",
          "@supabase/realtime-js",
          "@supabase/phoenix"
        ],
      },
    }),
    viteReact(),
  ],
});
