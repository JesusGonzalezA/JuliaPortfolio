"use client"
import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform
} from "framer-motion";
import projects from "../../../data/projects";
import styles from "./projects.module.css";
import Image from "next/image";
import { useTranslation } from "../../../i18n/client";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Project({ name, src }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 150);

  return (
    <div className={styles.project}>
      <div className={styles.imgContainer} ref={ref}>
        <Image src={src} fill role="presentation" />
      </div>
      <motion.h3 className={styles.animatedTitle} style={{ y }}>{name}</motion.h3>
    </div>
  );
}

export default function Projects({ lng }) {
  const containerRef = useRef(null);
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const { t } = useTranslation(lng);

  const handleScroll = (e) => {
    const { offsetTop } = containerRef.current;
    const { height } = containerRef.current.getBoundingClientRect();
    const sectionHeight = window.innerHeight * 0.9;
    const topBarHeight = window.innerHeight / 10;
    const topLimit = offsetTop;
    const bottomLimit = offsetTop + height - sectionHeight;
    if ((window.scrollY + topBarHeight) > topLimit && window.scrollY < bottomLimit) {
      document.documentElement.classList.add("scroll-type");
    } else {
      document.documentElement.classList.remove("scroll-type");
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })


  return (
    <div style={{ width: "100%" }}>
      <h2 ref={ref} style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                marginBottom: 0
      }} className={styles.title}>{t("projects")}</h2>
    
      <div ref={containerRef}>
        {projects.map((project, index) => (
          <Project key={`project_${index}`} {...project} />
        ))}
      </div>
    </div>
  );
}