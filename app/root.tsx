import {
  isRouteErrorResponse,
  Links,
  Outlet,
  Link as RouterLink,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import "@radix-ui/themes/styles.css";
import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Section,
  Text,
  Theme,
} from "@radix-ui/themes";
import { Avatar } from "./primoridals/avatar";
import { site } from "./content/site";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  /*
   * No `media` attribute here on purpose. The previous pair of icon links
   * were gated on prefers-color-scheme, which browsers apply inconsistently
   * to favicons — the reliable way to do a theme-aware icon is one SVG with
   * the media query inside it.
   */
  { rel: "icon", href: "/favicon.ico", sizes: "32x32" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Links />
      </head>
      <body>
        <Theme accentColor="blue" appearance="dark">
          {children}
          <ScrollRestoration />
          <Scripts />
        </Theme>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const notFound = isRouteErrorResponse(error) && error.status === 404;

  let heading = "Something broke";
  let line = "An unexpected error occurred.";
  let stack: string | undefined;

  if (notFound) {
    heading = "404";
    line = "Huh. This route doesn't exist.";
  } else if (isRouteErrorResponse(error)) {
    line = error.statusText || line;
  } else if (import.meta.env.DEV && error instanceof Error) {
    line = error.message;
    stack = error.stack;
  }

  return (
    <Container size="2" px="4">
      <Section size="3">
        <Flex align="center" gap="6" wrap="wrap" asChild>
          <main>
            {notFound ? (
              <Avatar
                image={site.avatars.confused}
                alt="Cartoon illustration of me shrugging, confused"
                width={300}
              />
            ) : null}
            <Flex
              direction="column"
              gap="3"
              align="start"
              style={{ minWidth: "16rem", flex: 1 }}
            >
              <Heading as="h1" size="7">
                {heading}
              </Heading>
              <Text as="p" size="3">
                {line}
              </Text>
              <Link asChild size="3">
                <RouterLink to="/">Back home</RouterLink>
              </Link>
            </Flex>
          </main>
        </Flex>
        {stack ? (
          <Box className="code-scroll" mt="6" p="4">
            <pre>
              <code>{stack}</code>
            </pre>
          </Box>
        ) : null}
      </Section>
    </Container>
  );
}
