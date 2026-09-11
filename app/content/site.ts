export type AvatarImage = {
  src: string;
  /** Intrinsic pixel dimensions, so the layout reserves the right box. */
  width: number;
  height: number;
};

/** Single source of truth for contact details and external profiles. */
export const site = {
  name: "Caleb Darling",
  role: "Full-stack developer",
  email: "calebgdarling@gmail.com",
  github: "https://github.com/calebgdarling",
  linkedin: "https://www.linkedin.com/in/calebdarling",
  url: "https://calebdarling.com",
  /** The wolf mark, matching the favicon. Home page only. */
  logo: "/wolf-cyan.png",
  /** Used in exactly two places, and nowhere else (handoff §10). */
  avatars: {
    programming: {
      src: "/programmer-avatar.jpeg",
      width: 843,
      height: 1264,
    } satisfies AvatarImage,
    confused: {
      src: "/confused-avatar.jpeg",
      width: 1376,
      height: 768,
    } satisfies AvatarImage,
  },
} as const;
