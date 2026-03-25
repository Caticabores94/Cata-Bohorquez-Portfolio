import { Link } from "react-router-dom";
import styles from "./page.module.css";
import { publicAsset } from "../../lib/public-asset";
import { useDocumentTitle } from "../../lib/use-document-title";
import { getExternalLinkProps } from "../../lib/link-utils";
import AmbientVideo from "../shared/ambient-video";
import SiteFooter from "../shared/site-footer";
import SiteHeader from "../shared/site-header";

const contactPhoto = publicAsset("/Catalina Bohórquez.png");
const contactVideo = publicAsset("/Contact%20video.mp4");
const phoneIcon = publicAsset("/contact-phone.svg");
const mailIcon = publicAsset("/contact-mail.svg");
const linkedinIcon = publicAsset("/contact-linkedin.svg");

const cardAcuvue = publicAsset("/Projects/Rectangle%205.png");
const cardGeoAcuvue = publicAsset("/Projects/Rectangle%205-1.png");
const cardJapanese = publicAsset("/Projects/Rectangle%205-2.png");
const cardGeoJjv = publicAsset("/Projects/Group%205.png");
const cardPortal = publicAsset("/Projects/Rectangle%205-3.png");
const cardVein = publicAsset("/Projects/Rectangle%205-4.png");
const cardPts = publicAsset("/Projects/Rectangle%205-5.png");
const cardVeinWomen = publicAsset("/Projects/Group%205-1.png");
const cardInsurance = publicAsset("/Projects/Rectangle%205-6.png");
const cardCostCalculator = publicAsset("/Projects/Group%205-3.png");
const cv4uLogo = publicAsset("/logos/Clear Vision For You/CV4U Logo.png");

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

type ProjectCardItem = {
  slug?: string;
  title: string;
  role: string;
  media?: string;
  mediaClassName?: string;
  cardClassName?: string;
  frameClassName?: string;
  logo?: string;
  logoClassName?: string;
  contentClassName?: string;
};

const projectCards: readonly ProjectCardItem[] = [
  {
    slug: "acuvue-contact-lenses",
    title: "ACUVUE (Global design system)",
    role: "Senior UI|UX designer",
    media: cardAcuvue,
    mediaClassName: styles.mediaCardFill,
    cardClassName: styles.surfaceAcuvue
  },
  {
    slug: "geo-optimization-acuvue",
    title: "GEO optimization for ACUVUE",
    role: "Product Designer | GEO co-creator",
    media: cardGeoAcuvue,
    mediaClassName: styles.mediaCardFill,
    cardClassName: styles.surfaceLight
  },
  {
    slug: "japanese-learning-app",
    title: "Japanese Learning App (Full AI project)",
    role: "Senior UI|UX designer | Vibe Coder",
    media: cardJapanese,
    mediaClassName: styles.mediaCardFill,
    cardClassName: styles.surfaceWhite
  },
  {
    slug: "geo-optimization-jjv-pro",
    title: "GEO optimization for JJV Pro",
    role: "Product Designer | GEO co-creator",
    media: cardGeoJjv,
    mediaClassName: styles.mediaGeoJjv,
    cardClassName: styles.surfaceLight
  },
  {
    slug: "clear-vision-for-you",
    title: "CV4U (Global Project)",
    role: "Product Designer",
    logo: cv4uLogo,
    logoClassName: styles.cv4uLogo,
    cardClassName: styles.surfaceCv4u
  },
  {
    title: "Portal de autogestión (Coming soon)",
    role: "Product Designer",
    media: cardPortal,
    mediaClassName: styles.mediaCardFill,
    cardClassName: styles.surfaceWhite
  },
  {
    slug: "vein-treatment-clinic",
    title: "Vein Treatment Clinic (US)",
    role: "Product Designer",
    media: cardVein,
    mediaClassName: styles.mediaCardFill,
    cardClassName: styles.surfaceVein
  },
  {
    slug: "pts-microsites",
    title: "PTS Microsites",
    role: "Product Designer",
    media: cardPts,
    mediaClassName: styles.mediaCardFill,
    cardClassName: styles.surfacePts
  },
  {
    slug: "vein-doctor-for-women",
    title: "Vein Doctor For Women",
    role: "Product Designer",
    media: cardVeinWomen,
    mediaClassName: styles.mediaCardFill,
    cardClassName: styles.surfaceWomen
  },
  {
    slug: "insurance-coverage-online",
    title: "Insurance Coverage Online",
    role: "Product Designer",
    media: cardInsurance,
    mediaClassName: styles.mediaCardFill,
    cardClassName: styles.surfaceWhite
  },
  {
    title: "Cost Calculator (Coming soon)",
    role: "Sr. UI|UX designer",
    media: cardCostCalculator,
    mediaClassName: styles.mediaCardFill,
    cardClassName: styles.surfaceWhite
  }
] as const;

