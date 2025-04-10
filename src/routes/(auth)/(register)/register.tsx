import { createFileRoute } from "@tanstack/react-router";
import styles from "./register.module.css";

export const Route = createFileRoute("/(auth)/(register)/register")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className={styles.registerContainer}>
      Hello "/(auth)/(register)/register"!
    </div>
  );
}
