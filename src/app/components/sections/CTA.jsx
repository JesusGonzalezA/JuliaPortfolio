"use client";
import { useEffect, useRef } from "react";
import { config } from "../../data/config";
import styles from "./cta.module.css";

export default function CTA() {
  const ctaSection = useRef(null)
  const ctaButton = useRef(null)

  const handleScroll = (e) => {
    if (window.scrollY > ctaButton.current.getBoundingClientRect().top) {
      ctaSection.current.style.zIndex = -1
    } else {
      ctaSection.current.style.zIndex = 0
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <>
      <section className={styles.greeting} ref={ctaSection}>
          <h2>Julia Garbín Lourido</h2>
          <p>Digital Specialist</p>
          <a href={`mailto:${config.email}`} ref={ctaButton} className={styles.ctaButton}>Contact me</a>
      </section>
      <div aria-hidden="true" className={styles.greetingTransparent}></div>
    </>
  );
}
