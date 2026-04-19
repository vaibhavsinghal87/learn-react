/**
 * Centralized Module Federation Shared Dependencies Configuration
 * This file contains shared dependencies that should be consistent across all micro-frontends
 */

export const MF_SHARED_LIBS = {
  react: {
    version: "19.2.4",
    singleton: true,
    requiredVersion: "^19.0.0",
  },
  "react-dom": {
    version: "19.2.4",
    singleton: true,
    requiredVersion: "^19.0.0",
  },
  "react-router": {
    version: "7.14.0",
    singleton: true,
    requiredVersion: "^7.0.0",
  },
};

/**
 * Common Module Federation configuration options
 */
export const MF_COMMON_CONFIG = {
  shared: {
    ...MF_SHARED_LIBS,
  },
};
