import Quote from "./components/quote/Quote";
import Header from "./components/header/Header";
import HorizontalScroll from "./components/abilities/HorizontalScroll";
import View from "./components/abilities/View";
import styles from "./page.module.css";
import projects from "./data/projects";
import links from "./data/links";
import abilities from "./data/abilities";
import webdesign from "./data/webdesign";
import Footer from "./components/footer/Footer";
import ContactMe from "./components/contactme/ContactMe";
import CardList from "./components/card/CardList";
import CTA from "./components/sections/CTA";

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
            className={[styles.showoff, styles.section__right].join(" ")}
          >
            <h2 aria-label="Experiencia as digital marketing">
              EXP / <span>Digital marketing</span>
            </h2>
            <CardList cards={projects} />
          </section>

          <section className={[styles.showoff, styles.section__left].join(" ")}>
            <h2 aria-label="Experiencia as web designer">
              EXP / <span>Web design</span>
            </h2>
            <CardList cards={webdesign} />
          </section>

          <section className={styles.horizontalShowoff}>
            <h2>More about me</h2>
            <HorizontalScroll
              views={abilities.map((ability) => (
                <View {...ability} />
              ))}
            />
          </section>

          <ContactMe />
        </div>
      </main>
      <Footer />
    </>
  );
}
