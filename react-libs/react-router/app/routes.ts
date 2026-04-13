import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home/index.tsx"),
  // prefix routes - adds a common url only, no UI
  ...prefix("posts", [
    index("./routes/posts/index.tsx"),
    // layout route with nested dynamic segment route - adds common UI wrapper only, no url
    layout("./routes/posts/layout.tsx", [
      // dynamic segment route
      route(":id/details", "./routes/posts/details.tsx"),
    ]),
  ]),
  route("about", "./routes/about/index.tsx"),
  route("contact", "./routes/contact/index.tsx"),
] satisfies RouteConfig;
