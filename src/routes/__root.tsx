import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import Navbar from "../components/navbar/Navbar";
import MobileSheet from "../components/mobileSheet/MobileSheet";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Navbar isOpen={isMobileMenuOpen} onClick={setIsMobileMenuOpen} />
      <Outlet />
      <MobileSheet isOpen={isMobileMenuOpen} onClose={setIsMobileMenuOpen} />
    </React.Fragment>
  );
}