function ProjectCard({ item }: { item: ProjectCardItem }) {
  const content = (
    <>
      <div className={`${styles.projectVisual} ${item.cardClassName ?? ""} ${item.frameClassName ?? ""}`}>
        {item.media ? (
          <img
            alt=""
            aria-hidden="true"
            className={`${styles.projectMedia} ${item.mediaClassName ?? ""}`}
            decoding="async"
            loading="lazy"
            src={item.media}
          />
        ) : null}
        {item.logo ? (
          <img alt="" aria-hidden="true" className={item.logoClassName} decoding="async" loading="lazy" src={item.logo} />
        ) : null}
      </div>
      <div className={`${styles.projectCopy} ${item.contentClassName ?? ""}`}>
        <h3>{item.title}</h3>
        <p>{item.role}</p>
      </div>
    </>
  );

  return (
    <article className={styles.projectCard}>
      {item.slug ? (
        <Link className={styles.projectCardLink} to={`/projects/${item.slug}`}>
          {content}
        </Link>
      ) : (
        content
      )}
    </article>
  );
}

export default function ProjectsPage() {
  useDocumentTitle("Projects | Cata Bohorquez");

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.frame}>
          <SiteHeader />

          <section className={styles.projectsPage}>
            <div aria-hidden="true" className={styles.auraLeft} />
            <div aria-hidden="true" className={styles.auraRight} />

            <section className={`${styles.heroSection} ${styles.fadeUp} ${styles.fadeStep1}`} data-node-id="11:1102">
              <h1 className={styles.heroTitle}>Ready to see how ideas turn into impact?</h1>
              <p className={styles.heroBody}>
                Here you&apos;ll find a selection of projects that showcase how I approach
                design, from ideation to execution, focusing on creating meaningful,
                scalable, and user-centered solutions.
              </p>
            </section>

            <section className={`${styles.sectionBlock} ${styles.fadeUp} ${styles.fadeStep2}`}>
              <h2 className={styles.sectionTitle}>Projects</h2>
              <p className={styles.sectionDescription}>
                Browse the projects below to dive deeper into each case.
              </p>
              <div className={styles.projectGrid} data-node-id="510:1456">
                {projectCards.map((item) => (
                  <ProjectCard item={item} key={item.title} />
                ))}
              </div>
            </section>

            <section className={`${styles.noteSection} ${styles.fadeUp} ${styles.fadeStep3}`}>
              <p className={styles.noteText}>
                If you want to know more about the projects or want to see something
                else, just let me know :)
              </p>
            </section>

            <section className={`${styles.contactSection} ${styles.fadeUp} ${styles.fadeStep4}`}>
              <div className={styles.contactBackdrop} aria-hidden="true">
                <AmbientVideo className={styles.contactVideo} src={contactVideo} />
                <div className={styles.contactBackdropShade} />
              </div>

              <div className={styles.contactHeader}>
                <h2 className={styles.contactTitle}>Ready to get started?</h2>
                <p className={styles.contactBody}>
                  If you&apos;re interested in working with me just throw me a message and
                  I&apos;ll be more than happy to check how I can join your team!
                </p>
                <span aria-hidden="true" className={styles.contactDivider} />
              </div>

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
                          {item.label}
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
