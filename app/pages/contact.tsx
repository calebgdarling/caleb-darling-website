import { Flex, Heading, Link } from "@radix-ui/themes";
import { site } from "~/content/site";
import { P, Page } from "~/primoridals/prose";

export default function Contact() {
  return (
    <Page>
      <title>Contact | Caleb Darling</title>
      <meta name="description" content="How to reach me." />

      <Flex direction="column" gap="3">
        <Heading as="h1" size="6">
          Email is the best way to reach me.
        </Heading>
        <P color="gray">
          Open to questions, conversations, and the occasional good idea.
        </P>
      </Flex>

      <Flex direction="column" gap="3" align="start">
        <Link size="3" href={`mailto:${site.email}`}>
          {site.email}
        </Link>
        <Link size="3" href={site.github} target="_blank" rel="me noopener">
          GitHub
        </Link>
        <Link size="3" href={site.linkedin} target="_blank" rel="me noopener">
          LinkedIn
        </Link>
      </Flex>
    </Page>
  );
}
