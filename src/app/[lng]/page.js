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
import links from "../data/links";
import styles from "./page.module.css";
import { useTranslation } from "../i18n";

export default async function Home({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  links.forEach((link) => (link.value = t(link.translationId)));

  return (
    <>
      <Header links={links} lng={lng} />
      <main>
        <CTA lng={lng} />
        <div className={styles.overflowContainer}>
          <Quote>{t("quote")} &nbsp;</Quote>

          <section
            id="experience"
            className={[styles.showoff, styles.section__right].join(" ")}
          >
            <ExpTimeline lng={lng} />
          </section>

          <section
            className={[styles.view, styles.invert].join(" ")}
            id="about_me"
          >
            <AboutMe lng={lng} />
          </section>

          <section
            className={[styles.showoff, styles.section__right].join(" ")}
          >
            <Projects lng={lng} />
          </section>

          <section
            className={[
              styles.showoff,
              styles.section__left,
              styles.invert,
            ].join(" ")}
          >
            <VideoGraphy lng={lng} />
          </section>

          <section
            className={[styles.showoff, styles.section__right].join(" ")}
          >
            <Toolset lng={lng} />
          </section>

          <section
            className={[
              styles.showoff,
              styles.section__left,
              styles.invert,
            ].join(" ")}
          >
            <SkillSet lng={lng} />
          </section>
        </div>
      </main>
      <Footer lng={lng} />
    </>
  );
}
