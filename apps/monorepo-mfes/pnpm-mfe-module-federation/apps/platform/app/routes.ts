import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("analytics", "./routes/analytics-wrapper.tsx"),
] satisfies RouteConfig;
