import { Flex, Heading, Separator, Text } from "@radix-ui/themes";
import { site } from "~/content/site";
import { Avatar } from "~/primoridals/avatar";
import { Label, P, Page } from "~/primoridals/prose";

const timeline = [
  {
    year: "2019",
    place: "Minco Products",
    line: "IT business analyst intern. Requirements gathering, IFS, SQL.",
  },
  {
    year: "2020",
    place: "TempWorks",
    line: "Software support on a large SQL Server product.",
  },
  {
    year: "2021",
    place: "Marcato Partners",
    line: "Support analyst. Triaged defects, built regression coverage, sat between frustrated users and a busy engineering team.",
  },
  {
    year: "2024",
    place: "Marcato Partners",
    line: "Full-stack developer, embedded with Polaris.",
  },
];

export default function About() {
  return (
    <Page>
      <title>About | Caleb Darling</title>
      <meta
        name="description"
        content="Support analyst to full-stack developer, and how that shapes the way I work."
      />

      <Flex align="start" gap="6" wrap="wrap">
        <Avatar
          image={site.avatars.programming}
          alt="Cartoon illustration of me writing code at a laptop"
          width={200}
        />
        <Flex direction="column" gap="3" style={{ flex: 1, minWidth: "16rem" }}>
          <Heading as="h1" size="6">
            I'm a full-stack developer in the Minneapolis area.
          </Heading>
          <P color="gray">
            Since 2024, I've been contracted with Polaris, a Fortune 500
            powersports manufacturer, working within its Polaris Adventures
            division to build and maintain the reservations and payments
            platform that powers its outfitter network.
          </P>
        </Flex>
      </Flex>

      <section>
        <Label>Timeline</Label>
        <Flex direction="column" mt="3">
          {timeline.map((row, i) => (
            <Flex key={`${row.year}-${row.place}`} direction="column">
              {i > 0 ? <Separator size="4" my="3" /> : null}
              <Flex gap="4" align="baseline" wrap="wrap">
                <Text
                  size="2"
                  color="gray"
                  style={{
                    minWidth: "3rem",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {row.year}
                </Text>
                <Flex
                  direction="column"
                  gap="1"
                  style={{ flex: 1, minWidth: "14rem" }}
                >
                  <Text size="2" weight="medium">
                    {row.place}
                  </Text>
                  <Text size="2" color="gray">
                    {row.line}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </section>

      <Flex direction="column" gap="3">
        <P>
          Coming into engineering through support turned out to be the most
          useful thing on my résumé. When a ticket arrives with a feature
          request, my first question is usually what the person is actually
          trying to accomplish — it's frequently not the thing they asked for.
        </P>
        <P>
          I care more about correctness than speed, and I write code meant to be
          read by whoever maintains it next.
        </P>
      </Flex>

      {/* Optional per handoff §7 — keep or cut. */}
      <Text as="p" size="2" color="gray">
        Outside work: a dog who eats things he shouldn't, fantasy football I
        lose with dignity, and more history books than shelf space.
      </Text>
    </Page>
  );
}
