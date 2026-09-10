import type { Route } from "./+types";

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
      <WelcomeBanner />

      <div>
        <p>Loader Data: {JSON.stringify(loaderData)}</p>
        <p>Action Data: {JSON.stringify(actionData)}</p>
        <p>Route Parameters: {JSON.stringify(params)}</p>
        <p>Matched Routes: {JSON.stringify(matches)}</p>
      </div>
    </div>
  );
}

function WelcomeBanner() {
  return <p className="text-2xl font-bold">Welcome, welcome!</p>;
}
