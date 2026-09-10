import {
  index,
  layout,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  layout("./pages/layout.tsx", [
    index("./pages/index.tsx"),
    route("home", "./pages/home.tsx"),
    route("about", "./pages/about.tsx"),
    route("case-studies", "./pages/case-studies.tsx"),
    route("contact", "./pages/contact.tsx"),
  ]),
] satisfies RouteConfig;
