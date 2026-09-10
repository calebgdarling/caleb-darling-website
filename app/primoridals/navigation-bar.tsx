import {
  EnvelopeClosedIcon,
  FileTextIcon,
  HomeIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Flex, Link } from "@radix-ui/themes";

export default function NavigationBar() {
  return (
    <Flex asChild align="center" gap="4" p="4" wrap="wrap">
      <nav aria-label="Main navigation">
        <Link href="/home">
          <Flex align="center" gap="2">
            <HomeIcon aria-hidden="true" />
            Home
          </Flex>
        </Link>
        <Link href="/about">
          <Flex align="center" gap="2">
            <PersonIcon aria-hidden="true" />
            About
          </Flex>
        </Link>
        <Link href="/case-studies">
          <Flex align="center" gap="2">
            <FileTextIcon aria-hidden="true" />
            Case Studies
          </Flex>
        </Link>
        <Link href="/contact">
          <Flex align="center" gap="2">
            <EnvelopeClosedIcon aria-hidden="true" />
            Contact
          </Flex>
        </Link>
      </nav>
    </Flex>
  );
}
