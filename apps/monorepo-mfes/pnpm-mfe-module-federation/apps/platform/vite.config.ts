import { federation } from "@module-federation/vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import devtoolsJson from "vite-plugin-devtools-json";
import { STATIC_REMOTES_CONFIG } from "./mf/remote-config";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    devtoolsJson(),
    federation({ ...STATIC_REMOTES_CONFIG }),
  ],
  resolve: {
    tsconfigPaths: true,
  },
  server: {},
});
