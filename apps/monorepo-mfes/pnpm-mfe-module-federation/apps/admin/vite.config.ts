import { federation } from "@module-federation/vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import devtoolsJson from "vite-plugin-devtools-json";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    devtoolsJson(),
    federation({
      name: "mf_admin",
      filename: "remoteEntry.js",
      exposes: {
        "./remote-app": "./app/welcome/welcome.tsx",
      },
      shared: {
        // react: {
        //   singleton: true,
        // },
      },
    }),
  ],
  resolve: {
    tsconfigPaths: true,
  },
});
