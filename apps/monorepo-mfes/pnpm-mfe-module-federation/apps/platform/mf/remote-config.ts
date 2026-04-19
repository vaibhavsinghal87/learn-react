import { MF_SHARED_LIBS } from "./shared";

const isDev = import.meta.env.DEV;

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
  shared: {
    ...MF_SHARED_LIBS,
  },
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
