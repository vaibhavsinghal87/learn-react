// import { FederationHost } from "@module-federation/runtime";
// import { DYNAMIC_REMOTES_CONFIG } from "./remote-config";
// import { MF_SHARED_LIBS } from "./shared";

// // store instance if you need to reference it later
// let mfInstance: Federation | null = null;

// export function initMF() {
//   mfInstance = FederationHost.getInstance({
//     name: "host",
//     remotes: [...DYNAMIC_REMOTES_CONFIG],
//     shared: {
//       ...MF_SHARED_LIBS,
//     },
//   });

//   return mfInstance;
// }

// // expose instance getter for other parts of app
// export function getMFInstance() {
//   if (!mfInstance) {
//     throw new Error(
//       "MF runtime not initialized. Call initMF() first in main.tsx",
//     );
//   }
//   return mfInstance;
// }

// // add remote dynamically at any point after init
// export function registerRemote(name: string, entry: string) {
//   getMFInstance().registerRemotes([{ name, entry, type: "module" }]);
// }
