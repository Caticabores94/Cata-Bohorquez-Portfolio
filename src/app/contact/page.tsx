import { Link } from "react-router-dom";
import styles from "./page.module.css";
import { publicAsset } from "../../lib/public-asset";
import { useDocumentTitle } from "../../lib/use-document-title";
import { getExternalLinkProps } from "../../lib/link-utils";
import { CALENDLY_URL } from "../../lib/site-config";
import SiteFooter from "../shared/site-footer";
import SiteHeader from "../shared/site-header";

const contactPhoto = publicAsset("/Catalina Bohórquez.png");
const phoneIcon = publicAsset("/contact-phone.svg");
const mailIcon = publicAsset("/contact-mail.svg");
const linkedinIcon = publicAsset("/contact-linkedin.svg");

const contactItems = [
  {
    href: "tel:+573235729981",
    label: "+57 (323) 572 - 9981",
    icon: phoneIcon
  },
  {
    href: "mailto:Catalina.bohorquez94@gmail.com",
    label: "Catalina.bohorquez94@gmail.com",
    icon: mailIcon
  },
  {
    href: "https://www.linkedin.com/in/catalina-boh%C3%B3rquez-restrepo/?locale=en_US",
    label: "Catalina Bohórquez Restrepo",
    icon: linkedinIcon
  }
] as const;

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
                If you&apos;re interested in working with me just throw me a message and
                I&apos;ll be more than happy to check how I can join your team!
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

            <section className={`${styles.contactSection} ${styles.fadeUp} ${styles.fadeStep2}`}>
              <div className={styles.contactCard}>
                <div className={styles.contactPhoto}>
                  <img alt="Catalina Bohórquez" src={contactPhoto} />
                </div>

                <div className={styles.contactInfo}>
                  <h3>Catalina Bohórquez R</h3>
                  <div className={styles.contactDetails}>
                    <div className={styles.contactIcons} aria-hidden="true">
                      {contactItems.map((item) => (
                        <img alt="" key={item.label} src={item.icon} />
                      ))}
                    </div>
                    <div className={styles.contactLinks}>
                      {contactItems.map((item) => (
                        <a
                          href={item.href}
                          key={item.label}
                          {...getExternalLinkProps(item.href)}
                        >
                          <span>{item.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className={styles.contactLinksMobile}>
                    {contactItems.map((item) => (
                      <a
                        href={item.href}
                        key={item.label}
                        {...getExternalLinkProps(item.href)}
                      >
                        <img alt="" aria-hidden="true" src={item.icon} />
                        <span>{item.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </section>
          <SiteFooter />
        </div>
      </main>
    </div>
  );
}
