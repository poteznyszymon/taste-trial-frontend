import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

const user = true;

export const Route = createFileRoute("/_public")({
  beforeLoad: () => {
    if (user) {
      throw redirect({ to: "/" });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <Outlet />;
}
