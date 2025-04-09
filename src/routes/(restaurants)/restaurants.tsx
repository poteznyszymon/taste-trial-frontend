import { createFileRoute } from "@tanstack/react-router";
import styles from "./restaurants.module.css";

export const Route = createFileRoute("/(restaurants)/restaurants")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className={styles.test}>Hello "/(restaurants)/restaurants"!</div>;
}
