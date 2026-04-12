import { reactRouter } from "@react-router/dev/vite";
import devtoolsJson from 'vite-plugin-devtools-json';
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({

  plugins: [tailwindcss(), reactRouter(),devtoolsJson()],
  resolve: {
    tsconfigPaths: true,
  },
});
