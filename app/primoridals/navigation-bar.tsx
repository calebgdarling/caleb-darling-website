import { NavigationMenu } from "radix-ui";

export default function NavigationBar() {
  return (
    <NavigationMenu.Root>
      I am a navigation bar root!
      <NavigationMenu.List>
        <NavigationMenu.Item>I am a navigation bar item!</NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
