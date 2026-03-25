import { Link } from "react-router-dom";
import styles from "./page.module.css";
import { publicAsset } from "../lib/public-asset";
import { useDocumentTitle } from "../lib/use-document-title";
import { CALENDLY_URL } from "../lib/site-config";
import AmbientVideo from "./shared/ambient-video";
import ContactPanel from "./shared/contact-panel";
import SiteFooter from "./shared/site-footer";
import SiteHeader from "./shared/site-header";

const experienceJnj = publicAsset("/Assets/Johnson & Johnson.png");
const experienceAlestra = publicAsset("/Assets/Alestra.png");
const experienceVip = publicAsset("/Assets/VIP Medical Group.png");
const logoVeinClinic = publicAsset("/logos/VTC.png");
const logoVipMedical = publicAsset("/logos/vip.png");
const logoAcuvue = publicAsset("/logos/Acuvue.png");
const logoJnj = publicAsset("/logos/Johnson & Johnson Logo Horisontal.png");
const logoAlestra = publicAsset("/logos/Alestra.png");
const logoPainTreatment = publicAsset("/logos/PTS.png");
const heroVideo = publicAsset("/home-hero-540.mp4");
const heroPoster = publicAsset("/home-hero-540.mp4.png");
const projectAcuvueVideo = publicAsset("/ACUVUE%20LOGO%20ANIMATED.mp4");
const projectAcuvueGeoVideo = publicAsset("/ACUVUE%20GEO%20Optimization.mp4");
const projectJapanVideo = publicAsset("/Japanese%20learning%20app%20video.mp4");
const contactVideo = publicAsset("/Contact%20video.mp4");

const experienceItems = [
  {
    slug: "johnson-and-johnson",
    image: experienceJnj,
    imageClassName: styles.cardImageJnj,
    overlayClassName: styles.cardImageOverlayTint,
    title: "Johnson & Johnson",
    role: "Sr. UI|UX Designer",
    years: "2023 - Current"
  },
  {
    slug: "alestra-movil",
    image: experienceAlestra,
    imageClassName: styles.cardImageAlestra,
    title: "Alestra",
    role: "Sr. UI|UX Designer",
    years: "2025"
  },
  {
    slug: "vip-medical-group",
    image: experienceVip,
    imageClassName: styles.cardImageVip,
    overlayClassName: styles.cardImageOverlayTint,
    title: "VIP Medical Group",
    role: "Sr. UI|UX Designer",
    years: "2020 - 2023"
  }
] as const;

type ProjectItem = {
  slug: string;
  title: string;
  role: string;
  media: string;
  mediaType: "video" | "image";
  thumbnailClassName?: string;
  borderClassName?: string;
  overlayLogo?: string;
  overlayLogoClassName?: string;
};

const projectItems: readonly ProjectItem[] = [
  {
    slug: "acuvue-contact-lenses",
    title: "ACUVUE (Global Project)",
    role: "Senior UI|UX designer",
    media: projectAcuvueVideo,
    mediaType: "video"
  },
  {
    slug: "geo-optimization-acuvue",
    title: "GEO optimization for ACUVUE",
    role: "Product Designer | GEO co-creator",
    media: projectAcuvueGeoVideo,
    mediaType: "video",
    borderClassName: styles.projectCardMutedBorder,
    overlayLogo: logoAcuvue,
    overlayLogoClassName: styles.projectGeoLogo
  },
  {
    slug: "japanese-learning-app",
    title: "Japanese Learning App (Full AI project)",
    role: "Senior UI|UX designer | Vibe Coder",
    media: projectJapanVideo,
    mediaType: "video",
    borderClassName: styles.projectCardMutedBorder
  }
] as const;

const aboutCapabilityItems = [
  { icon: publicAsset("/Icons about/UI|UX.svg"), iconClassName: styles.aboutCapabilityIconUiux, label: "UI|UX" },
  { icon: publicAsset("/Icons about/Human.svg"), iconClassName: styles.aboutCapabilityIconHuman, label: "Human" },
  { icon: publicAsset("/Icons about/Product.svg"), iconClassName: styles.aboutCapabilityIconProduct, label: "Product" },
  { icon: publicAsset("/Icons about/Ai.svg"), iconClassName: styles.aboutCapabilityIconAi, label: "AI" }
] as const;

type LogoKind =
  | "jnj"
  | "acuvue"
  | "vein"
  | "vip"
  | "alestra"
  | "painTreatment";

