import { Link } from "react-router-dom";
import styles from "./page.module.css";
import { useDocumentTitle } from "../../lib/use-document-title";
import { CALENDLY_URL } from "../../lib/site-config";
import ContactPanel from "../shared/contact-panel";
import SiteFooter from "../shared/site-footer";
import SiteHeader from "../shared/site-header";

export default function ContactPage() {
  useDocumentTitle("Contact | Cata Bohorquez");

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.frame}>
          <SiteHeader />
          <section className={styles.contactPage}>
            <div aria-hidden="true" className={styles.auraLeft} />
            <div aria-hidden="true" className={styles.auraRight} />

            <div className={`${styles.heroBlock} ${styles.fadeUp} ${styles.fadeStep1}`}>
              <h1 className={styles.heroTitle}>Ready to get started?</h1>
              <p className={styles.heroBody}>
                If you&apos;re interested in working together, send me a message and I&apos;ll
                be happy to explore how I can support your team.
              </p>
              <div className={styles.heroActions}>
                <Link className={styles.primaryButton} to="/projects">
                  View my work
                </Link>
                <a className={styles.secondaryButton} href={CALENDLY_URL} rel="noopener noreferrer" target="_blank">
                  Schedule a call
                </a>
              </div>
            </div>

            <div className={`${styles.fadeUp} ${styles.fadeStep2}`}>
              <ContactPanel layout="compact" />
            </div>
          </section>
          <SiteFooter />
        </div>
      </main>
    </div>
  );
}
