import styles from "./page.module.css";
import { useDocumentTitle } from "../../lib/use-document-title";
import SiteFooter from "../shared/site-footer";
import SiteHeader from "../shared/site-header";

const aboutIntroImage = "/Getting to know Cata.png";
const aboutLifeImage = "/What about Cata outside the work environment_.png";

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
  "No kids and I don’t want to have any",
  "I love animals but I don’t have any at home :(",
  "My mom is my hero (She’s 3 times cancer survivor)",
  "I’m the youngest of 3 siblings",
  "Just married <3",
  "You’ll never see me starting a fight",
  "Reaffirmation words is my fav love language"
] as const;

const miscRight = [
  "I’m a hugger",
  "I love creative workshops",
  "Sun: Libra | Rising: Leo | Moon: Aries",
  "I cry a lot watching movies",
  "You’ll always see me with a book in my hands",
  "If you need some motivational words, I’m your person"
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
                  Even if I studied advertising and most people think that&apos;s mostly
                  related to create a nice TV commercial, what made me fall in love with
                  my career was the investigative and strategic side of it, so I have
                  based all the time I had to study on improving my skills understanding
                  consumer behavior, their needs, and how to solve them with the brands
                  I have worked with.
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
                      <img alt="" className={styles.studyIcon} src="/Logo Catalina Bohorquez.png" />
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
                <h2 className={styles.sectionTitle}>What about Cata outside the work environment?</h2>
                <p className={styles.bodyText}>
                  My husband is my bestie. I really love to read and having a good
                  adventure, either with my head inside a good book or in the real world.
                  I like to say I&apos;m like Bilbo Baggings: Hobbit by nature but traveler
                  by heart.
                </p>
                <p className={styles.bodyText}>
                  If you enjoy watching anime, Harry Potter, Lord of the Rings, Disney
                  movies or anything geek we could be friends.
                </p>
              </div>
            </div>

            <section className={`${styles.sectionBlock} ${styles.fadeUp} ${styles.fadeStep5}`}>
              <h2 className={styles.sectionTitle}>Miscellaneous</h2>
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
