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
      // static federation
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        remote: {
          type: "module",
          name: "remote",
          entry: "http://localhost:5174/remoteEntry.js",
          entryGlobalName: "remote",
          shareScope: "default",
        },
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
  server: {},
});
