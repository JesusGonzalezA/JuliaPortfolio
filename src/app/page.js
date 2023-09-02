import {
  Quote,
  Header,
  AboutMe,
  Footer,
  CTA,
  ExpTimeline,
  Toolset,
  SkillSet,
  Projects,
  VideoGraphy,
} from "./components";
import links from "./data/links";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header links={links} />
      <main>
        <CTA />
        <div className={styles.overflowContainer}>
          <Quote>
            The best way to predict the future is to create it &nbsp;
          </Quote>

          <section
            id="experience"
            className={[styles.showoff, styles.section__right].join(" ")}
          >
            <ExpTimeline />
          </section>

          <section
            className={[styles.view, styles.invert].join(" ")}
            id="about_me"
          >
            <AboutMe />
          </section>

          <section
            className={[styles.showoff, styles.section__right].join(" ")}
          >
            <Projects />
          </section>

          <section
            className={[
              styles.showoff,
              styles.section__left,
              styles.invert,
            ].join(" ")}
          >
            <VideoGraphy />
          </section>

          <section
            className={[styles.showoff, styles.section__right].join(" ")}
          >
            <Toolset />
          </section>

          <section
            className={[
              styles.showoff,
              styles.section__left,
              styles.invert,
            ].join(" ")}
          >
            <SkillSet />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
