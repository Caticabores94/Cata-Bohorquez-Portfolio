import { Link } from "react-router-dom";
import styles from "./page.module.css";
import ReviewsCarousel, { type ReviewItem } from "./reviews-carousel";
import { publicAsset } from "../../lib/public-asset";
import { useDocumentTitle } from "../../lib/use-document-title";
import { experienceSummaries } from "./detail-data";
import SiteFooter from "../shared/site-footer";
import SiteHeader from "../shared/site-header";

const experienceHeroImage = publicAsset("/Assets/Experience image.png");
const logoJnj = publicAsset("/logos/Johnson & Johnson Logo color.png");
const logoAlestra = publicAsset("/logos/Alestra logo color.png");
const logoVip = publicAsset("/logos/vip.png");
const logoCamera = publicAsset("/Experience images/Cámara de comercio.png");

const featuredExperiences = experienceSummaries.slice(0, 3).map((item) => {
  if (item.slug === "johnson-and-johnson") {
    return { ...item, bgClass: styles.experienceCardLight, logo: logoJnj, logoClass: styles.experienceLogoJnj };
  }

  if (item.slug === "alestra-movil") {
    return { ...item, bgClass: styles.experienceCardLight, logo: logoAlestra, logoClass: styles.experienceLogoAlestra };
  }

  return { ...item, bgClass: styles.experienceCardLight, logo: logoVip, logoClass: styles.experienceLogoVip };
});

const pastExperiences = experienceSummaries.slice(3).map((item) => {
  if (item.slug === "camara-de-comercio") {
    return {
      ...item,
      bgClass: `${styles.experienceCardLight} ${styles.experienceCardEdgeToEdge}`,
      logo: logoCamera,
      logoClass: styles.experienceLogoCamera
    };
  }

  if (item.slug === "visit-santa-marta") {
    return { ...item, bgClass: styles.experienceCardAccent };
  }

  if (item.slug === "low-carbon-city") {
    return { ...item, bgClass: styles.experienceCardLight, textLogoClass: styles.lowCarbonLogo };
  }

  return { ...item, bgClass: styles.experienceCardLight, textLogoClass: styles.aiesecLogo };
});

const reviews: readonly ReviewItem[] = [
  {
    badge: "stars",
    quote:
      "Catalina is the best kind of collaborator: detail-oriented, driven, proactive, and considerate. Her leadership inspires her team, whose work regularly exceeds expectations.",
    name: "Nat Ramirez",
    role: "Senior Product Manager at NBA",
    initials: "NR",
    size: "medium"
  },
  {
    badge: "stars",
    quote:
      "Tuve la fortuna de ser liderado por Catalina, en el equipo siempre fue una lidera preocupada por su equipo y en pro de retarlo cada vez más para lograr los objetivos, es una persona estratégica y amante a la investigación.",
    name: "Camilo Vélez",
    role: "Director de Operaciones at XpandGroup",
    initials: "CV",
    size: "medium"
  },
  {
    badge: "stars",
    quote:
      "On paper, Catalina provided our Agency freelance PR-work. In reality, Catalina brought life and warmth to all our client's projects in form and function. Cata is not limited to strategy, design, nor copy. She combines, with remarkable anticipation, the needs of the client with elegance and effect. I can't recommend enough the energy that Catalina brings naturally to everything she does.",
    name: "Alex Griffith",
    role: "CEO Visit Santa Marta",
    initials: "AG",
    size: "medium"
  },
  {
    badge: "stars",
    quote:
      "Catalina es una pieza clave en cualquier equipo, tuve la oportunidad de trabajar con ella cuando era la persona encargada de liderar el equipo de Relaciones Universitarias para el capítulo local de AIESEC UPB. Catalina siempre se destacó por ser muy propositiva y proactiva, con una energía que aporta mucho dinamismo al equipo. La mezcla entre orientación a resultados y creatividad es única y la hacen una mujer con amplias habilidades de liderazgo, lo que la convierten en una persona invaluable en cualquier organización que haga parte.",
    name: "Alejandra Niño",
    role: "Partnerships Manager at Deel",
    initials: "AN",
    size: "large"
  }
] as const;

