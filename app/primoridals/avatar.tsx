import { Box } from "@radix-ui/themes";
import type { AvatarImage } from "~/content/site";

/**
 * Handoff §10: the character illustration appears exactly twice — the hero and
 * the 404 — and nowhere else. Scattered around it reads as decoration and
 * undercuts the engineering content.
 *
 * The two source images have their own backgrounds baked in, so there is no
 * color panel behind them. They are also different orientations, so intrinsic
 * dimensions travel with each image rather than being fixed here; the browser
 * uses them to reserve the right box before the image loads.
 */
export function Avatar({
  image,
  alt,
  width,
}: {
  image: AvatarImage;
  alt: string;
  width: number;
}) {
  return (
    <Box flexShrink="0" style={{ width, maxWidth: "100%" }}>
      <img
        src={image.src}
        alt={alt}
        width={image.width}
        height={image.height}
        decoding="async"
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          borderRadius: "var(--radius-4)",
        }}
      />
    </Box>
  );
}
