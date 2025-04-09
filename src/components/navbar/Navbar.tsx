import { Link, useMatchRoute } from "@tanstack/react-router";
import styles from "./navbar.module.css";
import Logo from "../logo/Logo";
import CustomButton from "../customButton/CustomButton";
import { Menu } from "lucide-react";

interface NavbarProps {
  isOpen: boolean;
  onClick: (isOpen: boolean) => void;
}

const Navbar = ({ isOpen, onClick }: NavbarProps) => {
  const matchRoute = useMatchRoute();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarInnerContainer}>
        <Link to="/">
          <Logo />
        </Link>
        <ul className={styles.navbarLinks}>
          <li
            className={`${styles.navbarLink} ${matchRoute({ to: "/" }) ? styles.active : ""}`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`${styles.navbarLink} ${matchRoute({ to: "/restaurants" }) ? styles.active : ""}`}
          >
            <Link to="/restaurants">Restaurants</Link>
          </li>
          <li
            className={`${styles.navbarLink} ${matchRoute({ to: "/create" }) ? styles.active : ""}`}
          >
            <Link to="/create">Add restaurant</Link>
          </li>
        </ul>
        <div className={styles.navbarButtons}>
          <CustomButton variant="secondary">Sign In</CustomButton>
          <CustomButton>Sign Up</CustomButton>
        </div>
        <button
          className={styles.navbarMenuButton}
          onClick={() => onClick(!isOpen)}
        >
          <Menu />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
