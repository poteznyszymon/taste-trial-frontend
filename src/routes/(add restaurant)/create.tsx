import { createFileRoute } from "@tanstack/react-router";
import styles from "./create.module.css";

export const Route = createFileRoute("/(add restaurant)/create")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className={styles.test}>Hello "/(add restaurant)/create"!</div>;
}
