import { Container, Flex, Section, Text } from "@radix-ui/themes";
import type { ComponentProps, ReactNode } from "react";

/** Page shell. Constrains measure so copy stays readable. */
export function Page({ children }: { children: ReactNode }) {
  return (
    <Container size="2" px="4">
      <Section size="3">
        <Flex direction="column" gap="8" asChild>
          <main>{children}</main>
        </Flex>
      </Section>
    </Container>
  );
}

/** Body paragraph. */
export function P({
  children,
  ...props
}: { children: ReactNode } & ComponentProps<typeof Text>) {
  return (
    <Text as="p" size="3" {...props}>
      {children}
    </Text>
  );
}

/** Small muted all-caps label. */
export function Label({ children }: { children: ReactNode }) {
  return (
    <Text
      size="1"
      color="gray"
      weight="medium"
      style={{ letterSpacing: "0.08em", textTransform: "uppercase" }}
    >
      {children}
    </Text>
  );
}

/** Unordered list of body-sized items. */
export function List({ children }: { children: ReactNode }) {
  return (
    <Text as="div" size="3">
      <ul className="content-list">{children}</ul>
    </Text>
  );
}
