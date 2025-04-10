import { createFileRoute } from "@tanstack/react-router";
import "./home.css";
import Hero from "../../components/hero/Hero";

export const Route = createFileRoute("/(home)/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main>
      <Hero />
    </main>
  );
}
