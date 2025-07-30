import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("team", "routes/team.tsx"),
  route("certifications", "routes/certifications.tsx")
] satisfies RouteConfig;