const logoSliderItems = [
  { kind: "jnj" },
  { kind: "acuvue" },
  { kind: "vein" },
  { kind: "vip" },
  { kind: "alestra" },
  { kind: "painTreatment" }
] as const;

const logoSliderItemsVariant = [
  { kind: "jnj" },
  { kind: "acuvue" },
  { kind: "vein" },
  { kind: "vip" },
  { kind: "alestra" },
  { kind: "painTreatment" },
  { kind: "jnj" },
  { kind: "acuvue" },
  { kind: "vein" },
  { kind: "vip" },
  { kind: "alestra" },
  { kind: "painTreatment" }
] as const;

function LogoSliderTrack({
  ariaHidden = false,
  variant = "default"
}: {
  ariaHidden?: boolean;
  variant?: "default" | "variant";
}) {
  const items = variant === "variant" ? logoSliderItemsVariant : logoSliderItems;
  const trackClassName =
    variant === "variant"
      ? `${styles.logoTrack} ${styles.logoTrackVariant}`
      : `${styles.logoTrack} ${styles.logoTrackDefault}`;

  return (
    <div aria-hidden={ariaHidden} className={trackClassName}>
      {items.map((item: { kind: LogoKind }, index) => {
        const key = `${item.kind}-${index}`;

        switch (item.kind) {
          case "jnj":
            return (
              <div className={styles.logoSlotJnj} key={key}>
                <img alt="Johnson and Johnson" className={styles.logoJnj} src={logoJnj} />
              </div>
            );
          case "acuvue":
            return (
              <div className={styles.logoSlotAcuvue} key={key}>
                <img alt="ACUVUE" className={styles.logoAcuvue} src={logoAcuvue} />
              </div>
            );
          case "vein":
            return (
              <div className={styles.logoSlotVein} key={key}>
                <img alt="Vein Treatment Clinic" className={styles.logoVeinClinic} src={logoVeinClinic} />
              </div>
            );
          case "vip":
            return (
              <div className={styles.logoSlotVip} key={key}>
                <img alt="VIP Medical Group" className={styles.logoVipMedical} src={logoVipMedical} />
              </div>
            );
          case "alestra":
            return (
              <div className={styles.logoSlotAlestra} key={key}>
                <img alt="Alestra Movil" className={styles.logoAlestra} src={logoAlestra} />
              </div>
            );
          case "painTreatment":
            return (
              <div className={styles.logoPainTreatment} key={key}>
                <img
                  alt="Pain Treatment Specialists"
                  className={styles.logoPainTreatmentImage}
                  src={logoPainTreatment}
                />
              </div>
            );
        }
      })}
    </div>
  );
}

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackdrop} aria-hidden="true">
        <AmbientVideo className={styles.heroVideo} eager poster={heroPoster} src={heroVideo} />
        <div className={styles.heroVideoTint} />
        <div className={styles.heroFrameShade} />
        <div className={styles.heroGlowPrimary} />
        <div className={styles.heroGlowSecondary} />
        <div className={styles.heroGlowTertiary} />
      </div>
      <div className={styles.heroContent}>
        <h1 className={`${styles.heroTitle} ${styles.fadeUp} ${styles.fadeStep1}`}>
          Designing digital experiences optimized for humans and AI
        </h1>
        <p className={`${styles.heroBody} ${styles.fadeUp} ${styles.fadeStep2}`}>
          Product Designer with 8+ years of experience creating scalable digital
          experiences through UX, AI-powered workflows, and Generative Engine
          Optimization (GEO).
        </p>
        <p className={`${styles.heroEyebrow} ${styles.fadeUp} ${styles.fadeStep3}`}>
          Bridging UX, content, and AI-driven discovery
        </p>
        <div className={`${styles.heroActions} ${styles.fadeUp} ${styles.fadeStep4}`}>
          <a className={styles.primaryButton} href="#projects">
            View my work
          </a>
          <a className={styles.secondaryButton} href={CALENDLY_URL} rel="noopener noreferrer" target="_blank">
            Schedule a call
          </a>
        </div>
      </div>
      <div className={styles.logoRail}>
        <div className={styles.logoViewport}>
          <div className={styles.logoSlider}>
            <LogoSliderTrack />
            <LogoSliderTrack ariaHidden variant="variant" />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className={styles.about} id="about">
      <h2 className={`${styles.sectionTitle} ${styles.aboutTitle}`}>About</h2>
      <div className={styles.aboutMedia}>
        <div aria-hidden="true" className={styles.aboutGlowPrimary} />
        <div aria-hidden="true" className={styles.aboutGlowSecondary} />
        <div className={styles.aboutCapabilityGrid}>
          {aboutCapabilityItems.map((item) => (
            <div className={styles.aboutCapabilityCard} key={item.label}>
              <img
                alt=""
                aria-hidden="true"
                className={`${styles.aboutCapabilityIcon} ${item.iconClassName}`}
                src={item.icon}
              />
              <span className={styles.aboutCapabilityLabel}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.aboutCopy}>
        <p className={styles.bodyText}>
          Product Designer with 8+ years of experience in UX, consumer
          behavior, and digital strategy. I design experiences that are clear,
          scalable and impactful, combining user needs with business goals.
        </p>
        <p className={styles.bodyText}>
          Recently, I&apos;ve been focused on AI-powered design workflows and
          Generative Engine Optimization (GEO), exploring how content and
          interfaces can perform not only for users, but also for AI systems.
        </p>
        <p className={styles.bodyText}>
          I&apos;m particularly interested in the intersection of UX, content,
          and emerging technologies.
        </p>
        <Link className={styles.outlineButton} to="/about">
          Read more
        </Link>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className={styles.sectionBlock} id="experience">
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <p className={styles.sectionDescription}>
          Open any featured case to review the work in more detail, or use
          &ldquo;See more&rdquo; to browse the full experience archive.
        </p>
      </div>
      <div className={styles.cardGrid}>
        {experienceItems.map((item) => (
          <article className={styles.experienceCard} key={item.title}>
            <Link className={styles.experienceCardLink} to={`/experience/${item.slug}`}>
              <div aria-hidden="true" className={styles.cardGlowTopLeft} />
              <div aria-hidden="true" className={styles.cardGlowBottom} />
              <div className={styles.experienceMedia}>
                <img alt="" className={`${styles.cardImage} ${item.imageClassName}`} src={item.image} />
                <div
                  aria-hidden="true"
                  className={`${styles.cardImageOverlay} ${item.overlayClassName ?? ""}`}
                />
              </div>
              <div className={styles.cardCopy}>
                <h3>{item.title}</h3>
                <p>{item.role}</p>
                <p className={styles.cardYear}>{item.years}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
      <Link className={styles.outlineButton} to="/experience">
        See more
      </Link>
    </section>
  );
}

function Projects() {
  return (
    <section className={styles.sectionBlock} id="projects">
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <p className={styles.sectionDescription}>
          Open any featured project to review the case study, or use
          &ldquo;See more&rdquo; to browse the full collection.
        </p>
      </div>
      <div className={styles.projectGrid}>
        {projectItems.map((item) => (
          <article className={styles.projectCard} key={item.title}>
            <Link className={styles.projectCardLink} to={`/projects/${item.slug}`}>
              <div className={`${styles.projectVisual} ${item.borderClassName ?? ""}`}>
                {item.mediaType === "video" ? (
                  <AmbientVideo className={styles.projectMedia} src={item.media} />
                ) : (
                  <img
                    alt=""
                    aria-hidden="true"
                    className={`${styles.projectMedia} ${item.thumbnailClassName ?? ""}`}
                    decoding="async"
                    loading="lazy"
                    src={item.media}
                  />
                )}
                {item.overlayLogo ? (
                  <img
                    alt=""
                    aria-hidden="true"
                    className={`${styles.projectOverlayLogo} ${item.overlayLogoClassName ?? ""}`}
                    decoding="async"
                    loading="lazy"
                    src={item.overlayLogo}
                  />
                ) : null}
              </div>
              <div className={styles.projectCopy}>
                <h3>{item.title}</h3>
                <p>{item.role}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
      <Link className={styles.outlineButton} to="/projects">
        See more
      </Link>
    </section>
  );
}

function Contact() {
  return (
    <ContactPanel
      backgroundVideoSrc={contactVideo}
      body="If you're interested in working with me, send me a message and I'll be happy to explore how I can support your team."
      id="contact"
      title="Ready to get started?"
    />
  );
}

export default function HomePage() {
  useDocumentTitle("Cata Bohorquez | Product Designer");

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.frame}>
          <SiteHeader />
          <Hero />
          <div className={styles.content}>
            <About />
            <Experience />
            <Projects />
            <Contact />
          </div>
          <SiteFooter />
        </div>
      </main>
    </div>
  );
}
