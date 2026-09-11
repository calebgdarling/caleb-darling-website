import { redirect } from "react-router";
import { supersededWorkRoutes } from "~/content/work";
import type { Route } from "./+types/superseded";

export async function loader({ params }: Route.LoaderArgs) {
  const target = supersededWorkRoutes[params.slug ?? ""];
  if (!target) throw new Response("Not Found", { status: 404 });
  return redirect(target, 301);
}
