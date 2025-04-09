import "./customButton.css";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const CustomButton = ({
  variant = "primary",
  className = "",
  ...props
}: CustomButtonProps) => {
  return (
    <button
      {...props}
      className={`btn ${variant === "primary" ? "btn-primary" : "btn-secondary"} ${className}`}
    />
  );
};

export default CustomButton;
