// Use process.env.NODE_ENV instead of import.meta.env.DEV during config loading
const isDev = process.env.NODE_ENV !== "production";

// this is host config, separate out static shell config from this
export const STATIC_REMOTES_CONFIG = {
  // static federation config
  name: "host",
  filename: "remoteEntry.js",
  remotes: {
    remote: {
      type: "module",
      name: "mf_admin",
      entry: "http://localhost:5174/remoteEntry.js", // isDev can also be used here
      entryGlobalName: "remote",
      shareScope: "default",
    },
  },
  // shared: {
  //   // ...MF_COMMON_CONFIG.shared,
  // },
};

export const DYNAMIC_REMOTES_CONFIG = [
  {
    name: "mf_analytics",
    entry: isDev
      ? "http://localhost:5001/mf-manifest.json"
      : "https://analytics.myapp.com/mf-manifest.json",
    type: "module",
  },
];
