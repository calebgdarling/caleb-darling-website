import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Separator,
  Text,
} from "@radix-ui/themes";
import { Link as RouterLink } from "react-router";
import { site } from "~/content/site";
import { workEntries } from "~/content/work";
import { Label, Page } from "~/primoridals/prose";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  sameAs: [site.linkedin, site.github],
};

const surfaces = [
  "Customer booking & listings",
  "Digital waivers & rider intake",
  "Fleet & asset lifecycle",
  "Enterprise vehicle orders",
  "Payments, disputes & promotions",
  "Outfitter admin (HQ)",
  "Internal ops tools",
  "Email & notifications",
  "Schema design & migrations",
  "EHS / compliance",
];

export default function Home() {
  return (
    <Page>
      <title>Caleb Darling | Full-stack developer</title>
      <meta
        name="description"
        content="Full-stack developer in Minneapolis working across a rental platform's full surface area: booking, waivers, fleet, orders, and payments."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <Flex direction="column" gap="3" align="start" asChild>
        <section>
          {/*
            The same wolf as the favicon, so the tab and the page agree.
            Decorative — the <h1> right below already says the name.
          */}
          <img
            src={site.logo}
            alt=""
            width={512}
            height={512}
            style={{ width: 48, height: 48, display: "block" }}
          />
          <Heading as="h1" size="8">
            {site.name}
          </Heading>
          <Text as="p" size="4" color="gray">
            Full-stack developer. I work across a rental platform's whole
            surface area — customer booking, digital waivers, fleet operations,
            vehicle orders, payments, and the internal tools that run all of it.
          </Text>
          <Box mt="2">
            {/*
              `soft` rather than the default `solid`: Radix's blue-9 with white
              text measures 3.26:1, under the 4.5:1 AA needs at 16px. Soft keeps
              the blue and measures 7.01:1.
            */}
            <Button asChild size="3" variant="soft">
              <RouterLink to="/work">See my work</RouterLink>
            </Button>
          </Box>
        </section>
      </Flex>

      <section>
        <Label>Work surfaces</Label>
        <Flex gap="2" wrap="wrap" mt="3">
          {surfaces.map((surface) => (
            <Text
              key={surface}
              size="1"
              style={{
                border: "1px solid var(--gray-a6)",
                borderRadius: "var(--radius-5)",
                padding: "var(--space-1) var(--space-3)",
                whiteSpace: "nowrap",
              }}
            >
              {surface}
            </Text>
          ))}
        </Flex>
      </section>

      <section>
        <Label>Selected work</Label>
        <Flex direction="column" mt="3">
          {workEntries.map((entry, i) => (
            <Flex key={entry.slug} direction="column">
              {i > 0 ? <Separator size="4" my="4" /> : null}
              <Flex direction="column" gap="1" align="start">
                <Link asChild size="3" weight="medium" highContrast>
                  <RouterLink to={`/work/${entry.slug}`}>
                    {entry.title}
                  </RouterLink>
                </Link>
                <Text as="p" size="2" color="gray">
                  {entry.summary}
                </Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </section>

      <section>
        <Label>Stack</Label>
        <Text as="p" size="2" mt="2">
          TypeScript · React Router / Remix · Node.js · React · MySQL · Zod ·
          Tailwind · Playwright · AWS · Stripe · Docker · Claude Code
        </Text>
      </section>
    </Page>
  );
}
