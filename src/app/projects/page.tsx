import { Link } from "react-router-dom";
import styles from "./page.module.css";
import { publicAsset } from "../../lib/public-asset";
import { useDocumentTitle } from "../../lib/use-document-title";
import ContactPanel from "../shared/contact-panel";
import SiteFooter from "../shared/site-footer";
import SiteHeader from "../shared/site-header";

const contactVideo = publicAsset("/Contact%20video.mp4");

const cardAcuvue = publicAsset("/Projects/Rectangle%205.png");
const cardGeoAcuvue = publicAsset("/Projects/Rectangle%205-1.png");
const cardJapanese = publicAsset("/Projects/Rectangle%205-2.png");
const cardGeoJjv = publicAsset("/Projects/Group%205.png");
const cardCv4u = publicAsset("/Projects/Clear%20Vision%20For%20You/Projects/Rectangle%205.png");
const cardPortal = publicAsset("/Projects/Rectangle%205-3.png");
const cardVein = publicAsset("/Projects/Rectangle%205-4.png");
const cardPts = publicAsset("/Projects/Rectangle%205-5.png");
const cardVeinWomen = publicAsset("/Projects/Group%205-1.png");
const cardInsurance = publicAsset("/Projects/Rectangle%205-6.png");
const cardCostCalculator = publicAsset("/Projects/Group%205-3.png");
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
    mediaClassName: styles.mediaCardFill,
    cardClassName: styles.surfaceLight
  },
  {
    slug: "clear-vision-for-you",
    title: "CV4U (Global Project)",
    role: "Product Designer",
    media: cardCv4u,
    mediaClassName: styles.mediaCardFill,
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
                Here you&apos;ll find a selection of projects that show how I approach
                design from strategy to execution, always aiming for clear, scalable,
                and user-centered outcomes.
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
                If you&apos;d like to review a specific case study or see additional work,
                reach out and I can walk you through it.
              </p>
            </section>

            <div className={`${styles.fadeUp} ${styles.fadeStep4}`}>
              <ContactPanel
                backgroundVideoSrc={contactVideo}
                body="If you're interested in working with me, send me a message and I'll be happy to explore how I can support your team."
                title="Ready to get started?"
              />
            </div>
          </section>

          <SiteFooter />
        </div>
      </main>
    </div>
  );
}
