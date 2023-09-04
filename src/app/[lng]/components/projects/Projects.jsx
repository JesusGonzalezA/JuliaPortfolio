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
      <h3 className={styles.animatedTitle}>{name}</h3>
      <div className={styles.imgContainer}>
        <Image src={src} fill role="presentation" alt="" />
      </div>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore nesciunt alias dolore! Corporis odit provident aperiam porro facilis, veniam vel ab! Laboriosam at eveniet quam, rerum nihil assumenda consectetur atque!</p>
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
        {projects.map((project, index) => (
          <Project key={`project_${index}`} {...project} />
        ))}
      </div>
    </div>
  );
}