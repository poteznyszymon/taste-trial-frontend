import { Link, useLocation } from "@tanstack/react-router";
import styles from "./mobilesheet.module.css";
import { X } from "lucide-react";
import Logo from "../logo/Logo";
import CustomButton from "../customButton/CustomButton";
import TooltipWraper from "../tooltipWrapper/TooltipWraper";

interface MobileSheetProps {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileSheet = ({ isOpen, onClose }: MobileSheetProps) => {
  const location = useLocation();

  return (
    <>
      <div
        className={`${styles.menuContainer} ${isOpen ? styles.open : ""}`}
        onClick={() => onClose(false)}
      ></div>
      <div className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`}>
        <div className={styles.closeWrapper}>
          <TooltipWraper tooltip="Close">
            <button
              className={styles.closeButton}
              onClick={() => onClose(false)}
            >
              <X />
            </button>
          </TooltipWraper>
        </div>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
        <ul className={styles.links}>
          <li
            className={`${styles.link} ${location.pathname === "/" ? styles.active : ""}`}
          >
            <Link to="/" onClick={() => onClose(false)}>
              Home
            </Link>
          </li>
          <li
            className={`${styles.link} ${location.pathname === "/restaurants" ? styles.active : ""}`}
          >
            <Link to="/restaurants" onClick={() => onClose(false)}>
              Restaurants
            </Link>
          </li>
          <li
            className={`${styles.link} ${location.pathname === "/create" ? styles.active : ""}`}
          >
            <Link to="/create" onClick={() => onClose(false)}>
              Add Restaurant
            </Link>
          </li>
        </ul>
        <div className={styles.buttonContainer}>
          <CustomButton className={styles.button} variant="secondary">
            Login
          </CustomButton>
          <CustomButton className={styles.button}>Register</CustomButton>
        </div>
      </div>
    </>
  );
};

export default MobileSheet;
