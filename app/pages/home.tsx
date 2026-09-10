import { Flex, Button, Text } from "@radix-ui/themes";
import type { Route } from "./+types/home";

export default function Home({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  return (
    <div>
      <meta property="title" content="Caleb Darlings Website" />
      <meta name="description" content="A personal website for Caleb Darling" />
      <title>Caleb Darling | Home </title>
    </div>
  );
}
