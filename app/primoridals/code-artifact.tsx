import { Box, Flex, Text } from "@radix-ui/themes";

function Pane({ code }: { code: string }) {
  return (
    <Box
      className="code-scroll"
      p="4"
      style={{
        background: "var(--gray-2)",
        border: "1px solid var(--gray-a5)",
        borderRadius: "var(--radius-3)",
      }}
    >
      <pre>
        <code>{code}</code>
      </pre>
    </Box>
  );
}

/** A static code block with a one-line caption underneath. */
export function CodeArtifact({
  code,
  caption,
}: {
  code: string;
  caption: string;
}) {
  return (
    <Flex direction="column" gap="2" asChild>
      <figure style={{ margin: 0 }}>
        <Pane code={code} />
        <Text as="p" size="1" color="gray" asChild>
          <figcaption>{caption}</figcaption>
        </Text>
      </figure>
    </Flex>
  );
}
