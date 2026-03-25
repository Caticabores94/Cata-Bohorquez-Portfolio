import { Link, NavLink } from "react-router-dom";
import { publicAsset } from "../../lib/public-asset";
import { CALENDLY_URL } from "../../lib/site-config";
import MobileNav from "./mobile-nav";
import styles from "./site-header.module.css";

const brandIconAsset = publicAsset("/Logo Catalina Bohorquez.png");

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" }
] as const;

export default function SiteHeader({ solid = false }: { solid?: boolean }) {
  return (
    <header className={`${styles.header} ${solid ? styles.headerSolid : ""}`}>
      <Link className={styles.brand} to="/">
        <img alt="Cata Bohorquez" className={styles.brandIcon} src={brandIconAsset} />
      </Link>

      <nav aria-label="Primary" className={styles.nav}>
        {navLinks.map((item) => (
          <NavLink
            className={({ isActive }) => (isActive ? styles.navLinkActive : styles.navLink)}
            key={item.label}
            to={item.href}
          >
            {item.label}
          </NavLink>
        ))}
        <a className={styles.navButton} href={CALENDLY_URL} rel="noopener noreferrer" target="_blank">
          Schedule a call
        </a>
      </nav>

      <MobileNav items={navLinks} />
    </header>
  );
}
