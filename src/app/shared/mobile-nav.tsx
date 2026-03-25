import { useEffect, useId, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CALENDLY_URL } from "../../lib/site-config";
import styles from "./mobile-nav.module.css";

type NavItem = {
  href: string;
  label: string;
};

type MobileNavProps = {
  items: readonly NavItem[];
};

function iconForLabel(label: string) {
  switch (label) {
    case "Home":
      return (
        <svg aria-hidden="true" fill="none" height="18" viewBox="0 0 24 24" width="18">
          <path d="M4 10.5 12 4l8 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <path d="M6.5 9.5V20h11V9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </svg>
      );
    case "About":
      return (
        <svg aria-hidden="true" fill="none" height="18" viewBox="0 0 24 24" width="18">
          <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
          <path d="M6.5 19a5.5 5.5 0 0 1 11 0" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        </svg>
      );
    case "Experience":
      return (
        <svg aria-hidden="true" fill="none" height="18" viewBox="0 0 24 24" width="18">
          <rect height="11" rx="2" stroke="currentColor" strokeWidth="1.8" width="16" x="4" y="7" />
          <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" stroke="currentColor" strokeWidth="1.8" />
          <path d="M4 11.5h16" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "Projects":
      return (
        <svg aria-hidden="true" fill="none" height="18" viewBox="0 0 24 24" width="18">
          <rect height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" width="8" x="4" y="5" />
          <rect height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" width="8" x="12" y="13" />
          <path d="M12 8h2.5A1.5 1.5 0 0 1 16 9.5V13" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 16H9.5A1.5 1.5 0 0 1 8 14.5V11" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "Contact":
      return (
        <svg aria-hidden="true" fill="none" height="18" viewBox="0 0 24 24" width="18">
          <rect height="12" rx="2" stroke="currentColor" strokeWidth="1.8" width="18" x="3" y="6" />
          <path d="m5 8 7 5 7-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </svg>
      );
    default:
      return null;
  }
}

export default function MobileNav({ items }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuId = useId();
  const menuItems = [{ href: "/", label: "Home" }, ...items];

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.removeProperty("overflow");
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className={styles.mobileNav}>
      <button
        aria-controls={menuId}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className={`${styles.menuButton} ${isOpen ? styles.menuButtonOpen : ""}`}
        onClick={() => setIsOpen((value) => !value)}
        type="button"
      >
        <span className={styles.menuLine} />
        <span className={styles.menuLine} />
        <span className={styles.menuLine} />
      </button>

      {isOpen ? <button aria-label="Close menu overlay" className={styles.backdrop} onClick={() => setIsOpen(false)} type="button" /> : null}

      <div
        className={`${styles.menuPanel} ${isOpen ? styles.menuPanelOpen : ""}`}
        id={menuId}
      >
        <nav aria-label="Mobile primary" className={styles.menuLinks}>
          {menuItems.map((item) => (
            <NavLink
              className={({ isActive }) => (isActive ? styles.menuLinkActive : styles.menuLink)}
              key={item.href}
              to={item.href}
            >
              <span className={styles.menuLinkIcon}>{iconForLabel(item.label)}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <a className={styles.menuCta} href={CALENDLY_URL} rel="noopener noreferrer" target="_blank">
          Schedule a call
        </a>
      </div>
    </div>
  );
}
