import {
  index,
  layout,
  prefix,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  layout("./pages/layout.tsx", [
    index("./pages/home.tsx"),
    route("about", "./pages/about.tsx"),
    route("contact", "./pages/contact.tsx"),
    ...prefix("work", [
      index("./pages/work.tsx"),
      route("waivers", "./pages/work/waivers.tsx"),
      route("fleet", "./pages/work/fleet.tsx"),
      route("vehicle-orders", "./pages/work/vehicle-orders.tsx"),
      route("payments", "./pages/work/payments.tsx"),
      // v3 slugs, redirected rather than dropped.
      route(":slug", "./pages/work/superseded.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
