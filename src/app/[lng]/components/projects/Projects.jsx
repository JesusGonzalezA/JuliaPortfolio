"use client"
import { useRef } from "react";
import projects from "../../../data/projects";
import styles from "./projects.module.css";
import Image from "next/image";
import { useTranslation } from "../../../i18n/client";
import { useInView } from "framer-motion";

function Project({ name, src }) {
  return (
    <div className={styles.project}>
      <div className={styles.imgContainer}>
        <Image src={src} fill role="presentation" alt="" />
      </div>
    </div>
  );
}

export default function Projects({ lng }) {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const { t } = useTranslation(lng);

  return (
    <div style={{ width: "100%" }}>
      <h2 ref={ref} style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                marginBottom: 0,
                textAlign: "right"
      }} className={styles.title}>{t("projects")}</h2>
    
      <div>
        <h3 className={styles.sectionTitle}>{t(projects.rrss.titleTranslationId)}</h3>

        <ul className={styles.sectionList}>
          { projects.rrss.contentTranslationId.map((tId) => <li key={`rrss_li_${tId}`}>{t(tId)}</li>) }
        </ul>

        <div className={styles.projectContainer}>
          {projects.rrss.projects.map((project, index) => (
            <Project key={`project_rrss_${index}`} {...project} />
            ))}
        </div>
      </div>

      <div>
        <h3 className={styles.sectionTitle}>{t(projects.webdesign.titleTranslationId)}</h3>

        <ul className={styles.sectionList}>
          { projects.webdesign.contentTranslationId.map((tId) => <li  key={`webdesign_li_${tId}`}>{t(tId)}</li>) }
          <li>
            {t("createdWebs0")} <a href="https://jugarlou.wixsite.com/santa-baia-jiu-jitsu" target="_blank">Santa baia</a>, {t("createdWeb1")}.&nbsp;
            <a href="https://produpubli23k.wixsite.com/novatos" target="_blank">Novatos</a>, {t("createdWeb2")}
          </li>
        </ul>

        <div className={styles.projectContainer}>
          {projects.webdesign.projects.map((project, index) => (
            <Project key={`project_webdesign_${index}`} {...project} />
            ))}
        </div>
      </div>

      <div>
        <h3 className={styles.sectionTitle}>{t(projects.rebranding.titleTranslationId)}</h3>

        <ul className={styles.sectionList}>
          { projects.rebranding.contentTranslationId.map((tId) => <li  key={`rebranding_li_${tId}`}>{t(tId)}</li>) }
        </ul>

        <div className={styles.projectContainer}>
          {projects.rebranding.projects.map((project, index) => (
            <Project key={`project_rebranding_${index}`} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}