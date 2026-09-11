import { Box, Container, Flex, Link } from "@radix-ui/themes";
import { Link as RouterLink, useLocation } from "react-router";
import { site } from "~/content/site";

/**
 * Handoff §3: nav is `Work · About · Writing · Contact`, with Writing dropped
 * until a post exists. Add it back here when `/writing` ships.
 */
const items = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function NavigationBar() {
  const { pathname } = useLocation();
  /*
   * The name doubles as the home link, but on the home page it would sit
   * directly above the <h1> saying the same thing. An empty box keeps the
   * links anchored right so the header doesn't shift between pages.
   */
  const isHome = pathname === "/";

  return (
    <Container size="2" px="4">
      <Flex asChild align="center" justify="between" gap="4" py="5" wrap="wrap">
        <nav aria-label="Main navigation">
          {isHome ? (
            <Box aria-hidden="true" />
          ) : (
            <Link asChild size="3" weight="medium" color="gray" highContrast>
              <RouterLink to="/">{site.name}</RouterLink>
            </Link>
          )}
          <Flex align="center" gap="5" wrap="wrap">
            {items.map(({ to, label }) => {
              const current = pathname === to || pathname.startsWith(`${to}/`);
              return (
                <Link
                  key={to}
                  asChild
                  size="3"
                  color={current ? undefined : "gray"}
                  highContrast={current}
                >
                  <RouterLink
                    to={to}
                    aria-current={current ? "page" : undefined}
                  >
                    {label}
                  </RouterLink>
                </Link>
              );
            })}
          </Flex>
        </nav>
      </Flex>
    </Container>
  );
}
