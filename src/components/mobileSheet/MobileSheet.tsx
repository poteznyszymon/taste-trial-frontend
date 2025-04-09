import { Link } from "@tanstack/react-router";
import styles from "./mobilesheet.module.css";
import { X } from "lucide-react";

interface MobileSheetProps {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileSheet = ({ isOpen, onClose }: MobileSheetProps) => {
  return (
    <>
      <div
        className={`${styles.menuContainer} ${isOpen ? styles.open : ""}`}
        onClick={() => onClose(false)}
      ></div>
      <div className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`}>
        <button className={styles.closeButton} onClick={() => onClose(false)}>
          <X />
        </button>
        <ul className={styles.links}>
          <li className={styles.link}>
            <Link to="/" onClick={() => onClose(false)}>
              home
            </Link>
          </li>
          <li className={styles.link}>
            <Link to="/restaurants" onClick={() => onClose(false)}>
              Restaurants
            </Link>
          </li>
          <li className={styles.link}>
            <Link to="/create" onClick={() => onClose(false)}></Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileSheet;
