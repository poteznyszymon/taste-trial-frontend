import { createFileRoute } from "@tanstack/react-router";
import "./home.css";
import TooltipWraper from "../../components/tooltipWrapper/TooltipWraper";
import { User } from "lucide-react";

export const Route = createFileRoute("/(home)/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main>
      <TooltipWraper tooltip="Hello" position="bottom">
        <User />
      </TooltipWraper>
    </main>
  );
}
