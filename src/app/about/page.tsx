import styles from "./page.module.css";
import { publicAsset } from "../../lib/public-asset";
import { useDocumentTitle } from "../../lib/use-document-title";
import SiteFooter from "../shared/site-footer";
import SiteHeader from "../shared/site-header";

const aboutIntroImage = publicAsset("/Getting to know Cata.png");
const aboutLifeImage = publicAsset("/What about Cata outside the work environment_.png");

const studies = [
  {
    degree: "Bachelor Degree",
    program: "Publicist (GPA 4.4)",
    years: "2013-2018",
    school: "Universidad Pontificia Bolivariana",
    location: "Medellín, Colombia"
  },
  {
    degree: "Master Degree",
    program: "Master In Consumer Behavior (GPA 4.8)",
    years: "2020-2021",
    school: "Universidad Pontificia Bolivariana",
    location: "Medellín, Colombia"
  }
] as const;

const languages = [
  "Spanish | C2 | Native",
  "English | C1 | Advanced",
  "Japanese | A1 | Beginner"
] as const;

const miscLeft = [
  "I don’t have kids and don’t plan to",
  "I love animals, even though I don’t have any at home right now",
  "My mom is my hero. She is a three-time cancer survivor",
  "I’m the youngest of three siblings",
  "Recently married",
  "You’ll rarely see me start a fight",
  "Words of affirmation are my favorite love language"
] as const;

const miscRight = [
  "I’m a hugger",
  "I love creative workshops",
  "Sun: Libra | Rising: Leo | Moon: Aries",
  "I cry a lot watching movies",
  "You’ll usually see me with a book in my hands",
  "If you need encouragement, I’m your person"
] as const;

export default function AboutPage() {
  useDocumentTitle("About | Cata Bohorquez");

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.frame}>
          <SiteHeader />
          <section className={styles.aboutPage}>
            <div aria-hidden="true" className={styles.auraLeft} />
            <div aria-hidden="true" className={styles.auraRight} />

            <div className={`${styles.introSection} ${styles.fadeUp} ${styles.fadeStep1}`}>
              <div className={styles.copyBlock}>
                <h1 className={styles.sectionTitle}>Getting to know Cata</h1>
                <p className={styles.bodyText}>
                  Even though I studied advertising, what made me fall in love with the
                  field was its investigative and strategic side. That curiosity shaped
                  how I learned to understand people, uncover their needs, and design
                  solutions that create value for both users and the brands I work with.
                </p>
              </div>
              <div className={styles.imageFrame}>
                <img
                  alt="Catalina Bohórquez relaxing outdoors"
                  className={styles.image}
                  decoding="async"
                  src={aboutIntroImage}
                />
              </div>
            </div>

            <section className={`${styles.sectionBlock} ${styles.fadeUp} ${styles.fadeStep2}`}>
              <h2 className={styles.sectionTitle}>Studies</h2>
              <div className={styles.studiesGrid}>
                {studies.map((item) => (
                  <article className={styles.studyCard} key={item.degree}>
                    <div className={styles.studyBadge} aria-hidden="true">
                      <span className={styles.studyDot} />
                      <img alt="" className={styles.studyIcon} src={publicAsset("/Logo Catalina Bohorquez.png")} />
                    </div>
                    <p className={styles.studyDegree}>{item.degree}</p>
                    <div className={styles.studyDivider} aria-hidden="true" />
                    <div className={styles.studyCopy}>
                      <p>{item.program}</p>
                      <p>{item.years}</p>
                      <p>{item.school}</p>
                      <p>{item.location}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className={`${styles.languagesPanel} ${styles.fadeUp} ${styles.fadeStep3}`}>
              <h2 className={styles.sectionTitle}>Languages</h2>
              <div className={styles.languagesGrid}>
                {languages.map((language) => (
                  <div className={styles.languagePill} key={language}>
                    {language}
                  </div>
                ))}
              </div>
            </section>

            <div className={`${styles.lifeSection} ${styles.fadeUp} ${styles.fadeStep4}`}>
              <div className={`${styles.imageFrame} ${styles.lifeImageFrame}`}>
                <img
                  alt="Catalina Bohórquez with her husband"
                  className={`${styles.image} ${styles.lifeImage}`}
                  decoding="async"
                  loading="lazy"
                  src={aboutLifeImage}
                />
              </div>
              <div className={styles.copyBlock}>
                <h2 className={styles.sectionTitle}>Who is Cata outside of work?</h2>
                <p className={styles.bodyText}>
                  My husband is my best friend. I love reading and I love a good
                  adventure, whether that means getting lost in a book or heading into
                  the real world. I usually describe myself as a hobbit by nature and a
                  traveler at heart.
                </p>
                <p className={styles.bodyText}>
                  If you enjoy watching anime, Harry Potter, Lord of the Rings, Disney
                  movies, or anything geeky, we would probably get along.
                </p>
              </div>
            </div>

            <section className={`${styles.sectionBlock} ${styles.fadeUp} ${styles.fadeStep5}`}>
              <h2 className={styles.sectionTitle}>A few more things about me</h2>
              <div className={styles.miscGrid}>
                <ul className={styles.miscList}>
                  {miscLeft.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ul className={styles.miscList}>
                  {miscRight.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>
          </section>
          <SiteFooter />
        </div>
      </main>
    </div>
  );
}
