import { Outlet } from "react-router";
import NavigationBar from "~/primoridals/navigation-bar";

export default function LayoutRoot() {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
}
