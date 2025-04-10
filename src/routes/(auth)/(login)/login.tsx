import { createFileRoute } from "@tanstack/react-router";
import styles from "./login.module.css";

export const Route = createFileRoute("/(auth)/(login)/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className={styles.loginContainer}>Hello "/(auth)/(login)/login"!</div>
  );
}
