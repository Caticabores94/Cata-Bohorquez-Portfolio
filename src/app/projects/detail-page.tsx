import { Navigate, useParams } from "react-router-dom";
import styles from "./detail-page.module.css";
import { useDocumentTitle } from "../../lib/use-document-title";
import { getExternalLinkProps } from "../../lib/link-utils";
import { publicAsset } from "../../lib/public-asset";
import {
  projectDetails,
  type AnalysisProjectDetail,
  type BuilderProjectDetail,
  type MicrositesProjectDetail,
  type ProjectDetail,
  type StandardProjectDetail
} from "./detail-data";
import SiteFooter from "../shared/site-footer";
import SiteHeader from "../shared/site-header";

function renderMicrosites(detail: MicrositesProjectDetail) {
  return (
    <section className={styles.detailPage}>
      <div aria-hidden="true" className={styles.auraLeft} />
      <div aria-hidden="true" className={styles.auraRight} />

      <section className={`${styles.heroSection} ${styles.fadeUp} ${styles.fadeStep1}`}>
        <div className={styles.heroCopy}>
          <h1 className={styles.heroTitle}>{detail.title}</h1>
        </div>
      </section>

      <section className={`${styles.introSection} ${styles.fadeUp} ${styles.fadeStep2}`}>
        <div className={styles.introCopy}>
          {detail.introBlocks.map((block) => (
            <article className={styles.introBlock} key={block.title}>
              <h2 className={styles.sectionTitle}>{block.title}</h2>
              <p className={styles.bodyText}>{block.body}</p>
            </article>
          ))}
        </div>

        <div className={styles.introVisual}>
          <img alt="" aria-hidden="true" className={styles.heroLaptop} src={detail.heroLaptopImage} />
        </div>
      </section>

      <section className={`${styles.solutionSection} ${styles.fadeUp} ${styles.fadeStep3}`}>
        <div className={styles.solutionHeader}>
          <h2 className={styles.sectionTitle}>{detail.solutionTitle}</h2>
          <p className={styles.bodyText}>{detail.solutionBody}</p>
        </div>

        <div className={styles.solutionGrid}>
          {detail.solutionGroups.map((group) => (
            <div className={styles.solutionRow} key={group.title}>
              <div className={styles.solutionMeta}>
                <h3>{group.title}</h3>
                <ol>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
                <p className={styles.goal}>
                  <strong>Goal:</strong>
                  <span>{group.goal}</span>
                </p>
              </div>

              <div className={`${styles.solutionCards} ${group.cards.length === 1 ? styles.solutionCardsSingle : ""}`}>
                {group.cards.map((card) => (
                  <article className={styles.solutionCard} key={card.title}>
                    <div className={styles.solutionCardFrame}>
                      <img alt={card.title} src={card.image} />
                    </div>
                    <h4>{card.title}</h4>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.strategyBand} ${styles.fadeUp} ${styles.fadeStep4}`}>
        <div className={styles.strategyBlock}>
          <h2 className={styles.sectionTitle}>{detail.hypothesisTitle}</h2>
          <p className={styles.bodyText}>{detail.hypothesisBody}</p>
        </div>

        <div className={styles.strategyBlock}>
          <h2 className={styles.sectionTitle}>{detail.strategyTitle}</h2>
          <ol className={styles.strategyList}>
            {detail.strategyItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`${styles.processSection} ${styles.fadeUp} ${styles.fadeStep4}`}>
        <h2 className={styles.sectionTitle}>Process Overview</h2>
        <div className={styles.processGrid}>
          {detail.processBlocks.map((block, index) => (
            <article className={styles.processCard} key={block.title}>
              <div className={styles.processCardHeader}>
                <span aria-hidden="true" className={styles.processBadge}>
                  {index + 1}
                </span>
                <h3>{block.title}</h3>
              </div>
              <ul>
                {block.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.resultsSection} ${styles.fadeUp} ${styles.fadeStep4}`}>
        <div className={styles.micrositesResultsLayout}>
          <div className={styles.micrositesResultsCopy}>
            <h2 className={styles.sectionTitle}>Results</h2>
            <ol className={styles.resultsList}>
              {detail.results.map((item) => (
                <li className={styles.resultItem} key={item}>
                  {item}
                </li>
              ))}
            </ol>
          </div>
          <div aria-hidden="true" className={styles.micrositesResultsVisual}>
            <span className={styles.micrositesResultsKicker}>Outcome snapshot</span>
            <div className={styles.micrositesResultsMetric}>20%</div>
            <div className={styles.micrositesResultsLabel}>lead conversion rate</div>
            <div className={styles.micrositesResultsBars}>
              <div className={styles.micrositesResultsBarRow}>
                <span>Bounce rate</span>
                <div className={styles.micrositesResultsTrack}>
                  <div className={`${styles.micrositesResultsBar} ${styles.micrositesResultsBarWide}`} />
                </div>
              </div>
              <div className={styles.micrositesResultsBarRow}>
                <span>New users</span>
                <div className={styles.micrositesResultsTrack}>
                  <div className={`${styles.micrositesResultsBar} ${styles.micrositesResultsBarMedium}`} />
                </div>
              </div>
              <div className={styles.micrositesResultsBarRow}>
                <span>Lead quality</span>
                <div className={styles.micrositesResultsTrack}>
                  <div className={`${styles.micrositesResultsBar} ${styles.micrositesResultsBarNarrow}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

function renderStandard(detail: StandardProjectDetail) {
  const isAcuvueProject = detail.title === "ACUVUE Contact Lenses";
  const isCv4uProject = detail.title === "Clear Vision For You";
  const isVeinTreatmentProject = detail.title === "Vein Treatment Clinic Main Website Redesign";
  const isVeinDoctorWomenProject = detail.title === "Vein Doctor For Women";
  const isInsuranceCoverageProject = detail.title === "Insurance Coverage Online (For PTS & VTC)";

  return (
    <section className={`${styles.casePage} ${styles.casePageLight}`}>
      <section className={`${styles.caseHero} ${styles.fadeUp} ${styles.fadeStep1}`}>
        <div className={styles.caseHeroCopy}>
          <h1
            className={`${styles.caseHeroTitle} ${
              isAcuvueProject ||
              isCv4uProject ||
              isVeinTreatmentProject ||
              isVeinDoctorWomenProject ||
              isInsuranceCoverageProject
                ? styles.caseHeroTitleWide
                : ""
            }`}
          >
            {detail.title}
          </h1>
          {!isAcuvueProject &&
          !isCv4uProject &&
          !isVeinTreatmentProject &&
          !isVeinDoctorWomenProject &&
          !isInsuranceCoverageProject ? (
            <div className={styles.caseHeroDivider} />
          ) : null}
        </div>
      </section>

      <section className={`${styles.caseIntro} ${styles.fadeUp} ${styles.fadeStep2}`}>
        <div className={styles.caseIntroCopy}>
          {detail.introBlocks.map((block) => (
            <article className={styles.caseIntroBlock} key={block.title}>
              <h2 className={styles.caseHeading}>{block.title}</h2>
              <p className={styles.caseBody}>{block.body}</p>
            </article>
          ))}
          {detail.ctaLabel && detail.ctaHref ? (
            <a className={styles.casePrimaryCta} href={detail.ctaHref} {...getExternalLinkProps(detail.ctaHref)}>
              {detail.ctaLabel}
            </a>
          ) : null}
        </div>
        <div className={styles.caseHeroVisual}>
          <img alt="" aria-hidden="true" className={styles.caseHeroImage} src={detail.heroLaptopImage} />
        </div>
      </section>

      <section className={`${styles.caseSolutionSection} ${styles.fadeUp} ${styles.fadeStep3}`}>
        <div className={styles.caseSolutionPanel}>
          <div className={styles.caseSolutionCopy}>
            <h2 className={styles.caseHeading}>{detail.solutionTitle}</h2>
            <p className={styles.caseBody}>{detail.solutionBody}</p>
          </div>
          <div className={styles.caseFeatureVisual}>
            <img alt="" aria-hidden="true" src={detail.solutionImage} />
          </div>
        </div>

        {detail.secondaryFeatureHeading ? (
          <>
            <h2 className={`${styles.caseSectionHeading} ${styles.caseSectionHeadingOffset}`}>{detail.secondaryFeatureHeading}</h2>
            {detail.secondaryFeatureImage ? (
              <div className={styles.caseLargeImageFrame}>
                <img alt="" aria-hidden="true" src={detail.secondaryFeatureImage} />
              </div>
            ) : null}
          </>
        ) : null}

        {detail.featureCards?.length ? (
          <div className={`${styles.caseFeatureGrid} ${detail.secondaryFeatureHeading ? styles.caseFeatureGridAfterSecondary : ""}`}>
            {detail.featureCards.map((card) => (
              <article className={styles.caseFeatureCard} key={card.title}>
                <div className={styles.caseFeatureCardFrame}>
                  <img alt={card.title} src={card.image} />
                </div>
                <h3>{card.title}</h3>
                {card.description ? <p>{card.description}</p> : null}
              </article>
            ))}
          </div>
        ) : null}

        {detail.secondaryFeatureCards?.length ? (
          <div className={styles.caseFeatureGrid}>
            {detail.secondaryFeatureCards.map((card) => (
              <article className={styles.caseFeatureCard} key={card.title}>
                <div className={styles.caseFeatureCardFrame}>
                  <img alt={card.title} src={card.image} />
                </div>
                <h3>{card.title}</h3>
                {card.description ? <p>{card.description}</p> : null}
              </article>
            ))}
          </div>
        ) : null}
      </section>

      <section className={`${styles.caseSplitBand} ${styles.fadeUp} ${styles.fadeStep4}`}>
        <article className={styles.caseSplitBlock}>
          <h2 className={styles.caseHeading}>{detail.hypothesisTitle}</h2>
          <p className={styles.caseBody}>{detail.hypothesisBody}</p>
        </article>
        <article className={styles.caseSplitBlock}>
          <h2 className={styles.caseHeading}>{detail.strategyTitle}</h2>
          <ol className={styles.caseOrderedList}>
            {detail.strategyItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </article>
      </section>

      <section className={`${styles.caseProcessSection} ${styles.fadeUp} ${styles.fadeStep4}`}>
        <h2 className={styles.caseSectionHeading}>Process Overview</h2>
        <div className={styles.caseProcessGrid}>
          {detail.processBlocks.map((block, index) => (
            <article className={styles.caseProcessCard} key={block.title}>
              <div className={styles.processCardHeader}>
                <span aria-hidden="true" className={styles.processBadge}>
                  {index + 1}
                </span>
                <h3>{block.title}</h3>
              </div>
              <ul>
                {block.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.caseResultsSection} ${styles.fadeUp} ${styles.fadeStep4}`}>
        {isAcuvueProject ||
        isCv4uProject ||
        isVeinTreatmentProject ||
        isVeinDoctorWomenProject ||
        isInsuranceCoverageProject ? (
          <>
            <div className={styles.resultsHero}>
              <div className={styles.resultsHeroCopy}>
                <h2 className={styles.caseSectionHeading}>Results</h2>
                <p className={styles.caseBody}>
                  {isAcuvueProject
                    ? "The design system made delivery faster, reduced defects, and created a more scalable global foundation across ACUVUE markets."
                    : isCv4uProject
                      ? "The platform unified the visual-health journey into one connected experience, helping users understand where they are and what step to take next."
                      : isVeinTreatmentProject
                        ? "The redesign made the experience easier to navigate and more persuasive for patients, increasing booking intent while keeping educational content central."
                        : isVeinDoctorWomenProject
                          ? "The platform created a stronger emotional and practical connection for women, making the value proposition clearer and supporting higher-intent booking behavior."
                          : "The online verification flow reduced avoidable data-entry errors and helped move qualified patients faster toward their first appointment."}
                </p>
                <div className={styles.resultsHighlightGrid}>
                  {isAcuvueProject ? (
                    <>
                      <article className={styles.resultsHighlightCard}>
                        <h3>Efficiency</h3>
                        <p>75% reduced design time and costs</p>
                      </article>
                      <article className={styles.resultsHighlightCard}>
                        <h3>Quality</h3>
                        <p>50% less design defects</p>
                      </article>
                      <article className={styles.resultsHighlightCard}>
                        <h3>Speed</h3>
                        <p>2x faster time to market</p>
                      </article>
                    </>
                  ) : isCv4uProject ? (
                    <>
                      <article className={styles.resultsHighlightCard}>
                        <h3>Journey</h3>
                        <p>Unified eye-health stages into one connected path</p>
                      </article>
                      <article className={styles.resultsHighlightCard}>
                        <h3>Clarity</h3>
                        <p>Helped users understand the next step in care</p>
                      </article>
                      <article className={styles.resultsHighlightCard}>
                        <h3>Brand</h3>
                        <p>Strengthened recognition through connected services</p>
                      </article>
                    </>
                  ) : isVeinTreatmentProject ? (
                    <>
                      <article className={styles.resultsHighlightCard}>
                        <h3>Engagement</h3>
                        <p>Bounce rate under 65% vs 85.4% on the old design</p>
                      </article>
                      <article className={styles.resultsHighlightCard}>
                        <h3>Bookings</h3>
                        <p>207% increase in online booking vs the old design</p>
                      </article>
                      <article className={styles.resultsHighlightCard}>
                        <h3>Clarity</h3>
                        <p>Educational content and conversion now work together</p>
                      </article>
                    </>
                  ) : isVeinDoctorWomenProject ? (
                    <>
                      <article className={styles.resultsHighlightCard}>
                        <h3>Engagement</h3>
                        <p>Bounce rate under 52%</p>
                      </article>
                      <article className={styles.resultsHighlightCard}>
                        <h3>Reach</h3>
                        <p>2,226 new users across different devices</p>
                      </article>
                      <article className={styles.resultsHighlightCard}>
                        <h3>Leads</h3>
                        <p>1,000 direct leads goal completion</p>
                      </article>
                    </>
                  ) : (
                    <>
                      <article className={styles.resultsHighlightCard}>
                        <h3>Accuracy</h3>
                        <p>Less than 3 mistakes in every 100 new leads</p>
                      </article>
                      <article className={styles.resultsHighlightCard}>
                        <h3>Speed</h3>
                        <p>Faster verification before treatment starts</p>
                      </article>
                      <article className={styles.resultsHighlightCard}>
                        <h3>Appointments</h3>
                        <p>13% increase in first appointments</p>
                      </article>
                    </>
                  )}
                </div>
              </div>
              <div aria-hidden="true" className={styles.resultsVisual}>
                <span className={styles.resultsVisualKicker}>Key lift</span>
                <div className={styles.resultsVisualPrimary}>
                  {isAcuvueProject
                    ? "75%"
                    : isCv4uProject
                      ? "1"
                      : isVeinTreatmentProject
                        ? "207%"
                        : isVeinDoctorWomenProject
                          ? "1000"
                          : "13%"}
                </div>
                <div className={styles.resultsVisualSecondary}>
                  {isAcuvueProject
                    ? "reduced design time and costs"
                    : isCv4uProject
                      ? "connected source of truth"
                      : isVeinTreatmentProject
                        ? "increase in online booking"
                        : isVeinDoctorWomenProject
                          ? "direct leads goal completion"
                          : "increase in first appointments"}
                </div>
                {isCv4uProject ? (
                  <img
                    alt=""
                    aria-hidden="true"
                    className={styles.resultsLogo}
                    src={publicAsset("/logos/Clear%20Vision%20For%20You/CV4U%20Logo.png")}
                  />
                ) : null}
              </div>
            </div>
          </>
        ) : (
          <>
            <h2 className={styles.caseSectionHeading}>Results</h2>
            <ol className={styles.caseResultsList}>
              {detail.results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </>
        )}
      </section>
    </section>
  );
}

function renderAnalysis(detail: AnalysisProjectDetail) {
  const isEnhancedGeoProject =
    detail.title === "GEO optimization for ACUVUE" || detail.title === "GEO optimization for JJV PRO";

  return (
    <section className={`${styles.casePage} ${styles.casePageLight} ${isEnhancedGeoProject ? styles.casePageSpacious : ""}`}>
      <section className={`${styles.caseHero} ${styles.fadeUp} ${styles.fadeStep1}`}>
        <div className={styles.caseHeroCopy}>
          <h1 className={`${styles.caseHeroTitle} ${isEnhancedGeoProject ? styles.caseHeroTitleWide : ""}`}>
            {detail.title}
          </h1>
          {!isEnhancedGeoProject ? <div className={styles.caseHeroDivider} /> : null}
        </div>
      </section>

      <section className={`${styles.caseIntro} ${styles.fadeUp} ${styles.fadeStep2}`}>
        <div className={styles.caseIntroCopy}>
          {detail.introBlocks.map((block) => (
            <article className={styles.caseIntroBlock} key={block.title}>
              <h2 className={styles.caseHeading}>{block.title}</h2>
              <p className={styles.caseBody}>{block.body}</p>
            </article>
          ))}
        </div>
        <div className={styles.caseHeroVisual}>
          <img alt="" aria-hidden="true" className={styles.caseHeroImage} src={detail.heroLaptopImage} />
        </div>
      </section>

      {isEnhancedGeoProject && detail.problemBullets?.length ? (
        <section className={`${styles.caseSplitBand} ${styles.fadeUp} ${styles.fadeStep3}`}>
          <article className={styles.caseSplitBlock}>
            <h2 className={styles.caseHeading}>{detail.problemTitle ?? "The problem"}</h2>
            <ul className={styles.caseBulletList}>
              {detail.problemBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className={styles.caseSplitBlock}>
            <h2 className={styles.caseHeading}>{detail.hypothesisTitle}</h2>
            <p className={styles.caseBody}>{detail.hypothesisBody}</p>
          </article>
        </section>
      ) : (
        <>
          {detail.problemBullets?.length ? (
            <section className={`${styles.caseProblemBand} ${styles.fadeUp} ${styles.fadeStep3}`}>
              <h2 className={styles.caseHeading}>{detail.problemTitle ?? "The problem"}</h2>
              <ul className={styles.caseBulletList}>
                {detail.problemBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          <section className={`${styles.caseSplitBand} ${styles.fadeUp} ${styles.fadeStep3}`}>
            <article className={styles.caseSplitBlock}>
              <h2 className={styles.caseHeading}>{detail.hypothesisTitle}</h2>
              <p className={styles.caseBody}>{detail.hypothesisBody}</p>
            </article>
          </section>
        </>
      )}

      <section
        className={`${styles.caseStrategicSection} ${styles.fadeUp} ${styles.fadeStep4} ${isEnhancedGeoProject ? styles.caseStrategicSectionBalanced : ""}`}
      >
        <h2 className={styles.caseSectionHeading}>{detail.strategicApproachTitle}</h2>
        <div className={styles.caseTextCardGrid}>
          {detail.strategicCards.map((card) => (
            <article className={styles.caseTextCard} key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
        {detail.secondaryStrategicCards?.length ? (
          <div className={styles.caseTextCardGridSecondary}>
            {detail.secondaryStrategicCards.map((card) => (
              <article className={styles.caseTextCard} key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        ) : null}
      </section>

      <section
        className={`${styles.caseBandSection} ${styles.fadeUp} ${styles.fadeStep4} ${isEnhancedGeoProject ? styles.caseBandSectionSpacious : ""}`}
      >
        {isEnhancedGeoProject ? (
          <div className={styles.expectedImpactLayout}>
            <div className={styles.expectedImpactCopy}>
              <h2 className={styles.caseSectionHeading}>{detail.expectedImpactTitle}</h2>
              <ul className={styles.caseBulletList}>
                {detail.expectedImpactItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div aria-hidden="true" className={styles.expectedImpactVisual}>
              <div className={styles.expectedImpactVisualHeader}>
                <span className={styles.expectedImpactPill}>AI visibility</span>
                <span className={styles.expectedImpactPill}>Answer-first UX</span>
                <span className={styles.expectedImpactPill}>Conversion lift</span>
              </div>
              <div className={styles.expectedImpactChart}>
                <div className={styles.expectedImpactBarGroup}>
                  <span>Discoverability</span>
                  <div className={styles.expectedImpactTrack}>
                    <div className={`${styles.expectedImpactBar} ${styles.expectedImpactBarWide}`} />
                  </div>
                </div>
                <div className={styles.expectedImpactBarGroup}>
                  <span>Engagement</span>
                  <div className={styles.expectedImpactTrack}>
                    <div className={`${styles.expectedImpactBar} ${styles.expectedImpactBarMedium}`} />
                  </div>
                </div>
                <div className={styles.expectedImpactBarGroup}>
                  <span>Action intent</span>
                  <div className={styles.expectedImpactTrack}>
                    <div className={`${styles.expectedImpactBar} ${styles.expectedImpactBarNarrow}`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <h2 className={styles.caseSectionHeading}>{detail.expectedImpactTitle}</h2>
            <ul className={styles.caseBulletList}>
              {detail.expectedImpactItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        )}
      </section>

      <section className={`${styles.caseSummarySection} ${styles.fadeUp} ${styles.fadeStep4}`}>
        {isEnhancedGeoProject ? (
          <div className={`${styles.expectedImpactLayout} ${styles.expectedImpactLayoutBalanced}`}>
            <div aria-hidden="true" className={styles.processVisual}>
              <div className={styles.processVisualHeader}>
                <span className={styles.processVisualLabel}>Content workflow</span>
                <span className={styles.processVisualMeta}>GEO system</span>
              </div>
              <div className={styles.processTimeline}>
                <div className={styles.processStep}>
                  <span className={styles.processStepIndex}>01</span>
                  <div>
                    <strong>Restructure</strong>
                    <p>Break content into semantic, answer-ready blocks.</p>
                  </div>
                </div>
                <div className={styles.processStep}>
                  <span className={styles.processStepIndex}>02</span>
                  <div>
                    <strong>Rewrite</strong>
                    <p>Translate copy into plain language aligned with user intent.</p>
                  </div>
                </div>
                <div className={styles.processStep}>
                  <span className={styles.processStepIndex}>03</span>
                  <div>
                    <strong>Validate</strong>
                    <p>Check clarity, hierarchy, and AI-friendly retrieval signals.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.expectedImpactCopy}>
              <h2 className={styles.caseSectionHeading}>{detail.summaryTitle}</h2>
              {detail.summaryParagraphs.map((item) => (
                <p className={styles.caseBody} key={item}>
                  {item}
                </p>
              ))}
              {detail.summaryBullets?.length ? (
                <ul className={styles.caseBulletList}>
                  {detail.summaryBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {detail.summaryPromptItems?.length ? (
                <>
                  <h3 className={styles.caseSubheading}>{detail.summaryPromptTitle}</h3>
                  <ul className={styles.caseBulletList}>
                    {detail.summaryPromptItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>
          </div>
        ) : (
          <>
            <h2 className={styles.caseSectionHeading}>{detail.summaryTitle}</h2>
            {detail.summaryParagraphs.map((item) => (
              <p className={styles.caseBody} key={item}>
                {item}
              </p>
            ))}
            {detail.summaryBullets?.length ? (
              <ul className={styles.caseBulletList}>
                {detail.summaryBullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {detail.summaryPromptItems?.length ? (
              <>
                <h3 className={styles.caseSubheading}>{detail.summaryPromptTitle}</h3>
                <ul className={styles.caseBulletList}>
                  {detail.summaryPromptItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            ) : null}
          </>
        )}
      </section>

      <section className={`${styles.caseResultsSection} ${styles.fadeUp} ${styles.fadeStep4}`}>
        {isEnhancedGeoProject ? (
          <>
            <div className={styles.resultsHero}>
              <div className={styles.resultsHeroCopy}>
                <h2 className={styles.caseSectionHeading}>Results</h2>
                <p className={styles.caseBody}>
                  Performance gains across visibility, engagement, and action signals made the GEO work materially more
                  visible and persuasive in AI-led discovery.
                </p>
                <div className={styles.resultsHighlightGrid}>
                  <article className={styles.resultsHighlightCard}>
                    <h3>Visibility</h3>
                    <p>{detail.title === "GEO optimization for ACUVUE" ? "+34 pts answer inclusion" : "+150% query coverage"}</p>
                  </article>
                  <article className={styles.resultsHighlightCard}>
                    <h3>Engagement</h3>
                    <p>{detail.title === "GEO optimization for ACUVUE" ? "+28% non-branded traffic" : "+30% time on page"}</p>
                  </article>
                  <article className={styles.resultsHighlightCard}>
                    <h3>Conversion</h3>
                    <p>{detail.title === "GEO optimization for ACUVUE" ? "+17% CTA clicks" : "+25% conversion rate"}</p>
                  </article>
                </div>
              </div>
              <div aria-hidden="true" className={styles.resultsVisual}>
                <span className={styles.resultsVisualKicker}>Key lift</span>
                <div className={styles.resultsVisualPrimary}>{detail.title === "GEO optimization for ACUVUE" ? "+34 pts" : "+150%"}</div>
                <div className={styles.resultsVisualSecondary}>
                  {detail.title === "GEO optimization for ACUVUE" ? "AI answer inclusion" : "query coverage"}
                </div>
              </div>
            </div>
            {detail.resultCards?.length ? (
              <div className={styles.caseMetricResultsGrid}>
                {detail.resultCards.map((card) => (
                  <article className={styles.caseMetricResult} key={card.title}>
                    <h3>{card.title}</h3>
                    <ul className={styles.caseMetricBulletList}>
                      {card.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            ) : (
              <ol className={styles.caseResultsList}>
                {detail.results.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            )}
          </>
        ) : (
          <>
            <h2 className={styles.caseSectionHeading}>Results</h2>
            {detail.resultCards?.length ? (
              <div className={styles.caseMetricResultsGrid}>
                {detail.resultCards.map((card) => (
                  <article className={styles.caseMetricResult} key={card.title}>
                    <h3>{card.title}</h3>
                    <ul className={styles.caseMetricBulletList}>
                      {card.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            ) : (
              <ol className={styles.caseResultsList}>
                {detail.results.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            )}
          </>
        )}
      </section>
    </section>
  );
}

function renderBuilder(detail: BuilderProjectDetail) {
  const isJapaneseLearningApp = detail.title === "Japanese learning app";

  return (
    <section
      className={`${styles.casePage} ${styles.casePageLight} ${isJapaneseLearningApp ? styles.casePageExtraSpacious : ""}`}
    >
      <section className={`${styles.caseHero} ${styles.fadeUp} ${styles.fadeStep1}`}>
        <div className={styles.caseHeroCopy}>
          <h1 className={`${styles.caseHeroTitle} ${isJapaneseLearningApp ? styles.caseHeroTitleWide : ""}`}>
            {detail.title}
          </h1>
          {!isJapaneseLearningApp ? <div className={styles.caseHeroDivider} /> : null}
        </div>
      </section>

      <section className={`${styles.caseIntro} ${styles.fadeUp} ${styles.fadeStep2}`}>
        <div className={styles.caseIntroCopy}>
          {detail.introBlocks.map((block) => (
            <article className={styles.caseIntroBlock} key={block.title}>
              <h2 className={styles.caseHeading}>{block.title}</h2>
              <p className={styles.caseBody}>{block.body}</p>
            </article>
          ))}
          {detail.ctaLabel && detail.ctaHref ? (
            <a className={styles.casePrimaryCta} href={detail.ctaHref} {...getExternalLinkProps(detail.ctaHref)}>
              {detail.ctaLabel}
            </a>
          ) : null}
        </div>
        <div className={styles.caseHeroVisual}>
          <img alt="" aria-hidden="true" className={styles.caseHeroImage} src={detail.heroLaptopImage} />
        </div>
      </section>

      <section className={`${styles.caseSplitBand} ${styles.fadeUp} ${styles.fadeStep3}`}>
        <article className={styles.caseSplitBlock}>
          <h2 className={styles.caseHeading}>{detail.splitBandTitleLeft}</h2>
          <p className={styles.caseBody}>{detail.splitBandBodyLeft}</p>
        </article>
        <article className={styles.caseSplitBlock}>
          <h2 className={styles.caseHeading}>{detail.splitBandTitleRight}</h2>
          <p className={styles.caseBody}>{detail.splitBandBodyRight}</p>
        </article>
      </section>

      <section
        className={`${styles.caseStrategicSection} ${styles.fadeUp} ${styles.fadeStep4} ${isJapaneseLearningApp ? styles.caseStrategicSectionBalanced : ""}`}
      >
        <h2 className={styles.caseSectionHeading}>{detail.strategicApproachTitle}</h2>
        <div className={styles.caseTextCardGrid}>
          {detail.strategicCards.map((card) => (
            <article className={styles.caseTextCard} key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
        {detail.secondaryStrategicCards?.length ? (
          <div className={styles.caseTextCardGridSecondary}>
            {detail.secondaryStrategicCards.map((card) => (
              <article className={styles.caseTextCard} key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        ) : null}
      </section>

      <section
        className={`${styles.caseBandSection} ${styles.fadeUp} ${styles.fadeStep4} ${isJapaneseLearningApp ? styles.caseBandSectionSpacious : ""}`}
      >
        {isJapaneseLearningApp ? (
          <div className={styles.expectedImpactLayout}>
            <div className={styles.expectedImpactCopy}>
              <h2 className={styles.caseSectionHeading}>{detail.expectedImpactTitle}</h2>
              <p className={styles.caseBody}>{detail.expectedImpactBody}</p>
            </div>
            <div aria-hidden="true" className={styles.expectedImpactVisual}>
              <div className={styles.expectedImpactVisualHeader}>
                <span className={styles.expectedImpactPill}>Speed to MVP</span>
                <span className={styles.expectedImpactPill}>Solo build</span>
                <span className={styles.expectedImpactPill}>AI-assisted flow</span>
              </div>
              <div className={styles.expectedImpactChart}>
                <div className={styles.expectedImpactBarGroup}>
                  <span>Production speed</span>
                  <div className={styles.expectedImpactTrack}>
                    <div className={`${styles.expectedImpactBar} ${styles.expectedImpactBarWide}`} />
                  </div>
                </div>
                <div className={styles.expectedImpactBarGroup}>
                  <span>Iteration capacity</span>
                  <div className={styles.expectedImpactTrack}>
                    <div className={`${styles.expectedImpactBar} ${styles.expectedImpactBarMedium}`} />
                  </div>
                </div>
                <div className={styles.expectedImpactBarGroup}>
                  <span>Delivery autonomy</span>
                  <div className={styles.expectedImpactTrack}>
                    <div className={`${styles.expectedImpactBar} ${styles.expectedImpactBarNarrow}`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <h2 className={styles.caseSectionHeading}>{detail.expectedImpactTitle}</h2>
            <p className={styles.caseBody}>{detail.expectedImpactBody}</p>
          </>
        )}
      </section>

      <section className={`${styles.caseSummarySection} ${styles.fadeUp} ${styles.fadeStep4}`}>
        {isJapaneseLearningApp ? (
          <div className={`${styles.expectedImpactLayout} ${styles.expectedImpactLayoutBalanced}`}>
            <div aria-hidden="true" className={styles.processVisual}>
              <div className={styles.processVisualHeader}>
                <span className={styles.processVisualLabel}>Workflow loop</span>
                <span className={styles.processVisualMeta}>Solo build system</span>
              </div>
              <div className={styles.processTimeline}>
                <div className={styles.processStep}>
                  <span className={styles.processStepIndex}>01</span>
                  <div>
                    <strong>Design direction</strong>
                    <p>Define the learning flow and UI intent.</p>
                  </div>
                </div>
                <div className={styles.processStep}>
                  <span className={styles.processStepIndex}>02</span>
                  <div>
                    <strong>Prompt + build</strong>
                    <p>Translate ideas into working screens and logic.</p>
                  </div>
                </div>
                <div className={styles.processStep}>
                  <span className={styles.processStepIndex}>03</span>
                  <div>
                    <strong>Test + refine</strong>
                    <p>Validate behavior and tighten the experience.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.expectedImpactCopy}>
              <h2 className={styles.caseSectionHeading}>{detail.summaryTitle}</h2>
              {detail.summaryParagraphs.map((item) => (
                <p className={styles.caseBody} key={item}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        ) : (
          <>
            <h2 className={styles.caseSectionHeading}>{detail.summaryTitle}</h2>
            {detail.summaryParagraphs.map((item) => (
              <p className={styles.caseBody} key={item}>
                {item}
              </p>
            ))}
          </>
        )}
      </section>

      <section className={`${styles.caseResultsSection} ${styles.fadeUp} ${styles.fadeStep4}`}>
        {isJapaneseLearningApp ? (
          <>
            <div className={styles.resultsHero}>
              <div className={styles.resultsHeroCopy}>
                <h2 className={styles.caseSectionHeading}>Results</h2>
                <p className={styles.caseBody}>
                  The project validated AI-assisted product development as a faster way to move from concept to MVP
                  while keeping iteration and experimentation high.
                </p>
              </div>
              <div aria-hidden="true" className={styles.resultsVisual}>
                <span className={styles.resultsVisualKicker}>Key lift</span>
                <div className={styles.resultsVisualPrimary}>60-70%</div>
                <div className={styles.resultsVisualSecondary}>reduction in time to MVP</div>
                <div className={styles.resultsVisualTags}>
                  {detail.results.slice(0, 4).map((item) => (
                    <span className={styles.resultsVisualTag} key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <ol className={styles.caseResultsList}>
              {detail.results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </>
        ) : (
          <>
            <h2 className={styles.caseSectionHeading}>Results</h2>
            <ol className={styles.caseResultsList}>
              {detail.results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </>
        )}
      </section>
    </section>
  );
}

function renderDetail(detail: ProjectDetail) {
  switch (detail.kind) {
    case "microsites":
      return renderMicrosites(detail);
    case "standard":
      return renderStandard(detail);
    case "analysis":
      return renderAnalysis(detail);
    case "builder":
      return renderBuilder(detail);
    default:
      return null;
  }
}

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const detail = slug ? projectDetails[slug] : undefined;

  useDocumentTitle(detail ? `${detail.title} | Projects | Cata Bohorquez` : "Projects | Cata Bohorquez");

  if (!detail) {
    return <Navigate replace to="/projects" />;
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.frame}>
          <SiteHeader />
          {renderDetail(detail)}
          <SiteFooter />
        </div>
      </main>
    </div>
  );
}
