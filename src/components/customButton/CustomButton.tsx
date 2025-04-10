import { Loader2 } from "lucide-react";
import styles from "./customButton.module.css";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  loading?: boolean;
}

const CustomButton = ({
  variant = "primary",
  className = "",
  loading = false,
  ...props
}: CustomButtonProps) => {
  return (
    <button
      {...props}
      className={`${styles.btn} ${variant === "primary" ? styles.btnPrimary : styles.btnSecondary} ${loading ? styles.loading : ""}  ${className}`}
    >
      <p>{props.children}</p>
      {loading && (
        <div className={styles.loaderContainer}>
          <Loader2 className={styles.loaderIcon} />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
