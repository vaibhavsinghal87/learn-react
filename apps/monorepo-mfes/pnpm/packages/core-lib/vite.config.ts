import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "unplugin-dts/vite";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      exclude: ["**/*.test.*", "**/*.spec.*"],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "CoreLib",
      formats: ["es"],
      fileName: (format) => `core-lib.${format}.js`,
    },
    rollupOptions: {
      external: [
        // React externals
        "react",
        "react-dom",
        /^react\/.*/,
        /^react-dom\/.*/,

        // Material-UI externals - comprehensive patterns
        /^@mui\/.*/,
        /^@emotion\/.*/,
        /^@babel\/runtime\/.*/,

        // Specific Material-UI internals that might be imported
        "clsx",
        "prop-types",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        // Preserve modules for better tree shaking
        preserveModules: false,
        // Ensure external dependencies are not bundled
      },
    },
    // Ensure source maps for debugging
    sourcemap: true,
    // Target modern browsers for smaller bundle
    target: "es2020",
    // Minify the output
    minify: false,
  },
  optimizeDeps: {
    exclude: [
      "react",
      "react-dom",
      "@mui/material",
      "@emotion/react",
      "@emotion/styled",
    ],
  },
});
