import { Link } from "react-router-dom";
import { publicAsset } from "../../lib/public-asset";
import styles from "./site-footer.module.css";

const footerLogoAsset = publicAsset("/Logo Catalina Bohorquez.png");

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Link className={styles.logoLink} to="/">
        <img alt="Cata Bohorquez" className={styles.logo} src={footerLogoAsset} />
      </Link>
    </footer>
  );
}