type ExperienceCardItem = {
  slug: string;
  title: string;
  role: string;
  years: string;
  bgClass: string;
  logo?: string;
  logoClass?: string;
  textLogo?: string;
  subLogo?: string;
  textLogoClass?: string;
};

function ExperienceCard({ item }: { item: ExperienceCardItem }) {
  return (
    <article className={styles.experienceModule}>
      <Link className={styles.experienceLink} to={`/experience/${item.slug}`}>
      <div className={`${styles.experienceCard} ${item.bgClass}`}>
        {item.logo ? <img alt="" aria-hidden="true" className={item.logoClass} src={item.logo} /> : null}
        {item.textLogo ? (
          <div className={item.textLogoClass ?? styles.textLogoWrap}>
            <span>{item.textLogo}</span>
            {item.subLogo ? <small>{item.subLogo}</small> : null}
          </div>
        ) : null}
      </div>
      <div className={styles.experienceCopy}>
        <h3>{item.title}</h3>
        <p>{item.role}</p>
        <span>{item.years}</span>
      </div>
      </Link>
    </article>
  );
}

export default function ExperiencePage() {
  useDocumentTitle("Experience | Cata Bohorquez");

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.frame}>
          <SiteHeader />
          <section className={styles.experiencePage}>
            <div aria-hidden="true" className={styles.auraLeft} />
            <div aria-hidden="true" className={styles.auraRight} />

            <section className={`${styles.heroSection} ${styles.fadeUp} ${styles.fadeStep1}`}>
              <div className={styles.heroCopy}>
                <h1 className={styles.sectionTitle}>Who Is Cata as professional?</h1>
                <div className={styles.bodyText}>
                  <p>
                    Product Designer with 8+ years of experience blending UX research, UI
                    design, product strategy, and consumer behavior to improve acquisition,
                    conversion, and global digital experiences. Recognized for transforming
                    complex problems into scalable solutions and driving measurable impact
                    across healthcare, vision care, e-commerce, and global brands.
                  </p>
                  <p>
                    A collaborative problem-solver who thrives in multicultural environments,
                    bridges design with business goals, and consistently elevates
                    user-centric decision-making.
                  </p>
                </div>
              </div>

              <div className={styles.deviceShowcase}>
                <img
                  alt="Experience showcase"
                  className={styles.experienceHeroImage}
                  decoding="async"
                  src={experienceHeroImage}
                />
              </div>
            </section>

            <section className={`${styles.sectionBlock} ${styles.fadeUp} ${styles.fadeStep2}`}>
              <h2 className={styles.sectionTitle}>Professional Experience</h2>
              <p className={styles.sectionDescription}>
                Click on any of the cards if you want to expand the information about that
                specific experience.
              </p>
              <div className={styles.featuredGrid}>
                {featuredExperiences.map((item) => (
                  <ExperienceCard item={item} key={item.title} />
                ))}
              </div>
              <div className={styles.archiveGrid}>
                {pastExperiences.map((item) => (
                  <ExperienceCard item={item} key={item.title} />
                ))}
              </div>
            </section>

            <section className={`${styles.reviewsSection} ${styles.fadeUp} ${styles.fadeStep3}`}>
              <h2 className={styles.sectionTitle}>Cata&apos;s Reviews</h2>
              <p className={styles.sectionDescription}>
                If you&apos;re curious about what it is to work with me, here you go! These
                are some comments from old teammates, leaders and co-workers.
              </p>
              <p className={styles.reviewsNote}>(You can check all of these on LinkedIn too)</p>
              <ReviewsCarousel reviews={reviews} />
            </section>
          </section>
          <SiteFooter />
        </div>
      </main>
    </div>
  );
}
