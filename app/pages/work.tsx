import { Flex, Heading, Link, Separator, Text } from "@radix-ui/themes";
import { Link as RouterLink } from "react-router";
import { workEntries } from "~/content/work";
import { Label, List, P, Page } from "~/primoridals/prose";

/** Handoff §6.5 — a short block, not a full case study. No diagram. */
const stewardship = [
  {
    term: "Schema standardization",
    detail:
      "Standardized Zod schema export patterns across six domains — customer operations, fleet operations, finance, outfitter operations, EHS, and account management — so validation looks the same wherever you land in the monorepo.",
  },
  {
    term: "Feature flag lifecycle",
    detail:
      "Adding, extending, retiring, and sunsetting flags, including removing retired flags from both the codebase and the database. Flags that never get cleaned up are the ones that cause outages.",
  },
  {
    term: "Repo-wide refactors",
    detail:
      "Consolidated duplicate React Router imports across the whole repo; migrated product lines to a new enum structure; resolved deprecated tsconfig warnings.",
  },
  {
    term: "Query performance",
    detail:
      "Optimized customer and outfitter-user query routes, limited an unbounded subquery in availability listing, resolved a call-stack-size error and a database timeout.",
  },
  {
    term: "Security and access",
    detail:
      "Enforced MFA for all outfitter owners, sanitized filenames before S3 upload, sanitized product titles that were tripping WAF rules.",
  },
  {
    term: "Accessibility and mobile",
    detail:
      "Checkbox touch targets on devices, mobile table layouts, mobile sidebar restructuring.",
  },
];

export default function Work() {
  return (
    <Page>
      <title>Work | Caleb Darling</title>
      <meta
        name="description"
        content="Case studies from inside a Fortune 500 product team."
      />

      {/*
        The nav already labels this page and highlights it. The heading stays
        for the document outline and screen readers, but isn't shown — there
        is no opening sentence here to promote in its place.
      */}
      <Heading as="h1" size="7" className="visually-hidden">
        Work
      </Heading>

      <Flex direction="column">
        {workEntries.map((entry, i) => (
          <Flex key={entry.slug} direction="column">
            {i > 0 ? <Separator size="4" my="5" /> : null}
            <Flex direction="column" gap="2" align="start">
              <Heading as="h2" size="4">
                <Link asChild highContrast>
                  <RouterLink to={`/work/${entry.slug}`}>
                    {entry.title}
                  </RouterLink>
                </Link>
              </Heading>
              <Text as="p" size="1" color="gray">
                {entry.meta}
              </Text>
              <Text as="p" size="2">
                {entry.summary}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>

      <section>
        <Label>Platform stewardship</Label>
        <Flex direction="column" gap="3" mt="3">
          <P>
            A good chunk of what I ship is maintenance nobody asked for. It's
            the reason the rest ships at all.
          </P>
          <List>
            {stewardship.map(({ term, detail }) => (
              <li key={term}>
                <Text size="2" weight="medium">
                  {term}.
                </Text>{" "}
                <Text size="2" color="gray">
                  {detail}
                </Text>
              </li>
            ))}
          </List>
        </Flex>
      </section>
    </Page>
  );
}
