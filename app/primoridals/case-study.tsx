import { Box, Flex, Heading, Link, Text } from "@radix-ui/themes";
import type { ReactNode } from "react";
import { Link as RouterLink } from "react-router";
import type { WorkEntry } from "~/content/work";
import { Label, Page } from "./prose";

/**
 * Shared case study format (handoff §6.0): title, meta line, diagram, four
 * labeled blocks, and a code artifact where one exists. The diagram carries
 * the architecture so the prose can stay under 250 words.
 */
export function CaseStudy({
  entry,
  diagram,
  diagramCaption,
  children,
}: {
  entry: WorkEntry;
  diagram: ReactNode;
  diagramCaption: string;
  children: ReactNode;
}) {
  return (
    <Page>
      {/*
        React 19 hoists these into <head> from anywhere in the tree, so every
        case study gets its title and description from its entry — no per-page
        duplication.
      */}
      <title>{`${entry.title} | Caleb Darling`}</title>
      <meta name="description" content={entry.description} />

      <Flex direction="column" gap="6">
        <div>
          <Link
            asChild
            size="1"
            color="gray"
            mb="5"
            style={{ display: "block" }}
          >
            <RouterLink to="/work">← Work</RouterLink>
          </Link>
          <Heading as="h1" size="7" mb="2">
            {entry.title}
          </Heading>
          <Text as="p" size="1" color="gray">
            {entry.meta}
          </Text>
        </div>

        <Flex direction="column" gap="2" asChild>
          <figure style={{ margin: 0 }}>
            <Box
              p="4"
              style={{
                background: "var(--gray-2)",
                border: "1px solid var(--gray-a5)",
                borderRadius: "var(--radius-3)",
              }}
            >
              {diagram}
            </Box>
            <Text as="p" size="1" color="gray" asChild>
              <figcaption>{diagramCaption}</figcaption>
            </Text>
          </figure>
        </Flex>
      </Flex>

      {children}
    </Page>
  );
}

/** The four labeled blocks. Label left, content right. */
export function Fields({ children }: { children: ReactNode }) {
  return <dl className="field-grid">{children}</dl>;
}

export function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <>
      <dt>
        <Label>{label}</Label>
      </dt>
      <dd>
        <Text as="p" size="3">
          {children}
        </Text>
      </dd>
    </>
  );
}

/** Muted one-line aside, e.g. the ERP trade-off callout. */
export function Aside({ children }: { children: ReactNode }) {
  return (
    <Text
      as="p"
      size="2"
      color="gray"
      style={{
        borderLeft: "2px solid var(--gray-a6)",
        paddingLeft: "var(--space-3)",
      }}
    >
      {children}
    </Text>
  );
}
