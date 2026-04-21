import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app2",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.tsx",
      },
      shared: {
        "react": { singleton: true, requiredVersion: "^19.0.0" },
        "react-dom": { singleton: true, requiredVersion: "^19.0.0" },
      },
    }),
  ],
  optimizeDeps: {
    // ✅ exclude react from optimization — prevents esbuild hitting top-level await
    exclude: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "react-dom/client",
    ],
  },

  ssr: {
    noExternal: [
      "@module-federation/runtime",
      "@module-federation/vite",
      "@module-federation/sdk",
    ],
  },
});
