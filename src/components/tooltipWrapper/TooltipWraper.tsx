import styles from "./tooltipWrapper.module.css";

interface TooltipWrapperProps {
  children: React.ReactNode;
  className?: string;
  tooltip: string;
}

const TooltipWraper = ({
  children,
  tooltip,
  className,
}: TooltipWrapperProps) => {
  return (
    <div className={`${styles.tooltipWrapper} ${className}`}>
      {children}
      <span className={styles.tooltipText}>{tooltip}</span>
    </div>
  );
};

export default TooltipWraper;
