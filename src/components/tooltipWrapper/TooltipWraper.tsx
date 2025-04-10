import styles from "./tooltipWrapper.module.css";

interface TooltipWrapperProps {
  children: React.ReactNode;
  className?: string;
  position?: "top" | "bottom" | "left" | "right";
  tooltip: string;
}

const TooltipWraper = ({
  children,
  tooltip,
  className = "",
  position = "bottom",
}: TooltipWrapperProps) => {
  return (
    <div className={`${styles.tooltipWrapper} ${className}`}>
      {children}
      <span className={`${styles.tooltipText} ${styles[position]}`}>
        {tooltip}
      </span>
    </div>
  );
};

export default TooltipWraper;
