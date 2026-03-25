import { Navigate, useParams } from "react-router-dom";
import styles from "./detail-page.module.css";
import { useDocumentTitle } from "../../lib/use-document-title";
import { getExternalLinkProps } from "../../lib/link-utils";
import { experienceDetails } from "./detail-data";
import SiteFooter from "../shared/site-footer";
import SiteHeader from "../shared/site-header";

export default function ExperienceDetailPage() {
  const { slug } = useParams();
  const detail = slug ? experienceDetails[slug] : undefined;

  useDocumentTitle(
    detail ? `${detail.title} | Experience | Cata Bohorquez` : "Experience | Cata Bohorquez"
  );

  if (!detail) {
    return <Navigate replace to="/experience" />;
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.frame}>
          <SiteHeader />

          <section className={styles.detailPage}>
            <div aria-hidden="true" className={styles.auraLeft} />
            <div aria-hidden="true" className={styles.auraRight} />

            <section className={styles.heroSection}>
              {detail.heroVisual ? (
                <div className={`${styles.heroVisualFrame} ${styles.fadeUp} ${styles.fadeStep1} ${detail.heroVisualClassName ? styles[detail.heroVisualClassName] : ""}`}>
                  <img
                    alt={detail.heroVisualAlt ?? detail.title}
                    className={styles.heroVisual}
                    src={detail.heroVisual}
                  />
                </div>
              ) : null}

              <div className={`${styles.heroCopy} ${styles.fadeUp} ${styles.fadeStep2}`}>
                <h1 className={styles.heroTitle}>{detail.heroTitle}</h1>
                {detail.heroBody ? <p className={styles.heroBody}>{detail.heroBody}</p> : null}
              </div>

              <div className={`${styles.tagRow} ${styles.fadeUp} ${styles.fadeStep3}`}>
                {detail.tags.map((tag) => (
                  <span className={styles.tag} key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {detail.sections.length > 0 ? (
              <section className={`${styles.copySection} ${styles.fadeUp} ${styles.fadeStep4}`}>
                {detail.sections.map((section) => (
                  <article className={styles.copyBlock} key={section.title}>
                    <h2 className={styles.sectionTitle}>{section.title}</h2>
                    {section.body ? <p className={styles.sectionBody}>{section.body}</p> : null}
                    {section.bullets ? (
                      <ul className={styles.bulletList}>
                        {section.bullets.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                ))}
              </section>
            ) : null}

            {detail.showcase ? (
              <section className={`${styles.showcaseSection} ${styles.fadeUp} ${styles.fadeStep5}`}>
                {detail.showcase.title || detail.showcase.description ? (
                  <div className={styles.liveHeader}>
                    {detail.showcase.title ? <h2 className={styles.liveTitle}>{detail.showcase.title}</h2> : null}
                    {detail.showcase.description ? (
                      <p className={styles.liveDescription}>{detail.showcase.description}</p>
                    ) : null}
                  </div>
                ) : null}
                <div className={styles.showcaseFrame}>
                  <img
                    alt={detail.showcase.alt}
                    className={`${styles.showcaseImage} ${detail.showcase.className ? styles[detail.showcase.className] : ""}`}
                    src={detail.showcase.image}
                  />
                </div>
              </section>
            ) : null}

            {detail.liveSitesTitle || detail.liveSites?.length ? (
              <section className={`${styles.liveSection} ${styles.fadeUp} ${styles.fadeStep6}`}>
                {detail.liveSitesTitle || detail.liveSitesDescription ? (
                  <div className={styles.liveHeader}>
                    {detail.liveSitesTitle ? <h2 className={styles.liveTitle}>{detail.liveSitesTitle}</h2> : null}
                    {detail.liveSitesDescription ? (
                      <p className={styles.liveDescription}>{detail.liveSitesDescription}</p>
                    ) : null}
                  </div>
                ) : null}

                {detail.liveSites && detail.liveSites.length > 0 ? (
                  <div className={styles.liveGrid}>
                    {detail.liveSites.map((item) => (
                      <article className={styles.liveCard} key={item.title}>
                        <a className={styles.liveCardLink} href={item.href} {...getExternalLinkProps(item.href)}>
                          <div className={styles.liveVisual}>
                            <img alt="" aria-hidden="true" className={styles.liveImage} src={item.image} />
                          </div>
                          <div className={styles.liveCopy}>
                            <h3>{item.title}</h3>
                            <p>{item.subtitle}</p>
                          </div>
                        </a>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className={styles.placeholderPanel}>
                    <p>This experience detail page is connected and ready for its custom Figma layout.</p>
                  </div>
                )}
              </section>
            ) : null}
          </section>

          <SiteFooter />
        </div>
      </main>
    </div>
  );
}
