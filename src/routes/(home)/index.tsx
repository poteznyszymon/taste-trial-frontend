import { createFileRoute } from "@tanstack/react-router";
import "./home.css";

export const Route = createFileRoute("/(home)/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <main></main>;
}
