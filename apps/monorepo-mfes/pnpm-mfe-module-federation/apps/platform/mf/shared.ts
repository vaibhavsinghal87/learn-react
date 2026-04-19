export const MF_SHARED_LIBS = {
  react: {
    version: "18.0.0",
    lib: () => import("react"),
    singleton: true,
    eager: true,
  },
  "react-dom": {
    version: "18.0.0",
    lib: () => import("react-dom"),
    singleton: true,
    eager: true,
  },
};
