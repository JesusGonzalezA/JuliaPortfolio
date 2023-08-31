import Quote from "./components/quote/Quote";
import Header from "./components/header/Header";
import AboutMe from "./components/aboutme/AboutMe";
import styles from "./page.module.css";
import projects from "./data/projects";
import links from "./data/links";
import Footer from "./components/footer/Footer";
import CardList from "./components/card/CardList";
import CTA from "./components/cta/CTA";
import ExpTimeline from "./components/timeline/Timeline";
import Toolset from "./components/toolset/Toolset";

export default function Home() {
  return (
    <>
      <Header links={links} />
      <main>
        <CTA />
        <div className={styles.overflowContainer}>
          <Quote>This sentence should be as long as the width &nbsp;</Quote>

          <section
            id="experience"
            className={[styles.showoff, styles.section__left].join(" ")}
          >
            <h2>Experience</h2>
            <ExpTimeline />
          </section>

          <section className={[styles.view].join(" ")} id="about_me">
            <h2>About me</h2>
            <AboutMe />
          </section>

          <section className={[styles.showoff, styles.section__left].join(" ")}>
            <h2>Projects</h2>
            <CardList cards={projects} />
          </section>

          <section className={[styles.showoff, styles.section__left].join(" ")}>
            <h2>Skills and tools</h2>
            <Toolset />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
