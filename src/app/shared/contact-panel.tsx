import { getExternalLinkProps } from "../../lib/link-utils";
import { publicAsset } from "../../lib/public-asset";
import AmbientVideo from "./ambient-video";
import styles from "./contact-panel.module.css";

const contactPhoto = publicAsset("/Catalina-Bohorquez.png");
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

type ContactPanelProps = {
  id?: string;
  layout?: "feature" | "compact";
  title?: string;
  body?: string;
  backgroundVideoSrc?: string;
};

export default function ContactPanel({
  id,
  layout = "feature",
  title,
  body,
  backgroundVideoSrc
}: ContactPanelProps) {
  const isFeature = layout === "feature";

  return (
    <section className={`${styles.section} ${isFeature ? styles.sectionFeature : styles.sectionCompact}`} id={id}>
      {backgroundVideoSrc ? (
        <div className={styles.backdrop} aria-hidden="true">
          <AmbientVideo className={styles.video} src={backgroundVideoSrc} />
          <div className={styles.backdropShade} />
        </div>
      ) : null}

      {title || body ? (
        <div className={styles.header}>
          {title ? <h2 className={styles.title}>{title}</h2> : null}
          {body ? <p className={styles.body}>{body}</p> : null}
          {isFeature ? <span aria-hidden="true" className={styles.divider} /> : null}
        </div>
      ) : null}

      <div className={styles.card}>
        <div className={styles.photo}>
          <img alt="Catalina Bohórquez" src={contactPhoto} />
        </div>

        <div className={styles.info}>
          <h3>Catalina Bohórquez R</h3>
          <div className={styles.details}>
            <div className={styles.icons} aria-hidden="true">
              {contactItems.map((item) => (
                <img alt="" key={item.label} src={item.icon} />
              ))}
            </div>
            <div className={styles.links}>
              {contactItems.map((item) => (
                <a href={item.href} key={item.label} {...getExternalLinkProps(item.href)}>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
          <div className={styles.linksMobile}>
            {contactItems.map((item) => (
              <a href={item.href} key={item.label} {...getExternalLinkProps(item.href)}>
                <img alt="" aria-hidden="true" src={item.icon} />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
